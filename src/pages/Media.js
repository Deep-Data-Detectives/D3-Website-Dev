import * as React from 'react';
import {Box, Container, Grid, Link, Stack, Typography} from "@mui/material";
import ins from "./images/Instagram WINNER post - 34.png";

const Media = () => {
    return (<Container className='py-20' maxWidth={"xl"}>
        <Stack my={4} direction={"column"} spacing={5}>
            <Typography textAlign={"center"} color={"darkblue"} variant="h3" gutterBottom>
                <strong>Media</strong>
            </Typography>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box p={2} component={"img"} src={ins} alt={"ins"}/>
                </Grid>
                <Grid sx={{display: "flex"}} alignItems={"center"} item xs={12} md={6}>
                    <Box p={2} fontSize={"xx-large"}>
                        <Link
                            target={'_blank'}
                            href={"https://venturebeat.com/games/riot-games-ideo-design-challenge-winners-designing-digital-thriving/"}>VentureBeat</Link><br/>
                        - “Riot Games, IDEO crown winners of inclusive design challenge”</Box>
                </Grid>
            </Grid>
            <Box fontSize={"x-large"}>
            <Typography fontSize={"x-large"} fontWeight={"bold"}>Media Inquiries:</Typography><br/>
            <Typography fontSize={"x-large"}>Luisa Bracamonte</Typography>
            <Link type={"email"} href={"mailto:hello@nxtwavefounders.com"}>hello@nxtwavefounders.com</Link>
            </Box>
            {/*<Typography variant="h3" component="h2">*/}
            {/*    Press Releases*/}
            {/*</Typography>*/}
            {/*<Typography variant={"body1"} component={"p"}>*/}
            {/*    There will be fundraising campaign announcement</Typography>*/}
            {/*<Typography variant="h3" component="h2">*/}
            {/*    Media Coverage*/}
            {/*</Typography>*/}
            {/*<Typography variant={"body1"} component={"p"}>*/}
            {/*    <Link*/}
            {/*        target={'_blank'}*/}
            {/*        href={"https://venturebeat.com/games/riot-games-ideo-design-challenge-winners-designing-digital-thriving/"}>VentureBeat</Link> on*/}
            {/*    D3 Adventures, a flagship initiative of nonprofit, Nxt Wave</Typography>*/}
            {/*<Typography variant="h3" component="h2">*/}
            {/*    Blog*/}
            {/*</Typography>*/}
            {/*<Typography variant={"body1"} component={"p"}>*/}
            {/*    There will be fundraising campaign announcement</Typography>*/}
        </Stack>
    </Container>);
}

export default Media;