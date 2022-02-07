import React from "react";
import profile_pic from "../../assets/images/pf_pic.png";
import './index.css';



const Intro = () => {



    return(

        <div className="intro-container">
            <div className="profile-pic">
                <div className="img-decoration" />
                <div className="img-decoration" />
                <div className="img-decoration" />
                <div className="img-decoration" />
                <img src={profile_pic} alt="Profile Pic" />
            </div>

            <div className="intro">
                <span className="line">Hey, My name is Shamil Niyas</span>
                <span className="line">A Web Designer and Software Developer</span>
            </div>



        </div>



    );



}



export default Intro;