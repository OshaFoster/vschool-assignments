import React from "react"

function HitListComponent(props){

    return (
        <div className="div1">
            <img className="photo" src={props.image}/>
        <h1>{props.name}</h1>
        </div>

    )


}

export default HitListComponent
