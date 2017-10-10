import React from "react";
import SuperHero from "./components/SuperHero";
import heroArray from "./heroes.json"

function App(){

    function whenClicked(phrase){
        alert(phrase);
    }

    return (
        <div className="div1">
            {heroArray.map(function(hero){

                return(<SuperHero hero={hero} clickFunction={whenClicked}/>)

            })}
        </div>
    )


}



export default App;
