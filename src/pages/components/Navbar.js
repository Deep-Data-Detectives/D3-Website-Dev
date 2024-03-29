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

    const [isOverlapping, setIsOverlapping] = useState(false);

    const checkOverlap = () => {
        const detectivesText = document.querySelector('.deep-data-text');
        const waitlistButton = document.querySelector('.waitlist-button');
      
        // Check if both elements exist
        if (!detectivesText || !waitlistButton) {
          return;
        }
      
        const rect1 = detectivesText.getBoundingClientRect();
        const rect2 = waitlistButton.getBoundingClientRect();
      
        const overlap =
          rect1.right > rect2.left &&
          rect1.left < rect2.right &&
          rect1.top < rect2.bottom &&
          rect1.bottom > rect2.top;
      
        setIsOverlapping(overlap);
      };
      
      

      useEffect(() => {
        checkOverlap();
      
        // Call the checkOverlap function when the window is resized
        const handleResize = () => {
          checkOverlap();
        };
      
        window.addEventListener('resize', handleResize);
      
        // Cleanup the event listener when the component is unmounted
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      

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
    
    <body id={"top"} className="antialiased absolute text-slate-500 dark:text-slate-400 dark:bg-slate-900 mt-0">
  <nav className="navbar">
    <div className="container flex justify-between items-center mx-auto max-w-8xl">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center">
          <img style={{ maxHeight: '55px' }} className="new-element" src={logo} />
        </Link>
        <div className="ml-3 my-colour deep-data-text z-10 relative">
          <span className="block md:inline font-semibold">
            DEEP DATA DETECTIVES
          </span>
        </div>
        <div className={"my-colour top-1 fixed right-12 pt-1 transition-all ease-in-out duration-300"}>
        {!isOverlapping && (
                <div>
                    <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSckIXp1ZCrYR-J79on53FF9pAf4iH3sV83z5SE79wYDE34wCg/viewform?usp=sf_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button
                        className="inline-flex items-center pt-2 pr-2 pb-2 pl-2 text-sm text-gray-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-blue-900 w-full mr-3 sm:w-auto waitlist-button"
                        style={{ zIndex: 1 }}
                        onClick={() => setNavbarOpen(false)}
                    >
                        <span style={{ zIndex: 1 }} className="text-white">
                        Join the Waitlist
                        </span>
                    </button>
                    </a>
                </div>
                )}

                    </div>

                    <button
                        data-collapse-toggle=""
                        type="button"
                        className="button inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        style={{ position: "fixed", top: "7px", right: "10px"}}
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                            ></path>
                        </svg>
                        </button>
                </div>
                <div
                    aria-expanded="false"
                    className={" top-1 fixed right-2 p-5 z-10 transition-all ease-in-out duration-300" + (navbarOpen ? " translate-x-0" : " translate-x-full")}
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