import React from "react";
import Navbar from "./Navbar"
import {Switch, Route} from "react-router-dom";
import Home from "./views/Home"
import About from "./views/About"
import Contact from "./views/Contact"
import Header from "./Header"
import Footer from "./Footer"
import ServicesContainer from  "./views/services/Container"


class App extends React.Component{

    render(){
        return(
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/about" component={About}/>
                <Route  path="/contact" component={Contact}/>
                <Route  path="/services" component={ServicesContainer}/>

            </Switch>
            <Footer/>
            </div>
        )

    }
}

export default App
