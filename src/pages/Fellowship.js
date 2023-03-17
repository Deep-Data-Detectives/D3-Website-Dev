import React from "react";
import {
    Box,
    Container,
    Link,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from "@mui/material";
import img from "./images/Fellowship.jpg"

const Fellowship = () => {
    return (<Container maxWidth={"xl"}>
        <Stack my={4} direction={"column"} spacing={5} alignItems={"center"}>
            <Box className="my-element mx-auto" component="img" src={img} alt="D3 Fellowship"/>
            <Typography variant="h3" component="h1">
                DEEP DATA DETECTIVES (D3) FELLOWSHIP
            </Typography>

            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>WHAT IS THE FELLOWSHIP?<br/>
                                A paid, 7-month long, full-time professional development program designed to promote and
                                support untapped UX Designers, Graphic Designers, Illustrators, Data Scientists and
                                Software Engineers.
                            </TableCell>
                            <TableCell>BENEFITS<br/>
                                The Fellow receives a full-time salary, a professional development budget, mentorship
                                opportunities, and a flexible work schedule.
                            </TableCell>
                            <TableCell>COMMITMENT<br/>
                                In addition to a regular work schedule, Fellows will need to allocate 3­–4-hour training
                                each month to support the knowledge and skills to embed equity as a driven practice.
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>PROGRAM<br/>
                                Equitable Community of Practice
                                UX Urban Design
                            </TableCell>
                            <TableCell>WHY APPLY?<br/>
                                The Fellowship is an opportunity for social climate change professionals who want to
                                build an equity-driven sustainability practice to develop skills, relationships, and
                                experiences that will support their work.
                            </TableCell>
                            <TableCell>READY TO APPLY?<br/>
                                Applications Accepted from January 20 to March 20, 2023<br/>


                                Fellowship Duration:
                                April 1 to December 15, 2023


                                BECOME A FELLOW<br/>
                                <Link
                                    href={"https://docs.google.com/forms/d/e/1FAIpQLScEGZnbJRCLFVRF6BA1QwRWM7Sqd8g3rBMRcOiQK6L6M5V7lg/viewform?usp=sf_link"}>APPLY</Link>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    </Container>);
}

export default Fellowship;