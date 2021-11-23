---
title: Application graphique avec tkinker
sidebar_label: 11 - Application graphique
sidebar_position: 11
---

# Application graphique - tkinker

Plusieurs modules existent pour faire de l'affichage graphique, nous regarderons un module qui vient avec la majorité des installations de python : tkinter.

# HelloGui

L'application graphique doit rouler de manière continuelle contrairement à nos applications du passer. On doit donc avoir la configuration de notre interface et enuite on la lance de manière perpétuelle.

```python
import tkinter

# Objet représentant notre application
m = tkinter.Tk()

# Restant de la configuration

# Boucle de l'application
m.mainloop()
```

# Widgets

On ajoute ensuite à notre application des widgets qui permetrons d'intéragir avec notre application. L'application elle-même peux aussi être configuré à travers différentes méthodes.

# Liste des widgets

| Widget      | Description                   |
|-------------|-------------------------------|
| Button      | Un bouton à clicker           |
| CheckButton | Un bouton à cocher            |
| Entry       | Une zone de saisie            |
| Label       | Une étiquette (zone de texte) |
| ListBox     | Une zone de liste             |
| Menu        | Un menu déroulant             |
| RadioButton | Bouton radio                  |
| Texte       | Zone de texte multi-ligne     |

# Ajout de widget

Pour ajouter des widget à notre application, il faut les créé comme l'application principale. Il faut aussi décidé de l'emplacement du widget en appelant une méthode de positionnement.

```python
import tkinter

m = tkinter.Tk()

# Création du widget et positionnement dans notre app.
l = tkinter.Label(text="Hello, app!")
l.pack()

m.mainloop()
```

# Gestion par événement

Certain widget on besoin d'intéractivité. Pour faire la gestion de l'événement, on doit créé un fonction de rétro-action (callback function). Cette fonction est celle qui sera appellé pour géré l'événement.

```python
import tkinter

def event_button():
    print('hello')

m = tkinter.Tk()

# Création du widget et positionnement dans notre app.
l = tkinter.Label(text="Hello, app!")
l.pack()

b = tkinter.Button(text='Click Me', command=event_button)
b.pack()


m.mainloop()
```

# Gestion de attributs des controles

Il est possible d'aller chercher les information des controlles ou de les modifiers.

```python
import tkinter

def event_button():
    print(e.get())
    l.config(text=e.get())


m = tkinter.Tk()

# Création du widget et positionnement dans notre app.
l = tkinter.Label(text="Hello, app!")
l.pack()

e = tkinter.Entry(width=10)
e.pack()

b = tkinter.Button(text='Click Me', command=event_button)
b.pack()


m.mainloop()
```

# Positionnement avec des Frame

```python
import tkinter

m = tkinter.Tk()

f1 = tkinter.Frame()
f2 = tkinter.Frame()

l = tkinter.Label(f1,text="Hello, app!")
l2 = tkinter.Label(f1,text="Hello, app!")
l3 = tkinter.Label(f1,text="Hello, app!")
l.pack(side='left')
l2.pack(side='left')
l3.pack(side='left')

f1.pack()

e = tkinter.Entry(f2,width=10)
e.pack(side='left')
c = tkinter.Checkbutton(f2)
c.pack(side='right')

f2.pack(fill=tkinter.X)

b = tkinter.Button(text='Click Me')
b.pack()


m.mainloop()
```
