import React from "react";
import Header from "./Header";
import { words } from "../global"
import Word from "./Word"
import Poem from "./Poem"
import glamorous from "glamorous";

const WordsDiv = glamorous.div({
    width: "80%",
    height: "400px",
    backgroundColor: "#fdfdfd",
    margin: "auto"
})

const RefreshButton = glamorous.button ({
    color: "#fdfdfd",
    background: "#6ABBB1",
    fontSize: "18px",
    borderColor: "#898985",
    display: "block",
    margin: " 20px auto",
    // background: "#6ABBB1",
})

class App extends React.Component {
        state = {
            words: [],
            poem: [],

        }

    componentDidMount(){
        this.randomItems(words)
    }


    randomItems(words){

        let newArray = []
        for (let i = 0; i < 100; i ++){
            const word = words[Math.floor(Math.random()*words.length)]
                newArray.push(word)
        }

        this.setState({words : newArray})
    }

    addFoo = (event)  => {

        const newWord = event.target.innerText;
        let updatedPoem = this.state.poem;

        updatedPoem += `${newWord}`;
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
                        addFoo={this.addFoo}
                        poem={this.state.poem}
                    />
            )
        })
    }
    render(){
        const PoemContainer = glamorous.div({
            margin: "55px auto 0 auto",
            width: "80%",
            padding: "0px 15px 0px 15px",
            display: "flex",
            justifyContent: "center",
            color: "#676767",
            fontFamily:"'Amatic SC'",
            fontSize: "28px"
        });



        return(
            <div>
                <Header/>

                <WordsDiv>
                    <PoemContainer>
                        <Poem poem={this.state.poem}/>
                    </PoemContainer>
                    {this.mapWord()}
                    <RefreshButton onClick={()=> this.randomItems(words)}>Refresh</RefreshButton>
                </WordsDiv>

            </div>

        )
    }

}

export default App;
