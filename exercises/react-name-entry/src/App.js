import React from "react";
import Name from "./component/Name"
import NameList from "./component/NameList"


class App extends React.Component {
    constructor() {
        super();

        this.state= {

            nameList: ["dummy", "nummy","honeyBun"],
            anotherName: ""

        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
    }
        handleClick(){
            this.setState(prevState=> {
                return {
                    nameList: [...prevState.nameList, prevState.anotherName],
                    anotherName: ""
                };
            })
        }
        handleChangeName(event){
            this.setState(
                {
                anotherName:event.target.value
            });

        }

    render(){

        return(

            <div>
             <Name  value={this.state.anotherName}
                handleClick={this.handleClick}
                handleChange={this.handleChangeName}/>

            <NameList names={this.state.nameList}/>
             </div>
)
    }
}

export default App




//lifecycle methods componentDidMount(){ as compnent loaded todo get info, loading message
//} // componentWillMount(){ set state for loading spinner?}
//componentWillUnMount( tear down if needed)
