import React from "react"
import {connect} from "react-redux"
import {memes} from "../../redux/actions/"

function Meme(props) {
    const style = {
        backgroundImage: `url(${props.meme.imgUrl})`,
        backgroundSize: "cover",
        width: "500px",
        height: "300px",
        border: "solid black 1px",
        margin: "20px"
    }
    return (
        <div style={style}>
            <h4>{props.meme.topSentence}</h4>
            <h4>{props.meme.bottomSentence}</h4>
            <button onClick={() => {
                props.deleteMeme(props.index)
            }}>Remove</button>
        </div>
    )
}

export default connect(null, memes)(Meme);
