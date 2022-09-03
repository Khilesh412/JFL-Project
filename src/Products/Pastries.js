import React from 'react'


export default function Pastries() {
  return (
    <>
    <div class="MuiContainer-root app__container MuiContainer-maxWidthLg">
        <div class="product-category-page" style={{height: 'auto'}}>
            <div class="nav-category" style={{backgroundImage: 'url(&quot;undefined&quot;)'}}>
                <div class="row mx-0 px-0">
                    <div class="navbar">
                        <div class="back-n-title"><a href="/">
                            <div class="back-btn-wrapper"><svg stroke="currentColor" fill="none" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="25"
                                    width="25" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg></div></a>
                        </div>
                        <div class="filter-icons"><a href="/login">
                                <div class="shopping-icon-wrapper">
                                    <div class="nav-side-icons shopCart-not-loggedin"><svg stroke="currentColor" fill="none"
                                            stroke-width="0" viewBox="0 0 24 24" class="cart-icon" height="25" width="25"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                            </path>
                                        </svg></div>
                                </div>
                            </a></div>
                    </div>
                </div>
            </div>
            <div class="PLP-background" style={{outline: 'none', border: 'none'}}>
                <div class="PLP-background__img"><img src="https://i.ibb.co/r7ZLwhh/Brownie-Group-Shot.jpg"/></div>
            </div>
            <div class="sort-filter-container" style={{display: 'flex', justifyContent: 'space-between'}}>
                <div class="cat-name-wrapper">
                    <h2>Brownie</h2>
                </div>
                <div class="sort-filter-icon-wrap"
                    style={{display: 'flex', justifyContent: 'space-evenly', marginRight: '1rem'}}>
                    <div class="MuiBox-root css-wcdm6c" aria-haspopup="true"><svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-fkhoq0" focusable="false"
                            aria-hidden="true" viewBox="0 0 24 24" data-testid="SortIcon" aria-haspopup="true"
                            aria-label="Sort Products">
                            <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path>
                        </svg><span style={{fontFamily: 'OS-semibold', color: 'rgb(77, 77, 77)'}}>Sort</span></div>
                </div>
            </div>
            <div class="PLP-product-list">
                <div class="hideLoader" width="100%">
                    <div class="overlay-box"><img src="/images/JFL-logo-without-name.png" class="loaderImg"/></div>
                </div>
                <a href='/RedVelvetPastry'>
                <div class="product">
                    <div class="Toastify"></div>
                    <div class="row product-warp">
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div class="col-4 pl-0 productItem-left">
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <div class="imgDiv" disabled="">
                                        <div class="out-of-stock-label"><span
                                                style={{color: 'rgb(255, 255, 255)', fontSize: '0.8rem', fontFamily: 'OS-medium', textAlign: 'center'}}>out
                                                of stock</span></div><img
                                            src="https://i.ibb.co/W3nZpGv/Red-Velvet-Pastry2-removebg-preview.png" alt=""
                                            class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div class="vegTag"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 24 24" color="#62A51C" height="20" width="20"
                                    xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(98, 165, 28)'}}>
                                    <path
                                        d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z">
                                    </path>
                                    <circle cx="12" cy="12" r="5"></circle>
                                </svg></div>
                            <div>
                                <div class="col-12 pr-0 product-desc">
                                    <div class="row align-items-center">
                                        <div class="titleHeartDiv">
                                            <div class="col-9">
                                                <h2> Red Velvet Pastry </h2>
                                            </div>
                                        </div>
                                        <div class="col-12 prod-desc">
                                            <p> Min. Order Quantity: <span>1 unit(s)</span> </p>
                                            <p> Estimated delivery by: <span>Jun 24, 2022</span> </p>
                                            <p>Selling unit: <span>No information</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="variant-priceboxes"></div>
                        <div class="counter-price-div">
                            <div class="counterBtn" style={{padding: '0px', margin: '0px'}}>
                                <div class="counter-btns qty d-flex mt-3 align-items-center justify-content-center"><button
                                        class="qtyminus" aria-hidden="true">−</button><input type="number"
                                        name="counterValue" value="0" style={{textAlign: 'center'}}/><button class="qtyplus"
                                        aria-hidden="true">+</button></div>
                            </div>
                            <div class="price-taxline-wrapper">
                                <div class="counter-price-div__displayPrice" style={{marginBottom: '0px'}}><span>₹ 10/KG
                                    </span></div>
                                <div class="taxes-line" style={{padding: '0px'}}>
                                    <p> (Prices are exclusive of taxes*)</p>
                                </div>
                            </div>
                        </div>
                        <div class="buttons-div"><a href="/login"><button class="addCart-btn">Place Order</button></a><a
                                href="/login"><button class="rs-btn" style={{width: '100%'}}>Request Sample</button></a></div>
                    </div>
                </div>
                </a>
            </div>
        </div>
        <div class="network-bar-wrapper"></div>
    </div>
    </>
  )
}
