import React from "react"
import Name from "./component/Name"
import NameList from "./component/NameList"

class App extends React.Component {
    constructor(){
        super();

        this.state={
            nameList:[],
             name: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState=> {
            return {
                nameList:[...prevState.nameList, prevState.name],
                name: ""
            }
        })
    }

    handleChange(event){
        this.setState(
            {
                name:event.target.value
            });
    }

    render(){

    return (
        <div>
            <Name value={this.state.name}
            handleChange={this.handleChange}
            handleClick={this.handleClick}/>

        <NameList names={this.state.nameList}/>
    </div>

    )
    }
}

export default App
