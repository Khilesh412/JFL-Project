import React from 'react'
import Navbar2 from '../components/Navbar2'
import Accordion from 'react-bootstrap/Accordion'
import './../assets/css/Faqs.css';
import { Link } from 'react-router-dom';

export default function ShoppingFAQS() {
  return (
    <>
        <div class="MuiContainer-root app__container MuiContainer-maxWidthLg">
            <div class="fo-container">
                <div>
                    <div class="NavCheckout_navbar__3Ly9V">
                        <div class="NavCheckout_back-btn-div__2KGYR"><Link to='/FAQs'><svg stroke="currentColor" fill="currentColor"
                                stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30" width="30"
                                xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                                <path
                                    d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                                </path>
                            </svg></Link><span className='span2'> FAQs: Shopping </span></div>
                            <Navbar2/>
                    </div>
                    <div id="sidenavDiv"></div>
                </div>
                <div class="orders-qna">
                <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            What does ‘Out of Stock’ mean?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Stocks is currently unavailable                 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Is it necessary to have an account to shop on
                                    JFL?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Yes we are B2B only business , to do business with us it is necessary to have required
                                    documentation , your account is confirmation of the same                 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Does JFL deliver internationally?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            No, not for this business               
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Can I get customization done on my order
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            yes, you can, there is a defined MOQ for each item and 100% advance against the order is
                                    required for the development. You may raise a request on customer care ID            
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    </>
  )
}
