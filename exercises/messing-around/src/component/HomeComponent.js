import React from "react";
import {Link} from "react-router-dom"

function HomeComponent(){
    return(
        <div className="home">
            <div>
            Home
            <Link to="/main">Link</Link>
            </div>
            <div className="box1">
                <div className="photo">
                    
            </div>
            </div>
            <div className="box2">
                <div>Resume</div>
            </div>
        </div>
    )
}

export default HomeComponent;
