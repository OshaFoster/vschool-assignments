import React from "react"
import TodoComponent from "./TodoComponent"

class TodoCompContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editTodo:{
            title:props.item.title,
            description: props.item.description
        }
    }
    this.handleEdit = this.handleEdit.bind(this);
}
handleEdit(event){
    event.persist();
    this.setState((prevState) =>{
        return {
            editTodo: {
                ...prevState.editTodo,
            [event.target.name]: event.target.value
        }
        }
    })


}
    render(){
        return (
            <TodoComponent
                item={this.props.item}
                delete={this.props.delete}
                editedTodo={this.state.editTodo}
                edit={this.props.edit}
                handleEdit={this.handleEdit}/>




        )
    }
}

export default TodoCompContainer
