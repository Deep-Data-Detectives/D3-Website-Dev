import * as React from 'react';
import {Container, Link, Stack, Typography} from "@mui/material";

const Media = () => {
    return (<Container className='py-20' maxWidth={"xl"}>
        <Stack my={4} direction={"column"} spacing={5} alignItems={"center"}>
            <Typography variant="h3" component="h2">
                Press Releases
            </Typography>
            <Typography variant={"body1"} component={"p"}>
                There will be fundraising campaign announcement</Typography>
            <Typography variant="h3" component="h2">
                Media Coverage
            </Typography>
            <Typography variant={"body1"} component={"p"}>
                <Link
                    href={"https://venturebeat.com/games/riot-games-ideo-design-challenge-winners-designing-digital-thriving/"}>VentureBeat</Link> on
                D3 Adventures, a flagship initiative of nonprofit, Nxt Wave</Typography>
            <Typography variant="h3" component="h2">
                Blog
            </Typography>
            <Typography variant={"body1"} component={"p"}>
                There will be fundraising campaign announcement</Typography>
        </Stack>
    </Container>);
}

export default Media;