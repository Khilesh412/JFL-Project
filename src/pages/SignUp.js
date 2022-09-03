import React from 'react'
import './../assets/css/Register.css';
import image1 from './../assets/images/jubilant-foodworks-logo@2x.png'


export default function SignUp() {

    function seterror(id, error){

    }

    function validateForm(){
        var Fname = document.getElementById('fname').value;

        console.log(Fname);
        return false;
    }
  return (
    <>
    <div className="app">
        <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
            <div className="SignupScreen_container__1IpZO"><a href="/">
                    <div className="SignupScreen_homeBtn__1W2jU"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                            viewBox="0 0 1024 1024" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z">
                            </path>
                        </svg></div>
                </a>
                <div className="SignupScreen_signup__9JrBT">
                    <div className="SignupScreen_jfl-logo-img__1qI1G"><img src={image1}/></div>
                    <div className="SignupScreen_title__s1x7n">
                        <h1>Sign up <span> here </span></h1>
                    </div>
                    <div className="SignupScreen_signupForm__gGUpf">
                        <form  onSubmit={validateForm}>
                            <div className="form-group col-12"><select name="customerType" className="form-select form-control ">
                                    <option value="" disabled=""> Type</option>
                                    <option value="Affordable Casual Dine">Affordable Casual Dine</option>
                                    <option value="Cafe">Cafe</option>
                                    <option value="Caterers">Caterers</option>
                                    <option value="Central Government Entity">Central Government Entity</option>
                                    <option value="Cloud Kitchen">Cloud Kitchen</option>
                                    <option value="Desserts &amp; Ice-Creams">Desserts &amp; Ice-Creams</option>
                                    <option value="Educational Institute">Educational Institute</option>
                                    <option value="Fine Dine">Fine Dine</option>
                                    <option value="Hotels">Hotels</option>
                                    <option value="Institutional Suppliers">Institutional Suppliers</option>
                                    <option value="Petroleum Business">Petroleum Business</option>
                                    <option value="Premium Casual Dine">Premium Casual Dine</option>
                                    <option value="Pubs &amp; Bars">Pubs &amp; Bars</option>
                                    <option value="State Government Entity">State Government Entity</option>
                                    <option value="Others">Others</option>
                                </select>
                                <div className="invalid-feedback">
                                    <p> </p>
                                </div>
                            </div>
                            <div className="SignupScreen_name__zGC3Q">
                                <div className="form-group col-6"><input type="text" name="fname" id="fname"
                                        placeholder="First name*" className="form-control SignupScreen_required__3S7jz "
                                        style={{width: '95%' , borderRadius: '1rem' , paddingLeft: '10px'}}/>
                                    <div className="invalid-feedback"></div>
                                </div>
                                <div className="form-group col-6"><input type="text" name="lname" id="lname"
                                        placeholder="Last name*" className="form-control required  "
                                        style={{paddingLeft: '10px'}}/>
                                    <div className="invalid-feedback"></div>
                                </div>
                            </div>
                            <div className="form-group col-12"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                                    style={{color: 'rgb(156, 155, 155)', position: 'absolute', margin: '1rem'}}>
                                    <path
                                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                                    </path>
                                </svg><input type="text" name="email" id="email" placeholder="Email address*"
                                    className="form-control "/>
                                <div className="invalid-feedback">
                                    <p> </p>
                                </div>
                            </div>
                            <div className="form-group col-12"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 512 512" color="#9C9B9B" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{color: 'rgb(156, 155, 155)', position: 'absolute', margin: '1rem'}}>
                                    <path
                                        d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z">
                                    </path>
                                </svg><input type="text" name="companyName" placeholder="Business name*"
                                    className="form-control "/>
                                <div className="SignupScreen_company-name-msg__2CnoE"><span>Business name must be same as
                                        mentioned in GST certificate.</span></div>
                                <div className="invalid-feedback">
                                    <p> </p>
                                </div>
                            </div>
                            <div className="form-group col-12"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 448 512" color="#9C9B9B" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{color: 'rgb(156, 155, 155)', position: 'absolute', margin: '1rem'}}>
                                    <path
                                        d="M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z">
                                    </path>
                                </svg><input type="text" name="designation" placeholder="Designation*"
                                    className="form-control "/>
                                <div className="invalid-feedback"></div>
                            </div>
                            <div className="form-group col-12"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 576 512" color="#9C9B9B" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{color: 'rgb(156, 155, 155)', position: 'absolute', margin: '1rem'}}>
                                    <path
                                        d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z">
                                    </path>
                                </svg><input type="text" name="companyPan" placeholder="PAN number" className="form-control "/>
                                <div className="invalid-feedback">
                                    <p> </p>
                                </div>
                            </div>
                            <div className="form-group col-12"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 512 512" color="#9C9B9B" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{color: 'rgb(156, 155, 155)', position: 'absolute', margin: '1rem'}}>
                                    <path
                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                    </path>
                                </svg><input type="text" name="gstn" placeholder="GST number" className="form-control "/>
                                <div className="invalid-feedback">
                                    <p> </p>
                                </div>
                            </div>
                            <div className="form-group col-12"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 448 512" color="#9C9B9B" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{color: 'rgb(156, 155, 155)', position: 'absolute', margin: '1rem'}}>
                                    <path
                                        d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z">
                                    </path>
                                </svg>
                                <div className="SignupScreen_show-hide-btn__uyWKp"><svg stroke="currentColor"
                                        fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#9C9B9B" height="25"
                                        width="25" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(156, 155, 155)' ,position: 'absolute',
                                        margin: '0rem'}}>
                                        <path
                                            d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z">
                                        </path>
                                        <path
                                            d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z">
                                        </path>
                                    </svg></div><input type="password" name="Password" placeholder="Password*"
                                    className="form-control "/>
                                <div className="invalid-feedback">
                                    <p> </p>
                                </div>
                            </div>
                            <div className="form-group col-12"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 448 512" color="#9C9B9B" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{color: 'rgb(156, 155, 155)', position: 'absolute', margin: '1rem'}}>
                                    <path
                                        d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z">
                                    </path>
                                </svg>
                                <div className="SignupScreen_show-hide-btn__uyWKp"><svg stroke="currentColor"
                                        fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#9C9B9B" height="25"
                                        width="25" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(156, 155, 155)',position: 'absolute',
                                        margin: '0rem'}}>
                                        <path
                                            d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z">
                                        </path>
                                        <path
                                            d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z">
                                        </path>
                                    </svg></div><input type="password" name="confirmPassword"
                                    placeholder="Confirm Password*" className="form-control "/>
                                <div className="invalid-feedback">
                                    <p> </p>
                                </div>
                            </div>
                            <div className="form-group col-12" style={{marginBottom: '0px'}}><svg stroke="currentColor"
                                    fill="currentColor" stroke-width="0" viewBox="0 0 320 512" color="#9C9B9B" height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg"
                                    style={{color: 'rgb(156, 155, 155)', position: 'absolute', margin: '1rem'}}>
                                    <path
                                        d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z">
                                    </path>
                                </svg><input type="text" name="Mobile" placeholder="Mobile Number*" className="form-control "/>
                                <div className="invalid-feedback">
                                    <p> </p>
                                </div>
                                <div className="valid-feedback">
                                    <p>Mobile number verified</p>
                                </div>
                                <div className="SignupScreen_sendOtp__3S9d-">
                                    <p>Send OTP</p>
                                </div>
                            </div>
                            <div className="SignupScreen_self-registration-div__2_N13" style={{marginBottom: '1rem'}}><label>Are
                                    you registering through our Sales Executive?</label>
                                <div className="radio-wrapper">
                                    <div style={{marginRight: '1.5rem'}}><span
                                            className="MuiButtonBase-root MuiIconButton-root jss1 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary"
                                            aria-disabled="false"><span className="MuiIconButton-label"><input className="jss5"
                                                    name="register-type" type="radio" value="Yes"/><svg stroke="currentColor"
                                                    fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                                    color="#707070" height="1em" width="1em"
                                                    xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(112, 112, 112)'}}>
                                                    <path
                                                        d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z">
                                                    </path>
                                                </svg></span><span
                                                className="MuiTouchRipple-root"></span></span><label>Yes</label></div>
                                    <div style={{marginRight: '1.5rem'}}><span
                                            className="MuiButtonBase-root MuiIconButton-root jss1 MuiRadio-root MuiRadio-colorSecondary jss2 Mui-checked MuiIconButton-colorSecondary"
                                            aria-disabled="false"><span className="MuiIconButton-label"><input className="jss5"
                                                    name="register-type" type="radio" value="No" checked=""/><svg
                                                    stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 512 512" color="#d2112c" height="1em" width="1em"
                                                    xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(210, 17, 44)'}}>
                                                    <path
                                                        d="M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z">
                                                    </path>
                                                </svg></span><span
                                                className="MuiTouchRipple-root"></span></span><label>No</label></div>
                                </div>
                            </div>
                            <div className="SignupScreen_fieldsWarning__1LMYo">
                                <p>*Marked fields are mandatory.</p>
                            </div><button type="submit" value="Submit" class="but">Sign Up ➔</button>
                            <div className="SignupScreen_bottomLinkDiv__1v65r"><a href="/login"><span
                                        className="SignupScreen_loginLink__113IW">Already a user? <span> Log in
                                        </span></span></a></div>
                            <div className="SignupScreen_unable-to-signup__VW0qR"><span
                                    className="SignupScreen_contact-link__3-r-p">Unable to Sign up?</span></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
