/**
 * Created by Fantastisk on 23-03-2016.
 */


import * as angular from 'angular';
import {HomeController}  from './HomeController';
import {simpleDirective} from './simpleDirective';
import {MyDirective} from './MyDirective'
import {HomeService} from './HomeService'


export default angular.module('app.home',[])
    .controller('HomeController', HomeController)
    .directive('simpleDirective', simpleDirective)
    .directive('myDirective', MyDirective.Factory())
    .service('HomeService', HomeService);


