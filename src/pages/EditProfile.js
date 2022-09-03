import React from 'react'
import { Link } from 'react-router-dom';
import './../assets/css/Profile.css';
import Demo from './Demo';

export default function EditProfile() {
  return (
    <>
    <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
    <div className="hideLoader" width="100%">
        <div className="overlay-box"><img src="/images/JFL-logo-without-name.png" className="loaderImg"/></div>
    </div>
    <div className="edit-profile-container">
        <div>
            <div className="NavCheckout_navbar__3Ly9V">
                <div className="NavCheckout_back-btn-div__2KGYR"><Link to='/Profile'><svg stroke="currentColor" fill="currentColor"
                        stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30" width="30"
                        xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                        <path
                            d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                        </path>
                    </svg></Link><span className='span2'> Edit Profile </span></div>
                    <Demo/>
            </div>
            <div id="sidenavDiv"></div>
        </div>
        <div className="userDp-div"><span>Dinesh Karthik</span>
            <p style={{marginBottom: '0px'}}>Product manager</p>
            <p style={{marginBottom: '0px'}}>TruckX Technologies</p>
            <p><strong style={{fontSize: '1rem'}}>Customer Id:</strong> 1000000136</p>
        </div><span className="form-title"> Primary Information</span>
        <div className="profile-edit-form">
            <form>
                <div className="form-input-group">
                    <div className="input-group-1">
                        <div className="form-group col-12"><label className="input-name-label">First
                                name<span>*</span></label><input type="text" name="fname" id="fname"
                                className="form-control " style={{width: '95%', borderRadius: '1rem'}}/>
                            <div className="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                        <div className="form-group col-12"><label className="input-name-label">Last
                                name<span>*</span></label><input type="text" name="lname" id="lname"
                                className="form-control "/>
                            <div className="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                        <div className="form-group col-12"><label
                                className="input-name-label">Designation<span>*</span></label><input type="text"
                                name="designation" className="form-control "/>
                            <div className="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                        <div className="form-group col-12"><label className="input-name-label">Primary email
                                address<span>*</span></label><input type="text" name="email" className="form-control "
                                readonly=""/>
                            <div className="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                        <div className="form-group col-12"><label className="input-name-label">Secondary email
                                address</label><input type="text" name="email2" id="email2" className="form-control "
                                style={{width: '95%', borderRadius: '1rem'}}/>
                            <div className="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                    </div>
                    <div className="input-group-2">
                        <div className="form-group col-12"><label className="input-name-label">Mobile
                                number<span>*</span></label><input type="text" name="mobile" className="form-control "/>
                            <div className="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                        <div className="form-group col-12"><label className="input-name-label">Secondary Mobile/Telphone
                                number</label><input type="text" name="mobile2" className="form-control "/>
                            <div className="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                        <div className="form-group col-12"><label className="input-name-label">Business
                                name<span>*</span></label><input type="text" name="companyName" className="form-control "/>
                            <div className="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                        <div className="form-group col-12"><label className="input-name-label">Business
                                type<span>*</span></label><input type="text" name="companyType" className="form-control "
                                readonly=""/>
                            <div> </div>
                            <div className="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-cc"><span>Note: For changing your primary email address, please contact<a
                            href="/contact-us"> customer care.</a></span></div>
                <div className="update-btn-div"><button type="submit">Update</button></div>
            </form>
        </div>
    </div>
</div>
    </>
  )
}
