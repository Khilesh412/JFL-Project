import React from 'react'
import Navbar2 from '../components/Navbar2'
import Accordion from 'react-bootstrap/Accordion'
import './../assets/css/Faqs.css';
import { Link } from 'react-router-dom';

export default function PaymentFaqs() {
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
                        </svg></Link><span className='span2'> FAQs: Payment </span></div>
                        <Navbar2/>
                </div>
                <div id="sidenavDiv"></div>
            </div>
            <div class="orders-qna">
            <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            My payment process was interrupted. What should I
                                do?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Please check with your bank on status , most such cases refund is been made since we
                                Merchant don’t claim said amount                 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            How can I pay for an order?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            As
                                per all available options in our payment page              
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Can I use Credit/Debit card or Net banking to pay on JFL
                                through my mobile?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Yes you can           
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            How do I pay using a credit or debit card?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Please follow instructions while you initiate process of payment     
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Can I use any Cheque to pay?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            You can raise the request , there is evaluation process and post the same you would be
                                informed accordingly    
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            What all card information does JFL store?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Nothing   
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Is it safe to use my credit or debit card?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Yes completely
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Can I use Cash on Delivery (CoD) payment option for every
                                product I buy on JFL?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Yes you can
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            What steps does JFL take to prevent card fraud?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            All best available mechanism
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            How can I order for large quantities of the product as
                                part of a corporate order?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            You can raise request through customer care email id
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="10">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            What is JFL’s EMI payment option?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            We
                                don’t have any such option , please check with your bank
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="11">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            How do I make a payment using JFL credit card EMI
                                option?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            We
                                don’t have our own credit card
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="12">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Can I get credit from JFL
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            JFL can extend credit depending upon certain requirement fulfilment , please raise request
                                over customer care ID
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
            </div>
        </div>
    </div>
    </>
  )
}
