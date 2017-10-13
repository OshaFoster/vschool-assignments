import React from "react";
import axios from "axios"
import TodoComponent from "./TodoComponent"

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
    }


componentDidMount() {
    axios.get("https://api.vschool.io/osha/todo").then ((response)=> {
        this.setState({
            todoList:response.data.reverse()
        })

    })
}
handleClick(id){
    axios.delete(`https://api.vschool.io/osha/todo${id}`).then ((response)=>{
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




    render(){
        return( <div>
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
                <TodoComponent
                    item={item}
                    key={item.title + i}
                    delete={this.handleClick}/>
            )
        })}

        </div>

        )
    }

}
export default TodoList
