import React from "react";
import './index.css';
import { IoMdClose } from "react-icons/io";
import { BiSquare } from "react-icons/bi";
import { BsDash } from "react-icons/bs";

import instagram from "../../assets/images/instagram.png";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import freelancer from "../../assets/images/freelancer.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";



const Connect = () => {


    return(
        <div className="connect-container" id="connect-container">
            <div className="social-media">
                <a href="https://www.instagram.com/shamil_niyas/" target="_blank">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="https://github.com/sndev28" target="_blank">
                    <img src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/shamil-niyas/" target="_blank">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://www.freelancer.in/u/Shamilniyas" target="_blank">
                    <img src={freelancer} alt="freelancer" />
                </a>
                <a href="https://twitter.com/shamil_niyas" target="_blank">
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="https://www.facebook.com/shamil.niyas" target="_blank">
                    <img src={facebook} alt="facebook" />
                </a>
            </div>
            <div className="catchy-text">
                <div className="part1">
                    <div>CONNECT WITH ME ON THESE PLATFORMS</div>
                </div>
                <div className="part2">
                    <div>CONNECT WITH ME ON THESE PLATFORMS</div>
                </div>
                <div className="part3">
                    <div>CONNECT WITH ME ON THESE PLATFORMS</div>
                </div>
                <div className="part4">
                    <div>CONNECT WITH ME ON THESE PLATFORMS</div>
                </div>
                <div className="part5">
                    <div>CONNECT WITH ME ON THESE PLATFORMS</div>
                </div>
            </div>
            <div className="contact-me">

                <div className="contact-box">
                    <div className="top-bar">
                        <div className="bar-title">Write me a message</div>
                        <div className="control-buttons">
                            <BsDash />
                            <BiSquare />
                            <IoMdClose />
                        </div>
                    </div>
                    <form action="/meh.php" className="contact-window">
                        <div className="name">
                            <div className="fname">
                                <label for="fname">Name</label>
                                <input type="text" id="fname" name="fname" />
                            </div>
                            
                        </div>
                        <div className="email">
                            <label for="lname">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="message">
                            <div>Message</div>
                            <textarea name="message-text" cols="40" rows="5"></textarea>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
}



export default Connect;