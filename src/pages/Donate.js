import { height } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import picture1 from "./images/Picture1.png";
import picture2 from "./images/Picture2.png";
import picture3 from "./images/Picture3.png";
import picture4 from "./images/Picture4.png";
import donation from "./images/donation.png";
import openc from "./images/openc.png";

const Donate = () => {
  return (
    <div id = 'main' className="py-20 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h1 className="my-colour font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Donate</h1><br/>
      <p>
        We are thrilled to share a unique opportunity to support our mission to
        accelerate Global Goals using Artificial Intelligence to empower people
        to break out poverty and the inequality in climate change.
      </p><br></br>
      <div className="flex justify-center items-center gap-4 rounded-md overflow-visible">

        <img src = {picture1} alt="Image 1" className="w-1/5 rounded-md" />
        <img src= {picture2} alt="Image 2" className="w-1/5 rounded-md" />
        <img src= {picture3} alt="Image 3" className="w-1/5 rounded-md" />
        <img src= {picture4} alt="Image 4" className="w-1/5 rounded-md" />
        </div><br></br>
        <div><p></p></div>
        <p>The world is facing numerous complex challenges, from the global pandemic to climate crisis, we believe that AI (if used ethically) has the power to play a significant role in addressing these challenges and making a positive impact in society.</p><br></br>
          <div className="flex gridContainer5 mx-auto">

                <div className="darkBlueBox iSpA-dU2">
                  <p>
                    Your support will help us develop cutting-edge workforce and
                    entrepreneurship training tools while generating economic
                    opportunities to sustain the effects of climate change hazards.
                    Furthermore, with your support, we can drive progress in Data
                    Analytics and Generative Ai to advance research and development in
                    vulnerable communities. We can work together to create solutions
                    that mitigate the climate change crisis and preserve our cities for
                    future generations.
                  </p>
                </div>
                <div className="lightGreyBox iSpA-dU2">
                  <p>
                    By partnering with us, you will have the opportunity to be at the
                    forefront of innovation and drive progress in industries that have
                    the potential to shape our future, especially the future of untapped
                    individuals and communities.
                  </p>
                </div>
          </div><br></br>
        <p>Our backers, donors and sponsors are mission-aligned and are committed to making a positive impact in the world. We would love to hear from you and continue the conversation. Together, we can make a real difference and help to accelerate global goals.  Let's work together to build a brighter tomorrow for all, everywhere!</p>
        <br/><br></br>
        <div className="">
                            <a  href="https://www.paypal.com/donate?hosted_button_id=K4KPD2FK2HSMS">
                            <strong className='underline text-blue-700 hover:text-black font-bold font-bold md:text-3xl lg:text-3xl'>BECOME A DONOR</strong>
                            </a><br></br><br></br>


                            <div className="flex flex-row justify-center">

                                <div className="grid-item2 iSpA-dU2 w-full h-full">
                                  <p>
                                    <img src={donation}
                                    style={{maxHeight:'500px'}}
                                    ></img>
                                  </p>
                                </div>
                                <div className="grid-item2 iSpA-dU2 w-full h-full justify-center">
                                  <p>
                                  Our backers, donors and sponsors are mission-aligned and are committed to making a positive impact in the world. We would love to hear from you and continue the conversation. Together, we can make a real difference and help to accelerate global goals.
                                  </p>
                                </div>
                                </div><br></br><br></br>

                            {/* <p className='iSpA-dU5'>
                            <a  href="https://www.paypal.com/donate?hosted_button_id=K4KPD2FK2HSMS">
                            <button
                                    onMouseEnter={(e) => e.target.style.boxShadow = "0px 0px 25px rgba(255, 255, 0, 0.9)"}
                                onMouseLeave={(e) => e.target.style.boxShadow = "0px 0px 5px rgba(255, 255, 0, 0.3)"}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="60"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                backgroundColor: '#FFB428',
                                                color: '#0070BA',
                                                borderRadius: '30px',
                                                textAlign: 'center',
                                                padding: '10px 26px',
                                                maxWidth: '300px',
                                                stroke: 'none',
                                                fontSize: '10px',
                                                // fontWeight: 'bold',
                                                transition: "box-shadow 0.1s ease-in-out"
                                                }} 
                                    viewBox="-.02682843 0 123.63183286 30.17842908" width="2500"><path d="m46.211 6.749h-6.839a.95.95 0 0 0 -.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zm.789 6.405c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zm19.654-.079h-3.275a.57.57 0 0 0 
                                    -.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0 -.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zm22.007-6.374h-3.291a.954.954 
                                    0 0 0 -.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0 -.912-.678h-3.234a.57.57 0 0 0 -.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0 -.468-.895z" fill="#253b80"/><path d="m94.992 6.749h-6.84a.95.95 0 0 0 -.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 
                                    .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zm19.653-.079h-3.273a.567.567 0 0 0 -.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0 -.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zm8.426-12.219-2.807 17.858a.569.569 0 0 0 
                                    .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0 -.562-.659h-3.16a.571.571 0 0 0 -.562.482z" fill="#179bd7"/><path d="m7.266 29.154.523-3.322-1.165-.027h-5.563l3.866-24.513a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1 -1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0 -.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1 
                                    -.096.035z" fill="#253b80"/><path d="m23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545h-2.752c-.661 0-1.218.48-1.321 1.132l-1.409 8.936-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 0 0 -1.336-1.03z" fill="#179bd7"/><path d="m21.754 7.151a9.757 9.757 0 0 0 -1.203-.267 15.284 15.284 0 0 0 -2.426-.177h-7.352a1.172 1.172 0 0 0 -1.159.992l-1.564 9.906-.045.289a1.336 1.336 0 0 1 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0 -1.017-.429 9.045 9.045 0 0 0 -.277-.087z" 
                                    fill="#222d65"/><path d="m9.614 7.699a1.169 1.169 0 0 1 1.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 0 1 1.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392-1.399-1.593-3.924-2.275-7.155-2.275h-9.38c-.66 0-1.223.48-1.325 1.133l-3.907 24.765a.806.806 0 0 0 .795.932h5.791l1.454-9.225z" fill="#253b80"/></svg>
                                </button>
                                </a></p><br></br> */}

                        

                          <strong className='my-colour font-bold md:text-3xl lg:text-3xl'>BECOME A SPONSOR</strong>
                          <div className="flex items-center gridContainer2 space-y-5 mx-auto">
                            <div className="pl-20 iSpA-dU2">
                            <a  href="https://opencollective.com/deepdatadetectives">
                                <p>
                                    <img src={openc} style={{ maxHeight: '250px' }}></img>
                                </p>
                                </a>
                            </div>
                            <div className="iSpA-dU2 items-center pr-20 ">
                                <p>
                                    Let's work together to build a brighter tomorrow for all, everywhere!
                                </p>
                            </div>
                        </div>
                        <br></br>
                        </div>
    </div>

            
  );
};

export default Donate;
