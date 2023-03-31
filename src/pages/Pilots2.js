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

                <h1 className="my-colour font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Welcome to [D3s] Everywhere! Game</h1><br/><br/>
                
                <div id='second'>

                <h2 className="font-extrabold md:text-3xl lg:text-4xl"></h2><br></br>
                                <img className="flex my-element mx-auto" src={pilot1} maxw="850" height="550"/><br></br><br></br>
                <div style={{textAlign: "justify"}}>

                <span>
                                        Our mission is to empower individuals and communities to take action towards sustainability and make communities more resilient. Our mantra is “If you can see it, you can live it!.” <br></br>

                        With the [D3s] Everywhere! game, you can make a real difference in society,  while having fun, learning new skills and earning micro-payments and rewards.<br></br><br></br>

                        <img className="flex my-element mx-auto" src={pilot2} maxw="850" height="550"/><br></br><br></br>


                        D3 Players can adopt a simple or sophisticated role from “collecting plastic bags in their local beach to organizing a solar farm in a rural district.”  An easy and fun flow prompts D3s into fascinating directions. D3s sort of pierce through the arcs of a big mission and adventure while learning new skills, or into a sort of more simulation that expands beyond virtual interactions.<br></br><br></br>

                        <img className="flex my-element mx-auto" src={pilot3} maxw="850" height="550"/><br></br><br></br>

                        D3 Players can adopt a simple or sophisticated role from “collecting plastic bags in their local beach to organizing a solar farm in a rural district.”  An easy and fun flow prompts D3s into fascinating directions. D3s sort of pierce through the arcs of a big mission and adventure while learning new skills, or into a sort of more simulation that expands beyond virtual interactions.<br></br><br></br>

                        <strong>Become a Deep Data Detective [D3] and join a community of global eco-warriors</strong> <br></br><br></br>
                        
                        Connect with like-minded individuals from around the world, who are passionate about protecting the planet and learn from each other.

                        Join the movement today and take a step towards a more sustainable future. Play [D3s] Everywhere! and start getting paid and earning rewards for making a difference.<br></br><br></br>
                        </span><br></br></div>


                    <div>
                    <h3 className="font-extrabold md:text-1xl lg:text-1xl">Ready to join our research team?<br></br><br></br> <a className=' underline text-blue-700 hover:text-black font-bold' href='https://docs.google.com/forms/d/e/1FAIpQLSckIXp1ZCrYR-J79on53FF9pAf4iH3sV83z5SE79wYDE34wCg/viewform?usp=sf_link' target="_blank" rel="noopener noreferrer"> Register your interest. </a> </h3><br></br>
                                    <div>
                                    {/* <UserTable/> */}
                                    </div>
                                        </div>
                                        </div><br id='third'></br><br/><br/><br/><br/>

            </div>

        </section>

    </div>);
}

export default Pilots;