import React from "react";
import Header from "./Header";
import { words } from "../global"
import Word from "./Word"
import Poem from "./Poem"

class App extends React.Component {
        state = {
            words: [],
            poem: ''
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

    addFoo = (event)  => {

        const newWord = event.target.innerText;
        let updatedPoem = this.state.poem;

        updatedPoem += ` ${newWord}`;
        // console.log(updatedPoem);
        // const poemArray = ['shoe', 'house', 'tickle']
        // const poemList = poemArray.toString()
        this.setState({poem : updatedPoem})
        event.target.style.visibility = 'hidden';
        // console.log('adding foo')
    };


    mapWord(){
        return this.state.words.map((word, i) => {
            return (
                <Word word={word}
                        key={word + i}
                        addFoo={this.addFoo}/>
            )
        })
    }
    render(){
        // console.log(this.state.words)
        return(
            <div>
                <Header/>
                {this.mapWord()}
                <Poem poem={this.state.poem}/>
            </div>

        )
    }

}

export default App;
