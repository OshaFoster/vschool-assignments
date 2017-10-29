import React from "react";
import BountyComponent from "./Componenet";
import {connect} from "react-redux";
import Bounty form "./Bounty";

class BountyContainer extends React.Component{
    constructor(){
        super();
        this.genList = this.genList.bind(this)
    }

    genList(){
        return this.props.bounties.map((bounty, index)=>{
            return <Bounty
                //key={bounty.name + index}
                bounty={bounty}
                index={index}/>
        })
    }

    render(){
        return(
            <BountyComponent genList={this.genList}/>

        )
    }
}

const mapStateToProps =(state)=>{
    return {
        bounties: state.bounties
    }
}

export default connect(mapStateToProps, {}) (BountyContainer)
