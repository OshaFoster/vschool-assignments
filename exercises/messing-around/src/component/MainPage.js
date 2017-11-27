import React from "react"
import {Link} from "react-router-dom"


function MainPage(){
    return(

        <div className="main">
            <div className="title">
                <h1>Osha Foster</h1>
            </div>
            <div className="linkTo">
                <Link className="linkTo" to="/">Full Stack JS Web Developer</Link>
            </div>
        </div>

    )
}

export default MainPage;
