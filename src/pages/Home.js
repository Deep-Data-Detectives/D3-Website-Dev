import {PulseLoader} from 'react-spinners';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ImageSlider from './ImageSlider';
import Progress from "./section/Progress";
import Offer from "./section/Offer";

import {Typography} from "@mui/material";

const images = ['https://i.ibb.co/4M6zKg7/1.png', "https://i.ibb.co/16fD2F7/2.png", "https://i.ibb.co/JF4QJQ5/3.png", "https://i.ibb.co/Rgyvj39/4.png"];

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (<div id='main' className='main-div'>
        {loading ? (<div className="spinner-container">
            <PulseLoader color="#36D7B7" size={15}/>
        </div>) : (

            <section>
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                    <h1 className="my-colour font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">DEEP
                        DATA DETECTIVES (D3)</h1><br/>
                    <p className="mb-20 my-colour font-extrabold lg:text-xl">Driving Climate Action and Economic
                        Prosperity for All with Data and AI</p>
                    <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                        <span class="text-black-400"><strong>PLAY.</strong> Turn Climate Action into a Fun and Rewarding Game While Building a Sustainable Community</span><br/><br/>
                        <span class="text-sm my-colour text-black-400">Every 10 points = We raise $10 for a D3 Community to teach skills and create jobs where needed the most</span><br/><br/>
                        <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
                            <iframe
                                className="my-element"
                                src="https://drive.google.com/file/d/1T--HhzUOiygIKvUCjSzV2L4M_RedRXSQ/preview"
                                style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0
                                }}
                            />
                        </div>
                        <br/>
                        <div
                            className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <Link to=""
                                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-zap">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                                </svg>
                                &nbsp;PLAY THE GAME
                            </Link>
                        </div>
                        <div>
            <span>MEET DEEP DATA DETECTIVES (D3). 

                We are on a mission to empower people to unleashing the power of Data and AI to accelerate Global Goals 
                <br></br><br></br>
                <div><p></p></div>

            <div style={{height: "200px", zIndex: '0'}}
                 className="flex flex-col mb-4 lg:mb-6 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <ImageSlider images={images} interval={5000}
                                     height="100%" width="100%"/>
                        </div>
            <span>We envision a world where everyone can have a seat at the table to discover the right data and use AI to create jobs, learn new skills and help communities be more resilient.</span>
            </span>
                        </div>
                        <br/><br/><br/><br/>
                        <p className="mb-8 font-sizes">Connecting One [D3] At A Time</p>
                    </div>
                    <table className='tables1'
                           style={{borderCollapse: "collapse", margin: "auto", textAlign: "left"}}>
                        <thead>
                        <tr>
                            <th style={{
                                padding: "10px", verticalAlign: "top", textAlign: "justify"
                            }}>RESILIENCE
                            </th>
                            <th style={{padding: "10px", verticalAlign: "top", textAlign: "justify"}}>BREAK OUT OF
                                POVERTY
                            </th>
                            <th style={{padding: "10px", verticalAlign: "top", textAlign: "justify"}}>ECONOMIC
                                OPPORTUNITY FOR ALL
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style={{
                                padding: "10px", verticalAlign: "top", textAlign: "justify"
                            }}><strong>Help Solve Community
                                Problems</strong><br></br>

                                Capacity Building to mitigate and solve real-world issues while having fun and
                                knowing
                                what matters!
                            </td>
                            <td style={{padding: "10px", verticalAlign: "top", textAlign: "justify"}}><strong>Connect
                                With The Resources You
                                Need</strong><br></br>

                                Technical Assistance for Community Assessments, Asset Mapping and Service Networks.
                            </td>
                            <td style={{padding: "10px", verticalAlign: "top", textAlign: "justify"}}><strong>Beyond
                                The
                                Numbers</strong><br></br>

                                We help you stay relevant, learn new skills. Get the recognition you deserve while
                                earning cash and rewards.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br></br>
                </div>


                <div className='background1 '>
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                        <p className="mb-8 font-sizes">Why Deep Data Detectives (D3)</p>
                        <span>We believe Data and AI can play a role in helping accelerate progress towards the Global Goals for everyone, everywhere.</span><br/><br/>
                        <table className='tables1'
                               style={{borderCollapse: "collapse", margin: "auto", textAlign: "left"}}>
                            <thead>
                            <tr>
                                <th style={{
                                    padding: "10px", verticalAlign: "top", textAlign: "justify"
                                }}>IMPACT
                                </th>
                                <th style={{
                                    padding: "10px", verticalAlign: "top", textAlign: "justify"
                                }}>SCALABILITY & SUSTAINABILITY
                                </th>
                                <th style={{
                                    padding: "10px", verticalAlign: "top", textAlign: "justify"
                                }}>FEASIBILITY
                                </th>
                                <th style={{padding: "10px", verticalAlign: "top", textAlign: "justify"}}>DATA &
                                    RESPONSIBILITY
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style={{padding: "10px", verticalAlign: "top", textAlign: "justify"}}>Grounded
                                    on research that translates
                                    into the field to break through barriers and reduce inequality.


                                </td>
                                <td style={{padding: "10px", verticalAlign: "top", textAlign: "justify"}}>The
                                    Initiative will go beyond our
                                    pilots to share our learnings and best practices with a global community.


                                </td>
                                <td style={{padding: "10px", verticalAlign: "top", textAlign: "justify"}}>Executing
                                    in alignment with an
                                    ecosystem of technical and strategic partners.


                                </td>
                                <td style={{padding: "10px", verticalAlign: "top", textAlign: "justify"}}>As AI
                                    shows great promise, Deep Data
                                    Detectives <Link className="my-colour underline"
                                                     to="/principles">principles</Link> align with human good
                                    intentions and values.


                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Progress/><br></br><br></br>

                <div className="text-center">
                    <h2 className="font-extrabold md:text-3xl lg:text-4xl">OUR IMPACT</h2><br></br>
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
                <br/><br/><br/>

                <Offer/>
                <Typography className='text-center' variant="h5" gutterBottom>
                    <strong>MEET THE TEAM</strong>
                </Typography><br/>
                <table className='tables4 text-center'
                       style={{borderCollapse: "collapse", margin: "auto", textAlign: "middle"}}>
                    <thead>
                    <tr className='rows1'>
                        <th style={{
                            padding: "10px", verticalAlign: "top", textAlign: "justify"
                        }}>C Luisa Bracamonte
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className='rows1'>
                        <td style={{
                            padding: "10px", verticalAlign: "top", textAlign: "justify"
                        }}>
                            Founder & Principal Investigator
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            padding: "10px", verticalAlign: "top", textAlign: "justify"
                        }}>
                            We will display the headshots and links to Linkedin Profiles for successful cohort
                            graduates only
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <Typography className='text-center' variant="h6" gutterBottom>
                    <Link className="my-colour" to="/story"><u>Our Story</u></Link>
                </Typography><br/>
                <Typography className='text-center' variant="h5" gutterBottom>
                    <Link className="my-colour" to="/contact"><u>Speak to our team</u></Link>
                </Typography><br/>
                <Typography className='text-center' variant="h5" gutterBottom>
                    <Link className="my-colour" to="/media"><u>MEDIA Page</u></Link>
                </Typography><br/>
                <Typography className='text-center' variant="h5" gutterBottom>
                    <Link className="my-colour" to=""><u>EVENTS Page</u></Link>
                </Typography><br/>
                <Typography className='text-center' variant="h5" gutterBottom>
                    Ready To Join Forces With US ?
                </Typography>
                <Typography className='text-center' variant="h6" gutterBottom>
                    Help us continue our work. <Link className="my-colour" to=""><u>Donate</u></Link>
                </Typography><br/>
                <Typography className='text-center' variant="h5" gutterBottom>
                    <Link to=""
                          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" className="feather feather-zap">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                        </svg>
                        &nbsp;PLAY THE GAME
                    </Link>
                </Typography><br/><br/>
            </section>)}
    </div>);
}

export default Home;