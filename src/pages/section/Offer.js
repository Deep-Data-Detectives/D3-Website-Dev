import * as React from "react";
import {Box, Grid, Link, Stack, Typography} from "@mui/material";
import dfh from "../images/High Res Images/DOLLARS FOR HOURS.jpg";
import internships from "../images/High Res Images/Internship Program.jpg";
import fellowship from "../images/High Res Images/Fellowship Program.jpg";
import d3good from "../images/High Res Images/D3 For Good Brigades.png";
import d3reward from "../images/High Res Images/D3 Game Rewards and Cash.jpg";
import entrepreneurship from "../images/High Res Images/Entrepreneurship .png";

const Offer = () => {
    return (<Stack py={5} id={"offer"} direction={"column"} alignItems={"center"} spacing={4}>
        <span className="font-extrabold md:text-3xl lg:text-4xl my-colour">What We Offer</span>
        <Typography p={1} bgcolor={"lightgray"} variant={"h4"} component={"h2"}>Workforce Development</Typography>
        <Grid px={2} direction={"row"} container>
            <Grid p={1} xs={4} item>
                <Box component={"img"} src={dfh} alt={"dfh"}/></Grid>
            <Grid p={1} xs={4} item>
                <Box component={"img"} src={internships} alt={"internships"}/></Grid>
            <Grid p={1} xs={4} item>
                <Box component={"img"} src={fellowship} alt={"fellowship"}/></Grid>
        </Grid>
        <Typography bgcolor={"lightgray"} variant={"h4"} component={"h2"}>Job Creation</Typography>
        <Grid px={2} direction={"row"} container>
            <Grid p={1} xs={6} item>
                <Box component={"img"} src={d3good} alt={"d3good"}/></Grid>
            <Grid p={1} xs={6} item>
                <Box minWidth={"100%"} component={"img"} src={d3reward} alt={"d3reward"}/></Grid>
        </Grid>
        <Typography p={1} bgcolor={"lightgray"} variant={"h4"} component={"h2"}>Entrepreneurship</Typography>
        <Box px={3} minWidth={"100%"} component={"img"} src={entrepreneurship} alt={"entrepreneurship"}/>
        <Typography p={1} bgcolor={"lightgray"} variant={"h4"} component={"h2"}>Partnerships</Typography>
        <Link className="text-center underline text-blue-700 hover:text-black font-bold" href="/partnerships">
            EXPLORE MORE
        </Link>
    </Stack>);
    // return (<div id={"offer"} className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-8">
    //     <span className="font-extrabold md:text-3xl lg:text-4xl">What We Offer</span><br/><br/>
    //     <div className="grid-container ">
    //         {/* Workforce Development */}
    //         <div className="grid-item">
    //             <strong><h4>Workforce Development</h4></strong><br></br>
    //             <div className="text-left iSpA-dU5">
    //                 <strong><h5>“Dollars for Hours”</h5></strong>  <h5> (Volunteer Program)</h5>
    //                 <HashLink className="my-colour underline" to="../dollars#main">
    //                     Register your interest
    //                 </HashLink>
    //                 <ul className="ullist1">
    //                     <li>Game Design</li>
    //                     <li>Software Development</li>
    //                     <li>Data Analytics</li>
    //                     <li>Artificial Intelligence</li>
    //                     <li>Community Building</li>
    //                 </ul>
    //                 <br></br>
    //                 <strong><h5>Internships</h5></strong>
    //                 <HashLink className="my-colour underline" to="../internships#main">
    //                     Register your interest
    //                 </HashLink>
    //                 <ul className="ullist1">
    //                     <li>Software Engineering</li>
    //                     <li>Game Design</li>
    //                     <li>UX Urban Design</li>
    //                     <li>Green Architecture</li>
    //                     <li>Data Analytics</li>
    //                     <li>Sustainability</li>
    //                 </ul>
    //                 <br></br>
    //                 <strong><h5>Fellowships</h5></strong>
    //                 <Link id='second' className="my-colour underline" to="/fellowship">
    //                     Register your interest
    //                 </Link>
    //                 <ul className="ullist1">
    //                     <li>Research</li>
    //                     <li>Embedding Equity in Digital Communities</li>
    //                     <li>Sustainability</li>
    //                 </ul>
    //             </div>
    //         </div>
    //
    //         <div className="grid-item">
    //             <strong><h4>Job Creation</h4></strong><br></br>
    //             <div className="text-left iSpA-dU5">
    //                 <strong><h5>D3 For Good Brigade</h5></strong>
    //                 Join a community of expert technologists, designers, researchers and analysts
    //                 committed to using our skills to make a positive impact on the world to accelerate Global
    //                 Goals.
    //                 <ul>
    //                     <li>Artificial Intelligence</li>
    //                     <li>Software Development</li>
    //                     <li>Sustainability</li>
    //                 </ul><br></br>
    //                 <h5>
    //                     <strong><HashLink className="my-colour underline" to='../pilots#second'>
    //                         Play [D3s] Everywhere! Game
    //                     </HashLink></strong>
    //                 </h5>
    //                 <ul className="ullist1">
    //                     <li>Paid Micro-Jobs</li>
    //                     <li>Rewards</li>
    //                     <li>Mini-Grants</li>
    //                 </ul>
    //             </div>
    //         </div>
    //         {/* Entrepreneurship */}
    //         <div className="grid-item">
    //             <strong><h4>Entrepreneurship</h4></strong><br/>
    //             <div className="text-left iSpA-dU5">
    //                 <div>
    //
    //                     D3s living in energy communities (vulnerable to climate hazards) know what kinds of businesses
    //                     work there, and they want
    //                     a shot at inclusive entrepreneurship.
    //                 </div>
    //                 <br></br>
    //                 <strong><h5>Programs:</h5></strong>
    //                 <ul className="ullist1">
    //                     <li>Pitch Contests</li>
    //                     <li>Business Accelerators</li>
    //                     <li>Pop-up Co-Working Spaces</li>
    //                 </ul>
    //                 <br></br>
    //                 <strong><h5>Partnerships</h5></strong>
    //                 <HashLink className="my-colour underline" to='../partnerships#main'>
    //                     EXPLORE MORE
    //                 </HashLink>
    //             </div>
    //         </div>
    //     </div>
    //
    //     <br/>
    //
    // </div>)
}

export default Offer;