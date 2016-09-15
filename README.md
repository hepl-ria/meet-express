# meet-express

> Base exercise to discover [express](http://expressjs.com) web framework for node.js.

* * *

**meet-express** is an educational project.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instructions will be in french. Sorry.

* * *

Ces fichiers servent de base d'exercice pour le cours de découverte du framework/serveur web **express** pour `node.js`.

## Branche `completed-es2015`

Afin de vous permettre d'avoir une série de références de script en **ES2015**, j'ai créé une branche supplémentaire, nommée `completed-es2015`, qui contient la version corrigée, mais écrite en suivant la nouvelle norme JavaScript ES2015.
Comme expliqué lors des cours, ces scripts ont besoin d'être convertis (_transpilés_) vers une plus vieille version de javascript pour s'assurer de leur fonctionnement dans un navigateur.
J'ai modifié le chemin du script pour le stocker dans un dossier `src`, et ajouter un script pour le compiler, en utilisant [babeljs](https://babeljs.io). Il vous suffit de lancer la commande `npm run build` pour compiler le script.
J'en ai aussi profiter pour ajouter quelques règles propres à **ES2015** dans le fichier `.eslintrc.json` (utilisez la commande `npm run lint` pour faire une analyse).

### Workflow

Vous noterez au passage que je n'ai pas utilisé **grunt** ou **gulp** pour cette version. Il est tout à fait possible d'utiliser le système de scripts de node.js, comme vous pouvez le constater dans le fichier `package.json`.
Chaque propriété de l'objet `script` est une commande qui sera lancée via le terminal en tapant `npm run [commande]`.

## Consignes

Notre but est de reproduire, avec **express**, les comportements du script PHP de l'exercice [meet-ajax](https://github.com/hepl-mmi/meet-ajax), du cours de Multimédia de deuxième.

Notre serveur express gérera deux routes : la racine, qui servira notre page, générée à partir des données d'un fichier `data/buddies.json`, et une route séparée, utilisant la méthode `POST`, pour encoder de nouvelles données dans ce fichier.

## Déroulement

Afin de découvrir express de manière progressive, nous allons développer notre petite application en suivant ces étapes :

1. Préparation du projet, installation d'express
1. Mise en place d'express, première route et *hello world*
1. Notion de middleware, premier middleware et middleware externes
1. Moteur de template, installation et découverte de [handlebars](http://handlebarsjs.com/)
1. Notion de routeur express, réorganisation de nos routes et controlleurs
1. Récupération des données POST, écriture dans un fichier

* * *

Les styles de l'exercice sont générés _via_ [bootstrap](http://getbootstrap.com), et les avatars sont générés _via_ l'API de [Adorable](http://adorable.io/).
