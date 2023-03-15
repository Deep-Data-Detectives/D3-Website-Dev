import * as React from "react";
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img from "../images/img.png"
import img2 from "../images/Instagram WINNER post - 34.png"
import img3 from "../images/live.JPG"
import img4 from "../images/embrace equity for women.JPG"
import { List } from 'semantic-ui-react'

const Offer = () => {
    return (<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-8">
        <span className="font-extrabold md:text-3xl lg:text-4xl">What We Offer</span><br/><br/>
        <table className='tables2'
                           style={{borderCollapse: "collapse", margin: "auto", textAlign: "left"}}>
                        <thead>
                        <tr>
                            <th style={{padding: "10px", verticalAlign: "top"}}><strong>Workforce Development</strong> </th>
                            <th style={{padding: "10px", verticalAlign: "top"}}><strong>Job Creation</strong></th>
                            <th style={{padding: "10px", verticalAlign: "top"}}><strong>Entrepreneurship</strong></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="rows1">
                            <td style={{padding: "10px", verticalAlign: "top"}}><strong>“Dollars for Hours”</strong><br/>(Volunteer Program)<br/> Register your interest<br/><br/> 
                            <ul className="ullist1">
                                <li>Game Design</li>
                                <li>Software Development</li>
                                <li>Data Analytics</li>
                                <li>Artificial Intelligence</li>
                                <li>Community Building</li>
                                </ul>
                            </td>
                            <td style={{padding: "10px", verticalAlign: "top"}}><strong>D3 For Good Brigade</strong><br/>Join a community of expert technologists, designers, researchers and analysts committed to using our skills to make a positive impact on the world to accelerate Global Goals.<br/><br/>
                            <ul className="ullist1">
                                <li>Artificial Intelligence</li>
                                <li>Software Development</li>
                                <li>Sustainability</li>
                                </ul>

                            </td>
                            <td style={{padding: "10px", verticalAlign: "top"}}>D3s living in energy communities (vulnerable to climate hazards) know what kinds of businesses work there, and they want a shot at inclusive entrepreneurship.<br/><br/>
                            <strong>Programs:</strong><br/><br/> 

                            <ul className="ullist1" >
                                <li>Pitch Contests</li>
                                <li>Business Accelerators</li>
                                <li>Pop-up Co-Working Spaces</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="rows1">
                            <td style={{padding: "10px", verticalAlign: "top"}}><strong>Internships</strong><br/> 

                            <Link  id='second' className="my-colour underline" to="/contact">Register your interest</Link><br/><br/>
                            <ul className="ullist1">
                                <li>Software Engineering</li>
                                <li>Game Design</li>
                                <li>UX Urban Design</li>
                                <li>Green Architecture</li>
                                <li>Data Analytics</li>
                                <li>Sustainability</li>

                                </ul>
                            </td>
                            <td style={{padding: "10px", verticalAlign: "top"}}><strong><HashLink className="my-colour underline" to='../pilots#second'>Play [D3s] Everywhere! Game</HashLink></strong><br/><br/>

                            <ul className="ullist1">
                                <li>Paid Micro-Jobs</li>
                                <li>Rewards</li>
                                <li>Mini-Grants</li>

                                </ul>

                            </td>
                            <td style={{padding: "10px", verticalAlign: "top"}}>Every woman deserves a voice and the opportunity to be heard, respected, and valued. Join our contest dedicated for women to share their stories, ideas, and perspectives. <HashLink className="my-colour underline" to='../pilots#third'>Learn more</HashLink>
                            </td>
                        </tr>
                        <tr>
                            <td style={{padding: "10px", verticalAlign: "top"}}><strong>Fellowships</strong><br/> 

                            <Link  id='second' className="my-colour underline" to="/contact">Register your interest</Link><br/><br/>
                            <ul className="ullist1">
                                <li>Research</li>
                                <li>Embedding Equity in Digital Communities</li>
                                <li>Sustainability</li>
                                </ul>
                            </td>
                            </tr>
                        </tbody>
                    </table><br/> 

    </div>)
}

export default Offer;