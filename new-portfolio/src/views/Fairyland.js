import React from "react";
import {Link} from "react-router-dom";
const fairyHome = require("../images/fairylandHome.jpg")
const orderConfirm =require("../images/orderConfirm.jpg")


function Fairyland(){
    return(
        <div>
        <div className="Div1">
            <div className="fairylandViewImage">
                <img className="fairylandImage2" src={fairyHome} alt="image1"/>
            </div>
            <div className="fairylandViewImageShow">
                <img className="fairylandImage2" src={orderConfirm} alt="image1"/>
            </div>
            <div className="fairylandDescription">

            </div>

        </div>
        <div className="midDiv">
                <a href="https://fairyland.herokuapp.com/" className="resumeLink
                "><span className="appLink">View App</span></a>
            <a href="https://github.com/arleswall/fairyland" className="resumeLink
            "><span className="appLink">View Code</span></a>
        </div>
        <div className="Div2">
            <h3 className="titleView">Fairyland Cupcake Shop</h3>
        <p className="description"> Single Page Application- Features: Integration with PayPal; automatic e-mail response; order management system; user authentication(/admin)
                <br></br>Built with: JavaScript, ReactJs, Redux, Node.js, Express, MongoDB, HTML, CSS</p>
        </div>
        <div className="bottomDiv">
            <span><Link className="homeLink" to="/"><span>
                Home Page</span></Link></span>

        </div>
        </div>

    )
}

export default Fairyland
