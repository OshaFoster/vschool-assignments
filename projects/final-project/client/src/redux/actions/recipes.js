
import axios from "axios";

const recipesUrl="http://localhost:8008/recipes/";

export function loadRecipes(){
    return (dispatch)=>{
        axios.get(recipesUrl).then((response)=>{
            dispatch({
                type: "LOAD_RECIPES",
                recipes: response.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
