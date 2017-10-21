import React from "react";

function Service(props){
    const id = props.match.params.id;
    const serviceInfo = props.searchById(id);
    return(
        <div >
            <h3>{serviceInfo.title}</h3>
        <h4>{`Price: $${serviceInfo.price}`}</h4>

        </div>
    )
}

export default Service
