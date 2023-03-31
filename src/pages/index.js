import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './Home.js';
import Contact from "./Contact";
import Pilots from "./Pilots";
import Pilots2 from "./Pilots2";
import Pilots3 from "./Pilots3";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Story from "./Story";
import Dollars from "./Dollars";
import Internships from "./Internships";
import Partnerships from "./Partnerships";
import Principles from "./Principles";
import DEI from "./section/DEI";
import Privacy from "./section/Privacy";
import Fellowship from "./Fellowship";
import Media from "./Media";
import Donate from "./Donate";

const Pages = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/pilots" element={<Pilots/>}/>
                <Route path="/pilots2" element={<Pilots2/>}/>
                <Route path="/pilots3" element={<Pilots3/>}/>
                <Route path="/story" element={<Story/>}/>
                <Route path="/dollars" element={<Dollars/>}/>
                <Route path="/internships" element={<Internships/>}/>
                <Route path="/partnerships" element={<Partnerships/>}/>
                <Route path="/principles" element={<Principles/>}/>
                <Route path="/diversity" element={<DEI/>}/>
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="/fellowship" element={<Fellowship/>}/>
                <Route path="/media" element={<Media/>}/>
                <Route path="/donate" element={<Donate/>}/>
            </Routes>
            <Footer/>
        </Router>

    );
};

export default Pages;