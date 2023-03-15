import * as React from "react";
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img from "../images/img.png"
import img2 from "../images/Instagram WINNER post - 34.png"
import img3 from "../images/live.JPG"
import img4 from "../images/embrace equity for women.JPG"



const Progress = () => {
    return (<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-8">
        <span className="text-lg">OUR PROGRESS</span>
        <p className="mb-8 font-sizes">Maximizing Impact: Connecting Good Intentions with AI and Data-Driven
            Insights</p>
        <span>Breaking New Ground Into Research With Three Pilots</span><br></br>
        <img className="my-element mx-auto" src={img} width="750" height="450"/><br></br><br></br>
        <table className='tables2'
                           style={{borderCollapse: "collapse", margin: "auto", textAlign: "left"}}>
                        <thead>
                        <tr>
                            <th style={{padding: "10px", verticalAlign: "top"}}><strong>Pilot 1: D3 Adventures </strong> </th>
                            <th style={{padding: "10px", verticalAlign: "top"}}><strong>Pilot 2: [D3s] Everywhere!</strong></th>
                            <th style={{padding: "10px", verticalAlign: "top"}}><strong>Pilot 3: D3 Queens Adventures</strong></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="rows1">
                            <td style={{padding: "10px", verticalAlign: "top"}}><img className="image_size my-element" src={img2}/><br></br>
(D3) Adventures is a Prize Winner in the Designing for Digital Thriving Challenge hosted by @ideo @riotgames @FairPlayA @CooneyCenter @hopelab @scefdn.

                            </td>
                            <td style={{padding: "10px", verticalAlign: "top"}}>If you can see it, you can live it!<br></br><br></br><img className="image_size2 my-element" src={img3}/>



                            </td>
                            <td style={{padding: "10px", verticalAlign: "top"}}>Embrace Equity! <br></br><br></br><img className="image_size3 my-element" src={img4}/>


                            </td>
                        </tr>
                        <tr>
                            <td style={{padding: "10px", verticalAlign: "top"}}>We celebrate small wins and recognize our D3s with rewards and economic opportunities.<br/> 

                            <HashLink className="my-colour underline" to='../pilots#first'>Learn about</HashLink> our Impact and Assessment.

                            </td>
                            <td style={{padding: "10px", verticalAlign: "top"}}>Inspiring storytelling feeds D3 players the knowledge to understand how they fit in their roles presenting opportunities for user education in an immersive game-play. <HashLink className="my-colour underline" to='../pilots#second'>Learn more</HashLink>



                            </td>
                            <td style={{padding: "10px", verticalAlign: "top"}}>Every woman deserves a voice and the opportunity to be heard, respected, and valued. Join our contest dedicated for women to share their stories, ideas, and perspectives. <HashLink className="my-colour underline" to='../pilots#third'>Learn more</HashLink>


                            </td>
                        </tr>
                        </tbody>
                    </table><br/> 
                    <span>Deep Data Detectives (D3) is a flagship initiative of the <a className="my-colour underline" href = "https://nxtwavefounders.com/">NxtWave</a>, a 501 (c)(3) organization working on global economic mobility.</span><br/>

    </div>)
}

export default Progress;