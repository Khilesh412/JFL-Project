import React from 'react'
import './../assets/css/fav.css';
import { Link } from 'react-router-dom';

export default function Fav() {
  return (
    <>
    <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
        <div className="FavouritesScreen_favouritesScreen__3zEsP">
            <div className="FavouritesScreen_navbar__2diGu">
                <div style={{display: 'flex', alignItems: 'center'}}><Link to="/"><svg stroke="currentColor" fill="currentColor"
                        stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="25" width="25"
                        xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)'}}>
                        <path
                            d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                        </path>
                    </svg></Link>
                    <h3>Favourites</h3>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a href="/cart-summary">
                        <div className="FavouritesScreen_fav-cart-icon__3YpHG"><span>2</span><svg stroke="currentColor"
                                fill="none" stroke-width="0" viewBox="0 0 24 24" color="fff" height="30" width="30"
                                xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)'}}>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                </path>
                            </svg></div>
                    </a></div>
            </div>
            <div className="FavouritesScreen_fav-product-wrapper__18tPy">
                <div className="hideLoader" width="100%">
                    <div className="overlay-box"><img src="/images/JFL-logo-without-name.png" className="loaderImg"/></div>
                </div>
                <div className="product">
                    <div className="Toastify"></div>
                    <div className="row product-warp">
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div className="col-4 pl-0 productItem-left">
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <div className="imgDiv"><img
                                            src="https://i.ibb.co/hLCk3NQ/Oats-Cookie-removebg-preview-1.png" alt=""
                                            className="img-fluid"/></div>
                                </div>
                            </div>
                            <div>
                                <div className="col-12 pr-0 product-desc">
                                    <div className="row align-items-center">
                                        <div className="titleHeartDiv">
                                            <div className="col-9">
                                                <h2> Oats and Raisin Cookie </h2>
                                            </div>
                                            <div className="fav-icon-wrapper"><svg stroke="currentColor" fill="currentColor"
                                                    stroke-width="0" viewBox="0 0 16 16" color="#d2112c" height="20"
                                                    width="20" xmlns="http://www.w3.org/2000/svg"
                                                    style={{color: 'rgb(210, 17, 44)'}}>
                                                    <path
                                                        d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z">
                                                    </path>
                                                </svg></div>
                                        </div>
                                        <div className="col-12 prod-desc">
                                            <p> Min. Order Quantity: <span>20 unit(s)</span> </p>
                                            <p> Estimated delivery by: <span>Jul 24, 2022</span> </p>
                                            <p>Selling unit: <span>No information</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="variant-priceboxes">
                                <div>
                                    <div className="pricebox">
                                        <div className="pricebox__text">
                                            <p>30 gm</p><strong><span className="display-price"
                                                    style={{fontFamily: 'OS-bold'}}>₹15.40</span></strong>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="pricebox">
                                        <div className="pricebox__text">
                                            <p>200 Pcs</p><strong><span className="display-price"
                                                    style={{fontFamily: 'OS-bold'}}>₹14.78</span></strong>
                                            <div className="priceValue-div"><span><span></span></span>
                                                <p> (4 % off)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="pricebox">
                                        <div className="pricebox__text">
                                            <p>400 Pcs</p><strong><span className="display-price"
                                                    style={{fontFamily: 'OS-bold'}}>₹14.32</span></strong>
                                            <div className="priceValue-div"><span><span></span></span>
                                                <p> (7 % off)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="counter-price-div">
                                <div className="counterBtn" style={{padding: '0px', margin: '0px'}}>
                                    <div className="counter-btns qty d-flex mt-3 align-items-center justify-content-center">
                                        <button className="qtyminus" aria-hidden="true">−</button><input type="number"
                                            name="counterValue" value="0" style={{textAlign: 'center'}}/><button
                                            className="qtyplus" aria-hidden="true">+</button></div>
                                </div>
                                <div className="price-taxline-wrapper">
                                    <div className="counter-price-div__displayPrice" style={{marginBottom: '0px'}}><span>₹ 15.4/pc
                                        </span></div>
                                    <div className="taxes-line" style={{padding: '0px'}}>
                                        <p> (Prices are exclusive of taxes*)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons-div">
                                <div className="addCart-btn-wrapper"><button className="addCart-btn">Add to Cart</button></div>
                                <button className="rs-btn"
                                    style={{color: 'rgb(210, 17, 44)', backgroundColor: 'rgb(255, 255, 255)', border: '1.5px solid rgb(210, 17, 44)'}}>Request
                                    Sample</button>
                            </div>
                            <div className="sample-req-line"><span><strong>*</strong>Sample order will be delivered in next
                                    route of delivery</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

