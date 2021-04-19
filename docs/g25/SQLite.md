# Enregistrer les données à l'aide de SQLite 

L'enregistrement des données dans une base de données est idéal pour les données répétitives ou structurées, telles que les informations de contact. Cette page  vous aide à démarrer avec les bases de données SQLite sur Android. Les API dont vous aurez besoin pour utiliser une base de données sur Android sont disponibles dans le `android.database.sqlitepackage`.

## Étape 1 - Définir un schéma et un contrat

L'un des principes fondamentaux des bases de données SQL est le schéma: une déclaration formelle de l'organisation de la base de données. Le schéma est reflété dans les instructions SQL que vous utilisez pour créer votre base de données. Vous pouvez trouver utile de créer une classe compagnon, appelée classe de contrat , qui spécifie explicitement la mise en page de votre schéma de manière systématique et auto-documentée.

Une classe de contrat est un conteneur pour les constantes qui définissent les noms des URI, des tables et des colonnes. La classe contract vous permet d'utiliser les mêmes constantes dans toutes les autres classes du même package. Cela vous permet de modifier le nom d'une colonne à un seul endroit et de le propager dans tout votre code.

Un bon moyen d'organiser une classe de contrat est de placer des définitions globales pour l'ensemble de votre base de données au niveau racine de la classe. Créez ensuite une classe interne pour chaque table. Chaque classe interne énumère les colonnes de la table correspondante.

Par exemple, le contrat suivant définit le nom de la table et les noms des colonnes pour une seule table représentant un flux RSS:
```java
public final class LecteurFluxContrat {
    // Pour prévenir l'instentiation
    private LecteurFluxContrat() {}

    /* Classe interne de notre schéma */
    public static class FluxNoms implements BaseColumns {
        public static final String NOM_TABLE = "entree";
        public static final String NOM_COLONNE_TITRE = "titre";
        public static final String NOM_COLONNE_SOUSTITRE = "sous-titre";
    }
}
```

## Étape 2 - Créer une base de données à l'aide d'un assistant SQL

Une fois que vous avez défini l'apparence de votre base de données, vous devez implémenter des méthodes qui créent et gèrent la base de données et les tables. Voici quelques instructions typiques qui créent et suppriment une table:

```java
private static final String SQL_CREATE_ENTRIES =
    "CREATE TABLE " + FluxNoms.NOM_TABLE + " (" +
    FluxNoms._ID + " INTEGER PRIMARY KEY," +
    FluxNoms.NOM_COLONNE_TITRE + " TEXT," +
    FluxNoms.NOM_COLONNE_SOUSTITRE + " TEXT)";

private static final String SQL_DELETE_ENTRIES =
    "DROP TABLE IF EXISTS " + FluxNoms.NOM_TABLE;
```

Tout comme les fichiers que vous enregistrez sur le stockage interne de l'appareil , Android stocke votre base de données dans le dossier privé de votre application. Vos données sont sécurisées, car par défaut cette zone n'est pas accessible aux autres applications ou à l'utilisateur.

La classe `SQLiteOpenHelper` contient un ensemble d'API utiles pour gérer votre base de données. Lorsque vous utilisez cette classe pour obtenir des références à votre base de données, le système effectue les opérations potentiellement longues de création et de mise à jour de la base de données uniquement lorsque cela est nécessaire et non pendant le démarrage de l'application . Tout ce que vous avez à faire est d'appeler `getWritableDatabase()` ou `getReadableDatabase()`.

Pour utiliser `SQLiteOpenHelper`, créez une sous-classe qui remplace les méthodes de rappel `onCreate()` et `onUpgrade()`. Vous souhaiterez peut-être également implémenter les méthodes `onDowngrade()` ou `onOpen()`, mais elles ne sont pas obligatoires.

Par exemple, voici une implémentation de `SQLiteOpenHelper` qui utilise certaines des commandes ci-dessus:

