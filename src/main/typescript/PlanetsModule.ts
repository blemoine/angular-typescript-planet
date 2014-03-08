/// <reference path="../definition/angularjs/angular.d.ts" />

var planetsModule = angular.module('planetsModule', []);

class PlanetsController {

    filter:string = null;
    planets:Array<string> = [];

    constructor() {
        this.planets = ['mercure', 'venus', 'terre', 'mars', 'jupiter', 'saturne', 'uranus', 'neptune'];
    }

    get planetsFiltered() {
        if (this.filter) {
            return this.planets.filter((planet) => planet.indexOf(this.filter) >= 0)
        }
        return this.planets;
    }
}

planetsModule.controller('PlanetsController', PlanetsController);
