import {memes} from "./memes";

const state={
    memes:[]
}

const reducer = function(prevState = state, action){
    return {
        memes : memes(prevState.countries, action)
    }
}

export default reducer;
