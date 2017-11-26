import React from "react";
import Header from "./Header";
import AddContainer from "./addIssue/Container";
import ListContainer from "./issuesList/Container";


class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Header/>
                <AddContainer/>
                <ListContainer/>
            </div>
        )
    }
}

export default App;
