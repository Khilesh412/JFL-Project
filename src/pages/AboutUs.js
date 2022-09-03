import React from 'react'
import './../assets/css/AboutUs.css';
import image1 from './../assets/images/jubilant-foodworks-logo@2x.png'
import Accordion from 'react-bootstrap/Accordion'
import Demo from './Demo';
import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2';

export default function AboutUs() {
  return (
    <>
        <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
            <div>
                <div>
                    <div className="NavCheckout_navbar__3Ly9V">
                        <div className="NavCheckout_back-btn-div__2KGYR"><Link to="/"><svg stroke="currentColor"
                                    fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30"
                                    width="30" xmlns="http://www.w3.org/2000/svg"
                                    style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                                    <path
                                        d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                                    </path>
                                </svg></Link><span className='span2'> About Us </span></div>
                                <Navbar2/>
                    </div>
                    <div id="sidenavDiv"></div>
                </div>
                <div className="AboutUsScreen_logoDiv__Vy28c"><img src={image1} /></div>
                <div className="AboutUsScreen_settingOptions__OHsEs">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <h2 className="AboutUsScreen_accord-header__3mFUw accordion-header"><svg
                                            stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 1024 1024" color="black" height="20" width="20"
                                            xmlns="http://www.w3.org/2000/svg" style={{color: 'black', marginRight: '5px'}}>
                                            <path
                                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                                            </path>
                                            <path
                                                d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z">
                                            </path>
                                        </svg><strong> About Us</strong></h2>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="AboutUsScreen_accord-body__Lr85g accordion-body"
                                        style={{backgroundColor: 'rgb(241, 240, 238)'}}>
                                        <p>With a mission to serve businesses better with prompt and contactless delivery of
                                            frozen
                                            bakery range, Jubilant FoodWorks Limited has launched its latest offering, a
                                            commerce
                                            application where businesses can order our bakery and other products with just a
                                            tap.
                                            All products are made with utmost care, adhering to stringent hygiene and safety
                                            measures, at our state-of-the-art facility at Greater Noida and come with FSSC
                                            22000 V5
                                            and ISO 22000:2018 certifications. Our delivery vans are regularly sanitised and
                                            all our
                                            staff follow uncompromised safety guidelines.</p>
                                        <p>These products include but not limited chocolate brownies, blueberry muffins,
                                            oats
                                            cookies, red velvet pastries, celebration cakes, Belgian fudge brownies and are
                                            available in NCR.</p>
                                        <div className="AboutUsScreen_contact-details__64PfB"><strong>How to reach
                                                us:</strong>
                                            <div><span>Call on: </span><a href="tel:+91 9958310895"><span>+91
                                                        9958310895</span></a>
                                            </div>
                                            <div><span>Mail to us at: </span> <a
                                                    href="mailto:foodservice.customercare@jublfood.com"><span>foodservice.customercare@jublfood.com
                                                    </span></a></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <h2 className="AboutUsScreen_accord-header__3mFUw accordion-header"><svg
                                            stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 1024 1024" color="black" height="20" width="20"
                                            xmlns="http://www.w3.org/2000/svg" style={{color: 'black', marginRight: '5px'}}>
                                            <path
                                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                                            </path>
                                            <path
                                                d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z">
                                            </path>
                                        </svg><strong> About Jubilant FoodWorks</strong></h2>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="AboutUsScreen_accord-body__Lr85g accordion-body"
                                        style={{backgroundColor: 'rgb(241, 240, 238)'}}>
                                        <p>Jubilant FoodWorks Limited (JFL/Company) is part of the Jubilant Bhartia Group
                                            and is
                                            India's largest food service Company. The Company holds the master franchise
                                            rights for
                                            three international brands, Domino's Pizza, Dunkin' Donuts and
                                            Popeyes®addressing three
                                            different food market segments. The Company launched its first homegrown brand –
                                            Hong's
                                            Kitchen in Chinese cuisine segment &amp; has also begun offering brand-owned
                                            ready-to-cook range of sauces, gravies and pastes, 'ChefBoss'. The Company also
                                            entered
                                            into the exciting world of Biryanis with the launch of "Ekdum!". It offers the
                                            widest
                                            range of Biryanis curated from various parts of India using authentic
                                            ingredients along
                                            with extensive range of Kebabs, Curries, Breads, Desserts and Beverages.</p>
                                        <p> The Company currently operates more than 1,500 outlets for Domino's Pizza,
                                            Dunkin'
                                            Donuts and Hong's Kitchen and is a market leader in pizza segment. The Company
                                            has more
                                            than 30,000 brand ambassadors committed to deliver value to its customers. The
                                            Company
                                            currently operates more than 1,435 outlets for Domino's Pizza, Dunkin' Donuts
                                            and Hong's
                                            Kitchen and is a market leader in pizza segment. The Company has more than
                                            30,000 brand
                                            ambassadors committed to deliver value to its customers.</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <h2 className="AboutUsScreen_accord-header__3mFUw accordion-header"><svg
                                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                            stroke-linecap="round" stroke-linejoin="round" color="black" height="20"
                                            width="20" xmlns="http://www.w3.org/2000/svg"
                                            style={{color: 'black', marginRight: '5px'}}>
                                            <path
                                                d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3">
                                            </path>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg><strong>Terms and Conditions</strong></h2>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="AboutUsScreen_tnc-body__1SyXd accordion-body"
                                        style={{backgroundColor: 'rgb(241, 240, 238)'}}><span
                                            className="AboutUsScreen_accord-span__rmjK0">These Terms form part of the Buyer
                                            Enrolment
                                            Form for Jubilant Food Service Vertical by Jubilant ("Form") and constitute a
                                            legally
                                            binding agreement made between you, whether personally or on behalf of an entity
                                            (the
                                            'Buyer'), and Jubilant Food works Private Limited and its Affiliates
                                            (collectively,
                                            "JFL"), regarding use of Jubilant Food Service Vertical Platform (as defined
                                            below) for
                                            the purchase of Goods (as defined below) by the Buyer from JFL. Sale of any
                                            Goods is
                                            expressly conditioned on Buyer’s assent to these Terms and Conditions and
                                            completion of
                                            KYC process as required by JFL...</span><a href="/terms-and-conditions">
                                            <p>Read more</p>
                                        </a></div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <h2 className="AboutUsScreen_accord-header__3mFUw accordion-header"><svg
                                            stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 1024 1024" color="black" height="20" width="20"
                                            xmlns="http://www.w3.org/2000/svg" style={{color: 'black', marginRight: '5px'}}>
                                            <path
                                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                                            </path>
                                            <path
                                                d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z">
                                            </path>
                                        </svg><strong> Privacy Policy</strong></h2>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="AboutUsScreen_pp-body__fnSVP accordion-body"
                                        style={{backgroundColor: 'rgb(241, 240, 238)'}}><span
                                            className="AboutUsScreen_accord-span__rmjK0">This Privacy Policy (“Policy”)
                                            describes the
                                            policies and procedures on the collection, use, disclosure and protection of
                                            your
                                            information that you may provide when you use our Website or Platform or mobile
                                            application made available by Jubilant Foodworks Limited (“JFL”, “Company”,
                                            “we”, “us”
                                            and “our”), a company incorporated under Companies Act 1956 and having its
                                            registered
                                            office at Plot No. 1A, Sector 16A, Noida UP 201301...&nbsp;</span><a
                                            href="/privacy-policy">
                                            <p>Read full privacy policy</p>
                                        </a></div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                </div>
            </div>
        </div>

    </>
  )
}
