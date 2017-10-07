import React from "react";
import WrestlerComponent from "./WrestlerComponent"

function WrestlerList(props){
    return props.wrestlerArray.map((wrestler, i)=>{
        let color;
        if(i % 2 === 0) {
             color = "lightblue"
        }else{
             color = "lightpink"
        }
        return (<WrestlerComponent firstName={wrestler.firstName}
                                  lastName={wrestler.lastName}
                                  phone={wrestler.phone}
                                  img={wrestler.img}
                                  key={i}
                                  background={color} />)

    });


};

export default WrestlerList;


{/*const color = i % 2 === 0 "lightblue": "lightpink"; */}
