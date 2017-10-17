import React from "react"


function TodoComponent(props){
    return (
    <div className="div1">
        <h2>{props.item.title}</h2>
        <h4>{props.item.description}</h4>
        <button onClick={(event)=>props.edit(props.item._id,props.editedTodo)}>Edit</button>
        <button onClick={(event)=>props.delete(props.item._id)}>Delete</button>
        <input type="text"
        placeholder="edit-title"
        value={props.editedTodo.title}
        name="title"
        onChange={props.handleEdit}/>
        <input type="text"
        placeholder="edit-description"
        value={props.editedTodo.description}
        name="description"
        onChange={props.handleEdit}/>
        
    </div>

    )
}

export default TodoComponent
