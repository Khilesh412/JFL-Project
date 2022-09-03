import React from 'react'
import { Link } from 'react-router-dom'

export default function AddNewAddress() {
  return (
    <>
    <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
        <div className="AddNewAddress_hideLoader__1ScWN" width="100%">
            <div className="AddNewAddress_overlay-box__3_CVN"><img src="images/JFL-logo-without-name.png"/></div>
        </div>
        <div>
            <div>
                <div className="NavCheckout_navbar__3Ly9V">
                    <div className="NavCheckout_back-btn-div__2KGYR"><Link to='/address'><svg stroke="currentColor" fill="currentColor"
                            stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30" width="30"
                            xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                            <path
                                d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                            </path>
                        </svg> </Link><span className='span2'> Add New Address </span></div><svg stroke="currentColor" fill="none" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="#fff" height="30"
                        width="30" xmlns="http://www.w3.org/2000/svg"
                        style={{color: 'rgb(255, 255, 255)', marginBottom: '0.45rem'}}>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
                <div id="sidenavDiv"></div>
            </div>
            <div className="AddNewAddress_form-wrapper__38NCy">
                <div className="AddNewAddress_addAddressForm__2yCOa">
                    <form style={{height: '100vh'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}><span
                                className="AddNewAddress_first-address-msg__1Z-a-">*Billing address can be added only
                                once.</span></div>
                        <div className="form-group col-12"><select name="addressType" className="form-select form-control ">
                                <option value="" disabled=""> Select Address Type*</option>
                                <option value="Billing Address" disabled="">Billing Address</option>
                                <option value="Delivery Address">Delivery Address</option>
                            </select>
                            <div className="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                        <div className="form-group col-12"><input type="text" name="area" placeholder="Area/Locality*"
                                className="form-control " style={{width: '95%', borderRadius: '1rem'}}/>
                            <div className="invalid-feedback"></div>
                        </div>
                        <div className="form-group col-12"><input type="text" name="street" placeholder="Street*"
                                className="form-control " style={{width: '95%', borderRadius: '1rem'}}/>
                            <div className="invalid-feedback"></div>
                        </div>
                        <div className="form-group col-12"><input type="text" name="buildingNumber"
                                placeholder="Building no/Plot no*" className="form-control "
                                style={{width: '95%', borderRadius: '1rem'}}/>
                            <div className="invalid-feedback"></div>
                        </div>
                        <div className="form-group col-12"><select name="state" className="form-select selectpicker form-control "
                                data-live-search="true">
                                <option value="" disabled=""> Select State*</option>
                                <option value="Andhra Pradesh"> Andhra Pradesh </option>
                                <option value="Arunachal Pradesh"> Arunachal Pradesh </option>
                                <option value="Assam"> Assam </option>
                                <option value="Bihar"> Bihar </option>
                                <option value="Goa"> Goa </option>
                                <option value="Gujarat"> Gujarat </option>
                                <option value="Haryana"> Haryana </option>
                                <option value="Himachal Pradesh"> Himachal Pradesh </option>
                                <option value="Jammu &amp; Kashmir"> Jammu &amp; Kashmir </option>
                                <option value="Karnataka"> Karnataka </option>
                                <option value="Kerala"> Kerala </option>
                                <option value="Madhya Pradesh"> Madhya Pradesh </option>
                                <option value="Maharashtra"> Maharashtra </option>
                                <option value="Manipur"> Manipur </option>
                                <option value="Meghalaya"> Meghalaya </option>
                                <option value="Mizoram"> Mizoram </option>
                                <option value="Nagaland"> Nagaland </option>
                                <option value="Odisha"> Odisha </option>
                                <option value="Punjab"> Punjab </option>
                                <option value="Rajasthan"> Rajasthan </option>
                                <option value="Sikkim"> Sikkim </option>
                                <option value="Tamil Nadu"> Tamil Nadu </option>
                                <option value="Tripura"> Tripura </option>
                                <option value="Uttar Pradesh"> Uttar Pradesh </option>
                                <option value="West Bengal"> West Bengal </option>
                                <option value="Andaman&amp; Nicobar Isl"> Andaman&amp; Nicobar Isl </option>
                                <option value="Chandigarh"> Chandigarh </option>
                                <option value="Dadra&amp;Nagar Haveli"> Dadra&amp;Nagar Haveli </option>
                                <option value="Daman &amp; Diu"> Daman &amp; Diu </option>
                                <option value="Delhi"> Delhi </option>
                                <option value="Lakshdweep"> Lakshdweep </option>
                                <option value="Puducherry"> Puducherry </option>
                                <option value="Chhattisgarh"> Chhattisgarh </option>
                                <option value="Jharkhand"> Jharkhand </option>
                                <option value="Uttarakhand"> Uttarakhand </option>
                                <option value="Telangana"> Telangana </option>
                            </select>
                            <div className="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                        <div className="form-group col-12"><input type="text" name="city" placeholder="City*"
                                className="form-control " style={{width: '95%', borderRadius: '1rem'}}/>
                            <div className="invalid-feedback"></div>
                        </div>
                        <div className="form-group col-12"><input type="text" name="pincode" placeholder="Pincode*"
                                className="form-control " style={{width: '95%', borderRadius: '1rem'}}/>
                            <div className="invalid-feedback">
                                <p> </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}><span
                                className="AddNewAddress_mandatory-fields-msg__3iRq9">*All fields are mandatory.</span></div>
                        <div className="AddNewAddress_submit-btn-div__1RvIw"><button type="submit"
                                style={{width: '100%', height: '3rem', backgroundColor: 'rgb(210, 17, 44)', color: 'rgb(255, 255, 255)', border: 'none', borderRadius: '1rem'}}>
                                Submit</button></div>
                        <div className="AddNewAddress_address-verification-info__11VSO"> <span><strong>Note:</strong> Delivery
                                address might take upto 48 hours to verify.</span></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
