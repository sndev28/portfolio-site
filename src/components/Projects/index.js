import React, { useEffect, useRef } from "react";
import './index.css';
import project1 from '../../assets/images/skills/1.png';
import project2 from '../../assets/images/skills/2.png';
import project3 from '../../assets/images/skills/3.png';
import project4 from '../../assets/images/skills/4.png';
import { ImLink } from "react-icons/im"; 

const Projects = () => {

    function getOffset( el ) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
              _x += el.offsetLeft - el.scrollLeft;
              _y += el.offsetTop - el.scrollTop;
              el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }

    const armature = useRef(null);
    const robot = useRef(null);
    const project = useRef(null);
    const projectPanelRef = useRef(null);
    
    useEffect(() => {
        const projectsElem = project.current;
        const rect = projectsElem.getBoundingClientRect();
        project.current.addEventListener("mousemove", (event) => {
            requestAnimationFrame(() => {
                let mouseRel = (-1*(getOffset(projectsElem).top - event.pageY)) +5;
                robot.current.style.top = (mouseRel <= 0 ? 0 : mouseRel >= rect.height ? rect.height : mouseRel) + "px";
                armature.current.style.transform = "translateX(calc(" + event.pageX + "px - 2%))";
            });
        });
    }, []);



    return (
        <div className="projects-container" id="projects-container" ref={project}>
            <div className="heading">
                <div className="part1">class</div>
                <div className="part2">Projects &#123;</div>
            </div>
            <div className="projects-panel" ref={projectPanelRef}>
                <div className="project-item">
                    <div className="card-container">
                        <div className="back" style={{backgroundImage : `url(${project1})`}}>
                        
                        <div className="front">
                            <div className="card-title">
                                Photography and Fliming Club Website
                            </div>
                            <div className="card-subtitle">
                                Website made for the Photography and Filming club of IIT Tirupati. Developed in ReactJS.
                            </div>
                                
                            <div className="link">
                                <a href="https://pfc-test.netlify.app/" target="_blank" ><ImLink style={{color: "#fff", fontSize: "1.5rem", paddingTop: "10px"}}/></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="project-item">
                    <div className="card-container">
                        <div className="back" style={{backgroundImage : `url(${project2})`}}>
                        
                        <div className="front">
                            <div className="card-title">
                                Tirutsava Website
                            </div>
                            <div className="card-subtitle">
                                Website made for the annual techno-cultural festival of IIT Tirupati, Tirutsava. Developed in ReactJS.
                            </div>
                            <div className="link">
                                <a href="https://tirutsava.in/" target="_blank" ><ImLink style={{color: "#fff", fontSize: "1.5rem", paddingTop: "10px"}}/></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="project-item">
                    <div className="card-container">
                        <div className="back" style={{backgroundImage : `url(${project3})`}}>
                        
                        <div className="front">
                            <div className="card-title">
                                Yuzu Discord Bot
                            </div>
                            <div className="card-subtitle">
                                Discord bot made to manage college discord servers. Developed in Python.
                            </div>
                            <div className="link">
                                <a href="https://github.com/sndev28/Yuzu" target="_blank" ><ImLink style={{color: "#fff", fontSize: "1.5rem", paddingTop: "10px"}}/></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="project-item">
                    <div className="card-container">
                        <div className="back" style={{backgroundImage : `url(${project4})`}}>
                            <div className="front">
                                <div className="card-title">
                                    Chatterbox
                                </div>
                                <div className="card-subtitle">
                                    Project and Team management app developed in Flutter and Python.
                                </div>
                                <div className="link">
                                <a href="https://github.com/sndev28/Chatterbox-ChatApp" target="_blank" ><ImLink style={{color: "#fff", fontSize: "1.5rem", paddingTop: "10px"}}/></a>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="ending"><div>&#125;;</div></div>

            <div className="robot"  ref={robot}>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="42" width="1440" height="5" fill="#C4C4C4" id="top-rect"/>
                <rect y="80" width="1440" height="5" fill="#C4C4C4" id="bottom-rect"/>
                <g id="armature" ref={armature}>
                    <rect x="30" y="88" width="65" height="5" transform="rotate(-90 30 88)" fill="#C4C4C4"/>
                    <rect x="30.5" y="87.5" width="64" height="4" transform="rotate(-90 30.5 87.5)" stroke="black" stroke-opacity="0.25"/>
                    <path d="M23.5 0L31 3L27 16L33 24L27 28L18 16L23.5 0Z" fill="#C4C4C4"/>
                    <path d="M26.5221 15.853L26.4472 16.0963L26.6 16.3L32.2829 23.8772L27.1162 27.3216L18.559 15.912L23.8021 0.659343L30.3867 3.29318L26.5221 15.853Z" stroke="black" stroke-opacity="0.25"/>
                    <path d="M41.5 0L34 3L38 16L32 24L38 28L47 16L41.5 0Z" fill="#C4C4C4"/>
                    <path d="M38.4779 15.853L38.5528 16.0963L38.4 16.3L32.7171 23.8772L37.8838 27.3216L46.441 15.912L41.1979 0.659343L34.6133 3.29318L38.4779 15.853Z" stroke="black" stroke-opacity="0.25"/>
                    <rect x="25" y="18" width="15" height="15" rx="7.5" fill="#C4C4C4"/>
                    <rect x="25.5" y="18.5" width="14" height="14" rx="7" stroke="black" stroke-opacity="0.25"/>
                    <rect y="33" width="65" height="65" fill="#C4C4C4"/>
                    <rect x="0.5" y="33.5" width="64" height="64" stroke="black" stroke-opacity="0.25"/>
                    <rect x="12" y="44" width="7" height="7" rx="3.5" fill="black"/>
                    <rect x="46" y="44" width="7" height="7" rx="3.5" fill="black"/>
                    <rect x="12" y="79" width="7" height="7" rx="3.5" fill="black"/>
                    <rect x="46" y="79" width="7" height="7" rx="3.5" fill="black"/>
                </g>
            </svg>


            </div>

        </div>


    );
}




export default Projects;