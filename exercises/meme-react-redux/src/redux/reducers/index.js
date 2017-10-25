import memes from "./memes";

const state={
    memes:[]
}

const reducer = function(prevState = state, action){
    return {
        memes : memes(prevState.countries, action)
    }
}

export default reducer;

//import {todos from "./todos"

//import{combineReducers} from "redux"

//let reducer = combineReducers({todos})

//export default reducer;
