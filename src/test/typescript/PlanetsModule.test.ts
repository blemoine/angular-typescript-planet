/// <reference path="../definition/jasmine/jasmine.d.ts" />
/// <reference path="../../main/typescript/PlanetsModule.ts" />

describe('PlanetsModule', function () {

    describe('PlanetsService', function () {

        var service:PlanetsService;
        beforeEach(() => service = new PlanetsService());

        it('findPlanets should give the planet list', function () {
            var findPlanets = service.findPlanets();
            expect(findPlanets.length).toBe(8)
        });
    });

    describe('PlanetsController', function () {

        it('planetsFiltered should give the planet list if no filter', function () {
            var service = {findPlanets: () => ['mock']};

            var controller:PlanetsController = new PlanetsController(service);
            controller.filter = null;

            var planets = controller.planetsFiltered;
            expect(planets).toEqual(['mock'])
        });

        it('planetsFiltered should give the planet list filtered if filter', function () {
            var service = {findPlanets: () => ['mock', 'anotherMock']};

            var controller:PlanetsController = new PlanetsController(service);
            controller.filter = 'ano';

            var planets = controller.planetsFiltered;
            expect(planets).toEqual(['anotherMock'])
        });
    });

});

