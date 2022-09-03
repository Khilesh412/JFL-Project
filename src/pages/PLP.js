import React from 'react'
import './../assets/css/PLP2.css';

export default function PLP() {
  return (
    <>
    <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
        <div classnamename="search-product-container">
            <div>
                <div className="NavCheckout_navbar__3Ly9V">
                    <div className="NavCheckout_back-btn-div__2KGYR"><a href="/"><svg stroke="currentColor" fill="currentColor"
                            stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30" width="30"
                            xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                            <path
                                d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                            </path>
                        </svg></a><span> Search Products </span></div><svg stroke="currentColor" fill="none" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="#fff" height="30"
                        width="30" xmlns="http://www.w3.org/2000/svg"
                        style={{color: 'rgb(255, 255, 255)', marginBottom: '0.45rem'}}>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
                <div id="sidenavDiv"></div>
            </div>
            <div className="input-group flex-nowrap search-box"><span className="input-group-text" id="addon-wrapping"><svg
                        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#2d2d2d"
                        height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(45, 45, 45)'}}>
                        <path
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                        </path>
                    </svg></span><input type="text" className="form-control" placeholder="Search products..."
                    aria-label="search-products" aria-describedby="addon-wrapping" value=""/>
                <div className="close-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                        viewBox="0 0 1024 1024" color="#5d5d5d" height="20" width="20" xmlns="http://www.w3.org/2000/svg"
                        style={{color: 'rgb(93, 93, 93)'}}>
                        <path
                            d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
                        </path>
                    </svg></div>
            </div>
            <div className="product-list"><a href="/DoubleChoclateBrownie">
                    <div className="SearchTile_search-tile__3PcJs">
                        <div className="SearchTile_search-img__2jYfP"><img
                                src="https://i.ibb.co/72cfBN9/Chocolate-Brownie-removebg-preview.png" alt=""/></div>
                        <div className="SearchTile_search-desc__CoL1Z">
                            <h5>Double Chocolate Brownie</h5><button>Brownie</button>
                            <p>Rich and gooey chocolate brownie made using the be...</p>
                        </div>
                    </div>
                </a><a href="/ChoclateCookies">
                    <div className="SearchTile_search-tile__3PcJs">
                        <div className="SearchTile_search-img__2jYfP"><img
                                src="https://i.ibb.co/4MjyxFT/Chocolate-Cookies-1-min-removebg-preview-1.png" alt=""/></div>
                        <div className="SearchTile_search-desc__CoL1Z">
                            <h5>Chocolate Cookie</h5><button>American Style Cookie</button>
                            <p>Decadent and crunchy chocolate cookie with choco-c...</p>
                        </div>
                    </div>
                </a><a href="/SpongeBrownie">
                    <div className="SearchTile_search-tile__3PcJs">
                        <div className="SearchTile_search-img__2jYfP"><img src="" alt=""/></div>
                        <div className="SearchTile_search-desc__CoL1Z">
                            <h5>Sponge Brownie</h5><button>Value Range</button>
                            <p>No description present</p>
                        </div>
                    </div>
                </a><a href="/ChocolateMuffin">
                    <div className="SearchTile_search-tile__3PcJs">
                        <div className="SearchTile_search-img__2jYfP"><img
                                src="https://i.ibb.co/fpbssmV/Chocolate-Muffin-2-removebg-preview.png" alt=""/></div>
                        <div className="SearchTile_search-desc__CoL1Z">
                            <h5>Chocolate Muffin</h5><button>Muffin</button>
                            <p>Rich chocolate muffin with chocoalte chunks, best ...</p>
                        </div>
                    </div>
                </a><a href="/BlueberryMuffin">
                    <div className="SearchTile_search-tile__3PcJs">
                        <div className="SearchTile_search-img__2jYfP"><img
                                src="https://i.ibb.co/dGTZYyN/Blueberry-Muffin-2-removebg-preview.png" alt=""/></div>
                        <div className="SearchTile_search-desc__CoL1Z">
                            <h5>Blueberry Muffin</h5><button>Muffin</button>
                            <p>Soft muffins made using fresh blueberry crush for ...</p>
                        </div>
                    </div>
                </a><a href="/NuttyWalnutBrownie">
                    <div className="SearchTile_search-tile__3PcJs">
                        <div className="SearchTile_search-img__2jYfP"><img
                                src="https://i.ibb.co/VMyLcrg/Walnut-Brownie-2-removebg-preview.png" alt=""/></div>
                        <div className="SearchTile_search-desc__CoL1Z">
                            <h5>Nutty Walnut Brownie</h5><button>Brownie</button>
                            <p>Rich and decadent chocolate bronwie made using the...</p>
                        </div>
                    </div>
                </a><a href="/VanillaMuffin">
                    <div className="SearchTile_search-tile__3PcJs">
                        <div className="SearchTile_search-img__2jYfP"><img
                                src="https://i.ibb.co/wyMR7v5/Vanilla-Muffin-2-copy-removebg-preview.png" alt=""/></div>
                        <div className="SearchTile_search-desc__CoL1Z">
                            <h5>Vanilla Muffin</h5><button>Muffin</button>
                            <p>Classic vanilla muffin with soft texture and authe...</p>
                        </div>
                    </div>
                </a><a href="/RedVelvetPastry">
                    <div className="SearchTile_search-tile__3PcJs">
                        <div className="SearchTile_search-img__2jYfP"><img
                                src="https://i.ibb.co/W3nZpGv/Red-Velvet-Pastry2-removebg-preview.png" alt=""/></div>
                        <div className="SearchTile_search-desc__CoL1Z">
                            <h5>Red Velvet Pastry</h5><button>Pastries</button>
                            <p>No description present</p>
                        </div>
                    </div>
                </a><a href="/OatsAndRaisinCookie">
                    <div className="SearchTile_search-tile__3PcJs">
                        <div className="SearchTile_search-img__2jYfP"><img
                                src="https://i.ibb.co/hLCk3NQ/Oats-Cookie-removebg-preview-1.png" alt=""/></div>
                        <div className="SearchTile_search-desc__CoL1Z">
                            <h5>Oats and Raisin Cookie</h5><button>American Style Cookie</button>
                            <p>Large chunky cookie with the goodness of oats and ...</p>
                        </div>
                    </div>
                </a></div>
        </div>
        <div className="network-bar-wrapper"></div>
    </div>
    </>
  )
}
