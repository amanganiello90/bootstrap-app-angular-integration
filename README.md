# Angulardemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

# Goal

The purpose of this project is to **integrate bootstrap app** in angular.

So it could be considered a **scaffolding project**

The bootstrap project, **bootstrap-app-example folder**, has been exported from [Bootstrap studio](https://bootstrapstudio.io/), using cdn and css options.

# Project structure

The project has been generated with Angular CLI, and some components and modules are been created by `ng generate component component-name` and `ng generate module module-name` commands:

* HeaderComponent
* FooterComponent
* LayoutComponent and LayoutModule (it contains Header and Footer)
* SharedModule (used by PagesModule and LayoutModule)
* HomeComponent and TurnComponent
* PagesModule and PagesRoutingModule (routes PagesModule components: home and turn)
* AppRoutingModule (routes PagesModule and all App)

Besides extra dependencies have been installed:
* bootstrap@5.2.0
* font-awesome@4.7.0
* ionicons@2.0.1

These are been used instead of `link rel href..`, added in **angular.json** in scripts and styles objects.

Any assets are been added in the related folder.

# How to use

1. Add the `index.html` style (bootstrap-app) in index.html (angular-app) declaring in `html tag` with related `title`. Any javascript and css imports must be added in `angular.json` file (scripts and styles object arrays)
2. Copy your `assets folder` 
3. Add your **nav block code** in `header.component.html`
4. For every new page generate a new **Angular component** under `pages folder` (**ReservationComponent** for example), and copy code in the related html file (**without script and nav code**)
5. Add the new component (**ReservationComponent** for example), in the `pages-routing.module` (registering it as **reservation** for example)
6. Replace the href of the new page component in the `header.component.html`, using **routerLink="/reservation" routerLinkActive="active"** (related the **ReservationComponent** example)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
