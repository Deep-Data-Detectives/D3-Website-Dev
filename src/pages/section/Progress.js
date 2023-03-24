import * as React from "react";
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img from "../images/img.png"
import img2 from "../images/Instagram WINNER post - 34.png"
import img3 from "../images/live.JPG"
import img4 from "../images/embrace equity for women.JPG"



const Progress = () => {
    return (<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-8">
        <span className="mb-8 font-sizes">OUR PROGRESS</span><br/><br/>
        <p className="text-lg iSpA-dU4">Maximizing Impact: Connecting Good Intentions with AI and Data-Driven
            Insights</p><br/>
        <span>Breaking New Ground Into Research With Three Pilots</span><br></br><br/>
        <img className="my-element mx-auto" src={img} width="750" height="450"/><br></br><br></br><br></br>
        <div className="grid-container ">
            <div className="grid-item iSpA-dU2">
            <strong> <h3>Pilot 1: D3 Adventures</h3></strong><br></br>
                <img className="my-element" src={img2} alt="D3 Adventures" /><br/>
                <p className="iSpA-dU2" style={{justifyContent:"center"}}>
                (D3) Adventures is a Prize Winner in the Designing for Digital Thriving
                Challenge hosted by @ideo @riotgames @FairPlayA @CooneyCenter @hopelab
                @scefdn.
                </p><br/>
                <HashLink className="my-colour underline iSpA-dU2" to="../pilots#first">
                Learn about
                </HashLink >{" "}
                our Impact and Assessment.
            </div>
            <div className="grid-item iSpA-dU2">
                <strong> <h3>Pilot 2: [D3s] Everywhere!</h3></strong><br></br>
                <p>If you can see it, you can live it!</p><br></br>
                <img className="my-element" src={img3} alt="[D3s] Everywhere!" />
                <p><br/>
                Inspiring storytelling feeds D3 players the knowledge to understand how
                they fit in their roles presenting opportunities for user education in an
                immersive game-play.{" "}
                <HashLink className="my-colour underline" to="../pilots#second"><br></br>
                    Learn more
                </HashLink>
                </p>
            </div>
            <div className="grid-item iSpA-dU2">
            <strong><h3>Pilot 3: D3 Queens Adventures</h3></strong><br></br>
                <p>Embrace Equity!</p><br></br>
                <img className="my-element" src={img4} alt="D3 Queens Adventures" /><br/>
                <p>
                Every woman deserves a voice and the opportunity to be heard, respected,
                and valued. Join our contest dedicated for women to share their stories,
                ideas, and perspectives.{" "}
                <HashLink className="my-colour underline" to="../pilots#third">
                    Learn more
                </HashLink>
                </p>
            </div>
            </div>

                    <span className="iSpA-dU2">Deep Data Detectives (D3) is a flagship initiative of the <a className="my-colour underline" href = "https://nxtwavefounders.com/">NxtWave</a>, a 501 (c)(3) organization working on global economic mobility.</span><br/>

    </div>)
}

export default Progress;