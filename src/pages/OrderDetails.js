import React from 'react'
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import './../assets/css/MyOrder.css';
import Demo from './Demo';


export default function OrderDetails() {
  return (
    <>
    <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
        <div className="OrderDetails_odContainer__3wIs5">
            <div className="Toastify"></div>
            <div>
                <div className="NavCheckout_navbar__3Ly9V"><Link to="/myorder">
                    <div className="NavCheckout_back-btn-div__2KGYR"><svg stroke="currentColor" fill="currentColor"
                            stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30" width="30"
                            xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                            <path
                                d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                            </path>
                        </svg><span className='span2'> Order Id: 00002116 </span></div></Link>
                        <Navbar2/>
                </div>
                <div id="sidenavDiv"></div>
            </div>
            <div>
                <div className="ProductOrderDetails_productOD__2pP7e" style={{display: 'flex', flexDirection: 'column'}}>
                    <div disabled="" style={{display: 'flex'}}>
                        <div className="ProductOrderDetails_productImage__2BlnR"><img
                                src="https://i.ibb.co/PZQnzxG/Double-Chocolatet-Slab-removebg-preview-1.png" alt=""/></div>
                        <div className="ProductOrderDetails_productDesc__2EWVh">
                            <h4> 1 kg Brownie</h4>
                            <h6> Order | 2022-06-30 </h6>
                            <p>1 kg Brownie... </p>
                            <div className="ProductOrderDetails_status__3V69Z"><span
                                    className="ProductOrderDetails_itemCount__2QJuX"> Items: 1</span><span> Total: <span>₹
                                        1.18</span></span></div>
                            <div className="ProductOrderDetails_add-review-btn__2VIyL" style={{display: 'none'}}><a
                                    href="/add-review/8020p000001DGnjAAG"><button>Add review+</button></a></div>
                        </div>
                    </div>
                    <div className="ProductOrderDetails_cancelled-tag__11aUG"><span>Cancelled</span></div>
                </div>
                <div className="ProductOrderDetails_productOD__2pP7e" style={{display: 'flex', flexDirection: 'column'}}>
                    <div disabled="" style={{display: 'flex'}}>
                        <div className="ProductOrderDetails_productImage__2BlnR"><img
                                src="https://i.ibb.co/dGTZYyN/Blueberry-Muffin-2-removebg-preview.png" alt=""/></div>
                        <div className="ProductOrderDetails_productDesc__2EWVh">
                            <h4> Blueberry Muffin</h4>
                            <h6> Order | 2022-06-30 </h6>
                            <p>Soft muffins made using fresh ... </p>
                            <div className="ProductOrderDetails_status__3V69Z"><span
                                    className="ProductOrderDetails_itemCount__2QJuX"> Items: 1</span><span> Total: <span>₹
                                        33.75</span></span></div>
                            <div className="ProductOrderDetails_add-review-btn__2VIyL" style={{display: 'none'}}><a
                                    href="/add-review/8020p000001DGnkAAG"><button>Add review+</button></a></div>
                        </div>
                    </div>
                    <div className="ProductOrderDetails_cancelled-tag__11aUG"><span>Cancelled</span></div>
                </div>
                <div className="ProductOrderDetails_productOD__2pP7e" style={{display: 'flex', flexDirection: 'column'}}>
                    <div disabled="" style={{display: 'flex'}}>
                        <div className="ProductOrderDetails_productImage__2BlnR"><img
                                src="https://i.ibb.co/72cfBN9/Chocolate-Brownie-removebg-preview.png" alt=""/></div>
                        <div className="ProductOrderDetails_productDesc__2EWVh">
                            <h4> Double Chocolate Brownie</h4>
                            <h6> Order | 2022-06-30 </h6>
                            <p>Rich and gooey chocolate brown... </p>
                            <div className="ProductOrderDetails_status__3V69Z"><span
                                    className="ProductOrderDetails_itemCount__2QJuX"> Items: 10</span><span> Total: <span>₹
                                        3,742.96</span></span></div>
                            <div className="ProductOrderDetails_add-review-btn__2VIyL" style={{display: 'none'}}><a
                                    href="/add-review/8020p000001DGnlAAG"><button>Add review+</button></a></div>
                        </div>
                    </div>
                    <div className="ProductOrderDetails_cancelled-tag__11aUG"><span>Cancelled</span></div>
                </div>
            </div>
            <div className="CancelOrderTracker_stepperContainerVerticle__5BpXB">
                <div className="CancelOrderTracker_stepperWrapper__3HgWQ">
                    <div className="CancelOrderTracker_dividerLine__2Og2-"
                        style={{backgroundColor: 'rgb(255, 118, 14)', zIndex: '0'}}></div>
                    <div className="CancelOrderTracker_stepIcon__pR5jc">
                        <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                color="#ff760e" height="25" width="25" xmlns="http://www.w3.org/2000/svg"
                                style={{color: 'rgb(255, 118, 14)', borderRadius: '50%', border: '4px solid rgb(255, 203, 163)', position: 'absolute'}}>
                                <circle cx="8" cy="8" r="8"></circle>
                            </svg></div>
                    </div>
                    <div className="CancelOrderTracker_stepDesc__33APb">
                        <div className="CancelOrderTracker_stepText__2yQUW"><span className="CancelOrderTracker_statusSpan__2-ZYy"
                                style={{color: 'black'}}> <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 1024 1024" height="30" width="30" xmlns="http://www.w3.org/2000/svg"
                                    style={{marginRight: '0.7rem'}}>
                                    <path
                                        d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z">
                                    </path>
                                </svg>Ordered </span><span className="CancelOrderTracker_statusDescSpan__3uTKS">Order #00002116
                                generated</span>
                            <div className="CancelOrderTracker_statusInfo__2CUVP" style={{display: 'flex', marginBottom: '0px'}}>
                                <p style={{fontsize: '0.75rem'}}></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CancelOrderTracker_stepperWrapper__3HgWQ">
                    <div className="CancelOrderTracker_stepIcon__pR5jc">
                        <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                color="#d2112c" height="25" width="25" xmlns="http://www.w3.org/2000/svg"
                                style={{color: 'rgb(210, 17, 44)', borderRadius: '50%', border: '4px solid lightpink', position: 'absolute'}}>
                                <circle cx="8" cy="8" r="8"></circle>
                            </svg></div>
                    </div>
                    <div className="CancelOrderTracker_stepDesc__33APb">
                        <div className="CancelOrderTracker_stepText__2yQUW"><span className="CancelOrderTracker_statusSpan__2-ZYy"
                                style={{color: 'black'}}> <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 24 24" height="27" width="27" xmlns="http://www.w3.org/2000/svg"
                                    style={{marginRight: '0.7rem;'}}>
                                    <path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path>
                                    <path
                                        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z">
                                    </path>
                                </svg>Cancelled </span><span className="CancelOrderTracker_statusDescSpan__3uTKS">Order
                                cancellation approved</span>
                            <div className="CancelOrderTracker_statusInfo__2CUVP" style={{display: 'flex', marginBottom: '0px'}}>
                                <p style={{fontSize: '0.75rem'}}></p>
                                <p style={{fontSize: '0.75rem', color: 'rgb(45, 45, 45)'}}>Thu, Jun 30, 2022 8:01 PM </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="OrderDetails_cancel-policy-line__kJZNb">
                <p> <span>Note:</span> Cancellation can be requested only before order has been packaged.</p>
            </div>
            <div className="OrderDetails_buttons__2ppqD">
                <div className="OrderDetails_cancel-btn__2o2ME" disabled=""><a href="/cancel-order/8010p000001uE3uAAE"><button>
                            Cancel Order </button></a></div>
                <div disabled=""><button className="OrderDetails_invoiceBtn__3elr_"
                        style={{backgroundColor: 'rgb(112, 112, 112)'}}>Invoice <svg stroke="currentColor" fill="currentColor"
                            stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z">
                            </path>
                        </svg> </button></div>
            </div>
        </div>
    </div>
    </>
  )
}
