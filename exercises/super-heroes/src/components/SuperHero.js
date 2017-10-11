import React from "react";

function SuperHero(props){

   return (

       <div onClick={(e)=> props.clickFunction(props.hero.phrase)} className="card">
           <img className="photo" src={props.hero.photo} alt=""/>
       <h1>{props.hero.name}</h1>
   <h2>Element: <br/> {props.hero.element}</h2>
       </div>


   )
}


export default SuperHero;
