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
            <div id='third' className="py-20 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">

            <h1 className="my-colour font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">D3 Queens Adventures</h1><br/><br/>

            <div id=''>
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