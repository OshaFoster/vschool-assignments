import React from "react"

function TodoComponent(props){
    return (
        <div>
        <h2>{props.item.title}</h2>
        <h4>{props.item.description}</h4>
    <button onClick={(event)=>props.delete(props.item._id)}>Delete</button>
    <hr/>
        </div>

    )
}

export default TodoComponent
