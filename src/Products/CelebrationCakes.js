import React from 'react'


export default function CelebrationCakes() {
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
                <div class="PLP-background__img"><img src="https://i.ibb.co/xDN5Zmz/Cake-Shot.jpg"/></div>
            </div>
            <div class="sort-filter-container" style={{display: 'flex', justifyContent: 'space-between'}}>
                <div class="cat-name-wrapper">
                    <h2>Celebration Cakes</h2>
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
            <div class="no-products-div"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                    color="#bebebe" height="80" width="80" xmlns="http://www.w3.org/2000/svg"
                    style={{color: 'rgb(190, 190, 190)'}}>
                    <path
                        d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1H4.98zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z">
                    </path>
                </svg><span>No Products</span></div>
        </div>
        <div class="network-bar-wrapper"></div>
    </div>
  </>
    
  )
}
