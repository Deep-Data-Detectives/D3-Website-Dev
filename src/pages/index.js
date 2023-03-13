import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './Home.js';
import Contact from "./Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Pages = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </Router>

    );
};

export default Pages;