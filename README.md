# TPF

PORT DU FICHIER .JSON : http://localhost:3004/api

Projet final du cours 420-345

Etapes de creation du projet :

1. Creer le projet : ng n NOM_PROJET --routing
2. Lancer VSC : code .
3. Installer les librairies :
   npm i bootstrap --save
   npm i jquery --save
   npm i @fortawsome/fontawesome-free --save
   npm i json-server --save
4. Configuration de librairies dans angular.json :
   "styles": [
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
   ],
   "scripts": [
   "node_modules/jquery/dist/jquery.min.js",
   "node_modules/bootstrap/dist/js/bootstrap.min.js"
   ]
5. Supprimer le code HTML du fichier app.component.html
6. Importer HttpClientModule et FormsModule dans app.module.ts
   HttpClientModule : @angular/common/http
   FormsModule : @angular/forms
   imports: [
   BrowserModule,
   AppRoutingModule,
   HttpClientModule,
   FormsModule
   ],

La page error404 provient de https://colorlib.com/wp/free-404-error-page-templates/

Reflexion journee TP
Pour le crud :
choisir un objet (employee, velo)
generer un service
creer les attributs

––––––––––––––––––––––––––––––––––––––––––––––––––

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
