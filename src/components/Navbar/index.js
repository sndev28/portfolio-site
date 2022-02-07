import React from "react";
import './index.css';
import logo from '../../assets/images/logo.png';
import logo_horizontal from '../../assets/images/logo_horizontal.png';



const Navbar = () => {




    return(

        <div className="navbar">
            <div className="layer1">
                <div className="logo">
                    <img src={logo_horizontal} alt="Logo" />
                </div>
            </div>
            <div className="layer2"></div>
            <div className="layer3">
                <ul className="nav">
                    <li><a href="#about-container"> About </a></li>
                    <li><a href="#projects-container"> Projects </a></li>
                    <li><a href="#skills-container"> Skills </a></li>
                    <li><a href="#connect-container"> Contact Me </a></li>
                </ul>
            </div>
            <div className="layer4">
                <div className="lamp">
                        {/* <div class="lamp-head">
                            <div class="hinge"></div>
                        </div>
                        <div class="lamp-body">
                            <div class="support"></div>
                            <div class="hinge"></div>

                        </div> */}
                        <svg width="384" height="251" viewBox="0 0 384 251" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <rect x="60.8665" y="127" width="60" height="60" rx="30" fill="white"/>
                                <rect x="61.3665" y="127.5" width="59" height="59" rx="29.5" stroke="#EEEEEE" stroke-opacity="0.53"/>
                            </g>
                            <rect x="163.866" width="20" height="20" rx="10" fill="#C4C4C4"/>
                            <rect x="121.866" y="90.0031" width="97" height="9" transform="rotate(-60 121.866 90.0031)" fill="#C4C4C4"/>
                            <rect x="173" y="6" width="211" height="9" fill="#C4C4C4"/>
                            <path d="M124.955 84.0331C128.891 81.7606 133.826 84.5191 133.952 89.0622L136.527 181.553C136.66 186.32 131.448 189.329 127.386 186.831L48.5741 138.355C44.7029 135.974 44.7815 130.321 48.7175 128.049L124.955 84.0331Z" fill="#201A23"/>
                            <defs>
                                <filter id="filter0_dddd_121_10" x="0.866486" y="71" width="180" height="180" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feMorphology radius="17" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_121_10"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="7"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.43 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_10"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_121_10"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="10"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                                    <feBlend mode="normal" in2="effect1_dropShadow_121_10" result="effect2_dropShadow_121_10"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feMorphology radius="20" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_121_10"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="20"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"/>
                                    <feBlend mode="normal" in2="effect2_dropShadow_121_10" result="effect3_dropShadow_121_10"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feMorphology radius="20" operator="dilate" in="SourceAlpha" result="effect4_dropShadow_121_10"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="7.5"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="effect3_dropShadow_121_10" result="effect4_dropShadow_121_10"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_121_10" result="shape"/>
                            </filter>
                            </defs>
                        </svg>




                </div>
                <div className="layer4-text">
                    <span>Everything is designed</span>
                    <span>Few things are designed well</span>
                    
                </div>
            </div>
            



        </div>
    );
}

export default Navbar;