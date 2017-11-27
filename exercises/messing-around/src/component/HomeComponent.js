import React from "react";
import {Link} from "react-router-dom"

function HomeComponent(){
    return(
        <div className="home">
            <div className="box1">
                <div className="photo">
                    <img src="../../images/portrait.jpg" alt="profile"/>
                </div>
            </div>
            Hello World
            <Link to="/main">Link</Link>
        </div>
    )
}

export default HomeComponent;
