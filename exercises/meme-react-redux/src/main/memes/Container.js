import React from "react";
import MemesComponent from "./Component";
import {connect} from "react-redux"
import Meme from "./Meme"


class MemesContainer extends React.Component {
    constructor(){
        super();
            this.genList = this.genList.bind(this)
    }
    genList(){
        return this.props.memes.map((meme, index)=>{
            return <Meme
                //key={meme.name + index}
                meme={meme}
                index={index}/>
        })
    }
    render(){
        return(
            <MemesComponent genList={this.genList}/>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        memes: state.memes
    }
}

export default connect(mapStateToProps, {}) (MemesContainer)
