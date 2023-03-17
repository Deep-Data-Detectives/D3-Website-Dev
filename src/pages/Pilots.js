import React from 'react';
import {Link} from 'react-router-dom';
import img from "./images/Pilot 1 Assessment.png"
import img2 from "./images/Congratulations Winners IN THE D3 Adventures Pilot 1.png"
import UserTable from "./section/UserTable";

const Pilots = () => {
    return (<div className='main-div'>

        <section>
            <div id='first' className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                <h1 className="my-colour font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">D3s PILOT PROJECTS</h1><br/><br/><br/>
                <div>
                <h2 className="font-extrabold md:text-3xl lg:text-4xl">D3 Adventures</h2><br/>
                <div style={{textAlign: "left"}}>

                <div style={{textAlign: "justify"}}>
                    “D3 Adventures” is the first pilot of a 3-part series that started in October 2022 and aims at empowering underrepresented voices. 

                    We conducted a mini-grant class immersion challenge that registered 67 teachers from 23 cities. Three (3) winners from Lexington, KY, Creshaw, Los Angeles, CA and Atlanta, GA each received a $500 grant.  In addition, we surveyed and interviewed all participants to gauge the pilot’s efficacy.

                    The results show that our target audience found the D3 datasets valuable in planning their immersions, and the mini-grants were crucial in removing barriers imposed by school districts policies.  Participants reported positive changes in behavior, with a newfound motivation to embed equity in their immersions for all living creatures and take action towards a more sustainable neighborhood.  

                    This first pilot was successful in raising inclusive awareness about climate change, promoting pro-environmental behavior, and teaching the use of datasets and visualizations, despite unfavorable weather conditions in some cities.
                    </div><br></br>
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
                    </div>
                    <Link  id='second' className="my-colour underline" to="/contact">REQUEST MORE INFORMATION </Link>
                    <br/><br/><br/><br/><br/><br/>




                
                
                <div>

                <h2 className="font-extrabold md:text-3xl lg:text-4xl">Welcome to [D3s] Everywhere! Game</h2><br></br>
                <h3 className="font-extrabold md:text-1xl lg:text-1xl">Gaming with Purpose: Play, Learn, and Make a Positive Impact!</h3><br></br>

                <div style={{textAlign: "justify"}}>

                <span>
                                        Our mission is to empower individuals and communities to take action towards sustainability and make communities more resilient. Our mantra is “If you can see it, you can live it!.” <br></br>

                        With the [D3s] Everywhere! game, you can make a real difference in society,  while having fun, learning new skills and earning micro-payments and rewards.<br></br>

                        <strong>Play and learn:</strong> Discover how to live a more sustainable lifestyle and learn about the latest technology and trends in environmental protection through engaging and interactive gameplay. It is so easy to open your eyes and see what people, places and new experiences can be when you align your intentions with technology.<br></br>

                        <strong>Earn and make a difference:</strong> Break the cycle of intergenerational poverty. Completing various tasks and missions, you can get paid for your missions and earn rewards and contribute to real-world environmental projects. Your actions will have a tangible impact on the planet and your wallet, help us reach our sustainability goals and provide economic opportunities for all.<br></br>

                        D3 Players can adopt a simple or sophisticated role from “collecting plastic bags in their local beach to organizing a solar farm in a rural district.”  An easy and fun flow prompts D3s into fascinating directions. D3s sort of pierce through the arcs of a big mission and adventure while learning new skills, or into a sort of more simulation that expands beyond virtual interactions.<br></br>

                        <strong>Become a Deep Data Detective [D3] and join a community of global eco-warriors:</strong> Connect with like-minded individuals from around the world, who are passionate about protecting the planet and learn from each other. <br></br>

                        Join the movement today and take a step towards a more sustainable future. Play [D3s] Everywhere! and start getting paid and earning rewards for making a difference.<br></br><br></br>
                        </span><br></br></div>


                    <div>
                    <h3 className="font-extrabold md:text-1xl lg:text-1xl">Ready to join our research team? Register your interest.</h3><br></br>
                                    <div>
                                    <UserTable/>
                                    </div>
                                        </div>
                                        </div><br id='third'></br><br/><br/><br/><br/>

        <div>

            <h2 className="font-extrabold md:text-3xl lg:text-4xl">D3 Queens Adventures</h2><br></br>
            <div style={{textAlign: "left"}}>

            <span>
            Women play a vital role in society and most often are responsible for caring for their families and homes. Empowering women to take leadership roles in creating climate solutions to make their communities more resilient have a significant impact.<br/>
            </span>
            </div><br/>
            

            <div>
            <span>
            Are you passionate about protecting our planet and combating climate change to create economic opportunities? <br/><br/>
            Do you believe that collective action is the key to creating lasting change?  <br/><br/>
            Then this game is perfect for you!  <br/><br/>
           </span><br></br></div><br/>

           <div>
           <h2 className="font-extrabold md:text-1xl lg:text-2xl">SAVE THE DATE: APRIL 22, 2023</h2><br/>
           <h2 className="font-extrabold md:text-1xl lg:text-2xl">PLAY THE GAME AND CELEBRATE EARTH DAY WITH US!</h2><br/>

           <p className="my-colour"> SHOWCASE YOUR IDEAS TO IMPROVE HEALTH AND WELL-BEING, CREATING JOBS AND SAVING MONEY TO CREATE A RESILIENT FAMILY AND SOCIETY. </p><br/>
           <p> Join the National Event: Recipes for Equity. </p><br/>
           <p> Create your own event in-person and go virtual in <a className="my-colour underline" href = "https://www.tiktok.com/@nxtwavefounders?lang=en">Tiktok</a> #D3sEquityRecipes </p><br/>
           <p> Join the National Event: Recipes for Equity. </p><br/>
           </div>
           

           <div style={{textAlign: "justify"}}>
           <p> We are looking for women who are committed to organizing their communities to take collective climate action. Whether you are a student, a professional, or a stay-at-home mom, you have the power to make a difference.</p><br/>
           <p> Simply share your ideas for mobilizing your community to reduce carbon emissions, protect natural resources, and build sustainable practices while promoting sustainable, healthy meals. We want to hear about your plans for organizing events, doing community audits, and engaging local leaders. </p><br/>
           <p> We will award three winners a prize and the opportunity to turn their ideas into action with support from our team. So, if you're ready to make a difference and be a part of the movement to protect our planet, play the game! </p><br/>

           </div><br/><br/>

           <h2 className="font-extrabold md:text-1xl lg:text-2xl">PLAY THE GAME ON APRIL 22, 2023</h2><br/>
           <h2 className="font-extrabold md:text-1xl lg:text-2xl">CELEBRATE EARTH DAY WITH THE D3 COMMUNITY!</h2><br/>

               </div>

            </div>

        </section>

    </div>);
}

export default Pilots;