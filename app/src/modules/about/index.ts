/**
 * Created by Fantastisk on 23-03-2016.
 */


import * as angular from 'angular';
import {AboutController}  from './AboutController';
import {PixiDirective} from './PixiDirective';
import {AboutService} from "./AboutService";


export default angular.module('app.about',[])
    .controller('AboutController', AboutController)
    .directive('pixiDirective', PixiDirective.Factory() )
    .service('AboutService', AboutService )



