import React from "react";
import Box from "./Box";
import data from "../contacts.json"

function divers(contacts){
    return (
        contacts.map(function(obj){
            return <Box
            name={obj.name}
            number={obj.number}
            img={obj.img}/>
        })
    )
}

function App(){
    return (
        <div className="parent">
            {divers(data)}

        </div>
    )
}

export default App;
