Nodeschool WebApp Workshopper
=============================

## Hello World!

Wychodząc na przeciw rynkowym potrzebom przygotowaliśmy Workshopper w formie zupełnie innej niż dotychczas.

Waszym zadaniem będzie napisanie prostej aplikacji, opierającej się na narzędziach jakie można napotkać przy pracy z JavaScript.
W zadaniu zawarliśmy następujący stack:

- Node.js + Express
- React.js + Bootstrap + Webpack
- Firebase

Oprócz tego korzystać będziemy

- Babel - How to speak in ES6
- Axios - Api, do you copy?
- Lodash - Do whatever you want with collections
- Bluebird - _"I Promise you"_

Większość z tych narzędzi poznaliście już dzięki specjalnie przygotowanym do tego workshopperom.
Tym razem wykorzystamy tę wiedzę w praktyce. Jeśli jakieś zagadnienia są dla Was nowe - **Don't Worry!**
Przez cały czas będziemy Was asystować, a w przypadku problemów służymy pomocą!

Zatem - **Do dzieła!** :)


## Spis tasków

1. [Step 1](#step-1)
2. [Step 2](#step-2)
3. [Step 3](#step-3)
4. [Step 4](#step-4)
5. [Step 5](#step-5)
6. [Step 6](#step-6)
7. [Step 7](#step-7)
8. [Step 8](#step-8)
9. [Step 9](#step-9)
10. [Step 10](#step-10)


## Step 1

W tym kroku skupimy się na konfiguracji środowiska.

#### GIT

Całe zadanie zostało podzielone na **Stepy** i umieszczone na [GitHubie](https://github.com/imvanzen/nodeschool-webapp-workshopper).
Pierwszy step masz już za sobą, ale żeby przejść dalej potrzeby jest system kontroli wersji **Git**.
Pomiń ten krok jeśli posiadasz zainstalowanego GITa, w przeciwnym wypadku pobierz wersję odpowiednią dla swojego systemu operacyjnego.

> https://git-scm.com/downloads

_**HINT:** użytkownicy Windowsa, aby móc korzystać z GITa w konsoli, powinni do zmiennej globalnej `PATH` dodać ścieżkę prowadzącą do katalogu, w którym znajduje się `git.exe`_


#### Node.js

Do pracy z `node.js` potrzebujemy specjalnego oprogramowania.
Pomiń ten krok, jeśli posiadasz już zainstalowego `node.js` w wersji `5.x` lub wyższej.
Jeśli jednak nie, możemy go pobrać z oficjalnej strony.

Wybierz wersję odpowiednią dla swojego systemu operacyjnego.
Jeśli masz wątpliwości co do wersji, poproś o pomoc jednego z mentorów.

> https://nodejs.org/en/download/

Node.js dostarcza managera pakietów `npm`. Służy do pobierania zależności potrzebnych do sprawnego działalnia aplikacji.

## Step 2

- **Sklonowanie repozytorium**
  - Wybierz katalog w którym chcesz przechowywać źródła.
  - Otwórz konsolę w tym katalogu i wykonaj komendę
    ```$ git clone https://github.com/imvanzen/nodeschool-webapp-workshopper.git ./```
  - Git powinien pobrać źródła do wybranego przez Ciebie katalogu
- Objaśnienie jak używać `branch`
  - `// Todo @p-janik?`

## Step 3

- Objaśnienie podziału struktury aplikacji
  - `\client` - zawiera warstwę kliencką
  - `\client\components` - zawiera komponenty react'owe
  - `\client\services` - zawiera serwisy do zarządzania danymi w warstwie klienckiej
  - `\es6` - zawiera warstwę serwerową
  - `\es6\services` - zawiera serwisy do zarządzania danymi w warstwie serwerowej
  - `\public` - zawiera pliki statyczne
  - `\views` - zawiera szablony serwowane przez warstwę serwerową
  - `\webpack` - zawiera konfigurację webpacka
- Instalacja podstawowych zależności
  - Po zainstalowaniu `node'a` mamy dostęp do managera pakietów `npm`.
    Manager pakietów pozwala na dodawanie do naszej aplikacji kodu, stworzonego przez różnych użytkowników, udostępnionego na repozytorium [npmjs.com](https://www.npmjs.com/)
  - Aby zainstalować pakiety, w katalogu głównym aplikacji wykonaj następującą komendę
    ```$ npm install```
- Stworzenie tasków do transpilacji `ES6` -> `ES5`
  - Celem jest stworzenie tasków w `package.json` do transpilacji kodu w standardzie `ES6` do `ES5`
    Katalogiem źródłowym jest `es6/`, a docelowym `es5/`
    ```
      "scripts": {
        "build-server": "babel es6 -d es5",
      }
    ```
  - Dodanie katalogu `es5/` do `.gitignore`
- Stworzenie aplikacji `express`
  - Wrapowanie `express` w `Promise`
    ```
      const app = Promise.promisifyAll(express());
    ```
  - Obsługa wersji Produkcyjnej i Deweloperskiej
  - Utworzenie configa dla `express`
- Stworzenie podstawowego widoku `views/index.html`
  Utwórz w wewnątrz pustego `div'a` z identyfikatorem `#WeatherInfoApp`
- Stworzenie podstawowego `route`
  - Stworzenie pliku `es6/routes.js` i zadeklarowanie route'a
    ```
      app.get('/', (req, res) => res.render('index'))
    ```
  - Załączenie pliku `es6/routes.js` do `do es6/index.js` i wstrzyknięcie routingu do expressa
    Mając zmienną `app` zawierającą instancję expressa, postaraj się przekazać ją do `routes`

## Step 4

- Instalacja zależności
  W tym kroku będziemy potrzebowali następujących zależności
  - `$ npm install webpack@~1.12.9 --save`
  - `$ npm install babel-loader@~5.4.0 node-sass@~3.4.2 sass-loader@~3.1.2 style-loader@~0.13.0 webpack-dev-server@~1.14.0 --save-dev`
- Konfiguracja `webpack`
  - Stworzenie katalogu `webpack/`
  - Stworzenie pliku serwera `webpack/index.js` (Port musi być inny niż serwera `Expressa`!)
  - Stworzenie pliku konfiguracyjnego `webpack.config.js`
  - Stworzenie katalogu `public/` oraz `client/`
    - Stworzenie pustego pliku `client/index.js` (tymczasowo, aby build webpacka nie wysypał się)
    - Stworzenie pustego pliku `public/.gitkeep` (`public` nie zawsze musi zawierać pliki statyczne, ale mogą być do niego instalowane np. przy pomocy `bower`)
  - Dodanie do `Expressa` poniższego middleware'a
    Czasami mogą wystąpić problemy przy `hot-reloadzie` z powodu `CORS`. 
    Dodaj poniższy middle ware do `es6/index.js` aby temu zapobiec 
    ```
      if (!IS_PROD) {
          app.use((req, res, next) => {
              res.header('Access-Control-Allow-Origin', '*');
              res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
              res.header('Access-Control-Allow-Headers', 'Content-Type');
              next();
          });
      }
    ```
- Modyfikacja tasków w celu uruchomienia webpacka
  ```
    "scripts": {
      ...
      "dev-client": "babel-node webpack",
      "build-client": "NODE_ENV=production webpack -p --config webpack/webpack.config.js",
      ...
    }
  ```

## Step 5

- Instalacja zależności
  W tym kroku zajmiemy się `Reactem`
  - `$ npm i react@~0.14.3 react-dom@~0.14.3 react-bootstrap@~0.28.1 --save`
  - `$ npm i react-hot-loader@~1.3.0 --save-dev`
- Modyfikacja `webpack/webpack.config.js`
  - Dodanie `react-hot` do loaderów i wstawienie warunku dot. produkcji
    `      loaders: IS_PROD ? ['babel'] : ['react-hot', 'babel'],`
- Stworzenie podstawowego komponentu `react` w `client/index.js`
- Instalacja zależności `$ npm install bower --save`
  - Stworzenie `.bowerrc`
    ```
      {
        "directory": "public/bower_components/", // ścieżka instalacji zależności
        "interactive": false // Wyłączenie zapytania o udzielanie danych statystycznych
      }
    ```
  - Stworzenie `bower.json`
    Można to zrobić przez Creator
    ```
      $ bower init
    ```
    Po przejściu przez Creator, dodajemy zależność - `bower install bootstrap@^3.0.0 --save` 
  - Modyfikacja tasków w celu uruchomienia instalacji bowera po budowaniu
    - Dodanie `bower install` do tasków budujących clienta
  - Dodanie do `views/index.html` styli z `bootstrap`
    `<link href="/public/bower_components/bootstrap/dist/css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css">`
- Stworzenie komponentu `client/components/WeatherInfo.js` i ostylowanie go używając `react-bootstrap`

## Step 6

- Omówienie działania natywnego modułu node'a - `EventEmitter`
- Stworzenie komponentu `client/components/AddCityForm.js`
  - Komponent zawiera stany
    - `isLoading`
    - `searchedCityName`
    - `searchedResult`
  - Komponent zawiera handlery
    - `onChange`
    - `onClick`
- Stworzenie komponentu `client/components/CitiesList.js`
  - Komponent pobiera listę miast przekazaną przez propercje
    - `citiesList`
  - Komponent zawiera handlery
    - `removeCityHandler`
    - `updateCityHandler`

## Step 7

- Instalacja zależności
  - `$ npm install lodash --save`
  - `$ npm install axios --save-dev`
- Stworzenie serwisu `client/services/CitiesService.js`. Zarządza on
  - Komunikatami
  - Listą miast
  - Wynikiem wyszukiwania
- Stworzenie `api` dla Clienta
  - `GET /cities`
  - `GET /cities/:cityName`
  - `POST /cities {cityName}`
  - `PUT /cities/:cityId`
  - `DELETE /cities/:cityId`

## Step 8

- Stworzenie `routes` dla Serwera
  - `GET /cities`
  - `GET /cities/:cityName`
  - `POST /cities {cityName}`
  - `PUT /cities/:cityId`
  - `DELETE /cities/:cityId`
- Instalacja zależności
  - `$ npm install request-promise@1.0.2`
- Stworzenie wrappera na `WeatherAPI`
  - API dostarcza wiele opcji, ale nas interesuje wyłącznie pobieranie aktualnej pogody.
    W pliku konfiguracyjnym znajdują się enumy które określają "lokalizację" i systemy miar w jakich odczyty mają być zwracane
  - [Dokumentacja](http://openweathermap.org/current)
- Stworzenie serwisu `CitiesService` dla Serwera
  - Service powinien zapewnić
    - wyszukiwanie w API pogody dla nazwy miasta
    - dodawanie miasta
    - usuwanie miasta
    - update odczytów dla miasta

## Step 9

- Instalacja zależności
  - `$ npm install firebase@~2.3.2 fireproof@~3.1.0 --save`
- Stworzenie serwisu `CitiesDao`

## Step 10

- Test aplikacji
- Deploy na `Heroku` + `Toolbelt`
