import React from "react";

function VacationComponent(props){





    return (
        <div className="card">
            <img className="img" src={props.photo} alt=""/>
            <h1>{props.place}</h1>
        <h5>Great Deal: {props.price}</h5>
        <h5>Best Time To Visit: {props.timeToGo}</h5>
</div>
    )
}

export default VacationComponent
