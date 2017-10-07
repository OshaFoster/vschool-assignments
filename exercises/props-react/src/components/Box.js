import React from "react";

function Box(props){
    
const images = {
    backgroundImage:`url(${props.img})`,
    backgroundSize:'cover'

}

 return (
     <div className="card">
         <h3>Introducing: {props.name}</h3>
     <h4>Contact: {props.number}</h4>
     <div className="styleImg" style={images}>

     </div>
     </div>

 )

}

export default Box;
