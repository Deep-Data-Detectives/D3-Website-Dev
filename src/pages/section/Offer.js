import * as React from "react";
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const Offer = () => {
    return (<div id={"offer"} className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-8">
        <span className="font-extrabold md:text-3xl lg:text-4xl">What We Offer</span><br/><br/>
        <div className="grid-container ">
            {/* Workforce Development */}
            <div className="grid-item">
                <strong><h4>Workforce Development</h4></strong><br></br>
                <div className="text-left iSpA-dU5">
                <strong><h5>“Dollars for Hours”</h5></strong>  <h5> (Volunteer Program)</h5>
                <HashLink className="my-colour underline" to="../dollars#main">
                Register your interest
                </HashLink>
                <ul className="ullist1">
                <li>Game Design</li>
                <li>Software Development</li>
                <li>Data Analytics</li>
                <li>Artificial Intelligence</li>
                <li>Community Building</li>
                </ul><br></br>
                <strong><h5>Internships</h5></strong>
                <HashLink className="my-colour underline" to="../internships#main">
                Register your interest
                </HashLink>
                <ul className="ullist1">
                <li>Software Engineering</li>
                <li>Game Design</li>
                <li>UX Urban Design</li>
                <li>Green Architecture</li>
                <li>Data Analytics</li>
                <li>Sustainability</li>
                </ul><br></br>
                <strong><h5>Fellowships</h5></strong>
                <Link id='second' className="my-colour underline" to="/fellowship">
                Register your interest
                </Link>
                <ul className="ullist1">
                <li>Research</li>
                <li>Embedding Equity in Digital Communities</li>
                <li>Sustainability</li>
                </ul>
            </div>
            </div>

            <div className="grid-item">
                <strong><h4>Job Creation</h4></strong><br></br>
                <div className="text-left iSpA-dU5">
                <strong><h5>D3 For Good Brigade</h5></strong>
                Join a community of expert technologists, designers, researchers and analysts
                committed to using our skills to make a positive impact on the world to accelerate Global
                Goals.
                <ul>
                <li>Artificial Intelligence</li>
                <li>Software Development</li>
                <li>Sustainability</li>
                </ul><br></br>
                <h5>
                <strong><HashLink className="my-colour underline" to='../pilots#second'>
                    Play [D3s] Everywhere! Game
                </HashLink></strong>
                </h5>
                <ul className="ullist1">
                <li>Paid Micro-Jobs</li>
                <li>Rewards</li>
                <li>Mini-Grants</li>
                </ul>
                </div>
            </div>
            {/* Entrepreneurship */}
            <div className="grid-item">
                <strong><h4>Entrepreneurship</h4></strong><br/>
                <div className="text-left iSpA-dU5">
                    <div>

                D3s living in energy communities (vulnerable to climate hazards) know what kinds of businesses work there, and they want
                a shot at inclusive entrepreneurship.
                </div><br></br>
                <strong><h5>Programs:</h5></strong>
                <ul className="ullist1">
                <li>Pitch Contests</li>
                <li>Business Accelerators</li>
                <li>Pop-up Co-Working Spaces</li>
                </ul><br></br>
                <strong><h5>Partnerships</h5></strong>
                <HashLink className="my-colour underline" to='../partnerships#main'>
                EXPLORE MORE
                </HashLink>
            </div>
            </div>
            </div>

        <br/>

    </div>)
}

export default Offer;