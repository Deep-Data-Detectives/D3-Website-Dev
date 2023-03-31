import React from "react";
import {Box, Container, Typography} from "@mui/material";
import partnerships from "./images/D3 Initiative Timeline Infographic.png";
import startus from "./images/Startus UP.png";
import ruralrise from "./images/Rural Rise Logo.png";
import climatechangeai from "./images/Climate Change AI.png";
import cmratool from "./images/CMRA TOOL.png";
import esri from "./images/Esri logo.png";
import coolclimatenetwork from "./images/Cool Climate Network.png";
import globalcitizen from "./images/GlobalCitizen Logo.png";
import arclogo from "./images/ARC Logo.png";

const Partnerships = () => {
    return (<Container id='main' maxWidth="xl main-div">
        <br/><br/><br/>
        <div className="mx-auto max-w-screen-xl text-center"><br/>
            <Typography color={"darkblue"} variant="h3" gutterBottom>
                <strong>Advancing your corporation or foundation's philanthropic and social impact goals</strong>
            </Typography>
            <Typography variant="h6" gutterBottom>
                <strong>Join the trending Revolution of Partnership Opportunities!</strong>
            </Typography>
        </div>
        <br/>

        <table className='tables3' style={{borderCollapse: "collapse", margin: "auto", textAlign: "left"}}>
            <thead>
            <tr>
                <th style={{padding: "10px", verticalAlign: "top"}}></th>
                <th style={{padding: "10px", verticalAlign: "top"}}></th>
            </tr>
            </thead>
            <tbody>
            <tr className="rows1">
                <td className="rows1" style={{padding: "10px", verticalAlign: "top"}}>
                    <Box className="my-element mx-auto" component="img" src={partnerships} alt=""
                         sx={{height: '100%', width: '100%'}}/><br/><br/>

                </td>
                <td style={{padding: "10px", verticalAlign: "top"}}>
                    <p style={{fontSize: '19px'}}>Deep Data Detectives (D3) offers a wide range of partnership
                        opportunities designed to reach new heights in your industry.
                    </p><br/><br/>
                    <p style={{fontSize: '19px'}}>Our global ecosystem of experts works tirelessly and interconnected to
                        provide you with the latest and greatest tools, resources and support to help you succeed.

                    </p><br/><br/>
                    <p style={{fontSize: '19px'}}> Whether you're a small business owner, entrepreneur, or multinational
                        corporation, we are honored to offer a platform that creates, curates, and scales relevant
                        projects and solutions across communities around the world. Through our <u>Deep Data Detectives
                            (D3) Global Network</u>, we have the local connections and understanding of community needs
                        and untapped grassroots groups to quickly develop and support meaningful and far-reaching
                        customer service relationship (CSR) and social impact projects that can be scaled across any
                        country, region, or the world.
                    </p><br/><br/>
                    <p style={{fontSize: '19px'}}> Deep Data Detectives (D3) is building the world's largest
                        open-source, AI-driven marketplace for environmental gaming products and services. We connect
                        untapped individuals and groups, mission-aligned charities, libraries and churches right where
                        they are with funding, donations and rewards.

                        Thanks to our innovative game, <u>[D3s] Everywhere!</u> and implementation approach to make
                        climate change more inclusive, individuals can be more resilient and communities more
                        sustainable.
                    </p><br/><br/>
                    <p style={{fontSize: '19px'}}>We are on a mission to add value to Global Goals by addressing
                        workforce and youth development, sustaining a circular economy with new skills and gig-jobs to
                        increase access to economic opportunity by helping our community of [D3s] manage city emergency
                        mitigation and preparedness at a granular level - where many have not been able to succeed
                        before.
                    </p>
                </td>
            </tr>
            </tbody>
        </table>
        <br/><br/>
        <div className="mx-auto max-w-screen-xl text-center"><br/>
            <Typography variant="h6" gutterBottom>
                So, why wait? Join our growing community of partners today and start reaping the benefits of growth,
                success and mutual support. Together, we can change the game and drive progress. Sign up and see the
                difference for yourself!
            </Typography><br/>
            <Typography variant="h6" gutterBottom>
                <strong><a className="my-colour underline" target={'_blank'}
                           href="https://opencollective.com/deepdatadetectives">Partner
                    with Us</a></strong>
            </Typography><br/>
            <Typography variant="h6" gutterBottom>
                D3 GLOBAL NETWORK <br></br>
                Expanding Capabilities in partnership with:

                <table className='tables1' style={{borderCollapse: "collapse", margin: "auto", textAlign: "left"}}>
                    <thead>
                    <tr>
                        <th style={{padding: "10px", verticalAlign: "top"}}></th>
                        <th style={{padding: "10px", verticalAlign: "top"}}></th>
                        <th style={{padding: "10px", verticalAlign: "top"}}></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{padding: "", verticalAlign: "top"}}>
                            <Box className="my-element mx-auto" component="img" src={climatechangeai} alt=""
                                 sx={{height: '48%', width: '48%'}}/><br/>

                        </td>
                        <td style={{padding: "", verticalAlign: "top"}}>
                            <Box className="my-element mx-auto" component="img" src={ruralrise} alt=""
                                 sx={{height: '60%', width: '60%'}}/><br/>

                        </td>
                        <td style={{padding: "", verticalAlign: "top"}}>
                            <Box className="my-element mx-auto" component="img" src={startus} alt=""
                                 sx={{height: '100%', width: '100%'}}/><br/>

                        </td>
                        <td style={{padding: "", verticalAlign: "top"}}>
                            <Box className="my-element mx-auto" component="img" src={cmratool} alt=""
                                 sx={{height: '45%', width: '45%'}}/><br/>

                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: "", verticalAlign: "top"}}>
                            <Box className="my-element mx-auto" component="img" src={coolclimatenetwork} alt=""
                                 sx={{height: '100%', width: '100%'}}/><br/>

                        </td>
                        <td style={{padding: "", verticalAlign: "top"}}>
                            <Box className="my-element mx-auto" component="img" src={esri} alt=""
                                 sx={{height: '55%', width: '55%'}}/><br/>

                        </td>
                        <td style={{padding: "", verticalAlign: "top"}}>
                            <Box className="my-element mx-auto" component="img" src={globalcitizen} alt=""
                                 sx={{height: '65%', width: '65%'}}/><br/>

                        </td>
                        <td style={{padding: "", verticalAlign: "top"}}>
                            <Box className="my-element mx-auto" component="img" src={arclogo} alt=""
                                 sx={{height: '85%', width: '85%'}}/><br/>

                        </td>
                    </tr>
                    </tbody>
                </table>
            </Typography>
        </div>
        <br/>
    </Container>);
}

export default Partnerships;