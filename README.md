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

- Sklonowanie repozytorium
- Objaśnienie jak używać`branch`

## Step 3

- Instalacja podstawowych zależności za pomocą `npm install`
- Objaśnienie podziału struktury aplikacji
- Objaśnienie ES6 i Babela

```
 \
 |-- \client
 |   |-- \components
 |    -- \services
 |-- \es6
 |    -- \services
 |-- \public
 |-- \views
  -- \webpack
```

- `\client` - zawiera warstwę kliencką
- `\client\components` - zawiera komponenty react'owe
- `\client\services` - zawiera serwisy do zarządzania danymi w warstwie klienckiej
- `\es6` - zawiera warstwę serwerową
- `\es6\services` - zawiera serwisy do zarządzania danymi w warstwie serwerowej
- `\public` - zawiera pliki statyczne
- `\views` - zawiera szablony serwowane przez warstwę serwerową
- `\webpack` - zawiera konfigurację webpacka

## Step 4

- Instalacja zależności `webpack`
- Stworzenie pliku konfiguracyjnego `webpack.config.js`
- Stworzenie podstawowego widoku `views/index.html`
- Stworzenie podstawowego `route`

## Step 5

- Instalacja zależności `react`, `react-dom`, `bootstrap-react`
- Stworzenie podstawowego komponentu `index.js`
- Instalacja zależności `bower`
- Stworzenie komponentu `WeatherInfo`

## Step 6

- Stworzenie komponentu `AddCity`
- Stworzenie komponentu `CitiesList`
- Stworzenie serwisu `CitiesService` dla Clienta
- Omówienie działania natywnego modułu node'a - `EventEmitter`

## Step 7

- Instalacja zależności `axios`
- Stworzenie `api` dla Clienta
- Instalacja zależności `bluebird`
- Stworzenie `routes` dla Serwera

## Step 8

- Stworzenie serwisu `CitiesService` dla Serwera
- Stworzenie wrappera na `WeatherAPI`

## Step 9

- Instalacja zależności `firebase`, `fireproof`
- Stworzenie serwisu `CitiesDao`

## Step 10

- Test aplikacji
- Deploy na `Heroku` + `Toolbelt`