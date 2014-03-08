/// <reference path="../definition/angularjs/angular.d.ts" />

var planetsModule = angular.module('planetsModule',[]);

class PlanetsController {

    planets:Array<String> = [];

    constructor() {
        this.planets = ['mercure','venus','terre','mars','jupiter','saturne','uranus','neptune'];
    }
}

planetsModule.controller('PlanetsController',PlanetsController);
