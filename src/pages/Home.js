import {PulseLoader} from 'react-spinners';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ImageSlider from './ImageSlider';
import Progress from "./section/Progress";
import Offer from "./section/Offer";
import collage from "./images/High Res Images/Driving Climate Action.jpg";
import d3comp from "./images/High Res Images/And  Economic Opportunity .jpg";
import wildfire from "./images/High Res Images/FOR ALL.jpg";
import floating from "./images/High Res Images/WITH THE HELP OF AI AND DATA.jpg";
import picture1 from "./images/Picture1.png";
import picture2 from "./images/Picture2.png";
import picture3 from "./images/Picture3.png";
import picture4 from "./images/Picture4.png";
import playGame from "./images/High Res Images/PLAY T HE GAME.jpg";
import {HashLink} from 'react-router-hash-link';


import {Typography} from "@mui/material";

// const images = [collage, d3comp];

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (

        <div id='main' className='main-div'>
            {loading ? (<div className="spinner-container">
                <PulseLoader color="#36D7B7" size={15}/>
            </div>) : (

                <section>
                    <ImageSlider
                        leftImage={wildfire}
                        leftText={collage}
                        rightImage={d3comp}
                        rightText={floating}
                    />
                    <img src={playGame} alt={"game"}/>
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                        {/*<h1 className="my-colour font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Driving*/}
                        {/*    Climate Action and Economic*/}
                        {/*    Prosperity for All with Data and AI</h1><br/>*/}

                        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-46">
                            {/*<span class="text-black-400"><strong>PLAY.</strong> Turn Climate Action into a Fun and Rewarding Game While Building a Sustainable Community</span><br/><br/>*/}
                            {/*<span class="text-sm my-colour text-black-400">Every 10 points = We raise $10 for a D3 Community to teach skills and create jobs where needed the most</span><br/><br/>*/}
                            {/*<div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>*/}
                            {/*    <iframe*/}
                            {/*        className="my-element"*/}
                            {/*        src="https://drive.google.com/file/d/1T--HhzUOiygIKvUCjSzV2L4M_RedRXSQ/preview"*/}
                            {/*        style={{*/}
                            {/*            position: 'absolute',*/}
                            {/*            top: 0,*/}
                            {/*            left: 0,*/}
                            {/*            width: '100%',*/}
                            {/*            height: '100%',*/}
                            {/*            border: 0,*/}
                            {/*            zIndex: -1*/}
                            {/*        }}*/}
                            {/*    />*/}
                            {/*</div>*/}

                            <div
                                className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <HashLink className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" to="../pilots#second">              
                                
                                    &nbsp;PLAY THE GAME
                                    </HashLink>
                                </div>
                            <div>
            <span> <br></br>
            <div className="my-colour font-extrabold md:text-3xl lg:text-5xl">MEET<br></br> <u>D</u>EEP <u>D</u>ATA <u>D</u>ETECTIVES (D3).</div><br/><br></br>

                We are on a mission to empower people to unleashing the power of Data and AI to accelerate Global Goals 
                <br></br><br></br>
                <div className="flex justify-center items-center gap-4 rounded-md overflow-visible">

                <img src={picture1} alt="Image 1" className="w-1/4 rounded-md"/>
                <img src={picture2} alt="Image 2" className="w-1/4 rounded-md"/>
                <img src={picture3} alt="Image 3" className="w-1/4 rounded-md"/>
                <img src={picture4} alt="Image 4" className="w-1/4 rounded-md"/>
                </div><br></br>
                <div><p></p></div>

            <span className='iSpA-dU2'>We envision a world where everyone can have a seat at the table to discover the right data and use AI to create jobs, learn new skills and help communities be more resilient.</span>
            </span>
                            </div>
                            <br/><br/><br/><br/>
                            <p className="my-colour font-extrabold md:text-3xl lg:text-4xl">Connecting One [D3] At A Time</p><br></br>
                        </div>
                        <table className='tables1 iSpA-dU2 mx-auto max-w-screen-xl text-center'
                               style={{borderCollapse: "collapse", margin: "auto"}}>
                            <thead>
                            <tr>
                                <th style={{
                                    padding: "10px", verticalAlign: "top"
                                }}>RESILIENCE
                                </th>
                                <th style={{padding: "10px", verticalAlign: "top"}}>BREAK OUT OF
                                    POVERTY
                                </th>
                                <th style={{padding: "10px", verticalAlign: "top"}}>ECONOMIC
                                    OPPORTUNITY FOR ALL
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className=''>
                                <td style={{
                                    padding: "10px", verticalAlign: ""
                                }}><strong>Help Solve Community
                                    Problems</strong><br></br>

                                    Capacity Building to mitigate and solve real-world issues while having fun and
                                    knowing
                                    what matters!
                                </td>
                                <td style={{padding: "10px", verticalAlign: "top"}}><strong>Connect
                                    With The Resources You
                                    Need</strong><br></br>

                                    Technical Assistance for Community Assessments, Asset Mapping and Service Networks.
                                </td>
                                <td style={{padding: "10px", verticalAlign: "top"}}><strong>Beyond
                                    The
                                    Numbers</strong><br></br>

                                    We help you stay relevant, learn new skills. Get the recognition you deserve while
                                    earning cash and rewards.
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <br></br><br/>
                    </div>


                    <div id={"whyD3"} className='navbarcolour text-white'>
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                        <p className="mb-8 font-sizes">Why <u>D</u>eep <u>D</u>ata <u>D</u>etectives (D3)</p>
                        <span className='iSpA-dU2'>We believe Data and AI can play a role in helping accelerate progress towards the Global Goals for everyone, everywhere.</span><br/><br/>
                        <div className="grid-container3">
                            <div className="grid-item3 iSpA-dU5">
                                <h3>IMPACT</h3>
                                Grounded on research that translates into the field to break through barriers and reduce inequality.
                            </div>
                            <div className="grid-item3 iSpA-dU5">
                                <h3>SCALABILITY & SUSTAINABILITY</h3>
                                The Initiative will go beyond our pilots to share our learnings and best practices with a global community.
                            </div>
                            <div className="grid-item3 iSpA-dU5">
                                <h3>FEASIBILITY</h3>
                                Executing in alignment with an ecosystem of technical and strategic partners.
                            </div>
                            <div className="grid-item3 iSpA-dU5">
                                <h3>DATA & RESPONSIBILITY</h3>
                                As AI shows great promise, Deep Data Detectives <Link className="underline text-blue-500 hover:text-black font-bold" to="/principles">principles</Link> align with human good intentions and values.
                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br>
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                        <p className="my-colour font-extrabold md:text-3xl lg:text-4xl">Become a [D3]</p><br></br>
                        <span className=''>Join a global community of eco-warriors accelerating economic opportunity for all.</span>
                        <h3 className="font-extrabold md:text-1xl lg:text-1xl"><br></br> <a className=' underline text-blue-700 hover:text-black font-bold' href='https://docs.google.com/forms/d/e/1FAIpQLSckIXp1ZCrYR-J79on53FF9pAf4iH3sV83z5SE79wYDE34wCg/viewform?usp=sf_link'> Join The Waitlist </a> </h3>


                    <br/><br/>
                    </div>

                    <Progress/><br></br><br></br><br></br><br></br>

                    <div className="text-center">
                        <h2 className="my-colour font-extrabold md:text-3xl lg:text-4xl">OUR IMPACT</h2><br></br>
                        <h2 className="md:text-2xl lg:text-3xl">Be the first to get our full report this Summer</h2>
                        <br></br>

                        <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
                            <iframe
                                className="my-element"
                                src="https://drive.google.com/file/d/1YA50tYCoB-EZQk_wAcjDTmm3fUEGucff/preview"
                                style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0
                                }}
                            />
                        </div>
                        <br/>


                    </div>

                    
                    <br/><br/><br/><br></br>

                    <Offer/>
                    <Typography className="text-center" gutterBottom>
                        <div className='my-colour font-extrabold md:text-3xl lg:text-3xl'>
                        MEET THE TEAM
                        </div>
                    </Typography>
                    <div className="text-center grid-container-center md:text-3xl">
                        <div className="grid-item grid-item-center">
                            <strong>C Luisa Bracamonte</strong>
                            <p className='iSpA-dU5'>Founder & Principal Investigator</p>
                            <p className='iSpA-dU5'>
                                We will display the headshots and links to Linkedin Profiles for
                                successful cohort graduates only
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <Typography className="text-center"
                                gutterBottom>
                                    <div className='md:text-3xl lg:text-2xl'>
                                    Check
                                    <Link className=" ml-2 underline text-blue-700 hover:text-black md:text-3xl lg:text-2xl" to="/story">
                            Our Story
                        </Link>
                                    </div>

                    </Typography><br></br>
                    <Typography className="text-center "
                                gutterBottom>
                        <Link className="underline text-blue-700 hover:text-black md:text-3xl lg:text-2xl" to="/contact">
                            Speak to our team
                        </Link>
                    </Typography><br></br>
                    <Typography className="text-center"
                                gutterBottom>
                        <Link className="underline text-blue-700 hover:text-black md:text-3xl lg:text-2xl" to="/media">
                            MEDIA Page
                        </Link>
                    </Typography><br></br>
                    <Typography className="text-center"
                                gutterBottom>
                        <Link className="underline text-blue-700 hover:text-black md:text-3xl lg:text-2xl" to="">
                            EVENTS Page
                        </Link>
                        
                    </Typography>
                    <br></br><br></br>
                    <Typography className="text-center" gutterBottom>
                        <div className="my-colour font-extrabold md:text-3xl lg:text-3xl">
                    Ready To Join Forces
                    </div>
                    </Typography><br></br>
                    <Typography className="text-center" variant="h6" gutterBottom>
                        Help us continue our work.{" "}
                        <HashLink className="" to="./donate#main">
                            <button
                                style={{
                                    backgroundColor: "orange",
                                    borderRadius: "25px",
                                    padding: "12px 20px",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    color: "black",
                                    border: "none",
                                    boxShadow: "0px 0px 0px rgba(255, 255, 0, 0.7)",
                                    cursor: "pointer",
                                    outline: "none",
                                    transition: "box-shadow 0.1s ease-in-out"
                                }}
                                onMouseEnter={(e) => e.target.style.boxShadow = "0px 0px 25px rgba(255, 255, 0, 0.9)"}
                                onMouseLeave={(e) => e.target.style.boxShadow = "0px 0px 5px rgba(255, 255, 0, 0.7)"}
                            >
                                Donate Today
                            </button>
                        </HashLink>
                        <div></div>
                        <br></br>
                        
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <img
                                src="https://drive.google.com/uc?export=view&id=1_kOT-tlnNT6wDzmXPPV-G4Yw5i_fzkW9"
                                alt="QR Code"
                                width="200"
                                height="200"
                            />
                        </div><br></br>
                        <h3 className="font-extrabold md:text-2xl lg:text-2xl"><br></br> <a className=' underline text-blue-700 hover:text-black font-bold' href='https://docs.google.com/forms/d/e/1FAIpQLSckIXp1ZCrYR-J79on53FF9pAf4iH3sV83z5SE79wYDE34wCg/viewform?usp=sf_link'> Join The Waitlist </a> </h3>

                    </Typography><br></br>
                    

                </section>)}
        </div>);
}

export default Home;