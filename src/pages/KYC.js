import React from 'react'
import { Link } from 'react-router-dom'
import './../assets/css/KYC.css';

export default function KYC() {
  return (
    <>
    <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
        <div className="KYCIntro_KycContainer__2XCNS">
            <div className="NavKYC_navKyc__-M7M5">
                <div style={{display: 'flex', cursor: 'pointer'}}><Link to='/'><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                        viewBox="0 0 1024 1024" color="#fff" height="30" width="30" xmlns="http://www.w3.org/2000/svg"
                        style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                        <path
                            d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                        </path>
                    </svg></Link>
                    <h5>KYC</h5>
                </div>
                <div className="KYCStatusbar_statusText__1JqEC" style={{backgroundColor: 'rgb(9, 96, 133)'}}><span
                        style={{color: 'rgb(255, 255, 255)'}}>KYC Status</span><svg stroke="currentColor" fill="currentColor"
                        stroke-width="0" viewBox="0 0 24 24" color="green" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg" style={{color: 'green'}}>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                            d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z">
                        </path>
                    </svg><strong
                        style={{color: 'green', fontSize: '0.85rem', fontFamily: 'OS-bold, sans-serif'}}>Completed</strong></div>
            </div>
            <div className="KYCIntro_steps-wrapper__2ulRQ">
                <h1>How to Become a Customer</h1>
                <div className="InstructionStep_KycContainer__2lWw5"><span className="InstructionStep_StepTitle__128nT">Enter your
                        personal details</span>
                    <p>Enter/Update all the mandatory details in this section and move to company details.</p>
                </div>
                <div className="InstructionStep_KycContainer__2lWw5"><span className="InstructionStep_StepTitle__128nT">Enter your
                        company details</span>
                    <p>Enter/Update the details such as company type and legal status and move to company documentation.</p>
                </div>
                <div className="InstructionStep_KycContainer__2lWw5"><span className="InstructionStep_StepTitle__128nT">Upload your
                        company documentation</span>
                    <p>Upload the front and back scanned copy of business documentation. In case, you are a GST registered
                        entity, upload GST documentation. Otherwise, upload other documentation. You can upload more than
                        one document for verification purposes.</p>
                </div>
                <div className="InstructionStep_KycContainer__2lWw5"><span className="InstructionStep_StepTitle__128nT">Enter your
                        bank details</span>
                    <p>Enter your bank details and upload a copy of a canceled cheque/bank attested form.</p>
                </div>
                <div className="InstructionStep_KycContainer__2lWw5"><span
                        className="InstructionStep_StepTitle__128nT">Declaration</span>
                    <p>Sign the declaration and proceed to profile submission.</p>
                </div>
            </div>
            <div className="KYCIntro_btnDiv__2ikAv"><button><Link to="/KycForm"> Continue ➔ </Link></button></div>
        </div>
    </div>
    </>
  )
}
