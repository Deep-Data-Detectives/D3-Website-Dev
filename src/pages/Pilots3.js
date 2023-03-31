import React from 'react';
import {Link} from 'react-router-dom';
import img from "./images/High Res Images/Are you passionate about sustainable eating.jpg"
import img3 from "./images/High Res Images/RECIPES FOR EQUALITY A NATIONAL EVENT.jpg"
import img2 from "./images/High Res Images/Do you believe that collective action is the key to creating lasting change in food scarcity.jpg"
import UserTable from "./section/UserTable";

const Pilots = () => {
    return (<div className='main-div iSpA-dU4'>

        <section>
            <div id='third' className="py-20 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">

            <h1 className="my-colour font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">PILOT 3: D3 Queens Adventures</h1><br/><br/>

            <div id=''>
            <div>

            <span style={{justifyContent: "center"}}>
            Women play a vital role in society and most often are responsible for caring for their families and homes. Empowering women to take leadership roles in creating climate solutions to make their communities more resilient have a significant impact.  We are looking for women committed to organizing their communities to take collective climate action. Whether you are a student, a professional, or a stay-at-home mom, you have the power to make a difference.<br/>
            </span>
            </div><br/>
            <div className="grid-container">
            <div className="">
                <img className='my-element' src={img} alt="Image 1" style={{ width: '100%' }} />
            </div>
            <div className="">
                <img className='my-element' src={img2} alt="Image 2" style={{ width: '100%' }} />
            </div>
            </div>

            <div><br></br><br></br>

            <h1 className="my-colour font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Then this event is perfect for you!</h1><br/><br/>
            <h1 className="font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-3xl dark:text-white">JOIN US LIVE OR IN-PERSON FROM WHERE YOU ARE</h1>

            <div className="grid-container">
            <div className="">
                <img className='my-element' src={img3} alt="Image 1" style={{ width: '100%' }} />
            </div>
            </div>

            <span><br></br>
            <p> Create your own event in-person and go virtual in <a className="my-colour underline" href = "https://www.tiktok.com/@nxtwavefounders?lang=en">Tiktok</a> #D3sEquityRecipes </p><br/>

           </span><br></br></div><br/>
           <p>Simply share your ideas freely.  What will a Recipe For Equality look like? When would you start?  </p><br/><br></br>
           <p>Gather family and friends at the table. Start the conversation.  How could your ideas promote sustainable eating to eventually mobilize your community to reduce carbon emissions, protect natural resources, and build sustainable practices?  </p><br/><br></br>
           <p>We want to hear about your plans for organizing events, doing community audits, and engaging local leaders.  </p><br/><br></br>
           <p>We will award three winners a prize and the opportunity to turn their ideas into action with support from the Deep Data Detectives (D3) Team.   So, are you ready to make a difference and be a part of the movement to protect our families, communities and the planet?  </p><br/><br></br>

           <div>
           <h2 className="my-colour font-extrabold md:text-2xl lg:text-3xl">SAVE THE DATE<br></br> <br></br> APRIL 22, 2023</h2><br/>
           <h2 className="my-colour font-extrabold md:text-2xl lg:text-3xl">CELEBRATE EARTH DAY WITH THE D3 COMMUNITY!</h2><br/>
           </div>

               </div>

            </div>

        </section>

    </div>);
}

export default Pilots;