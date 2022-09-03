import React from 'react'
import { Link } from 'react-router-dom';
import './../assets/css/CreditManagement.css';

export default function CreditManagement() {
  return (

    <>
        <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
            <div className="CreditManagementPage_hideLoader__3XX5u" width="100%">
                <div className="CreditManagementPage_overlay-box__jjvra"><img src="images/JFL-logo-without-name.png"/></div>
            </div>
            <div className="CreditManagementPage_creditContainer__thxNZ">
                <div className="CreditManagementPage_navbar__2s8E7">
                    <div><Link to="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="#fff"
                            height="30" width="30" xmlns="http://www.w3.org/2000/svg"
                            style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                            <path
                                d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                            </path>
                        </svg></Link><span style={{fontSize: '1.15rem'}}>Credit Management</span></div>
                </div>
                <div className="CreditManagementPage_credit-components-wrap__uDWGD">
                    <div className="CreditManagementPage_instructionBtn__1g77m"><Link to="/instructions-for-BG"><button> <svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                                    </path>
                                    <path
                                        d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z">
                                    </path>
                                </svg> Instructions for BG / Cheque </button></Link></div>
                    <div className="CreditManagementPage_noCredits__36ky5"> <svg stroke="currentColor" fill="currentColor"
                            stroke-width="0" viewBox="0 0 24 24" color="#bebebe" height="130" width="130"
                            xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(190, 190, 190)'}}>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M21.9 21.9L2.1 2.1.69 3.51l1.55 1.55c-.15.28-.23.6-.23.94L2 18c0 1.11.89 2 2 2h13.17l3.31 3.31 1.42-1.41zM4 12V8h1.17l4 4H4zm2.83-8H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L14.83 12H20V8h-9.17l-4-4z">
                            </path>
                        </svg>
                        <h4>You have no credits currently.</h4>
                    </div>
                    <div className="CreditManagementPage_payment-wrapper__2FUcg">
                        <div className="CreditManagementPage_payable-amount-wrap__1kegU">
                            <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    color="#FF760E" height="25" width="25" xmlns="http://www.w3.org/2000/svg"
                                    style={{color: 'rgb(255, 118, 14)', marginRight: '1rem'}}>
                                    <path
                                        d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z">
                                    </path>
                                </svg><span>Payable amount</span></div><strong>₹895.55</strong>
                        </div>
                        <div className="CreditManagementPage_pay-btn-wrap__1E1D5">
                            <div className="hideLoader" width="100%">
                                <div className="overlay-box"><img src="/images/JFL-logo-without-name.png" className="loaderImg"/></div>
                            </div>
                            <div><button
                                    style={{width: '90%', backgroundColor: 'rgb(210, 17, 44)', border: 'none', borderRadius: '0.5rem', height: '3rem', fontFamily: 'MontserratSemibold, sans-serif', color: 'rgb(255, 255, 255)', fontSize: '1rem', textAlign: 'center', marginTop: '1rem', marginLeft: '1.25rem', marginRight: '1.25rem'}}>Pay
                                    Now ➔</button></div>
                        </div>
                    </div>
                    <div className="CreditManagementPage_pay-reflect-warning__j4sZW"><span>Credit transactions may take upto 24
                            hours to reflect. Please ignore if paid already.</span></div>
                    <div className="CreditManagementPage_bottomBtns__2REew">
                        <div><button>A/C Statement</button></div>
                        <div><button>Check Balance</button></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
