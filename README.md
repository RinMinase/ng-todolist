<h1 align="center"> Angular 8 Todo List </h1>

<p align="center">
    <a href="https://circleci.com/gh/RinMinase/ng-todolist">
        <img alt="Circle-CI" src="https://img.shields.io/circleci/project/github/RinMinase/ng-todolist/master.svg?logo=circleci">
    </a>
    <a href="https://david-dm.org/RinMinase/ng-todolist">
        <img alt="David-DM" src="https://david-dm.org/RinMinase/ng-todolist.svg">
    </a>
    <a href="https://david-dm.org/RinMinase/ng-todolist">
        <img alt="David-DM" src="https://david-dm.org/RinMinase/ng-todolist/dev-status.svg">
    </a>
</p>
<p align="center">
    <a href="https://nodejs.org">
        <img alt="Node" src="https://img.shields.io/badge/node-%5E10.12.0%20%7C%7C%20%3E%3D12.0.0-green.svg?logo=node.js&logoColor=white">
    </a>
    <a href="https://yarnpkg.com/">
        <img alt="Yarn" src="https://img.shields.io/badge/yarn-%5E1.10.0-blue.svg">
    </a>
</p>

## Introduction
_Add info here_

### Project tasks

Task automation is based on [Yarn scripts](https://yarnpkg.com/lang/en/docs/cli/run/) or [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Task                | Description                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------                |
| `yarn start`        | Run **development server** on `http://localhost:4200/` with file watching on changes                 |
| `yarn start --prod` | Run **production server** on `http://localhost:4200/` with file watching on changes                  |
| `yarn build`        | Build production code                                                                                |

### Code scaffolding

Run `yarn ng g c <component-name>` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module (d|p|s|c|g|i|e|m`.

#### Directory Structure
    .
    ├── .circleci/                      # Circle CI folder
    │   └── config.yml                  # Circle CI configuration file
    ├── dist/                           # Compiled production code
    ├── src/                            # Project source code
    │   ├── app/                        # Project components
    │   │   ├── <module-name>           # Module folder (refer to structure below)
    │   │   ├── app.component.ts        # Component of main module
    │   │   ├── app.module.ts           # Main module
    │   │   └── ...                     # Other project related files
    │   ├── assets/                     # Project assets
    │   │   ├── favicon.ico             # Web Application icon
    │   │   └── ...                     # Other project assets
    │   ├── environments/               # Environments folder
    │   ├── index.html                  # Main HTML file
    │   ├── index.scss                  # Main Stylesheet (SCSS) file
    │   └── index.ts                    # Main TypeScript file
    ├── angular.json                    # Angular CLI configuration
    ├── firebase.json                   # Firebase hosting configuation
    ├── tsconfig.json                   # Main TypeScript configuration file
    └── ...                             # Other project files

#### Module Structure
    .
    ├── <sub-module name>         # Sub-module
    │    └── ...                  # Sub-module files
    ├── <name>.component.html     # Component template
    ├── <name>.component.scss     # Component stylesheet
    ├── <name>.component.ts       # Module component
    └── <name>.module.ts          # Module

## Built with
* <img width=20 height=20 src="https://angular.io/assets/images/favicons/favicon.ico"> [Angular 8](https://angular.io/) - Web Framework
* <img width=20 height=20 src="https://www.typescriptlang.org/assets/images/icons/favicon-32x32.png"> [TypeScript](https://www.typescriptlang.org/) - Language syntax
* <img width=20 height=20 src="https://sass-lang.com/favicon.ico"> [Sassy CSS (SCSS)](https://sass-lang.com/) - CSS pre-processor
* <img width=20 height=20 src="https://angular.io/assets/images/favicons/favicon.ico"> [Angular Material](https://material.angular.io/) - HTML Framework (layout)
* <img width=20 height=20 src="https://firebase.google.com/favicon.ico"> [Firestore](https://firebase.google.com/) - Database
* <img width=20 height=20 src="https://webpack.js.org/bc3effb418df77da9e04825c48a58a49.ico"> [Webpack 4](https://webpack.js.org/) - Project bundler
* <img width=20 height=20 src="https://dmmj3mmt94rvw.cloudfront.net/favicon-undefined.ico"> [Circle CI](https://circleci.com/) - Continuous Integration (CI) service
* <img width=20 height=20 src="https://yarnpkg.com/favicon.ico"> [Yarn](https://yarnpkg.com/) - Package Manager