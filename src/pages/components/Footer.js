import {Box, Grid, Stack, Typography} from "@mui/material";
import d3Logo from "../images/DEEP DATA DETECTIVES (D3) INITIATIVE LOGO_REVISED 02052023.png";
import nxtLogo from "../images/NXTWAVE LOGO_UPDATED 02092023.png";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export default function Footer() {

    return (<>
            <Box
                component="footer" className="new-element"
                sx={{
                    py: 5, px: 5, mt: '10px', backgroundColor: '#000099'
                }}
            >
                <Stack direction={"column"} spacing={2}>
                    <Grid container direction={"row"}>
                        <Grid item xs={6} md={6}>
                            <Box display={"flex"} flexDirection={"row"} alignItems={"left"}
                                 justifyContent={"flex-start"} height={"100%"}>
                                <Box my={1} mx={1} component={Link} to="/">
                                    <img className="new-element" src={d3Logo} width="70" alt="d3Logo"/>
                                </Box>
                                <Box my={1} component={"a"} href="https://nxtwavefounders.com/" target={'_blank'}>
                                    <img className="new-element" src={nxtLogo} width="70" alt="nxtLogo"/>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid xs={3} item>
                            <Box display={"flex"} justifyContent={"flex-end"} alignItems={"right"} height={"100%"}
                                 component={"nav"}>
                                <Stack component={"ul"} direction={"column"}>
                                    <Typography color={"white"} component={"li"}>
                                        <HashLink className="hover:underline iSpA-dU2"
                                                  to='/#whyD3'>Why Deep Data Detectives (D3)</HashLink>
                                    </Typography>
                                    <Typography color={"white"} component={"li"}>
                                        <HashLink className="hover:underline iSpA-dU2" to='/#progress'>Our
                                            Progress</HashLink>
                                    </Typography>
                                    <Typography color={"white"} component={"li"}>
                                        <HashLink className="hover:underline iSpA-dU2" to='/#offer'>What We
                                            Offer</HashLink>
                                    </Typography>
                                    <Typography color={"white"} component={"li"}>
                                        <HashLink className="hover:underline iSpA-dU2"
                                                  to='/#meetTeam'>Meet The Team</HashLink>
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid xs={3} item>
                            <Box display={"flex"} justifyContent={"flex-end"} alignItems={"right"} height={"100%"}
                                 component={"nav"}>
                                <Stack component={"ul"} direction={"column"}>
                                    <Typography color={"white"} component={"li"}>
                                        <HashLink className="hover:underline iSpA-dU2"
                                                  to='/contact#top'>Contact</HashLink>
                                    </Typography>
                                    <Typography color={"white"} component={"li"}>
                                        <HashLink className="hover:underline iSpA-dU2" to='./media#top'>Media</HashLink>
                                    </Typography>
                                    <Typography color={"white"} component={"li"}>
                                        <HashLink className="hover:underline iSpA-dU2" to='/pilots3#third'>Events</HashLink>
                                    </Typography>
                                    <Typography color={"white"} component={"li"}>
                                        <HashLink className="hover:underline iSpA-dU2"
                                                  to='./privacy#top'>Privacy</HashLink>
                                    </Typography>
                                    <Typography color={"white"} component={"li"}>
                                        <HashLink className="hover:underline iSpA-dU2" to='./diversity#top'>Diversity &
                                            Inclusion</HashLink>
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid pt={4} direction={"row"} justifyContent={"space-between"} container>
                        <Grid xs={6} item>
                            <div className="flex m-4 space-x-6 sm:justify-start">
                                <a target={'_blank'} href="https://www.facebook.com/nxtwave.founders"
                                   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a target={'_blank'} href="https://www.instagram.com/nxtwavefounders/"
                                   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="sr-only">Instagram page</span>
                                </a>
                                <a target={'_blank'} href="https://twitter.com/NxtWave_"
                                   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                    </svg>
                                    <span className="sr-only">Twitter page</span>
                                </a>
                                <a target={'_blank'} href="https://www.tiktok.com/@nxtwavefounders?lang=en"
                                   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512.00 512.00"
                                         aria-hidden="true">
                                        <path
                                            d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/>
                                    </svg>
                                    <span className="sr-only">TikTok page</span>
                                </a>
                                <a target={'_blank'} href="https://www.linkedin.com/company/nxt-wave-founders/about/?viewAsMember=true"
                                   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M5.37214 24H0.396429V7.97674H5.37214V24ZM2.88161 5.79102C1.29054 5.79102 0 4.47317 0 2.8821C2.37147e-08 1.29063 1.29014 0.000488281 2.88161 0.000488281C4.47307 0.000488281 5.76321 1.29063 5.76321 2.8821C5.76321 4.47317 4.47214 5.79102 2.88161 5.79102ZM23.9946 24H19.0296V16.2C19.0296 14.341 18.9921 11.9571 16.4427 11.9571C13.8557 11.9571 13.4593 13.9767 13.4593 16.066V24H8.48893V7.97674H13.2611V10.1625H13.3307C13.995 8.90352 15.6177 7.57495 18.0386 7.57495C23.0743 7.57495 24 10.891 24 15.1982V24H23.9946Z"/>
                                    </svg>
                                    <span className="sr-only">Linkedin page</span>
                                </a></div>
                        </Grid>
                        <Grid textAlign={"end"} className={"iSpA-dU2"} xs={6} color={"white"} item>
                            <Typography>Copyright ©2023. Deep Data Detectives (D3).</Typography>
                            <Typography>A flagship initiative of NxtWave Founders, Inc.</Typography>
                            <Typography>(NxtWave), a 501(C)(3) Organization that is registered with
                                the IRS, EIN #
                                84-3277794.</Typography>
                            <Typography>All rights reserved.</Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
            {/*    <footer className="bg-background p-4 bg-slate-100 dark:text-white dark:bg-slate-900 sm:p-6">*/}
            {/*        <div className="md:flex md:justify-between">*/}
            {/*            <div className="mb-6 md:mb-0">*/}
            {/*            </div>*/}
            {/*            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">*/}
            {/*                <div>*/}
            {/*                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>*/}
            {/*                    <ul className="text-gray-600 dark:text-gray-400">*/}
            {/*                        <li className="mb-4">*/}
            {/*                            <HashLink className="hover:underline" to='./privacy#main'>Privacy</HashLink>*/}
            {/*                        </li>*/}
            {/*                        <li className="mb-4">*/}
            {/*                            <HashLink className="hover:underline" to='./diversity#main'>Diversity and*/}
            {/*                                Inclusion</HashLink>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Community</h2>*/}
            {/*                    <ul className="text-gray-600 dark:text-gray-400">*/}
            {/*                        <li className="mb-4">*/}
            {/*                            <a href="https://www.facebook.com/nxtwave.founders"*/}
            {/*                               className="hover:underline ">Facebook</a>*/}
            {/*                        </li>*/}
            {/*                        <li className="mb-4">*/}
            {/*                            <a href="https://www.instagram.com/nxtwavefounders/"*/}
            {/*                               className="hover:underline ">Instagram</a>*/}
            {/*                        </li>*/}
            {/*                        <li className="mb-4">*/}
            {/*                            <a href="https://twitter.com/NxtWave_" className="hover:underline ">Twitter</a>*/}
            {/*                        </li>*/}
            {/*                        <li className="mb-4">*/}
            {/*                            <a href="https://www.tiktok.com/@nxtwavefounders?lang=en"*/}
            {/*                               className="hover:underline ">TikTok</a>*/}
            {/*                        </li>*/}
            {/*                        <li className="mb-4">*/}
            {/*                            <a href="" className="hover:underline ">Linkedin</a>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Project</h2>*/}
            {/*                    <ul className="text-gray-600 dark:text-gray-400">*/}
            {/*                        <li className="mb-4">*/}
            {/*                            <Link to="/story" className="hover:underline">About</Link>*/}
            {/*                        </li>*/}
            {/*                        <li>*/}
            {/*                            <Link to="/contact" className="hover:underline">Contact</Link>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>*/}
            {/*        <div className="sm:flex sm:items-center sm:justify-between">*/}
            {/*<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="/"*/}
            {/*                                                                             className="hover:underline">Copyright ©2023. Deep Data Detectives (D3).  A flagship initiative of NxtWave Founders, Inc. (NxtWave), a 501(C)(3) Organization that is registered with the IRS, EIN # 84-3277794.  All rights reserved.</a>.*/}
            {/*</span>*/}
            {/*            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">*/}
            {/*                <a href="https://www.facebook.com/nxtwave.founders"*/}
            {/*                   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">*/}
            {/*                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">*/}
            {/*                        <path fillRule="evenodd"*/}
            {/*                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"*/}
            {/*                              clipRule="evenodd"/>*/}
            {/*                    </svg>*/}
            {/*                    <span className="sr-only">Facebook page</span>*/}
            {/*                </a>*/}
            {/*                <a href="https://www.instagram.com/nxtwavefounders/"*/}
            {/*                   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">*/}
            {/*                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">*/}
            {/*                        <path fillRule="evenodd"*/}
            {/*                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"*/}
            {/*                              clipRule="evenodd"/>*/}
            {/*                    </svg>*/}
            {/*                    <span className="sr-only">Instagram page</span>*/}
            {/*                </a>*/}
            {/*                <a href="https://twitter.com/NxtWave_"*/}
            {/*                   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">*/}
            {/*                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">*/}
            {/*                        <path*/}
            {/*                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>*/}
            {/*                    </svg>*/}
            {/*                    <span className="sr-only">Twitter page</span>*/}
            {/*                </a>*/}
            {/*                <a href="https://www.tiktok.com/@nxtwavefounders?lang=en"*/}
            {/*                   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">*/}
            {/*                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512.00 512.00" aria-hidden="true">*/}
            {/*                        <path*/}
            {/*                            d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/>*/}
            {/*                    </svg>*/}
            {/*                    <span className="sr-only">TikTok page</span>*/}
            {/*                </a>*/}
            {/*                <a href="" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">*/}
            {/*                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">*/}
            {/*                        <path*/}
            {/*                            d="M5.37214 24H0.396429V7.97674H5.37214V24ZM2.88161 5.79102C1.29054 5.79102 0 4.47317 0 2.8821C2.37147e-08 1.29063 1.29014 0.000488281 2.88161 0.000488281C4.47307 0.000488281 5.76321 1.29063 5.76321 2.8821C5.76321 4.47317 4.47214 5.79102 2.88161 5.79102ZM23.9946 24H19.0296V16.2C19.0296 14.341 18.9921 11.9571 16.4427 11.9571C13.8557 11.9571 13.4593 13.9767 13.4593 16.066V24H8.48893V7.97674H13.2611V10.1625H13.3307C13.995 8.90352 15.6177 7.57495 18.0386 7.57495C23.0743 7.57495 24 10.891 24 15.1982V24H23.9946Z"/>*/}
            {/*                    </svg>*/}
            {/*                    <span className="sr-only">Linkedin page</span>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </footer>*/}
        </>

    )

}