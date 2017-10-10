import React from "react"
import BodyComponent from "./BodyComponent"
import listArray from "../bodyList.json"

function BodyList(){
    return listArray.map(function(item){

        return (<BodyComponent item={item}/>)
    })

}

export default BodyList
