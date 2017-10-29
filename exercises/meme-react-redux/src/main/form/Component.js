import React from "react"

function FormComponent(props){
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange}value={props.inputs.topSentence}name="topSentence"type="text"placeholder="Add to Meme"></input>
            <input onChange={props.handleChange}value={props.inputs.bottomSentence}name="bottomSentence"type="text"placeholder="Add more to Meme"></input>
                <input onChange={props.handleChange}value={props.inputs.imgUrl}name="imgUrl"type="text"placeholder="Meme Url"/>
                <button type="submit">Create Meme</button>
            </form>
        </div>
    )
}

export default FormComponent
