import React from "react";
import SuperHero from "./components/SuperHero";
import heroArray from "./heroes.json";

class App2 extends React.Component {

    whenClicked(phrase) {
        alert(phrase);
    }

 generateHeroes(){

     return heroArray.map((hero) => {

         return(<SuperHero hero={hero} clickFunction={this.whenClicked}/>)

     })
 }


 render(){
     console.log(this)
     return (
         <div className="div1">
             {this.generateHeroes()}
         </div>
     )
 }

}
export default App2
