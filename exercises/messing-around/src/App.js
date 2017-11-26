import React from "react";
import HomeComponent from "./component/HomeComponent"
import MainPage from "./component/MainPage"
import {Switch, Route} from "react-router-dom"


function App() {
    return (

        <div>

            <Switch>
                <Route exact path="/" component={HomeComponent}/>
                <Route path="/main" component={MainPage}/>
            </Switch>
        </div>
        )
}

export default App
