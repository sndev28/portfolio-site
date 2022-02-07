import React from "react";
import './index.css';
import { IoMdClose } from "react-icons/io";
import { BiSquare } from "react-icons/bi";
import { BsDash } from "react-icons/bs";


const About = () => {



    return(

        <div className="about-container" id="about-container">

            <div className="tag"><div className="tag-text">&lt;about me&gt;</div></div>
            <div className="code-box">
                <div className="top-bar">
                    <div className="bar-title">~/about_me</div>
                    <div className="control-buttons">
                        <BsDash />
                        <BiSquare />
                        <IoMdClose />
                    </div>
                </div>
                <div className="code-window">
                    <div className="code-window-command">&gt; echo details</div>
                    <div className="code-window-details">
                        <p>I am a confident college student always looking to learn new skills, take on extra responsibilities, and grow professionally, with a proven record of being a
                        good leader and team worker.</p>
                        <p>I am doing my bachelors in Indian Institute of Technology.</p>
                        <p>I love badminton!!</p>                    
                    </div>
                </div>
            </div>
            <div className="tag"><div className="tag-text">&lt;/about me&gt;</div></div>




        </div>

    );


}




export default About;