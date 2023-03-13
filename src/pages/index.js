import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Home.js';

const Pages = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element= {<Home/>} />
            </Routes>
        </Router>
    );
};

export default Pages;