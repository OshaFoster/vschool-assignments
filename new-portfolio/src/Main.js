import React from "react"
import {Link} from "react-router-dom"
const fairyHome = require("./images/fairylandHome.jpg")
//const fairyOms =require("./images/fairyOms.jpg")
// const orderConfirm =require("./images/orderConfirm.jpg")
const recipeBox = require("./images/recipeBox.jpg")
// const recipeSearch =require("./images/recipeSearch.jpg")

function Main() {
    return (
        <div className="parent">
            <div className="about">
                <h3>About Osha:</h3>
                <p>Graduate of VSchool where I completed 500 hrs of intensive web development training with a focus on: JavaScript React.JS Redux Express NodeJS MongoDB HTML5 CSS3.
                </p>
            </div>
            <div className="projectsTitle">Projects:</div>
            <div className="projectDiv">
                <div className="fairyland">
                    <div className="imageDiv">
                        <img className="fairylandImage" src={fairyHome} alt="image1"/>
                    </div>
                    <div className="projectTitleDiv">
                        <Link className="link" to="/fairyland"><h3 className="projectTitle">
                            Fairland Cupcake Shop</h3></Link>
                    </div>
                </div>
                <div className="recipeBox">
                    <div className="imageDiv">
                        <img className="recipeBoxImage" src={recipeBox} alt="image2"/>
                    </div>
                    <div className="projectTitleDiv">
                        <Link className="link" to="/recipeBox"> <h3 className="projectTitle">
                            Good Food Recipe Box</h3></Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Main;
