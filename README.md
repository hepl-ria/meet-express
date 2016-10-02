# meet-express

> Base exercise to discover [express](http://expressjs.com) web framework for node.js.

* * *

**meet-express** is an educational project.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instructions will be in french. Sorry.

* * *

Ces fichiers servent de base d'exercice pour le cours de découverte du framework/serveur web **express** pour `node.js`.

* * *

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

## Note de DS

Autre serveur de style express : Koa

"main": "bin/server.js" on utilise ce dossier pour les fichiers compiler et le point d'entrée sera serveur.js

Concept des middleware : fonction qui va etre appelé au milieu d'une requete. la requete arrive a express elle passe par des middleware qui vont modifier changer etc et puis envoyez la reponse a la routes.
il existe des middleware externe qui sont diponible dans NPM


Comment rendre une fonction accessible dans un autre fichier on fait module.exports = la fonction qu'on veut.

Body parser : middleware très utile pour node qu'on aura tout le temps besoin

ceci c'est pour afficher le template index
oApp.get( "/", function( oRequest, oResponse){

  oResponse.render( "index", {

    "name": "Dylan Schirino"

  } ); // pour lui dire quel template on utilise ! donc index dans views et le deuxieme parametre c'est un objet avec des variables




  ### Boucle avec handlebars.js

      <ul>
        {{#each buddies}}
          <li>
            <strong>{{name}}</strong>
            <em>{{description}}</em>
          </li>
        {{/each}}
      </ul>
