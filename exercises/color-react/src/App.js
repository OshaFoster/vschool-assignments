import React from "react"
import axios from "axios"

class App extends React.Component{
    contructor(){
        //super()
        this.state = {

            colorList: {}
        }
}
componentDidMount() {
    axios.get('http://www.colr.org/json/color/random').then((response)=> {
        this.setState({

            colorList: response.data

        })

        console.log(this.colorList)

    })

}


    render(){
        return (
            <div>
                helep

            </div>
        )
    }
}


export default App
