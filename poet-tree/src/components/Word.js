import React from "react";

export default function Word(props){
// console.log(props)

    return (
        <button onClick={props.addFoo}>{props.word}</button>
    )
}
