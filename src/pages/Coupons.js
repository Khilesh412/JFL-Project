import React from 'react'
import './../assets/css/Offers.css';
import image1 from './../assets/images/offer-icon-blue.png';
import Demo from './Demo';
import Navbar2 from '../components/Navbar2';

export default function Coupons() {
  return (
    <>
    <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
        <div>
            <div>
                <div className="NavCheckout_navbar__3Ly9V">
                    <div className="NavCheckout_back-btn-div__2KGYR"><a href='/'><svg stroke="currentColor" fill="currentColor"
                            stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30" width="30"
                            xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(255, 255, 255)", marginBottom: '0.5rem'}}>
                            <path
                                d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                            </path>
                        </svg></a><span className='span2'> My Offers </span></div>
                        <Navbar2/>
                </div>
                <div id="sidenavDiv"></div>
            </div>
            <div className="offers-wrapper">
                <div className="OfferBox_offerBox__1MQTJ" style={{margin: '2rem 1.25rem'}}>
                    <div className="OfferBox_offerBox__upperPart__3HWUG">
                        <div className="OfferBox_offerAvatar__920De"> <img src={image1}/> </div>
                        <div className="OfferBox_upperPart__text__T1Scl"><span>Flat 20% off</span>
                            <p>Flat 20%</p>
                        </div>
                    </div>
                    <div className="OfferBox_offerBox__lowerPart__1sbmp">
                        <div className="OfferBox_lowerPart__leftPart__33ELX"><span
                                style={{fontFamily: 'MontserratSemibold , sans-serif', color: 'rgb(93, 93, 93)'}}>Expires</span><span
                                style={{fontFamily: 'MontserratSemibold, sans-serif'}}>2022-07-31</span><span
                                style={{color: 'rgb(210, 17, 44)', textDecoration: 'underline', fontFamily: 'MontserratSemibold,sans-serif', marginTop: '0.6rem', fontSize: '0.85rem', cursor: 'pointer'}}>Terms
                                &amp; Conditions</span></div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div className="OfferBox_offerCode-wrapper__2hEn4"><span style={{color: 'rgb(112, 112, 112)'}}>Click to
                                    copy</span>
                                <div
                                    style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                                    <div
                                        style={{display: 'flex', width: '8rem', height: '2.5rem', border: '2px dashed rgb(0, 120, 172)', backgroundColor: 'rgb(246, 250, 252)', justifyContent: 'center', alignItems: 'center', borderRadius: '0.55rem'}}>
                                        <span value="HOLI20"
                                            style={{fontFamily: 'GilroyBold, sans-serif', fontSize: '1rem', color: 'rgb(0, 120, 172)'}}>HOLI20</span>
                                    </div><span
                                        style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OfferBox_offerBox__1MQTJ" style={{margin: '2rem 1.25rem'}}>
                    <div className="OfferBox_offerBox__upperPart__3HWUG">
                        <div className="OfferBox_offerAvatar__920De"> <img src={image1}/> </div>
                        <div className="OfferBox_upperPart__text__T1Scl"><span>Flat 500 discount</span>
                            <p>Holi offer flat 500 discount</p>
                        </div>
                    </div>
                    <div className="OfferBox_offerBox__lowerPart__1sbmp">
                        <div className="OfferBox_lowerPart__leftPart__33ELX"><span
                                style={{fontFamily: 'MontserratSemibold , sans-serif', color: 'rgb(93, 93, 93)'}}>Expires</span><span
                                style={{fontFamily: 'MontserratSemibold, sans-serif'}}>2022-08-02</span><span
                                style={{color: 'rgb(210, 17, 44)', textDecoration: 'underline', fontFamily: 'MontserratSemibold,sans-serif', marginTop: '0.6rem', fontSize: '0.85rem', cursor: 'pointer'}}>Terms
                                &amp; Conditions</span></div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div className="OfferBox_offerCode-wrapper__2hEn4"><span style={{color: 'rgb(112, 112, 112)'}}>Click to
                                    copy</span>
                                <div
                                    style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                                    <div
                                        style={{display: 'flex', width: '8rem', height: '2.5rem', border: '2px dashed rgb(0, 120, 172)', backgroundColor: 'rgb(246, 250, 252)', justifyContent: 'center', alignItems: 'center', borderRadius: '0.55rem'}}>
                                        <span value="TEST500"
                                            style={{fontFamily: 'GilroyBold, sans-serif', fontSize: '1rem', color: 'rgb(0, 120, 172)'}}>TEST500</span>
                                    </div><span
                                        style={{fontFamily: 'OS-bold, sans-serif', fontSize: '1rem', color: 'rgb(210, 17, 44)'}}>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OfferBox_offerBox__1MQTJ" style={{margin: '2rem 1.25rem'}}>
                    <div className="OfferBox_offerBox__upperPart__3HWUG">
                        <div className="OfferBox_offerAvatar__920De"> <img src={image1}/> </div>
                        <div className="OfferBox_upperPart__text__T1Scl"><span>Get 40% discount</span>
                            <p>Get 40% discount on 50 items</p>
                        </div>
                    </div>
                    <div className="OfferBox_offerBox__lowerPart__1sbmp">
                        <div className="OfferBox_lowerPart__leftPart__33ELX"><span
                                style={{fontFamily: 'MontserratSemibold , sans-serif', color: 'rgb(93, 93, 93)'}}>Expires</span><span
                                style={{fontFamily: 'MontserratSemibold, sans-serif'}}>2022-07-22</span><span
                                style={{color: 'rgb(210, 17, 44)', textDecoration: 'underline', fontFamily: 'MontserratSemibold,sans-serif', marginTop: '0.6rem', fontSize: '0.85rem', cursor: 'pointer'}}>Terms
                                &amp; Conditions</span></div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div className="OfferBox_offerCode-wrapper__2hEn4"><span style={{color: 'rgb(112, 112, 112)'}}>Click to
                                    copy</span>
                                <div
                                    style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                                    <div
                                        style={{display: 'flex', width: '8rem', height: '2.5rem', border: '2px dashed rgb(0, 120, 172)', backgroundColor: 'rgb(246, 250, 252)', justifyContent: 'center', alignItems: 'center', borderRadius: '0.55rem'}}>
                                        <span value="TESTVOLUME40"
                                            style={{fontFamily: 'GilroyBold, sans-serif', fontSize: '1rem', color: 'rgb(0, 120, 172)'}}>TESTVOLUME40</span>
                                    </div><span
                                        style={{fontFamily: 'OS-bold, sans-serif', fontSize: '1rem', color: 'rgb(210, 17, 44)'}}>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OfferBox_offerBox__1MQTJ" style={{margin: '2rem 1.25rem'}}>
                    <div className="OfferBox_offerBox__upperPart__3HWUG">
                        <div className="OfferBox_offerAvatar__920De"> <img src={image1}/> </div>
                        <div className="OfferBox_upperPart__text__T1Scl"><span>Flat 100 off</span>
                            <p>Flat 100 off on orders above 500</p>
                        </div>
                    </div>
                    <div className="OfferBox_offerBox__lowerPart__1sbmp">
                        <div className="OfferBox_lowerPart__leftPart__33ELX"><span
                                style={{fontFamily: 'MontserratSemibold , sans-serif', color: 'rgb(93, 93, 93)'}}>Expires</span><span
                                style={{fontFamily: 'MontserratSemibold, sans-serif'}}>2022-07-31</span><span
                                style={{color: 'rgb(210, 17, 44)', textDecoration: 'underline', fontFamily: 'MontserratSemibold,sans-serif', marginTop: '0.6rem', fontSize: '0.85rem', cursor: 'pointer'}}>Terms
                                &amp; Conditions</span></div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div className="OfferBox_offerCode-wrapper__2hEn4"><span style={{color: 'rgb(112, 112, 112)'}}>Click to
                                    copy</span>
                                <div
                                    style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                                    <div
                                        style={{display: 'flex', width: '8rem', height: '2.5rem', border: '2px dashed rgb(0, 120, 172)', backgroundColor: 'rgb(246, 250, 252)', justifyContent: 'center', alignItems: 'center', borderRadius: '0.55rem'}}>
                                        <span value="TEST501"
                                            style={{fontFamily: 'GilroyBold, sans-serif', fontSize: '1rem', color: 'rgb(0, 120, 172)'}}>TEST501</span>
                                    </div><span
                                        style={{fontFamily: 'OS-bold, sans-serif', fontSize: '1rem', color: 'rgb(210, 17, 44)'}}>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OfferBox_offerBox__1MQTJ" style={{margin: '2rem 1.25rem'}}>
                    <div className="OfferBox_offerBox__upperPart__3HWUG">
                        <div className="OfferBox_offerAvatar__920De"> <img src={image1}/> </div>
                        <div className="OfferBox_upperPart__text__T1Scl"><span>10% off</span>
                            <p>10% off on 12 pcs</p>
                        </div>
                    </div>
                    <div className="OfferBox_offerBox__lowerPart__1sbmp">
                        <div className="OfferBox_lowerPart__leftPart__33ELX"><span
                                style={{fontFamily: 'MontserratSemibold , sans-serif', color: 'rgb(93, 93, 93)'}}>Expires</span><span
                                style={{fontFamily: 'MontserratSemibold, sans-serif'}}>2022-07-25</span><span
                                style={{color: 'rgb(210, 17, 44)', textDecoration: 'underline', fontFamily: 'MontserratSemibold,sans-serif', marginTop: '0.6rem', fontSize: '0.85rem', cursor: 'pointer'}}>Terms
                                &amp; Conditions</span></div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div className="OfferBox_offerCode-wrapper__2hEn4"><span style={{color: 'rgb(112, 112, 112)'}}>Click to
                                    copy</span>
                                <div
                                    style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                                    <div
                                        style={{display: 'flex', width: '8rem', height: '2.5rem', border: '2px dashed rgb(0, 120, 172)', backgroundColor: 'rgb(246, 250, 252)', justifyContent: 'center', alignItems: 'center', borderRadius: '0.55rem'}}>
                                        <span value="TESTVOL10"
                                            style={{fontFamily: 'GilroyBold, sans-serif', fontSize: '1rem', color: 'rgb(0, 120, 172)'}}>TESTVOL10</span>
                                    </div><span
                                        style={{fontFamily: 'OS-bold, sans-serif', fontSize: '1rem', color: 'rgb(210, 17, 44)'}}>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="network-bar-wrapper"></div>
    </div>
    </>
  )
}
