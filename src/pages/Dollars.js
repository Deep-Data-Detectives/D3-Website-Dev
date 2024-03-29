import React from "react";
import {Box, Container, Typography} from "@mui/material";
import dollars from "./images/dollars.png";

const Dollars = () => {
    return (<Container id='main' maxWidth={"100%"}>
        <br/><br/><br/>
        <div className="mx-auto text-center">
            <br/>
            <Typography color={"darkblue"} variant="h3" gutterBottom>
                <strong>“Dollars For Hours” Program</strong>
            </Typography>
        </div>
        <br/>
        <Box minWidth={"100%"} className="my-element mx-auto" component="img" src={dollars} alt="dollars"/><br/><br/>

        <Typography fontSize={"x-large"} paragraph>
            Empower your talents for the greater good and join our “Dollars for Hours” Program. Turn your passion for
            social impact into real change. Give anywhere from 80 to 180 hours of your time each month and be rewarded
            for it.

            Be part of a community of socially conscious individuals and corporations committed to making a positive
            impact on the world. Take an active role in creating a better future by contributing to the achievement of
            Global Goals.

            We welcome career professionals in the following industries:
        </Typography>
        <Typography fontSize={"x-large"} component={"ul"} className="list-disc ullist1">
            <li className="ml-5">Artificial Intelligence</li>
            <li className="ml-5"> UX Design</li>
            <li className="ml-5">Game Design</li>
            <li className="ml-5">UX Urban Design</li>
            <li className="ml-5">Software Development</li>
            <li className="ml-5">Data Analytics</li>
            <li className="ml-5">Market Research and Marketing</li>
        </Typography>
        <br></br>
        <Typography fontSize={"x-large"} paragraph>
            <span><a target={'_blank'} className="my-colour underline"
                     href="https://docs.google.com/document/d/1hP8OuwY3RKzSN3fDAU96QtK5Xfpsczew/edit?usp=sharing&ouid=101937233694036949421&rtpof=true&sd=true">Learn more about the program's eligibility and evaluation standards</a>, and take the first step towards making an impact.</span><br/><br/>

            <span><a target={'_blank'} className="my-colour underline"
                     href="https://docs.google.com/forms/d/e/1FAIpQLSf_VtoCINthNRFyrE80lfSCxz3AC-tdQHOEyhR0-Cc3MZa2GQ/viewform?usp=sf_link">Apply now</a> and turn your hours into dollars for a better world!</span>

        </Typography>
    </Container>);
}

export default Dollars;