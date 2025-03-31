---
title: Programmes à faire de l'atelier 8
sidebar_label: 8 - SQL et visualisation
---
## Création de la base de données (exécuté le script suivant)

```python
import sqlite3

# Connexion à la base
conn = sqlite3.connect("ventes.db")
cur = conn.cursor()

# Création de la table
cur.execute("""
CREATE TABLE ventes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    produit TEXT NOT NULL,
    quantite INTEGER NOT NULL,
    prix_unitaire REAL NOT NULL
)
""")

# Insertion des données
cur.executemany("""
INSERT INTO ventes (date, produit, quantite, prix_unitaire) VALUES (?, ?, ?, ?)
""", [
    ('2024-01-10', 'Chaussures', 2, 59.99),
    ('2024-01-12', 'T-shirt', 3, 15.00),
    ('2024-01-15', 'Pantalon', 1, 39.99),
    ('2024-02-05', 'Chaussures', 1, 59.99),
    ('2024-02-20', 'T-shirt', 2, 15.00),
    ('2024-03-01', 'Pantalon', 2, 39.99),
    ('2024-03-15', 'Chaussures', 1, 59.99),
    ('2024-04-10', 'T-shirt', 4, 15.00),
    ('2024-04-12', 'Pantalon', 1, 39.99)
])

conn.commit()
conn.close()
```

### 🗂 Structure de la base de données (`ventes.db`) :

Une seule table `ventes` :

| id | date       | produit    | quantite | prix_unitaire |
|----|------------|------------|----------|----------------|
| 1  | 2024-01-10 | Chaussures | 2        | 59.99          |
| 2  | 2024-01-12 | T-shirt    | 3        | 15.00          |
| 3  | 2024-02-05 | Chaussures | 1        | 59.99          |
| ...| ...        | ...        | ...      | ...            |

---

### Énoncé de l'exercice (version étudiant) :

1. Connectez-vous à la base de données SQLite `ventes.db`.
2. Chargez les données de la table `ventes` dans un DataFrame `pandas`.
3. Calculez le chiffre d'affaires mensuel pour chaque produit (`quantite * prix_unitaire`).
4. Créez un graphique montrant l’évolution du chiffre d’affaires **par produit** au fil des mois.