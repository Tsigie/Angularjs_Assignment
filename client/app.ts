import * as angular from "angular"
import "./_module"
import "./services/car"
import CarService from "./services/car";

angular.module("Demo")
.config(() => {
    console.log("in config")
})
.run((
    CarService:CarService
) => {
    CarService.hello()
    alert("done")
    console.log('hello world')
})