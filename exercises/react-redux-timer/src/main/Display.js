import React from "react"
//import redux from "react-redux"

let time = new Date();
let secs = time.getSeconds();
let mins = time.getMinutes();

function Display(){
    return(

        <h1>{mins}:{secs}</h1>
    )
}

export default Display;
