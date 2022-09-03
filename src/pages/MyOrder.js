import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import image1 from './../assets/images/jubilant-foodworks-logo@2x.png'
import './../assets/css/MyOrder.css';
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import Demo from './Demo';
import Navbar2 from '../components/Navbar2';


export default function MyOrder() {
  return (
    <>
      <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
        <div>
            <div>
                <div className="NavCheckout_navbar__3Ly9V"><a href="/">
                    <div className="NavCheckout_back-btn-div__2KGYR"><svg stroke="currentColor" fill="currentColor"
                            stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30" width="30"
                            xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                            <path
                                d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                            </path>
                        </svg><span className='span2'> My Orders </span></div></a>
                        <Navbar2/>
                </div>
                <div id="sidenavDiv"></div>
            </div><Link to="/OrderDetails">
                <div className="OrdersProduct_ordersProduct__ovziN">
                    <div className="OrdersProduct_productImage__2-ZEr"><img
                            src="https://i.ibb.co/PZQnzxG/Double-Chocolatet-Slab-removebg-preview-1.png"/></div>
                    <div className="OrdersProduct_productDesc__2DCpT">
                        <h4> Order ID: 00002116</h4>
                        <h6> Order | 2022-06-30 </h6>
                        <div className="OrdersProduct_status__1ExpA">
                            <p className="OrdersProduct_itemCount__3RtrO"> Items: 2</p>
                            <p className="OrdersProduct_isDelivered__rpHbY" style={{color: 'rgb(210, 17, 44)'}}>Cancelled</p>
                        </div>
                    </div>
                    <div className="OrdersProduct_moreIcon__2I74Y"><svg stroke="currentColor" fill="currentColor"
                            stroke-width="0" viewBox="0 0 1024 1024" height="23" width="23"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z">
                            </path>
                        </svg></div>
                </div>
            </Link>
        </div>
    </div>
    </>

  )
}
