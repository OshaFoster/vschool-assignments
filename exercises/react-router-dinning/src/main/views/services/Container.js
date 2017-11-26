import React from "react";
import { Link } from "react-router-dom";
import ServicesComponent from "./Component"

class ServicesContainer extends React.Component{
    constructor(){
        super();
        this.state ={
            services:[]
        }
        this.genLinks=this.genLinks.bind(this);
        this.searchById=this.searchById.bind(this);
    }

    componentDidMount(){
        this.setState({
            services: [
                {title: "Casual Dining",
                price: 100,
            _id:"234y48r78"},
                {title:"Fine Dining",
                price:200,
            _id:"837oie923"},
                {title:"Catering",
                price:400,
            _id:"i70878e4e"}
            ]
        })
    }
    searchById(id){
        return this.state.services.filter((service)=>{
            return id === service._id;
        })[0]
    }
    genLinks(){
        return this.state.services.map((service)=>{
            return <Link to={`/service/${service._id}`}>{service.title}</Link>
        })
    }
    render(){
        return (
            <ServicesComponent
            genLinks={this.genLinks}
            searchById={this.searchById}/>

        )
    }
}

export default ServicesContainer
