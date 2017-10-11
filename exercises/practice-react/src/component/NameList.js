import React from "react"

function NameList(props){
    return (
        <ol>
            {props.names.map(name=><li>{name}</li>)}
        </ol>
    )
}

export default NameList
