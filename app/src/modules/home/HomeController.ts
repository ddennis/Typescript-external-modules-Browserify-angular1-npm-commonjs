/**
 * Created by Fantastisk on 23-03-2016.
 */


/**
 * @ngInject
 */
export var HomeController = function (CONSTANTS, HomeService) {

    var vm = this;
    vm.myName = "Name from home controlller";

    vm.myfunc = function () {
        return "la la la"
    };


    vm.loadData = function () {

        HomeService.loadData()
    }
    
    


};





/*
export class HomeController {

    public name:string = "Home ctrl";
    private myTest:any;

    static $inject = ['SomeFactory'];

    constructor() {
        this.myTest = 100
    }


    click(){
        this.myTest = 200

    }

    getName(){
        return this.name
    };

}
*/

