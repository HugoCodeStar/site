---
title: Atelier 3
sidebar_label: 3 - Regroupement, NumPy & pandas
---

## Regroupement SQL
Sur la base de donnée dvdrental. Trouvez les informations suivantes :

* Trouvez la valeur moyenne du prix de location (rental_rate)
* Trouvez le nombre de film ayant plus de 120 minutes (length)
* La langue (langage) la plus utilisé dans les films
* Trouvez le titre du film avec le plus d'acteurs

## NumPy base 1
Écrivez un programme NumPy pour créer un tableau de 10 zéros, 10 uns, 10 cinq.

## NumPy base 2
Écrivez un programme NumPy pour créer un tableau des entiers de 30 à 70.

## NumPy base 3
Écrivez un programme NumPy pour créer un tableau de tous les entiers pairs de 30 à 70.

## Pandas

Avec les données initiales suivantes :

```python
student_data1 = pd.DataFrame({
        'id': ['S1', 'S2', 'S3', 'S4', 'S5'],
         'name': ['Danniella Fenton', 'Ryder Storey', 'Bryce Jensen', 'Ed Bernal', 'Kwame Morin'], 
        'marks': [200, 210, 190, 222, 199]})


exam_data = pd.DataFrame({
        'student_id': ['S1', 'S2', 'S3', 'S4', 'S5' ],
        'exam_id': [23, 45, 12, 67, 21]})
```

Écrivez le code qui permet de faire la jointure entre les deux dataframe. Faire attention, la colonne `id` de `student_data1` doit être relié à la colonne `student_id` de `exam_data`.