```java
public class LecteurFluxDbHelper extends SQLiteOpenHelper {
    // Si le schéma change, on change le numéro de version.
    public static final int DATABASE_VERSION = 1;
    public static final String DATABASE_NAME = "LecteurFlux.db";

    public LecteurFluxDbHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }
    public void onCreate(SQLiteDatabase db) {
        db.execSQL(SQL_CREATE_ENTRIES);
    }
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        // Un exemple d'upgrade serait pour une cache de data mise en ligne.
        // L'upgreade serait donc de rebatir la BD de toute pièce.
        db.execSQL(SQL_DELETE_ENTRIES);
        onCreate(db);
    }
    public void onDowngrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        onUpgrade(db, oldVersion, newVersion);
    }
}
```

Pour accéder à votre base de données, instanciez votre sous-classe de `SQLiteOpenHelper`:

```java
LecteurFluxDbHelper dbHelper = new LecteurFluxDbHelper(getContext());
```

## Étape 3 - Mette des informations dans une base de données

Insérez des données dans la base de données en passant un objet `ContentValues` à la méthode `insert()`:

```java
// Va cherche le dépot de données en écriture
SQLiteDatabase db = dbHelper.getWritableDatabase();

// Créé un nouveau ContentValues avec les informations à rajouter.
ContentValues values = new ContentValues();
values.put(FluxNoms.NOM_COLONNE_TITRE, title);
values.put(FluxNoms.NOM_COLONNE_SOUSTITRE, subtitle);

// Insère la nouvelle ligne et retourne la clé de la nouvelle ligne.
long newRowId = db.insert(FluxNoms.NOM_TABLE, null, values);
```

Le premier argument pour `insert()` est simplement le nom de la table.

Le deuxième argument indique au framework ce qu'il doit faire dans le cas où le `ContentValues` est vide (c'est-à-dire que vous n'avez pas `put` de valeurs). Si vous spécifiez le nom d'une colonne, l'infrastructure insère une ligne et définit la valeur de cette colonne sur `null`. Si vous spécifiez `null`, comme dans cet exemple de code, le framework n'insère pas de ligne en l'absence de valeurs.

Les méthodes `insert()` retournent l'ID de la ligne nouvellement créée, ou elles renverront -1 en cas d'erreur lors de l'insertion des données. Cela peut se produire si vous avez un conflit avec des données préexistantes dans la base de données.

## Étape 4 - Lire des informations à partir d'une base de données

Pour lire à partir d'une base de données, utilisez la méthode `query()` en lui passant vos critères de sélection et les colonnes souhaitées. La méthode combine des éléments de `insert()` et `update()`, sauf que la liste de colonnes définit les données que vous souhaitez récupérer (la "projection"), plutôt que les données à insérer. Les résultats de la requête vous sont renvoyés dans un objet `Cursor`.

```java
SQLiteDatabase db = dbHelper.getReadableDatabase();

// Définie une projection qui spécifie quelles colonnes de la DB
// on va utiliser après la requête.
String[] projection = {
    BaseColumns._ID,
    FluxNoms.NOM_COLONNE_TITRE,
    FluxNoms.NOM_COLONNE_SOUSTITRE
    };

// Filter results WHERE "title" = 'My Title'
// Filtre les résultats avec un WHERE "titre = 'Mon titre'
String selection = FluxNoms.NOM_COLONNE_TITRE + " = ?";
String[] selectionArgs = { "Mon titre" };

// Indique l'ordre de tri du Cursor
String sortOrder =
    FluxNoms.NOM_COLONNE_SOUSTITRE + " DESC";

Cursor cursor = db.query(
    FluxNoms.NOM_TABLE,   // Le nom de la table
    projection,             // Le tableau des colonnes a retourner (null pour toutes les colonnes)
    selection,              // Les colonnes du WHERE 
    selectionArgs,          // Les valeurs du WHERE
    null,                   // Regroupment (group by)
    null,                   // Filtre des regroupement
    sortOrder               // L'ordre de tri
    );
```

