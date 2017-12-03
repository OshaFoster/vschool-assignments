import React from "react";
// import {Link} from "react-router-dom"
const fairyHome =require("../images/fairylandHome.jpg")
const fairyOms =require("../images/fairyOms.jpg")
const orderConfirm =require("../images/orderConfirm.jpg")
const recipeBox =require("../images/recipeBox.jpg")
const recipeSearch =require("../images/recipeSearch.jpg")


function InfoComponent(){
    return(
        <div className="home">
            <div className="box1">
                <div className="photoBox">
                    <div className="photo">
                </div>
                </div>
                <div className="about"><span>About</span><p> about how great Osha is hthiht
                thithtot thiodshiohret erthoiehrioerger egoihreghoierg</p>
                </div>
            </div>
            <div className="box2">
                <div>
                    <img className="fairylandImage" src={fairyHome} alt="image1"/>
                    <img className="fairylandImage" src={orderConfirm} alt="image2"/>
                    <img className="fairylandImage" src={fairyOms} alt="image3"/>
                </div>
                <div>
                    <img className="fairylandImage" src={recipeBox} alt="image4"/>
                    <img className="fairylandImage" src={recipeSearch} alt="image5"/>
                </div>
            </div>
            <div className="box3">
                <div className="resumeDiv">
                    <div className="resume">
                    </div>

                </div>

            </div>
            {/* <div clasName="link">
                <Link  clasName="link" to="/main">Link</Link>
            </div> */}
        </div>

    )
}

export default InfoComponent;
