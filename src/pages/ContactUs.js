import React from 'react'
import Navbar2 from '../components/Navbar2';
import './../assets/css/ContactUs.css';
import Demo from './Demo';

export default function ContactUs() {
  return (
    <>
    <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
        <div className="ContactUsScreen_contact__container__nx7C5">
            <div className="ContactUsScreen_navbar__2S43x">
                <div><a href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="#fff"
                        height="30" width="30" xmlns="http://www.w3.org/2000/svg"
                        style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem', cursor: 'pointer'}}>
                        <path
                            d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                        </path>
                    </svg></a><span className='span2'> Support </span></div>
                    <Navbar2/>
                
            </div>
            <div className="ContactUsScreen_inner-container__1htN5">
                <div className="ContactUsScreen_supportOptions__pWybV">
                    <ul><a href="/FAQs">
                            <div className="ContactUsScreen_listOptionDiv__3P4xd"><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" viewBox="0 0 1024 1024" height="30" width="30"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                                    </path>
                                    <path
                                        d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z">
                                    </path>
                                </svg>
                                <li><span> FAQ's regarding products </span>
                                    <p>All answered top queries</p>
                                </li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                    color="black" height="22" width="22" xmlns="http://www.w3.org/2000/svg"
                                    style={{color: 'black'}}>
                                    <path
                                        d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z">
                                    </path>
                                </svg>
                            </div>
                        </a></ul>
                </div>
                <div className="ContactUsScreen_contact-details__27_uz">
                    <div className="ContactUsScreen_contact-details-note__2OVDJ">
                        <ul>
                            <li style={{marginBottom: '0.7rem'}}>Please note that you are accessing the BETA version of:<a
                                    href="https://foodservices.jubilantfoodworks.com">
                                    <span>foodservices.jubilantfoodworks.com</span></a></li>
                            <li>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing
                                errors or other problems on the beta website, please email us on <a
                                    href="mailto:foodservice.customercare@jublfood.com"><span>foodservice.customercare@jublfood.com
                                    </span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="ContactUsScreen_contactBtn__2Yqx2"><a href="tel:+91 9958310895"><button> Contact Us <svg
                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '0.5rem'}}>
                                <path
                                    d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z">
                                </path>
                            </svg> </button></a></div>
                <div className="ContactUsScreen_contact-timings__3A8hn"><span>Timing: 10:00 AM - 06:00 PM | Mon-Sat </span>
                </div>
                <div id="sidenavDiv"></div>
            </div>
        </div>
    </div>
    </>
  )
}
