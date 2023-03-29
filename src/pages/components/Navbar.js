import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import '../../main.css';
import logo from '../images/DEEP DATA DETECTIVES (D3) INITIATIVE LOGO_REVISED 02052023.png';
import {HashLink} from "react-router-hash-link";
import collage from "../images/High Res Images/Driving Climate Action.jpg";
import d3comp from "../images/High Res Images/And  Economic Opportunity .jpg";
import wildfire from "../images/High Res Images/FOR ALL.jpg";
import floating from "../images/High Res Images/WITH THE HELP OF AI AND DATA.jpg";
import ImageSlider from '../ImageSlider';

export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const selectd = props.selected;

    useEffect(() => {
        if (navbarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [navbarOpen]);

    return (<>
    
        <body id={"top"} className=" antialiased absolute text-slate-500 dark:text-slate-400 dark:bg-slate-900 mt-0" >
        <nav className="navbar">
            
            <div className="container flex justify-between items-center mx-auto max-w-8xl">
                <Link to="/" className="flex items-center">
                    <img style={{maxHeight: '65px', marginLeft: '10px'}} className="new-element" src={logo}/>
                    <div className="ml-5 my-colour text-xl">
                        <span className="block md:inline font-semibold" >DEEP DATA DETECTIVES</span>
                    </div>
                </Link>
                <div
                    className={" top-2 fixed right-5 p-0 transition-all ease-in-out duration-300"}>

                    <div>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSckIXp1ZCrYR-J79on53FF9pAf4iH3sV83z5SE79wYDE34wCg/viewform?usp=sf_link'>

                    <button
                        className="button custom-tooltip inline-flex items-center  ml-3 mr-12 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        style={{zIndex: '1'}}
                        
                    >

                        <svg fill="#3451e5" width="40px" height="40px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#3451e5">

                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                        <g id="SVGRepo_iconCarrier"> <g id="_x31_"/> <g id="_x32_"/> <g id="_x33_"/> <g id="_x34_"> 
                        <path d="M72.8,80.7H26.6c-5.9,0-10.7-4.8-10.7-10.7v-6c0-0.8,0.7-1.5,1.5-1.5h0.1c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,7,2.8 c3.3,0,5.6-1.1,6.6-2.1c0.9-1.1,2.3-1.7,3.9-1.7h2.9c1.5,0,2.9,0.6,3.9,1.7c0.9,1.1,3.3,2.1,6.6,2.1c3.2,0,5.6-1.1,6.6-2.1 c0.9-1.1,2.3-1.7,3.9-1.7h2.4c1.5,0,2.9,0.6,3.9,1.7c0.9,1.1,3.3,2.1,6.6,2.1c3.7,0,6.5-1.4,6.9-2.8c0.2-0.6,0.8-1,1.4-1H82 
                        c0.8,0,1.5,0.7,1.5,1.5v6C83.5,75.9,78.7,80.7,72.8,80.7z M18.9,67.6V70c0,4.2,3.4,7.7,7.7,7.7h46.2c4.2,0,7.7-3.4,7.7-7.7v-2.8 c-1.8,1.3-4.5,2-7.5,2c-3.7,0-7.1-1.2-8.8-3.2c-0.3-0.4-0.9-0.6-1.6-0.6h-2.4c-0.6,0-1.2,0.2-1.6,0.6c-1.7,2-5.1,3.2-8.8,3.2 c-3.7,0-7.1-1.2-8.8-3.2c-0.3-0.4-0.9-0.6-1.6-0.6h-2.9c-0.6,0-1.2,0.2-1.6,0.6c-1.7,2-5.1,3.2-8.8,3.2 C23.2,69.3,20.8,68.7,18.9,67.6z 
                        M80.3,57.5H19.9c-3.9,0-7.1-3.3-7.1-7.4c0-2,0.7-3.8,2-5.2c1.4-1.4,3.1-2.2,5-2.2h41 c0.5,0,1,0.3,1.3,0.7l2.1,3.5l4.6-3.9c0.3-0.2,0.6-0.4,1-0.4h10.5c3.9,0,7.1,3.3,7.1,7.4c0,2-0.7,3.8-2,5.2 C84,56.7,82.2,57.5,80.3,57.5z M19.9,45.6c-1.1,0-2.1,0.4-2.9,1.3c-0.8,0.8-1.2,2-1.2,3.2c0,2.4,1.8,4.4,4.1,4.4h60.4 c1.1,0,2.1-0.4,2.9-1.3c0.8-0.8,1.2-2,1.2-3.2c0-2.4-1.8-4.4-4.1-4.4h-9.9l-5.5,4.7c-0.3,0.3-0.8,0.4-1.2,0.3 
                        c-0.4-0.1-0.8-0.3-1-0.7L60,45.6H19.9z M63.9,50.7c-0.1,0-0.2,0-0.2,0c-0.4-0.1-0.8-0.3-1-0.7L60,45.6H20.1c-0.8,0-1.5-0.7-1.5-1.5 v-6.8c0-0.8,0.7-1.5,1.5-1.5h59.3c0.8,0,1.5,0.7,1.5,1.5v6.8c0,0.8-0.7,1.5-1.5,1.5h-9l-5.5,4.7C64.6,50.6,64.3,50.7,63.9,50.7z M21.6,42.6h39.2c0.5,0,1,0.3,1.3,0.7l2.1,3.5l4.6-3.9c0.3-0.2,0.6-0.4,1-0.4h8v-3.8H21.6V42.6z M61.9,41.3 M73,69.3 c-4.2,0-7.8-1.5-9.3-3.8H59c-1.5,2.3-5.1,3.8-9.3,3.8c-4.2,0-7.8-1.5-9.3-3.8h-5.2c-1.5,2.3-5.1,3.8-9.3,3.8c-4.4,0-8.1-1.6-9.4-4 c-2.3-0.7-3.9-2.8-3.9-5.2c0-2.5,1.8-4.7,4.2-5.3c0.2-0.1,0.4-0.1,0.6-0.1H82c3,0,5.4,2.4,5.4,5.4c0,2.9-2.3,5.3-5.1,5.4 C80.8,67.8,77.2,69.3,73,69.3z M58.1,62.5h6.5c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,7,2.8c3.7,0,6.5-1.4,6.9-2.8 
                        c0.2-0.6,0.8-1,1.4-1H82c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4H17.8c-0.1,0-0.1,0-0.2,0c-1.2,0.2-2.1,1.2-2.1,2.4 s0.9,2.2,2.1,2.4c0.2,0,0.3,0.1,0.4,0.1c0.4,0.2,0.8,0.5,0.9,0.9c0.4,1.3,3.2,2.8,7,2.8c3.7,0,6.5-1.4,6.9-2.8c0.2-0.6,0.8-1,1.4-1 h7c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,6.9,2.8c3.7,0,6.5-1.4,6.9-2.8C56.9,62.9,57.4,62.5,58.1,62.5z M82,38.9H17.4 c-0.8,0-1.5-0.7-1.5-1.5v-1.8c0-9,7.3-16.3,16.3-16.3h34.9c9,0,16.3,7.3,16.3,16.3v1.8C83.5,38.2,82.8,38.9,82,38.9z M18.9,35.9 h61.6v-0.3c0-7.3-6-13.3-13.3-13.3H32.3c-7.3,0-13.3,6-13.3,13.3V35.9z M31.6,31.4l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1 c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4C30.9,31.8,31.3,31.6,31.6,31.4z M48.9,31.4 l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4 
                        C48.2,31.8,48.6,31.6,48.9,31.4z M65.6,31.4l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8 c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4C64.9,31.8,65.3,31.6,65.6,31.4z"/> </g> <g id="_x35_"/> <g id="_x36_"/> <g id="_x37_"/> <g id="_x38_"/> <g id="_x39_"/> <g id="_x31_0"/> <g id="_x31_1"/> <g id="_x31_2"/> <g id="_x31_3"/> <g id="_x31_4"/> <g id="_x31_5"/> <g id="_x31_6"/> <g id="_x31_7"/> <g id="_x31_8"/> <g id="_x31_9"/> <g id="_x32_0"/> <g id="_x32_1"/> <g id="_x32_2"/> <g id="_x32_3"/> <g id="_x32_4"/> </g>

                        </svg>
                        <span
                            style={{zIndex: '1'}}
                            className='navbarele2'
                            >
                            </span>
                            <span className="tooltip-text">Join the Waitlist</span>
                    </button>
                    </a>
                    </div>

                <button
                    data-collapse-toggle=""
                    type="button"
                    className="button inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    style={{position: "fixed", top: "10px", right: "10px"}}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >MENU
                    <span className="sr-only">Open main menu</span>
                </button>
                </div>
                <div
                    aria-expanded="false"
                    className={" top-2 fixed right-2 p-5 z-10 transition-all ease-in-out duration-300" + (navbarOpen ? " translate-x-0" : " translate-x-full")}
                    id="navbar-default"
                >
                    <ul className="flex flex-col space-y-2">
                    <button
                        className="inline-flex border bg-white items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        style={{zIndex: '1'}}
                        onClick={() => setNavbarOpen(false)}
                    >
                        <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span
                            style={{zIndex: '1'}}
                            className='navbarele2'>Go back</span>
                    </button><br/><br/><br/>
                </ul>

                </div>

                <div
                    aria-expanded="false"
                    className={"navbarcolour fixed top-0 right-0 w-64 h-full bg-white p-4 transition-all ease-in-out duration-300" + (navbarOpen ? " translate-x-0" : " translate-x-full")}
                    id="navbar-default"
                    style={{
                        top: 0, left: 0, width: "100%", height: "100%", zIndex: '1'
                    }}
                >
                    <div style={{width: "75%"}}>
                        <ul className="flex-col  p-5 ml-0 mr-5 bg-slate-0 iSpA-dU">
                            <li>
                                <HashLink to="/#whyD3"
                                      onClick={() => setNavbarOpen(false)}
                                      className={((selectd === 'home') ? "" : "block py-0 pr-20 pl-3 text-white rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300")}>Why
                                    Deep Data Detectives (D3)</HashLink><br></br>
                            </li>
                            <li>
                                <HashLink to="/#progress"
                                      onClick={() => setNavbarOpen(false)}
                                      className={((selectd === 'pilot_projects') ? "" : "block py-2 pr-4 pl-3 text-white rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300")}>Our
                                    Progress</HashLink><br></br>
                            </li>
                            <li>
                                <HashLink to="/#offer"
                                      onClick={() => setNavbarOpen(false)}
                                      className={((selectd === 'join_us') ? "" : "block py-2 pr-4 pl-3 text-white rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300")}>What
                                    We Offer</HashLink><br></br>
                            </li>
                            <li>
                                <HashLink to="/media#top"
                                      onClick={() => setNavbarOpen(false)}
                                      className={((selectd === 'about') ? "" : "block py-2 pr-4 pl-3 text-white rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300")}>Media
                                </HashLink><br></br>
                            </li>
                            <li>
                                <HashLink to="/contact#top"
                                      onClick={() => setNavbarOpen(false)}
                                      className={("block py-2 pr-4 pl-3 text-white rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300")}>Contact
                                </HashLink><br></br>
                            </li>
                            <li>
                                <HashLink to="/privacy#top"
                                      onClick={() => setNavbarOpen(false)}
                                      className={("block py-2 pr-4 pl-3 text-white rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300")}>Privacy
                                </HashLink><br></br>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </body>
        {/* <ImageSlider
            leftImage={wildfire}
            leftText={collage}
            rightImage={d3comp}
            rightText={floating}
        /> */}
    </>);
}