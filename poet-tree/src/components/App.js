import React from "react";
import Header from "./Header";
import { words } from "../global"
import Word from "./Word"

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            words: []
        }
    }
    componentDidMount(){
        this.randomItems(words)
    }

    randomItems(words){

        let newArray = []
        for (let i = 0; i < 50; i ++){
            const word = words[Math.floor(Math.random()*words.length)]
                newArray.push(word)
        }

        this.setState({words : newArray})
    }

    mapWord(){
        return this.state.words.map((word, i) => {
            return (
                <Word word={word}
                        key={word + i}/>
            )
        })
    }
    render(){
        console.log(this.state.words)
        return(
            <div>
                <Header/>
                {this.mapWord()}
            </div>

        )
    }

}

export default App;
