/// <reference path="../definition/angularjs/angular.d.ts" />

var planetsModule = angular.module('planetsModule', []);

interface Planet {
    name:string
    isRocky:boolean
}

class PlanetsService {

    private planets:Array<Planet> = [
        {name: 'mercure', isRocky: true},
        {name: 'venus', isRocky: true},
        {name: 'terre', isRocky: true},
        {name: 'mars', isRocky: true},
        {name: 'jupiter', isRocky: false},
        {name: 'saturne', isRocky: false},
        {name: 'uranus', isRocky: false},
        {name: 'neptune', isRocky: false}
    ];

    findPlanets():Array<Planet> {
        return this.planets;
    }
}

class PlanetsController {

    filter:string = null;
    planets:Array<string> = [];

    static $inject = ['PlanetsService'];

    constructor(public planetsService) {

    }

    get planetsFiltered() {
        var planets = this.planetsService.findPlanets();
        if (this.filter) {
            return planets.filter((planet) => planet.name.indexOf(this.filter) >= 0)
        }
        return planets;
    }
}
planetsModule.controller('PlanetsController', PlanetsController);
planetsModule.service('PlanetsService', PlanetsService);
