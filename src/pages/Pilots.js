import React from 'react';
import {Link} from 'react-router-dom';
import img from "./images/Pilot 1 Assessment.png"
import pilot1 from "./images/pilots1.jpg"
import pilot2 from "./images/pilots2.jpg"
import pilot3 from "./images/pilot3.jpg"
import img2 from "./images/Congratulations Winners IN THE D3 Adventures Pilot 1.png"
import UserTable from "./section/UserTable";

const Pilots = () => {
    return (<div className='main-div'>

        <section>
            <div id='first' className="py-20 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">

                <h1 className="my-colour font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">PILOT 1: D3 Adventures</h1><br/><br/>
                <div>
                <div style={{textAlign: ""}}>

                <div style={{textAlign: ""}}>
                    <p>“D3 Adventures” is the first pilot of a 3-part series that started in October 2022 to empower underrepresented voices. </p><br></br><br></br>
                    <p>“We conducted a mini-grant class immersion challenge that registered 67 teachers from 23 cities. Three (3) winners from Lexington, KY, Creshaw, Los Angeles, CA and Atlanta, GA each received a $500 grant.  In addition, we surveyed and interviewed all participants to gauge the pilot’s efficacy. </p><br></br><br></br>
                    <p>“The results show that our target audience found the D3 datasets valuable in planning their immersions, and the mini-grants were crucial in removing barriers imposed by school districts policies.  Participants reported positive changes in behavior, with a newfound motivation to embed equity in their immersions for all living creatures and take action towards a more sustainable neighborhood.   </p><br></br><br></br>
                    <p>“This first pilot was successful in raising inclusive awareness about climate change, promoting pro-environmental behavior, and teaching the use of datasets and visualizations, despite unfavorable weather conditions in some cities.   </p><br></br><br></br>


                    </div>
                    <table className='tables1'
                           style={{borderCollapse: "collapse", margin: "auto", textAlign: "left"}}>
                        <thead>
                        <tr>
                            <th style={{padding: "10px", verticalAlign: "top"}}></th>
                            <th style={{padding: "10px", verticalAlign: "top"}}></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style={{padding: "10px", verticalAlign: "top"}}>
                                <img className="my-element mx-auto" src={img} width="450" height="250"/><br></br><br></br>

                            </td>
                            <td style={{padding: "10px", verticalAlign: "top"}}>
                                <img className="my-element mx-auto" src={img2} width="550" height="250"/><br></br><br></br>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

                    <div className="grid-container">
                        <div className="">
                        <h3 className="font-bold text-center"><b>Use of Inclusive Language</b></h3><br></br>
                        <p className="grid-item3 text-left"><strong>95%</strong>
                        preferred to be called “untapped” rather than “underrepresented,” “marginalized,” or “vulnerable.”</p><br></br><br></br>
                        <p className="grid-item3 text-left">The data highlights the importance of using language that is empowering and respectful to our applicants and the communities we serve.  It is a reminder to use inclusive language that accurately reflects the diverse experience and perspectives of individuals and groups we engage with.</p>

                        </div>
                        <div className="">
                        <h3 className="font-bold text-center"><b>High Interest in a safer Interactive Digital Tool for Climate Action</b></h3><br></br>
                        <p className="grid-item3 text-left"><strong>85%</strong>
                        expressed interest in using a safer interactive digital tool to engage community stakeholders in collective climate action. This indicates a clear demand for technology-based solutions that allow communities to easily self-organize to create economic opportunities for themselves.”</p><br></br><br></br>
                        <p className="grid-item3 text-left">This information highlights the need for innovative and equitable, accessible tools that facilitate user engagement.  By meeting this demand, we can empower untapped individuals and communities to take meaningful steps to a more sustainable future.</p>
                        </div>
                    </div>
                    
                    </div><br></br><br></br>
                    <Link  className="my-colour underline" to="/contact">REQUEST MORE INFORMATION </Link>
                    <br/><br/><br/><br/><br/><br/>
            </div>

        </section>

    </div>);
}

export default Pilots;