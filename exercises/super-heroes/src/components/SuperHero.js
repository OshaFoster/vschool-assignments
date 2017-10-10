import React from "react";

function SuperHero(props){

   return (

       <div className="card">
           <img onClick={(e)=> props.clickFunction(props.hero.phrase)} className="photo" src={props.hero.photo} alt=""/>
       <h1>{props.hero.name}</h1>
   <h2>Element: <br/> {props.hero.element}</h2>
       </div>


   )
}


export default SuperHero;
