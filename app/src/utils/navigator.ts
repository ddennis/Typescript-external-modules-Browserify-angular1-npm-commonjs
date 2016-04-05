/**
 * Created by Fantastisk on 05-04-2016.
 */
export class navigator  {
    
    static $inject = ['$state'];
    
    constructor (private $state){
        this.$state = $state;

    }


    go(menuItem){

        console.log (" navigator.ts > state = " , menuItem.state);
        this.$state.go(menuItem.state)

    }

        
};
