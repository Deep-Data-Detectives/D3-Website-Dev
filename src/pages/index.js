import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './Home.js';
import Contact from "./Contact";
import Pilots from "./Pilots";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Story from "./Story";
import Dollars from "./Dollars";
import Internships from "./Internships";
import Partnerships from "./Partnerships";
import Principles from "./Principles";
import Fellowship from "./Fellowship";

const Pages = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/pilots" element={<Pilots/>}/>
                <Route path="/story" element={<Story/>}/>
                <Route path="/dollars" element={<Dollars/>}/>
                <Route path="/internships" element={<Internships/>}/>
                <Route path="/partnerships" element={<Partnerships/>}/>
                <Route path="/principles" element={<Principles/>}/>
                <Route path="/fellowship" element={<Fellowship/>}/>
            </Routes>
            <Footer/>
        </Router>

    );
};

export default Pages;