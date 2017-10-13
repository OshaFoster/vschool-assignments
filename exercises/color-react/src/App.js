import React from "react"
import axios from "axios"

class App extends React.Component{
    constructor(){
        super()
        this.state = {

            colorList: ""
        }

}
componentDidMount() {
    axios.get('http://www.colr.org/json/color/random').then((response)=> {
        this.setState({

            colorList: response.data.new_color

        })

        console.log(this.state.colorList)

    })

}




    render(){

        console.log(this.state.colorList)
        return (
            <div>
            <div style={{height:"300px", width:"300px",backgroundColor:`#${this.state.colorList}`}}></div>
        <br/>
            <div style={{height:"300px", width:"300px",backgroundColor:`#${this.state.colorList}`}}></div>
        </div>
        )
    }
}


export default App
