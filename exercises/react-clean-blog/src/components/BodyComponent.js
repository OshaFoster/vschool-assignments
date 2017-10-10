import React from "react";

function BodyComponent(props){
    return (

        <div className="bodyDiv">
            <h1>{props.item.title}</h1>
        <h2>{props.item.subTitle}</h2>
    <p>Posted By <span>{props.item.author}</span> on {props.item.date}</p>
        </div>


    )
}

export default BodyComponent
