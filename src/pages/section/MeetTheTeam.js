import * as React from "react";
import {Stack, Typography} from "@mui/material";

const MeetTheTeam = () => {
    return (<Stack my={4} direction={"column"} spacing={5} alignItems={"center"}>
        <Typography fontWeight={"bold"}  variant={"h2"} component={"h2"}>MEET THE TEAM</Typography>
    </Stack>);
}

export default MeetTheTeam;