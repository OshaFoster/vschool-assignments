import React from "react"
import axios from "axios"
import HitListComponent from "./component/HitListComponent"

class App extends React.Component{
    constructor(){
        super()
        this.state ={

            hitList: []
        }
    }

componentDidMount(){
    axios.get('http://api.vschool.io:6543/hitlist.json').then ((response) => {
        this.setState({
            hitList: response.data

        })
    console.log(this.state.hitList)
})

}

    render(){
        return (
            <div className="parent">
            {this.state.hitList.map((hit) => {
                return (
                    <HitListComponent
                        name={hit.name}
                        image={hit.image}
                    />
                )
            })}
            </div>
        )
    }
}

export default App
