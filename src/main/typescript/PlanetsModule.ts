/// <reference path="../definition/angularjs/angular.d.ts" />

var planetsModule = angular.module('planetsModule', []);

class PlanetsService {

    findPlanets():Array<string> {
        return ['mercure', 'venus', 'terre', 'mars', 'jupiter', 'saturne', 'uranus', 'neptune'];
    }
}

planetsModule.service('PlanetsService', PlanetsService);

class PlanetsController {

    filter:string = null;
    planets:Array<string> = [];

    static $inject = ['PlanetsService'];

    constructor(public planetsService) {
    }

    get planetsFiltered() {
        var planets = this.planetsService.findPlanets();
        if (this.filter) {
            return planets.filter((planet) => planet.indexOf(this.filter) >= 0)
        }
        return planets;
    }
}
planetsModule.controller('PlanetsController', PlanetsController);
