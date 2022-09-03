import React from 'react'
import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'

export default function FeedBack() {
  return (
    <>
        <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
            <div>
                <div>
                    <div className="NavCheckout_navbar__3Ly9V">
                        <div className="NavCheckout_back-btn-div__2KGYR"><Link to="/"><svg stroke="currentColor" fill="currentColor"
                                stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30" width="30"
                                xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                                <path
                                    d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                                </path>
                            </svg></Link><span className='span2'> Feedbacks </span></div>
                            <Navbar2/>
                    </div>
                    <div id="sidenavDiv"></div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '18vh'}}> <svg
                        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#bebebe"
                        height="160" width="160" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(190, 190, 190)'}}>
                        <g>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 13v2h2v-2h-2zm0-6v5h2V7h-2z">
                            </path>
                        </g>
                    </svg>
                    <h1
                        style={{fontFamily: 'GilroySemibold, sans-serif', border: 'none', fontSize: '1.25rem', color: 'rgb(93, 93, 93)'}}>
                        You don't have any feedbacks yet! </h1>
                </div>
            </div>
        </div>
    </>
  )
}
