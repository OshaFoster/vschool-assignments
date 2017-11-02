import React from "react";
import ListComponent from "./Component"
import {connect} from "react-redux";
import {getList} from "../../redux/actions";

class ListContainer extends React.Component{
    constructor(){
        super();


    }

    componentDidMount(){
        this.props.getList();
    }


    genList(){
        this.props.issues.map((issue, index)=>{
            return
                <ListComponent/>

        })
    }

    render(){
        return(

            <div>Hi Evan</div>
        )

    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {getList})(ListContainer);
