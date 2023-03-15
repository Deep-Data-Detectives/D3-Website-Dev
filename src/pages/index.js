import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './Home.js';
import Contact from "./Contact";
import Pilots from "./Pilots";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Story from "./Story";

const Pages = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/pilots" element={<Pilots/>}/>
                <Route path="/story" element={<Story/>}/>
            </Routes>
            <Footer/>
        </Router>

    );
};

export default Pages;