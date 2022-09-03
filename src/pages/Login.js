import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import image1 from './../assets/images/jubilant-foodworks-logo@2x.png'
import './../assets/css/Profile.css';
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Login() {
    const [text1, setText1] = useState();
    const [text2, setText2] = useState();
  
    const handleChange =(event)=>{
      console.log(text1);
      setText1(event.target.value)
    }

  return (
    <>
    <div class="MuiContainer-root app__container MuiContainer-maxWidthLg">
        {/* <div class="LoginScreen_hideLoader__TFo5q" width="100%">
            <div class="LoginScreen_overlay-box__2gcPr"><img src="images/JFL-logo-without-name.png"/></div>
        </div> */}
        <div class="LoginScreen_container__njD8x">
            <div class="Toastify"></div>
            <div class="LoginScreen_loginScreen__2om0T"><a href="/">
                    <div class="LoginScreen_homeBtn__3x62g"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                            viewBox="0 0 1024 1024" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z">
                            </path>
                        </svg></div>
                </a>
                <div class="LoginScreen_loginForm__1ZuZ_"><img src={image1}/>
                    <div class="LoginScreen_logoTitle__1o0_4"></div>
                    <form>
                        <div class="form-group col-12"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                viewBox="0 0 512 512" color="#9C9B9B" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{color: 'rgb(156, 155, 155)', position: 'absolute', margin: '1rem', zIndex: '1'}}>
                                <path
                                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                                </path>
                            </svg><input type="text" name="email" id="email" placeholder="Email  " class="form-control "
                                style={{paddingLeft: '80px'}}/>
                            <div class="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                        <div class="form-group col-12"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                viewBox="0 0 448 512" color="#9C9B9B" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{color: 'rgb(156, 155, 155)', position: 'absolute', margin: '1rem', zIndex: '1'}}>
                                <path
                                    d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z">
                                </path>
                            </svg>
                            <div class="LoginScreen_show-hide-btn__2i4UK"><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" viewBox="0 0 24 24" color="#7E818B" height="25" width="25"
                                    xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(126, 129, 139)'}}>
                                    <path
                                        d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z">
                                    </path>
                                    <path
                                        d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z">
                                    </path>
                                </svg></div><input type="password" name="password" placeholder="Password"
                                class="form-control " style={{paddingLeft: '80px'}}/>
                            <div class="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                        <div class="LoginScreen_rememberDiv__Poig0">
                            <div class="LoginScreen_rememberMe__3LSWq"><span
                                    style={{color: 'rgb(93, 93, 93)', fontFamily: 'MontserratSemibold'}}> <span
                                        class="MuiButtonBase-root MuiIconButton-root jss1 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary"
                                        aria-disabled="false" sx="[object Object]" style={{padding: '0px'}}><span
                                            class="MuiIconButton-label"><input class="jss4" type="checkbox"
                                                data-indeterminate="false" value=""/><svg class="MuiSvgIcon-root"
                                                focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                                                </path>
                                            </svg></span><span class="MuiTouchRipple-root"></span></span> Remember me
                                </span></div><span style={{cursor: 'pointer'}}> Forgot Password?</span>
                        </div>
                        <div class="LoginScreen_login-btn-wrapper__WJO1D"><button type="submit">Login ➔ </button></div>
                        <div style={{display: 'flex', justifyContent: 'center'}}><a href="/register"><span
                                    class="LoginScreen_signupLink__17MQE">New here ? <span> Signup. </span></span></a></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
