import React from "react";
import axios from "axios"
import TodoCompContainer from "./TodoCompContainer"


class TodoList extends React.Component{
    constructor(){
        super();
        this.state = {
            todoList:[],
            addTodo: {
                title:"",
                description:""

            }
        }
        this.handleClick=this.handleClick.bind(this)
        this.postTodo=this.postTodo.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.editTodo=this.editTodo.bind(this)
    }


componentDidMount() {
    axios.get("https://api.vschool.io/osha/todo").then ((response)=> {
        this.setState({
            
            todoList:response.data.reverse()
        })

    })
}
handleClick(id){
    axios.delete(`https://api.vschool.io/osha/todo/${id}`).then ((response)=>{
        this.setState((prevState)=>{
            return({
                todoList:prevState.todoList.filter((item) =>{
                    return id !== item._id
                })
            })
        })
    })
}
handleChange(event) {
    event.persist();
    this.setState((prevState)=> {
        return {
            addTodo: {
                ...prevState.addTodo,
                [event.target.name]:event.target.value
            }
        }
    });

}
postTodo(){
    axios.post(`https://api.vschool.io/osha/todo/`,this.state.addTodo).then (response => {
        this.setState(prevState => {
            return {
                todoList: [response.data, ...prevState.todoList]
            }
        })

    })
}
editTodo(id, editedTodo) {
    axios.put(`https://api.vschool.io/osha/todo/${id}`, editedTodo).then (response =>{
        let newEdit = response.data;
        this.setState((prevState) =>{
            const newTodo = prevState.todoList.map((todo)=>{
                if(todo._id === id){
                    return newEdit
                }else{
                    return todo;
                }
            })
            return {
                todoList: newTodo
            }
        })
    })
}




    render(){
        return( <div className="div2">

                <input
                type="text"
                placeholder="Title"
                value={this.state.addTodo.title}
                name="title"
                onChange={this.handleChange}/>
                <input
                    type="text"
                    placeholder="Description"
                    value={this.state.addTodo.description}
                    name="description"
                    onChange={this.handleChange}/>
            <button onClick={this.postTodo}>add</button>
            {this.state.todoList.map((item, i)=>{
            return (
                <TodoCompContainer
                    item={item}
                    key={item.title + i}
                    delete={this.handleClick}
                    edit={this.editTodo}/>
            )
        })}

        </div>

        )
    }

}
export default TodoList
