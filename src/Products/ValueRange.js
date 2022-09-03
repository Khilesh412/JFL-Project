import React from 'react'


export default function ValueRange() {
  return (
    <>
    <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
        <div className="product-category-page" style={{height: 'auto'}}>
            <div className="nav-category" style={{backgroundImage: 'url(&quot;undefined&quot;)'}}>
                <div className="row mx-0 px-0">
                    <div className="navbar">
                        <div className="back-n-title"><a href="/">
                            <div className="back-btn-wrapper"><svg stroke="currentColor" fill="none" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="25"
                                    width="25" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg></div></a>
                        </div>
                        <div className="filter-icons"><a href="/login">
                                <div className="shopping-icon-wrapper">
                                    <div className="nav-side-icons shopCart-not-loggedin"><svg stroke="currentColor" fill="none"
                                            stroke-width="0" viewBox="0 0 24 24" className="cart-icon" height="25" width="25"
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
            <div className="PLP-background" style={{outline: 'none', border: 'none'}}>
                
            </div>
            <div className="sort-filter-container" style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="cat-name-wrapper">
                    <h2>Value Range</h2>
                </div>
                <div className="sort-filter-icon-wrap"
                    style={{display: 'flex', justifyContent: 'space-evenly', marginRight: '1rem'}}>
                    <div className="MuiBox-root css-wcdm6c" aria-haspopup="true"><svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-fkhoq0" focusable="false"
                            aria-hidden="true" viewBox="0 0 24 24" data-testid="SortIcon" aria-haspopup="true"
                            aria-label="Sort Products">
                            <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path>
                        </svg><span style={{fontFamily: 'OS-semibold', color: 'rgb(77, 77, 77)'}}>Sort</span></div>
                </div>
            </div>
            <div className="PLP-product-list">
                <div className="hideLoader" width="100%">
                    <div className="overlay-box"><img src="/images/JFL-logo-without-name.png" className="loaderImg"/></div>
                </div>
                <a href='/SpongeBrownie'>
                <div className="product">
                    <div className="Toastify"></div>
                    <div className="row product-warp">
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div className="col-4 pl-0 productItem-left">
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <div className="imgDiv"><img src="" alt="" className="img-fluid"/></div>
                                </div>
                            </div>
                            <div className="vegTag"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 24 24" color="#62A51C" height="20" width="20"
                                    xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(98, 165, 28)'}}>
                                    <path
                                        d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z">
                                    </path>
                                    <circle cx="12" cy="12" r="5"></circle>
                                </svg></div>
                            <div>
                                <div className="col-12 pr-0 product-desc">
                                    <div className="row align-items-center">
                                        <div className="titleHeartDiv">
                                            <div className="col-9">
                                                <h2> Sponge Brownie </h2>
                                            </div>
                                        </div>
                                        <div className="col-12 prod-desc">
                                            <p> Min. Order Quantity: <span>1 unit(s)</span> </p>
                                            <p> Estimated delivery by: <span>Jun 24, 2022</span> </p>
                                            <p>Selling unit: <span>800 gm</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="variant-priceboxes">
                            <div>
                                <div className="pricebox">
                                    <div className="pricebox__text">
                                        <p>800 gm</p><strong><span className="display-price"
                                                style={{fontFamily: 'OS-bold'}}>₹239.00</span></strong>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="pricebox">
                                    <div className="pricebox__text">
                                        <p>36 Pcs</p><strong><span className="display-price"
                                                style={{fontFamily: 'OS-bold'}}></span></strong>
                                        <div className="priceValue-div"><span><span></span></span>
                                            <p> (7 % off)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="pricebox">
                                    <div className="pricebox__text">
                                        <p>18 Pcs</p><strong><span className="display-price"
                                                style={{fontFamily: 'OS-bold'}}></span></strong>
                                        <div className="priceValue-div"><span><span></span></span>
                                            <p> (4 % off)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="counter-price-div">
                            <div className="counterBtn" style={{padding: '0px', margin: '0px'}}>
                                <div className="counter-btns qty d-flex mt-3 align-items-center justify-content-center"><button
                                        className="qtyminus" aria-hidden="true">−</button><input type="number"
                                        name="counterValue" value="0" style={{textAlign: 'center'}}/><button className="qtyplus"
                                        aria-hidden="true">+</button></div>
                            </div>
                            <div className="price-taxline-wrapper">
                                <div className="counter-price-div__displayPrice" style={{marginBottom: '0px'}}><span>₹ 239/pc
                                    </span></div>
                                <div className="taxes-line" style={{padding: '0px'}}>
                                    <p> (Prices are exclusive of taxes*)</p>
                                </div>
                            </div>
                        </div>
                        <div className="buttons-div"><a href="/login"><button className="addCart-btn">Place Order</button></a><a
                                href="/login"><button className="rs-btn" style={{width: '100%'}}>Request Sample</button></a></div>
                        <div className="sample-req-line"><span><strong>*</strong>Sample order will be delivered in next route of
                                delivery</span></div>
                    </div>
                </div>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}
