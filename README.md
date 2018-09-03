# Day6map

##   1. Create new project

```bash
ng new day6map
```
##   2. Create GitHub Repo

```bash
git init

git remote add origin https://github.com/dvameka/day6map.git

git push -u origin master
```
## Install Material/CDK/Animations
```bash
ng add @angular/material
```
Check that @angular folder has cdk, animations

## Install hammerjs
```bash
npm install --save hammerjs
```

## Import hammerjs to main.ts

```ts
import 'hammerjs';
```
## Install Flex-Layout

```bash
npm install --save @angular/flex-layout
```
## Create Component City Name Input

```bash
ng g c components/city-nameinput --spec false --flat
```
## Create Components Weather Output

```bash
ng g c components/weather-output --spec false --flat
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

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
