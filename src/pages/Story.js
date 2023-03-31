import React from "react";
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import ourStory from "./images/High Res Images/Our Story .jpg";
import speaking from "./images/High Res Images/LUISA SPEAKING.jpg";
import d3game from "./images/High Res Images/D3 Game App.png";
import {NavLink} from "react-router-dom";

function Story() {
    return (<Container maxWidth="100%"><br/><br/><br/>
        <Stack direction={"column"} spacing={4}>
            <Grid alignItems={"center"} container>
                <Grid item xs={6}><Box p={2} component="img" src={ourStory} alt="Our Story"/></Grid>
                <Grid item xs={6}>
                    <Typography textAlign={"center"} fontWeight={"bold"} color={"darkblue"} variant="h3" component="h1">OUR
                        STORY</Typography>
                    <Typography pt={20} px={3} fontSize={"x-large"} paragraph>We recognize the rise of AI is
                        undergoing a
                        transformative moment in human history, but also understand the valid concerns about the impact
                        that AI could have in society. Job displacement is a scenario that weighs heavily in our minds,
                        not only with the rise of AI but also the effects of climate change hazards expunging vulnerable
                        communities.</Typography>
                </Grid>
            </Grid>
            <Typography fontSize={"x-large"}>The D3 founder has experienced first hand the power of AI to transform
                people’s lives. 64% of
                jobs in 1940 no longer exist due to automation. If not addressed ethically, AI and the climate crisis
                can create a dark hole for low- and- middle-income jobs in a matter of 5, 10, 20 years from now. We
                don’t know yet how soon we will see the real impact. </Typography>
            <Grid alignItems={"center"} container>
                <Grid item xs={6}><Box p={2} component="img" src={speaking} alt="speaking"/></Grid>
                <Grid item xs={6}>
                    <Typography px={3} fontSize={"x-large"} paragraph>Our founder is determined to help people express
                        their hopes, fears and visions for the future of AI and sustainability. We believe the best way
                        to ensure AI is developed and used in a way that is aligned with human intentions is to give
                        everyone a voice to get a driving seat in the decision process.
                    </Typography>
                </Grid>
            </Grid>
            <Box p={3} component="img" src={d3game} alt="d3game"/>
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
            {/*<Box className="grid-container">*/}
            {/*    <Box>*/}
            {/*        <Typography fontSize={"x-large"} paragraph>*/}
            {/*            DEEP DATA DETECTIVES (D3) was founded with a mission to empower people to have a voice in the*/}
            {/*            development of AI to accelerate Global Goals by 2030.*/}
            {/*        </Typography>*/}
            {/*        <Typography fontSize={"x-large"} paragraph>*/}
            {/*            We recognize the rise of AI is undergoing a transformative moment in human history, but also*/}
            {/*            understand*/}
            {/*            the valid concerns about the impact that AI could have in society. Job displacement is a scenario*/}
            {/*            that*/}
            {/*            weighs heavily in our minds, not only with the rise of AI but also the effects of climate change*/}
            {/*            hazards*/}
            {/*            expunging vulnerable communities.*/}
            {/*        </Typography>*/}
            {/*        <Typography fontSize={"x-large"} paragraph>*/}
            {/*            The D3 founder has experienced first hand the power of AI to transform people’s lives. 64% of jobs*/}
            {/*            in*/}
            {/*            1940 no longer exist due to automation. If not addressed ethically, AI and the climate crisis can*/}
            {/*            create*/}
            {/*            a dark hole for low-and-middle-income jobs in a matter of 5, 10, 20 years from now. We don’t know*/}
            {/*            yet*/}
            {/*            how soon we will see the real impact.*/}
            {/*        </Typography>*/}
            {/*    </Box>*/}
            {/*    <Box>*/}
            {/*        <Typography fontSize={"x-large"} paragraph>*/}
            {/*            Our founder is determined to help people express their hopes, fears and visions for the future of AI*/}
            {/*            and*/}
            {/*            sustainability. We believe the best way to ensure AI is developed and used in a way that is aligned*/}
            {/*            with*/}
            {/*            human intentions is to give everyone a voice to get a driving seat in the decision process.*/}
            {/*        </Typography>*/}
            {/*        <Typography fontSize={"x-large"} paragraph>*/}
            {/*            We are building a community in a gaming platform where people from all walks of life can come*/}
            {/*            together*/}
            {/*            and engage in meaningful conversations, collective action and economic opportunity.*/}
            {/*        </Typography>*/}
            {/*        <Typography fontSize={"x-large"} paragraph>*/}
            {/*            Partnering with grassroots organizations and community groups, we are creating a movement that is*/}
            {/*            truly*/}
            {/*            representative of diverse voices. We are working together to shape the development of AI in a way*/}
            {/*            that*/}
            {/*            reflects their shared values and aspirations for a more sustainable, inclusive and beneficial future*/}
            {/*            for*/}
            {/*            all.*/}
            {/*        </Typography>*/}
            {/*    </Box>*/}

            {/*</Box>*/}


            <Typography fontSize={"x-large"} paragraph>
                Deep Data Detectives (D3) is working at building the gaming community providing value to users,
                volunteers, sponsors and partners. These are our achievements:
            </Typography>
            <Box component={"ul"} fontSize={"x-large"} className="list-disc list-inside">
                <li>Provided three D3 Adventures Grants for three Black Teachers in non-metropolitan areas at risk of
                    wildfires, floating and drought in December 4, 2022.
                </li>
                <li>Collectively, donated 2,150 Volunteer Hours from June 1, 2022 to March 31, 2023 in domains including
                    Data Analytics, Research, UX Design and Software Engineering.
                </li>
                <li>Launched workforce development programs in Winter 2023: D3 Internships, D3 Fellowships, D3 For Good
                    Brigades and “Dollars for Hours” Volunteer Programs.
                </li>
            </Box>
            <div style={{justifyItems: 'center'}} className="grid-container">

                <Typography fontSize={"x-large"}
                            className="underline centre text-blue-700 hover:text-black font-bold"
                            paragraph
                            component={NavLink} to={"/contact"}><br/>
                    SPEAK TO A MEMBER OF OUR TEAM
                </Typography>
            </div>

        </Stack>
    </Container>);
}

export default Story;
