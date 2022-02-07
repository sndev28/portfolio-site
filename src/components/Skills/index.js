import React, { useEffect, useRef } from "react";
import './index.css';
import skills_bg from "../../assets/images/skills2.png";
import appleImg from "../../assets/images/apple.png";
import appleShotImg from "../../assets/images/apple-shot.png";


const Skills = () => {

    const cursorRef = useRef(null);
    const cursorPointRef = useRef(null);
    const skillsPanelRef = useRef(null);
    const innerTextRef = useRef(null);
    const arrow = useRef(null);
    const apple = useRef(null);

    useEffect(() => {
        let cursor = cursorRef.current;
        let cursorPoint = cursorPointRef.current;
        
        skillsPanelRef.current.addEventListener("mousemove", (event) => {
            requestAnimationFrame(() => {
                let rect = skillsPanelRef.current.getBoundingClientRect();
                let cursorRect = cursor.getBoundingClientRect();
                let innerText = innerTextRef.current;
                let mouseRel = (-1*(rect.y + window.scrollY - event.pageY));
                cursor.style.top = (mouseRel-(cursorRect.height/2)) + "px";
                cursor.style.left = (event.pageX-(cursorRect.height/2)) + "px";
                cursorPoint.style.top = (mouseRel-(cursorRect.height/2)) + "px";
                cursorPoint.style.left = (event.pageX-(cursorRect.height/2)) + "px";
                cursorPoint.style.transform = "translateX(" + cursorRect.width/2 + "px) translateY(" + cursorRect.height/2 + "px)"; 
                innerText.style.transform = "translateX(" + ((cursorRect.width/2)-1*event.pageX) + "px) translateY(" + ((cursorRect.height/2)-1*mouseRel) + "px)"; 

            });
        });


    }, []); 

    const shoot = () => {
        arrow.current.style.display = "flex";
    }

    return (
        <div className="skills-container" id="skills-container">
            <div className="heading">
                <div className="part1">var</div>
                <div className="part2">Skills = [</div>
                <div className="part3">(find the apple and shoot it!)</div>
            </div>
            <div className="skills-panel" ref={skillsPanelRef}>
                    
                <div className="skills-bg-container" style={{backgroundImage: `url(${skills_bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    <div  className="skills-cursor-point" ref={cursorPointRef} id="cursor-point" />
                    <div  className="skills-cursor" ref={cursorRef} id="cursor">
                    
                    <div className="inner-text" ref={innerTextRef}>

                        <img src={appleImg} alt="apple" id="apple" onClick={shoot}/>
                        <img src={appleShotImg} alt="apple-shot" id="apple-shot" ref={arrow}/>

                        <svg width="1286" height="594" viewBox="0 0 1286 594" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Frame 1">
                                <rect width="1286" height="594" fill="white"/>
                                <g id="Group 8">
                                <rect id="Rectangle 1" x="24" y="408" width="224" height="52" fill="white"/>
                                <text id="HTML5" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="24" y="452.696">HTML5</tspan></text>
                                </g>
                                <g id="Group 10">
                                <rect id="Rectangle 2" x="801" y="364" width="176" height="52" fill="white"/>
                                <text id="KIVY" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="808" y="405.696">KIVY</tspan></text>
                                </g>
                                <g id="Group 11">
                                <rect id="Rectangle 1_2" x="832" y="484" width="264" height="52" fill="white"/>
                                <text id="ROMDev" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="833" y="528.696">ROMDev</tspan></text>
                                </g>
                                <g id="Group 19">
                                <rect id="Rectangle 1_3" x="1221" y="591" width="588" height="52" transform="rotate(-90 1221 591)" fill="white"/>
                                <text id="BEAUTIFULSOUP4" transform="translate(1214 591) rotate(-90)" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="0" y="47.696">BEAUTIFULSOUP4</tspan></text>
                                </g>
                                <g id="Group 14">
                                <rect id="Rectangle 1_4" x="24" y="519" width="330" height="52" fill="white"/>
                                <text id="SELENIUM" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="24" y="560.696">SELENIUM</tspan></text>
                                </g>
                                <g id="Group 9">
                                <rect id="Rectangle 2_2" x="790" y="257" width="409" height="52" fill="white"/>
                                <text id="BACKBLAZE" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="790" y="298.696">BACKBLAZE</tspan></text>
                                </g>
                                <g id="Group 12">
                                <rect id="Rectangle 2_3" x="1054" y="411" width="85" height="52" fill="white"/>
                                <text id="JS" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="1060" y="452.696">JS</tspan></text>
                                </g>
                                <g id="Group 20">
                                <rect id="Rectangle 1_5" x="1019" y="66" width="156" height="52" fill="white"/>
                                <text id="CSS3" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="1019" y="110.696">CSS3</tspan></text>
                                </g>
                                <g id="Group 5">
                                <rect id="Rectangle 1_6" x="511" y="335" width="109" height="52" fill="white"/>
                                <text id="GIT" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="511" y="376.696">GIT</tspan></text>
                                </g>
                                <g id="Group 3">
                                <rect id="Rectangle 1_7" x="24" y="43" width="278" height="52" fill="white"/>
                                <text id="PYTHON" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="24" y="81.696">PYTHON</tspan></text>
                                </g>
                                <g id="Group 18">
                                <rect id="Rectangle 1_8" x="711" y="529" width="411" height="52" transform="rotate(-90 711 529)" fill="white"/>
                                <text id="BOOTSTRAP" transform="translate(769 121) rotate(90)" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="0" y="47.696">BOOTSTRAP</tspan></text>
                                </g>
                                <g id="Group 6">
                                <rect id="Rectangle 1_9" x="544" y="504" width="116" height="52" fill="white"/>
                                <text id="C++" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="544" y="550.696">C++</tspan></text>
                                </g>
                                <g id="Group 4">
                                <rect id="Rectangle 1_10" x="386" y="254" width="179" height="52" fill="white"/>
                                <text id="DART" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="385" y="293.696">DART</tspan></text>
                                </g>
                                <g id="Group 13">
                                <rect id="Rectangle 1_11" x="832" y="147" width="222" height="52" fill="white"/>
                                <text id="FLASK" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="833" y="188.696">FLASK</tspan></text>
                                </g>
                                <g id="Group 7">
                                <rect id="Rectangle 1_12" x="385" y="427" width="288" height="52" fill="white"/>
                                <text id="REACTJS" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="385" y="468.696">REACTJS</tspan></text>
                                </g>
                                <g id="Group 17">
                                <rect id="Rectangle 1_13" x="312" y="502" width="458" height="52" transform="rotate(-90 312 502)" fill="white"/>
                                <text id="ILLUSTRATOR" transform="translate(306 504) rotate(-90)" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="0" y="47.696">ILLUSTRATOR</tspan></text>
                                </g>
                                <g id="Group 16">
                                <rect id="Rectangle 1_14" x="40" y="297" width="169" height="52" transform="rotate(-90 40 297)" fill="white"/>
                                <text id="SASS" transform="translate(37 297) rotate(-90)" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="0" y="47.696">SASS</tspan></text>
                                </g>
                                <g id="Group 15">
                                <rect id="Rectangle 1_15" x="171" y="377" width="204" height="52" transform="rotate(-90 171 377)" fill="white"/>
                                <text id="LINUX" transform="translate(229 171) rotate(90)" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="0" y="47.696">LINUX</tspan></text>
                                </g>
                                <g id="Group 2">
                                <rect id="Rectangle 1_16" x="458" y="37" width="474" height="52" fill="white"/>
                                <text id="PREMIEREPRO" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="463" y="80.696">PREMIEREPRO</tspan></text>
                                </g>
                                <g id="Group 1">
                                <rect id="Rectangle 1_17" x="385" y="121" width="288" height="52" fill="white"/>
                                <text id="FLUTTER" fill="#201A23" xmlSpace="preserve" style={{whiteSpace : "pre"}} fontFamily="Chango" fontSize="48" letterSpacing="0em"><tspan x="385" y="162.696">FLUTTER</tspan></text>
                                </g>
                            </g>
                        </svg>

                    


                    </div>
                    </div>
                </div>

            </div>
            <div className="ending"><div>];</div></div>

        </div>


    );
}




export default Skills;