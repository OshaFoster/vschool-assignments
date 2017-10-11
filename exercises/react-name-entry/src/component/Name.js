import React from "react";


function Name(props){
    return (
        <div>
            <input placeholder="Type your name"
                value={props.value}
                onChange={props.handleChange}
                type="text"/>
                <h1>{props.value}</h1>
                <button onClick={props.handleClick}>Add Name to List></button>

        </div>
    )
}

export default Name;