Les troisième et quatrième arguments (`selection` et `selectionArgs`) sont combinés pour créer une clause WHERE. Étant donné que les arguments sont fournis séparément de la requête de sélection, ils sont échappés avant d'être combinés. Cela rend vos instructions de sélection insensibles à l'injection SQL. Pour plus de détails sur tous les arguments, consultez la référence de la méthode `query()`.

Pour regarder une ligne dans le curseur, utilisez l'une des méthodes de `Cursor` de déplacement, que vous devez toujours appeler avant de commencer à lire les valeurs. Puisque le curseur commence à la position -1, l'appel `moveToNext()` place la "position de lecture" sur la première entrée dans les résultats et retourne si le curseur est déjà passé ou non la dernière entrée dans l'ensemble de résultats. Pour chaque ligne, vous pouvez lire la valeur d'une colonne en appelant l'une des méthodes `Cursor` get, telles que `getString()` ou `getLong()`. Pour chacune des méthodes get, vous devez passer la position d'index de la colonne souhaitée, que vous pouvez obtenir en appelant `getColumnIndex()` ou `getColumnIndexOrThrow()`. Une fois l'itération des résultats terminée, appelez `close()` sur le curseur pour libérer ses ressources. Par exemple, ce qui suit montre comment obtenir tous les ID d'élément stockés dans un curseur et les ajouter à une liste:

```java
List itemIds = new ArrayList<>();
while(cursor.moveToNext()) {
  long itemId = cursor.getLong(
      cursor.getColumnIndexOrThrow(FluxNoms._ID));
  itemIds.add(itemId);
}
cursor.close();
```

## Étape 5 - Supprimer des informations d'une base de données

Pour supprimer des lignes d'une table, vous devez fournir des critères de sélection qui identifient les lignes de la méthode `delete()`. Le mécanisme fonctionne de la même manière que les arguments de sélection de la méthode `query()`. Il divise la spécification de sélection en une clause de sélection et des arguments de sélection. La clause définit les colonnes à examiner et vous permet également de combiner des tests de colonne. Les arguments sont des valeurs à tester qui sont liées dans la clause. Étant donné que le résultat n'est pas géré de la même manière qu'une instruction SQL standard, il est immunisé contre l'injection SQL.

```java
// Définie le WHERE
String selection = FluxNoms.NOM_COLONNE_TITRE + " LIKE ?";
// Spécifie les arguments du ? dans le WHERE
String[] selectionArgs = { "Mon Titre" };
// Instruction SQL.
int deletedRows = db.delete(FluxNoms.NOM_TABLE, selection, selectionArgs);
```

La valeur de retour de la méthode `delete()` indique le nombre de lignes supprimées de la base de données.

## Étape 6 - Mettre à jour une base de données

Lorsque vous devez modifier un sous-ensemble de vos valeurs de base de données, utilisez la méthode `update()`.

La mise à jour de la table combine la syntaxe de `ContentValues` de `insert()` avec la syntaxe du WHERE de `delete()`.

```java
SQLiteDatabase db = dbHelper.getWritableDatabase();

// Nouvelle valeur
String title = "Mon nouveau titre";
ContentValues values = new ContentValues();
values.put(FluxNoms.NOM_COLONNE_TITRE, title);

// Quelle ligne à mettre a jour avec un WHERE
String selection = FluxNoms.NOM_COLONNE_TITRE + " LIKE ?";
String[] selectionArgs = { "Mon ancien titre" };

int count = db.update(
    FluxNoms.NOM_TABLE,
    values,
    selection,
    selectionArgs);
```

La valeur de retour de la méthode `update()` est le nombre de lignes affectées dans la base de données.

## Étape 7 - Connexion à la base de données persistante

Etant donné que `getWritableDatabase()` et `getReadableDatabase()` sont coûteux lorsque la base de données est fermée, vous devez laisser votre connexion à la base de données ouverte aussi longtemps que vous en aurez besoin pour y accéder. En règle générale, il est optimal de fermer la base de données dans le onDestroy()de l'activité appelante.

```java
@Override
protected void onDestroy() {
    dbHelper.close();
    super.onDestroy();
}
```