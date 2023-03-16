import React from "react";
import {Box, Container, Typography} from "@mui/material";
import dollars from "./images/dollars.png";
import {NavLink} from "react-router-dom";

const Dollars = () => {
    return (<Container id = 'main' maxWidth="xl main-div">
        <br/><br/><br/>
        <div className="mx-auto max-w-screen-xl text-center"><br/>
            <Typography variant="h4" gutterBottom>
                <strong>“Dollars For Hours” Program</strong>
            </Typography>
        </div><br/>
        <Box className="my-element mx-auto" component="img" src={dollars} alt="" sx={{height: '50%', width: '50%'}}/><br/><br/>

        <Typography paragraph>
        Empower your talents for the greater good and join our “Dollars for Hours” Program.  Turn your passion for social impact into real change.  Give anywhere from 80 to 180 hours of your time each month and be rewarded for it.

        Be part of a community of socially conscious individuals and corporations committed to making a positive impact on the world.  Take an active role in creating a better future by contributing to the achievement of Global Goals.

        We welcome career professionals in the following industries:
        </Typography>
        <ul className="list-disc ullist1">
            <li>Artificial Intelligence</li>
            <li>UX Design</li>
            <li>Game Design</li>
            <li>UX Urban Design</li>
            <li>Software Development</li>
            <li>Data Analytics</li>
            <li>Market Research and Marketing</li>
        </ul><br></br>
        <Typography paragraph>
        <span><a className="my-colour underline" href = "https://docs.google.com/document/d/1hP8OuwY3RKzSN3fDAU96QtK5Xfpsczew/edit?usp=sharing&ouid=101937233694036949421&rtpof=true&sd=true">Learn more about the program's eligibility and evaluation standards</a>, and take the first step towards making an impact.</span><br/><br/>

        <span><a className="my-colour underline" href = "https://docs.google.com/forms/d/e/1FAIpQLSf_VtoCINthNRFyrE80lfSCxz3AC-tdQHOEyhR0-Cc3MZa2GQ/viewform?usp=sf_link">Apply now</a> and turn your hours into dollars for a better world!</span>
        
        </Typography>
    </Container>);
}

export default Dollars;