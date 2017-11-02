const recipes = function(prevRecipes =[], action){
    let newRecipes =[...prevRecipes];

    switch(action.type){

        case "ADD_RECIPE":
        return newRecipes.push(action.recipes)
        case "LOAD_RECIPES":
        return action.recipes;



        default:
        return prevRecipes
    }
}

export default recipes;
