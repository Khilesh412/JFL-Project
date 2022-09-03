import React from 'react'
import Demo from './Demo';
import './../assets/css/ChangePassword.css';

export default function ChangePassword() {
  return (
    <>
    <div class="MuiContainer-root app__container MuiContainer-maxWidthLg">
        <div>
            <div class="NavCheckout_navbar__3Ly9V">
                <div class="NavCheckout_back-btn-div__2KGYR"><a href='/'><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                        viewBox="0 0 1024 1024" color="#fff" height="30" width="30" xmlns="http://www.w3.org/2000/svg"
                        style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                        <path
                            d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                        </path>
                    </svg></a><span className='span2'> Change Password </span></div>
                    <Demo/>
            </div>
            <div id="sidenavDiv"></div>
        </div>
        <div class="CP-container">
            <div class="changePasswordForm">
                <form>
                    <div class="form-group">
                        <div class="show-hide-btn"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                viewBox="0 0 24 24" color="#707070" height="25" width="25"
                                xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(112, 112, 112)'}}>
                                <path
                                    d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z">
                                </path>
                                <path
                                    d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z">
                                </path>
                            </svg></div><input type="password" placeholder="Old Password" name="oldPassword"
                            class="form-control "/>
                        <div class="invalid-feedback">
                            <p>Old Password is required</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="show-hide-btn"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                viewBox="0 0 24 24" color="#707070" height="25" width="25"
                                xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(112, 112, 112)'}}>
                                <path
                                    d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z">
                                </path>
                                <path
                                    d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z">
                                </path>
                            </svg></div><input type="password" placeholder="Enter New Password" name="Password"
                            class="form-control "/>
                        <div class="invalid-feedback">
                            <p> </p>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="show-hide-btn"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                viewBox="0 0 24 24" color="#707070" height="25" width="25"
                                xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(112, 112, 112)'}}>
                                <path
                                    d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z">
                                </path>
                                <path
                                    d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z">
                                </path>
                            </svg></div><input type="password" placeholder="Confirm New Password" name="confirmPassword"
                            class="form-control "/>
                        <div class="invalid-feedback">
                            <p></p>
                        </div>
                    </div><button type="submit"> Change Password➔ </button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
