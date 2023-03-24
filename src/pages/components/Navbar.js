import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../../main.css';
import logo from '../images/DEEP DATA DETECTIVES (D3) INITIATIVE LOGO_REVISED 02052023.png';

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

  return (
    <>
<body className=" antialiased text-slate-500 dark:text-slate-400 dark:bg-slate-900 mt-0">
  <nav className="navbar">
    <div className="container flex justify-between items-center mx-auto max-w-8xl">
      <Link to="/" className="flex items-center">
        <img style={{ maxHeight: '65px', marginLeft: '10px' }} className="new-element" src={logo} />
                    <div className="ml-5 my-colour text-xl">
                    <span className="block md:inline font-semibold">DEEP DATA DETECTIVES</span>
                    </div>
                </Link>
                <button
                        data-collapse-toggle=""
                        type="button"
                        className="button inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        style={{ position: "fixed", top: "10px", right: "10px"}}
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

                        <div
                        aria-expanded="false"
                        className={
                            "fixed top-2 right-2 p-5 z-10 transition-all ease-in-out duration-300" +
                            (navbarOpen ? " translate-x-0" : " translate-x-full")
                        }
                        id="navbar-default"
                        >
                        <button
                            className="inline-flex border bg-white items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            style={{}}
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
                            style={{ }}
                            className='navbarele2'>Go back</span>
                        </button>
                        </div>

                    <div
                    aria-expanded="false"
                    className={
                      "navbarcolour fixed top-0 right-0 w-64 h-full bg-white p-4 transition-all ease-in-out duration-300" +
                      (navbarOpen ? " translate-x-0" : " translate-x-full")
                    }
                    id="navbar-default"
                    style={{
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                        >
                    <div style={{zIndex: '11' }}>
                <ul className="flex-col p-2 mt-4 mr-5 bg-slate-0 iSpA-dU">
                        <li>
                            <Link to="/" 
                                    onClick={() => setNavbarOpen(false)}
                                    className={((selectd==='home')? "" : "block py-2 pr-4 pl-3 text-white rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300")}>Home</Link><br></br>
                        </li>
                        <li>
                            <Link to="/pilots" 
                                    onClick={() => setNavbarOpen(false)}
                                    className={((selectd==='pilot_projects')? "": "block py-2 pr-4 pl-3 text-white rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300")}>D3s Pilot Projects</Link><br></br>
                        </li>
                        <li>
                            <Link to="/internships" 
                                    onClick={() => setNavbarOpen(false)}
                                    className={((selectd==='join_us')? "":"block py-2 pr-4 pl-3 text-white rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300")}>Join Us</Link><br></br>
                        </li>
                        <li>
                            <Link to="/story" 
                                    onClick={() => setNavbarOpen(false)}
                                    className={((selectd==='about')? "":"block py-2 pr-4 pl-3 text-white rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300")}>About</Link><br></br>
                        </li>
                        </ul>
                        </div>
                </div>
            </div>
            </nav>
            </body>
        </>
    );
}