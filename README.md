# Angular App Maps

* App using Angular 7, Angular Google Maps (AGM) and IPAPI.co to plot the user's location.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Angular httpClient used to get API data.

## Screenshots

![Example screenshot](./img/location.png).

## Technologies

* [Angular v7.2.14](https://angular.io/) & [Angular CLI v7.3.8](https://cli.angular.io/).

* [RxJS Library v6.5.1](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observable](http://reactivex.io/documentation/observable.html).

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app does not automatically reload if you change any of the source files.

## Code Examples

* `maps.service.ts` using httpClient to get map location details from the API.

```typescript

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Location {
  latitude: string;
  longitude: string;
  country_name: string;
  city: string;
}
@Injectable({
  providedIn: "root"
})
export class MapsService {
  constructor(private http: HttpClient) {}

  getLocation() {
    return this.http.get<Location>("https://ipapi.co/178.139.88.229/json/");
  }
}

```

## Features

* Google Maps (AGM - Angular Google Maps) and IPAPI.co to plot the user's location

* Angular httpClient used to get data from an external API.

* IPAPI.co used

* Updated to latest Angular 7 version with all dependency conflicts resolved.

## Status & To-Do List

* Status: Simple working app that gets API data of user location and displays it.

* To-Do: add functionality  - present data using Angular form cards and add commenting

## Inspiration

* [Coursetro Youtube video: Angular 7 Google Maps Tutorial with IPAPI (Plotting a User's Location)](https://www.youtube.com/watch?v=-IwTQgKIjCQ)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
