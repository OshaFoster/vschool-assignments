import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Fairyland from "./views/Fairyland"
import RecipeBox from "./views/RecipeBox"



function App() {
    return (

        <div>
        <Header/>
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route  path="/fairyland" component={Fairyland}/>
        <Route  path="/recipeBox" component={RecipeBox}/>
    </Switch>
        <Footer/>
        </div>
        )
}

export default App
