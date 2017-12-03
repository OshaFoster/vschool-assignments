import React from "react";
import InfoComponent from "./component/InfoComponent"
import MainPage from "./component/MainPage"
import Footer from "./component/Footer"
// import {Switch, Route} from "react-router-dom"


function App() {
    return (

        <div>

        <MainPage/>
        <InfoComponent/>
        <Footer/>
            {/* <Switch>
                <Route exact path="/" component={InfoComponent}/>
                <Route path="/main" component={MainPage}/>
            </Switch> */}
        </div>
        )
}

export default App
