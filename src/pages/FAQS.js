import React from 'react'
import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import './../assets/css/Faqs.css';

export default function FAQS() {
  return (
    <>
        <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
            <div className="FAQ_faq-container__16svK">
                <div>
                    <div className="NavCheckout_navbar__3Ly9V">
                        <div className="NavCheckout_back-btn-div__2KGYR"><Link to="/ContactUs"><svg stroke="currentColor" fill="currentColor"
                                stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30" width="30"
                                xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                                <path
                                    d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                                </path>
                            </svg></Link><span className='span2'> FAQs </span></div>
                            <Navbar2/>
                    </div>
                    <div id="sidenavDiv"></div>
                </div>
                <h4>FAQs: Choose Topic</h4>
                <div className="FAQ_settingOptions__3Dg0t">
                    <ul style={{paddingLeft: '0px'}}><a href="/Order-faqs">
                            <li>
                                <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                        color="black" className="FAQ_icon__gxvPd" height="25" width="25"
                                        xmlns="http://www.w3.org/2000/svg" style={{color: 'black'}}>
                                        <path
                                            d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z">
                                        </path>
                                    </svg> <span>Orders</span> </div><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" viewBox="0 0 1024 1024" color="#0078ac" className="FAQ_rightArrow__2sgjH"
                                    height="25" width="25" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(0, 120, 172)'}}>
                                    <path
                                        d="M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z">
                                    </path>
                                    <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                                    </path>
                                </svg>
                            </li>
                        </a><a href="/CR-FAQs">
                            <li>
                                <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                        color="black" className="FAQ_icon__gxvPd" height="25" width="25"
                                        xmlns="http://www.w3.org/2000/svg" style={{color: 'black'}}>
                                        <path fill-rule="evenodd"
                                            d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z">
                                        </path>
                                    </svg> <span>Cancellation and Returns</span> </div><svg stroke="currentColor"
                                    fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="#0078ac"
                                    className="FAQ_rightArrow__2sgjH" height="25" width="25" xmlns="http://www.w3.org/2000/svg"
                                    style={{color: 'rgb(0, 120, 172)'}}>
                                    <path
                                        d="M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z">
                                    </path>
                                    <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                                    </path>
                                </svg>
                            </li>
                        </a><a href="/shopping-FAQs">
                            <li>
                                <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512"
                                        color="black" className="FAQ_icon__gxvPd" height="25" width="25"
                                        xmlns="http://www.w3.org/2000/svg" style={{color: 'black'}}>
                                        <path
                                            d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z">
                                        </path>
                                    </svg> <span>Shopping</span> </div><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" viewBox="0 0 1024 1024" color="#0078ac" className="FAQ_rightArrow__2sgjH"
                                    height="25" width="25" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(0, 120, 172)'}}>
                                    <path
                                        d="M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z">
                                    </path>
                                    <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                                    </path>
                                </svg>
                            </li>
                        </a><a href="/payment-FAQs">
                            <li>
                                <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                        color="black" className="FAQ_icon__gxvPd" height="25" width="25"
                                        xmlns="http://www.w3.org/2000/svg" style={{color: 'black'}}>
                                        <path
                                            d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1 0 80 0 40 40 0 1 0-80 0z">
                                        </path>
                                    </svg> <span>Payment</span> </div><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" viewBox="0 0 1024 1024" color="#0078ac" className="FAQ_rightArrow__2sgjH"
                                    height="25" width="25" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(0, 120, 172)'}}>
                                    <path
                                        d="M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z">
                                    </path>
                                    <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                                    </path>
                                </svg>
                            </li>
                        </a></ul>
                </div>
            </div>
        </div>
    </>
  )
}
