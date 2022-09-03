import React from 'react'
import './../assets/css/address.css';
import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2';

export default function Address() {
  return (

    <>
        <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
            <div className="MyAddresses_myAddresses__1sGGJ">
                <div className="Toastify"></div>
                <div>
                    <div className="NavCheckout_navbar__3Ly9V">
                        <div className="NavCheckout_back-btn-div__2KGYR"><Link to='/'><svg stroke="currentColor" fill="currentColor"
                                stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30" width="30"
                                xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                                <path
                                    d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                                </path>
                            </svg></Link><span className='span2'> Addresses </span></div>
                            <Navbar2/>
                    </div>
                    <div id="sidenavDiv"></div>
                </div>
                <div>
                    <div className="MyAddresses_address-list-wrapper__2YaEP" style={{display: 'flex'}}>
                        <div className="Address_address__1cSRD" style={{backgroundColor: 'rgb(230, 230, 230)'}}>
                            <div className="Address_address-wrapper__1MHHs">
                                <div>
                                    <div className="Address_title__1rQKw">
                                        <h5 style={{fontFamily: 'GilroyBold'}}>Default Address<br/><span
                                                className="badge rounded-pill bg-danger"
                                                style={{fontFamily: 'MontserratMedium, sans-serif', fontSize: '0.75rem'}}>Billing
                                                Address</span></h5>
                                    </div>
                                    <div className="Address_addressLine__C5-xg">
                                        <p style={{fontSize: '0.9rem', color: 'rgb(93, 93, 93)'}}>test building, test area, test
                                            street, Delhi, Delhi, 110005<br/>
                                            <div><strong style={{color: 'rgb(93, 93, 93)', fontSize: '0.9rem'}}>Mobile:
                                                    8793295897</strong></div>
                                        </p>
                                    </div>
                                    <div className="Address_mobile-verified-wrapper__1ms9S"><button
                                            style={{border: '1px solid green', color: 'green'}}>Verified <svg stroke="currentColor"
                                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="green"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                                                style={{color: 'green', marginBottom: '5px'}}>
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z">
                                                </path>
                                            </svg> </button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MyAddresses_buttons__TG3jS" style={{borderBottom: '1px solid rgb(230, 230, 230)'}}><a
                        href="/add-new-address"><button className="MyAddresses_btn1__202jw"
                            style={{marginBottom: '1rem', marginTop: '1rem', width: '100%'}}> +Add New Address</button></a></div>
                <div className="MyAddresses_address-verification-info__3NK-E"> <span><strong>Note:</strong> Delivery address might
                        take upto 48 hours to verify.</span></div>
            </div>
        </div>
    </>
  )
}
