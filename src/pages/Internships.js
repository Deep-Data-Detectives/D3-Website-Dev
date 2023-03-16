import React from "react";
import {Box, Container, Typography} from "@mui/material";
import internships from "./images/internships.png";

const Internships = () => {
    return (<Container id='main' maxWidth="xl main-div">
        <br/><br/><br/>
        <div className="mx-auto max-w-screen-xl text-center"><br/>
            <Typography variant="h4" gutterBottom>
                <strong>Deep Data Detectives (D3) Internships</strong>
            </Typography>
        </div>
        <br/>

        <Box className="my-element mx-auto" component="img" src={internships} alt=""
             sx={{height: '50%', width: '50%'}}/><br/><br/>

        <Typography paragraph>
            Empower Your Career with the D3 Internship Program!
        </Typography>
        <Typography paragraph>
            Join a network of 20 top Community Colleges and Universities as we prepare the next generation of leaders in
            the digital economy to accelerate global goals.
        </Typography>
        <Typography paragraph>
            A place to think on your feet while learning by doing. In partnership with our partner's mentors and
            advisors, you will master hands-on experiences that will equip you with the knowledge, skills, and
            experience needed to succeed in UX Design, UX Urban Design, Ai-driven Game Design, Software Engineering, and
            Data Science. As a D3 Intern, you will be a crucial part of our Workforce Development program, joining a
            dynamic cohort that renews every 30 days. A D3 Intern must be a successful graduate of our Volunteer
            Cohorts.
        </Typography>
        <Typography paragraph>
            Take your skills to the next level with hands-on experience and valuable networking opportunities. As a D3
            Intern, you will be responsible for: </Typography>
        <ul className="list-disc ullist1">
            <li>Commit a minimum of 20-hours per week. This is a 300-hour internship conducted over 15 weeks (20 hours
                per week) that can renew every 30 days and may be completed during fall, spring or summer semesters.
            </li>
            <li>Attend onboarding meetings</li>
            <li>Sign Commitment Letter to Internship Standards</li>
            <li>Actively participate in every daily stand-up and weekly reporting meetings</li>
            <li>Read project materials and documentation as needed</li>
            <li>Complete weekly tasks with focus on quality and timeliness</li>
            <li>Showcase initiative, resourcefulness, creativity, and soft skills</li>
            <li>Determination to be a problem-solver and work well individually and as part of a team</li>
        </ul>
        <br></br>
        <Typography paragraph>
            You will receive ongoing feedback to identify areas of improvement with the option to renew your internship
            on a monthly basis based on performance. A $500 dollar stipend payable monthly to successful interns.
        </Typography>
        <Typography paragraph>
            At the end of your internship, if you meet the <a className="my-colour underline"
                                                              href="https://docs.google.com/document/d/1Rxo0ILMLqOQazHniN1E-WQJQdIbN89N4/edit?usp=share_link&ouid=101937233694036949421&rtpof=true&sd=true">D3
            Internship Standards</a>, you will get:
            <ul className="list-disc ullist1">
                <li>a report for your school.</li>
                <li>placement assistance for freelancing, part-time or full-time jobs.</li>
            </ul><br></br>
        </Typography>
        <Typography paragraph>
            Ready to make a difference? Sign up now to express your interest in the D3 Internship Program and take the
            first step towards a successful career in the digital economy!"
        </Typography>
        <Typography paragraph>
            Register your interest <a className="my-colour underline"
                                      href="https://docs.google.com/forms/d/e/1FAIpQLSfpGeiQ6ahvbswCL4qK2YHfxMxw5f5PbGelEd0JxG-WPFg8xQ/viewform?usp=sf_link">here</a>.
        </Typography>
    </Container>);
}

export default Internships;