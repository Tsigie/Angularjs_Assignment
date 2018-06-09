import * as angular from "angular"

export default class CarService {
    static $inject = ["$log", "$http"]
    
    constructor(
        private $log:angular.ILogService,
        private $http:angular.IHttpService
    ) {}

    hello() {}
}

angular.module("Demo").service("CarService", CarService)