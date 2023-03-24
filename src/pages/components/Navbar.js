import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import '../../main.css';
import logo from "../images/DEEP DATA DETECTIVES (D3) INITIATIVE LOGO_REVISED 02052023.png"
import {Backdrop, Box, Slide, SpeedDial, SpeedDialAction} from "@mui/material";
import {Close, Menu} from "@mui/icons-material";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';


export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = useState([]);
    const selectd = props.selected;
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const menuItems = ["How We Do It.", "Impact Areas.", "What We Offer.", "Media.", "Stay in Touch."];
    return (
        <>
            <Backdrop sx={{zIndex: 99, bgcolor: "darkblue"}} transitionDuration={500} TransitionComponent={Slide}
                      direction={"left"} open={open}/>
            <Box display={"block"} ml={"2rem"} mt={"1rem"} component={Link} to="/" className={"my-colour"}>
                <Box display={"inline-block"} component={"img"} height={"4.5rem"} borderRadius={"10px"}
                     src={logo}/>
                <span className="ml-2 my-colour self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    <u>D</u>EEP <u>D</u>ATA <u>D</u>ETECTIVES
                </span>
            </Box>
            <SpeedDial
                onClick={() => setOpen(!open)}
                open={open}
                FabProps={open ? {
                    sx: {
                        bgcolor: "blue", '&:hover': {
                            bgcolor: 'blueviolet',
                        }
                    }
                } : {
                    sx: {
                        bgcolor: "darkblue", '&:hover': {
                            bgcolor: 'blue',
                        }
                    }
                }
                }
                direction={"down"}
                ariaLabel="Menu button"
                sx={{position: 'fixed', top: "1rem", right: "2rem"}}
                icon={open ? <Close/> : <Menu/>}
            >
                {menuItems.map((menu) => {
                    return <SpeedDialAction icon={<HorizontalRuleIcon/>} sx={{marginY: "1.5rem"}}
                                            tooltipOpen tooltipTitle={menu} onClick={() => navigate("/contact")}/>
                })}
                {/*<SpeedDialAction tooltipOpen tooltipTitle={"How We Do It."}/>*/}
                {/*<SpeedDialAction tooltipOpen tooltipTitle={"Impact Areas."}/>*/}
                {/*<SpeedDialAction tooltipOpen tooltipTitle={"What We Offer."}/>*/}
                {/*<SpeedDialAction tooltipOpen tooltipTitle={"Media."}/>*/}
                {/*<SpeedDialAction tooltipOpen tooltipTitle={"Stay in Touch."}/>*/}
            </SpeedDial>
            {/*<body style={{zIndex: '2' }} class="sticky top-0 antialiased text-slate-500 dark:text-slate-400 dark:bg-slate-900 mt-0">*/}
            {/*<nav className="navbar bg-gray-300 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-90/[0.06] bg-white/70 supports-backdrop-blur:bg-white/95 dark:bg-transparent hover:bg-gray-50">*/}
            {/*    <div className="container flex flex-wrap justify-between items-center mx-auto max-w-8xl">*/}
            {/*        <Link to="/" className="flex items-center"><img style={{height: '45px', marginLeft: '10px'}} className="new-element" src={logo}/>*/}
            {/*            <span className="ml-5 my-colour self-center text-xl font-semibold whitespace-nowrap dark:text-white"> DEEP DATA DETECTIVES</span>*/}
            {/*        </Link>*/}
            {/*        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setNavbarOpen(!navbarOpen)}>*/}
            {/*        <span className="sr-only">Open main menu</span>*/}
            {/*        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>*/}
            {/*        </button>*/}
            {/*        <div className={*/}
            {/*                "justify-between items-center   w-full md:flex md:w-auto md:order-1" +*/}
            {/*                (!navbarOpen ? "" : " hidden")*/}
            {/*            } id="navbar-default">*/}
            {/*        <ul className={"flex flex-col p-2 mt-4 mr-5 bg-slate-0 md:flex-row md:space-x-8 md:mt-0"}>*/}
            {/*                <li>*/}
            {/*                    <Link to="/" className={((selectd==='home')? "block my-colour py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block my-colour py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Home</Link>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <Link to="/pilots" className={((selectd==='pilot_projects')? "block my-colour py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block my-colour py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>D3s Pilot Projects</Link>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <Link to="/internships" className={((selectd==='join_us')? "block my-colour py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block my-colour py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Join Us</Link>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <Link to="/story" className={((selectd==='about')? "block my-colour py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block my-colour py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black   md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>About</Link>*/}
            {/*                </li>*/}
            {/*                </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    </nav>*/}
            {/*    </body>*/}
        </>
    );
}