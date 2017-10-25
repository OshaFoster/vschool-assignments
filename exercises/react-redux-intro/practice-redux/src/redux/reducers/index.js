// goal create state containing array
//make action to add to arrary
//make action which allows us to deleet country from array
import {countries} from "./countries";


const state ={
    countries: []
}

const reducer = function(prevState = state, action){
    return {
        countries : countries(prevState.countries, action)
    }
}
export default reducer;
