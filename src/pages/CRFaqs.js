import React from 'react'
import Navbar2 from '../components/Navbar2'
import Accordion from 'react-bootstrap/Accordion'
import './../assets/css/Faqs.css';
import { Link } from 'react-router-dom';

export default function CRFaqs() {
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
                            </svg></Link><span className='span2'> Cancel &amp; Returns </span></div>
                            <Navbar2/>
                    </div>
                    <div id="sidenavDiv"></div>
                </div>
                <div class="orders-qna">
                <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            I have a complaint about the delivery guy who came to
                                    deliver my order.
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Please raise it as complaint in our customer feedback segment , we will address the same               
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            How can I cancel my order?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            You can go to "My orders" screen from Left menu, select the order which you need to cancel,
                                    and by clicking on the "Cancel" order button your order will get cancelled.               
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            By When can I can cancel my Order ?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            You can cancel your Order before "Invoice" creation.               
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            How long does it take to cancel an Order ?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            less than 5 min              
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Can Jubilant FoodWorks cancel any order?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Yes in case of unavoidable circumstances your order can be cancelled , you would be
                                    intimated accordingly              
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Can I return the product delivered to me?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Yes you can if it has visible Quality concern until 7 days after receipt of stocks              
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            How do I know if my order is eligible for
                                    return?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Any order is eligible for return if it has a quality concern              
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            What is the procedure to return a product ?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            You can go to "My orders" screen from Left menu, select the order which you need to Return,
                                    and by clicking on the "Return" button your order will get returned.              
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Can I return the order if I received a different variant
                                    of the product ?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Yes , you can do it against delivery , that’s the reason we request you to verify stocks at
                                    the time of receipt              
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            What should I do if I find the package open or tampered
                                    on delivery?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            you feel it has possibility of not being in best shape , please return it at the time of
                                    delivery only              
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="10">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            What should I do if there are taste, colour, or
                                    weight-related issues with the product I bought from JFL?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            This is a Quality concern , please return it within 7 days of receipt            
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="11">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            When I can get refund of my Cancelled order?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Within 7 days of cancelation approval           
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="12">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            When I can get my refund once the order has been
                                    returned.
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Within 7 days           
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="13">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            How can I know the status of my refund?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            You would receive communication about the same       
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="14">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Under what circumstances are cancellations done?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Yes, we reserve the right to cancel any order under the following circumstances:

                                    # Incorrect or Incomplete information regarding Customer’s address (Street number, Landmark,
                                    etc.), etc.
                                    # In case of wrong product price or specification mentioned on Application / Website.
                                    # Unavailability of products – In exceptional cases, if a product runs out of stock, the
                                    product will be canceled; however, the remaining products of the order will be delivered.
                                    # If the area in which the customer is residing is not served by us or made Out of Delivery
                                    area by Logistic Courier Partner even after placing the order.
                                    # Suspected fraudulent information.     
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="15">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            I have requested a replacement, when will I get
                                    it?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            We
                                    don’t do replacement , we refund the cost paid. Please raise fresh invoice in case of
                                    requirements    
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="16">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            If I have ordered many items, can I return one or more
                                    items or do I have to return the entire order?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            You can do partial return if there are quality related concern   
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="17">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            What is JFL Returns policy?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            In
                                    case the product you received is 'Damaged' or 'Defective' you can easily request to return  
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="18">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Can I return the items after the policy period?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            NO  
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="19">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            What should I do if I have an issue with my product after
                                    the return policy period?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Its your inventory , you will have to decide
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="20">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            Do I have to return the free gift when I return a
                                    product?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            Yes
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="21">
                        <h2 class="accordion-header">
                            <Accordion.Header>
                            I have requested for a return of my item. When will it
                                    happen?
                            </Accordion.Header></h2>
                            <Accordion.Body style={{backgroundColor: 'rgb(241, 240, 238)', fontSize: '0.85rem'}}>
                            As
                                    per next scheduled delivery on your market route
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    </>
  )
}
