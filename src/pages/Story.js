import React from "react";
import {Box, Container, Typography} from "@mui/material";
import ourStory from "./images/Our Story _D3 Website.jpg";
import {NavLink} from "react-router-dom";

function Story() {
    return (<Container maxWidth="100%">
        <div className="mx-auto max-w-screen-xl text-center my-colour iSpA-dU2"><br/><br/><br/>
            <Typography fontWeight={"bold"} color={"darkblue"} variant="h3" component="h1">OUR
                STORY</Typography>
        </div>
        <br/>
        <Box className="my-element mx-auto" component="img" src={ourStory} alt="Our Story"
             sx={{width: '98%'}}/><br/><br/>

        <Box className="grid-container">
            <Box>
                <Typography fontSize={"x-large"}  paragraph>
                    DEEP DATA DETECTIVES (D3) was founded with a mission to empower people to have a voice in the
                    development of AI to accelerate Global Goals by 2030.
                </Typography>
                <Typography fontSize={"x-large"}  paragraph>
                    We recognize the rise of AI is undergoing a transformative moment in human history, but also
                    understand
                    the valid concerns about the impact that AI could have in society. Job displacement is a scenario
                    that
                    weighs heavily in our minds, not only with the rise of AI but also the effects of climate change
                    hazards
                    expunging vulnerable communities.
                </Typography>
                <Typography fontSize={"x-large"} paragraph>
                    The D3 founder has experienced first hand the power of AI to transform people’s lives. 64% of jobs
                    in
                    1940 no longer exist due to automation. If not addressed ethically, AI and the climate crisis can
                    create
                    a dark hole for low-and-middle-income jobs in a matter of 5, 10, 20 years from now. We don’t know
                    yet
                    how soon we will see the real impact.
                </Typography>
            </Box>
            <Box>

                <Typography fontSize={"x-large"} paragraph>
                    Our founder is determined to help people express their hopes, fears and visions for the future of AI
                    and
                    sustainability. We believe the best way to ensure AI is developed and used in a way that is aligned
                    with
                    human intentions is to give everyone a voice to get a driving seat in the decision process.
                </Typography>
                <Typography fontSize={"x-large"} paragraph>
                    We are building a community in a gaming platform where people from all walks of life can come
                    together
                    and engage in meaningful conversations, collective action and economic opportunity.
                </Typography>
                <Typography fontSize={"x-large"} paragraph>
                    Partnering with grassroots organizations and community groups, we are creating a movement that is
                    truly
                    representative of diverse voices. We are working together to shape the development of AI in a way
                    that
                    reflects their shared values and aspirations for a more sustainable, inclusive and beneficial future
                    for
                    all.
                </Typography>
            </Box>

        </Box>

        <div className="grid-item2 iSpA-dU2">

            <Typography fontSize={"x-large"} paragraph>
                Deep Data Detectives (D3) is working at building the gaming community providing value to users,
                volunteers, sponsors and partners. These are our achievements:
            </Typography>
            <Box component={"ul"} fontSize={"x-large"} className="list-disc list-inside iSpA-dU6">
                <li>Three D3 Adventures Grants since inception on October 1, 2022 for three Black Teachers in
                    non-metropolitan areas at risk of wildfires, floating and drought.
                </li>
                <li>1,645 D3 Volunteer Hours donated from June 1 to February 1, 2022 in domains including Data
                    Analytics,
                    Research, UX Design and Software Engineering.
                </li>
                <li>Launching workforce development programs: D3 Internships, D3 Fellowships, D3 For Good Brigades and
                    “Dollars for Hours” Volunteer Programs.
                </li>
                <li>A game prototype for usability testing scheduled on March 31, 2023 and April 22, 2023.</li>
            </Box>
            <div style={{justifyItems: 'center'}} className="grid-container">

                <Typography fontSize={"x-large"} className="underline centre text-blue-700 hover:text-black font-bold" paragraph
                            component={NavLink} to={"/contact"}><br/>
                    SPEAK TO A MEMBER OF OUR TEAM
                </Typography>
            </div>
        </div>
    </Container>);
}

export default Story;
