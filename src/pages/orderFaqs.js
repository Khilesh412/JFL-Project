import React from 'react'
import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import Accordion from 'react-bootstrap/Accordion'
import './../assets/css/Faqs.css';

export default function 
() {
  return (
    <>
        <div class="MuiContainer-root app__container MuiContainer-maxWidthLg">
            <div class="fo-container">
                <div>
                    <div class="NavCheckout_navbar__3Ly9V">
                        <div class="NavCheckout_back-btn-div__2KGYR"><Link to="/FAQs"><svg stroke="currentColor" fill="currentColor"
                                stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30" width="30"
                                xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                                <path
                                    d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                                </path>
                            </svg></Link><span className='span2'> FAQs: Orders </span></div>
                            <Navbar2/>
                    </div>
                    <div id="sidenavDiv"></div>
                </div>
                <div class="orders-qna">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                                How can I track my order?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                                you can simply go to the “My Orders" and track the order option available on our PWA.                  
                            </Accordion.Body>
                        </Accordion.Item>
                    
                        <Accordion.Item eventKey="1">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                                How long it takes to deliver the Order?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                                1 to 3 days                 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                                I missed the delivery of my order today so what can I donow?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                                Place fresh Order , your advance would get refunded to you within 7 working days             
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                                Can I accept the package after checking the contents inside it?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                                Yes we request you to do so, because once stocks are accepted and acknowledged , we won't any return or refund any refund request unless quality concern           
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            What should I do if my order is approved but not yet
                                    dispatched for a long time?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Please raise complaint at our customer care email id providing details of your name, order
                                    data , customer number, order value    
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Will the delivery be re-attempted if I’m not able to
                                    collect my order the first time?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            No   
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Can I change the delivery time for my order?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            We
                                    do not provide options of choosing time for delivery
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                                Can I prepone or postpone the date of delivery?Can I change the delivery time for my order?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                                Yes you can , it is paid option
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                                I found the package open and the product seal broken.
                                    What should I do?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                                Please return if you feel there could be possible harm to the product immediately
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Will I receive a call before JFL attempts to deliver
                                    package at my place?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            No, you would be intimated possible time schedule of delivery , please assign someone to acknowledge in case you are not available
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    </>
  )
}
