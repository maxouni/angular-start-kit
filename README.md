# Angular Start Kit
Набор инструментов на основе Bootstar и Angular для быстрого разворачивания проекта.

Демо [https://angular-start-kit.herokuapp.com/](https://angular-start-kit.herokuapp.com/)



## Конфигурация

#### [Firebase](https://firebase.google.com/)
Готовая система авторизации. С готовой инфраструктурой верификации телефонных номеров и адресов электронной почты.
Бесплаьный план позволит развернуть приложение и зупустить в тестовом режиме.

- Заводим учетную запись
- В настройках проекта находим блок "Ваши приложения"
- Выбираем пункт "Добавьте Firebase в свое веб-приложение"
- В попапе копируем конфиги для соединения с БД

  ```
    apiKey: "madmadmadmadmadmadmadmadmadmadmadmadmad",
    authDomain: "mad-example.firebaseapp.com",
    databaseURL: "https://mad-example.firebaseio.com",
    projectId: "mad-example",
    storageBucket: "mad-example.appspot.com",
    messagingSenderId: "666666666666"
  ```

- Вставляем настройки в файл с переменными окружения

  ```
    /src/environments/environments.ts
  ```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
