import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './../assets/css/KYC.css';
import { Link } from 'react-router-dom'

export default function KycForm() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange =
      (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
  return (
    <>
    <div className="MuiContainer-root app__container MuiContainer-maxWidthLg">
        <div className="KYCForm_hideLoader__1yvN4" width="100%">
            <div className="KYCForm_overlay-box__3VDiP"><img src="images/JFL-logo-without-name.png" /></div>
        </div>
        <div className="KYCForm_kycForm__2q2yD">
            <div className="Toastify"></div>
            <div className="NavKYC_navKyc__-M7M5">
                <div style={{display: 'flex', cursor: 'pointer'}}><Link to="/kyc"><svg stroke="currentColor" fill="currentColor"
                        stroke-width="0" viewBox="0 0 1024 1024" color="#fff" height="30" width="30"
                        xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)', marginBottom: '0.5rem'}}>
                        <path
                            d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                        </path>
                    </svg></Link>
                    <h5>KYC Form</h5>
                </div><a href="/">
                    <div className="NavKYC_logoutIcon__2knWC"><span>Logout</span><svg stroke="currentColor"
                            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#fff" height="25" width="25"
                            xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)'}}>
                            <path
                                d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z">
                            </path>
                            <path d="M11 2h2v10h-2z"></path>
                        </svg></div>
                </a>
            </div>
            <div className="RegisterForm_hideLoader__1PsAC" width="100%">
                <div className="RegisterForm_overlay-box__1ubVM"><img src="images/JFL-logo-without-name.png" /></div>
            </div>
            <div>

                <div className="RegisterForm_kycForm__3rVaM">
                    <form>
                        <div style={{borderBottom: 'none'}}>
                            <Accordion expanded style={{border: 'none', backgroundColor: 'rgb(241, 240, 238)'}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3"><svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            data-testid="AssignmentIndOutlinedIcon">
                                            <path
                                                d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.22 0 .41.1.55.25.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5.14-.15.33-.25.55-.25zM19 19H5V5h14v14zM12 6c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 6.47V18h12v-1.53c0-2.5-3.97-3.58-6-3.58s-6 1.07-6 3.58zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31z">
                                            </path>
                                        </svg> <strong> Personal Details </strong></p>
                                </Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr"
                                            style={{minHeight: '0px'}}>
                                            <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                                    <div aria-labelledby="panel1a-header" id="panel1a-content" role="region"
                                                        className="MuiAccordion-region">
                                                        <div className="MuiAccordionDetails-root css-u7qq7e">
                                                            <p
                                                                className="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                                                                <div className="RegisterForm_personalDetails__tSGfZ">
                                                                    <div
                                                                        className="RegisterForm_personalDetails__group1__w1b88">
                                                                        <div
                                                                            style={{display: 'flex', justifyContent: 'space-between'}}>
                                                                            <div className="form-group"
                                                                                style={{width: '48%'}}><label
                                                                                    className="RegisterForm_input-name-label__2np7K">First
                                                                                    name<span>*</span></label><input
                                                                                    type="text" name="firstName"
                                                                                    className="form-control " 
                                                                                    style={{width: '95%', borderRadius: '1rem'}} />
                                                                                <div className="invalid-feedback">
                                                                                    <p> </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group"
                                                                                style={{width: '48%'}}><label
                                                                                    className="RegisterForm_input-name-label__2np7K">Last
                                                                                    name<span>*</span></label><input
                                                                                    type="text" name="lastName"
                                                                                    className="form-control " 
                                                                                    style={{width: '95%', borderRadius: '1rem'}} />
                                                                                <div className="invalid-feedback">
                                                                                    <p> </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group col-12"><label
                                                                                className="RegisterForm_input-name-label__2np7K">Designation<span>*</span></label><input
                                                                                type="text" name="designation"
                                                                                className="form-control "  />
                                                                            <div className="invalid-feedback">
                                                                                <p> </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group col-12"><label
                                                                                className="RegisterForm_input-name-label__2np7K">Primary
                                                                                email address<span>*</span></label><input
                                                                                type="text" name="email"
                                                                                className="form-control "  />
                                                                            <div className="invalid-feedback">
                                                                                <p> </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="RegisterForm_personalDetails__group2__1EVWu">
                                                                        <div className="form-group col-12"><label
                                                                                className="RegisterForm_input-name-label__2np7K">Secondary
                                                                                email address</label><input type="text"
                                                                                name="email2" className="form-control " />
                                                                            <div className="invalid-feedback">
                                                                                <p> </p>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div className="form-group col-12"><label
                                                                                    className="RegisterForm_input-name-label__2np7K">Primary
                                                                                    Mobile
                                                                                    Number<span>*</span></label><input
                                                                                    type="text" name="mobile"
                                                                                    className="form-control "  />
                                                                                <div className="invalid-feedback">
                                                                                    <p> </p>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="form-group col-12 second-mobile-div">
                                                                                <label
                                                                                    className="RegisterForm_input-name-label__2np7K">Secondary
                                                                                    Mobile Number</label><input type="text"
                                                                                    name="mobile2"
                                                                                    className="form-control " />
                                                                                <div className="invalid-feedback">
                                                                                    <p> </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded==='panel2' } onChange={handleChange('panel2')}
                                style={{border: 'none', backgroundColor: 'rgb(241, 240, 238)'}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    <div className="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters css-1iji0d4"
                                        tabindex="0" role="button" aria-expanded="false" aria-controls="panel2a-content"
                                        id="panel2a-header">
                                        <div
                                            className="MuiAccordionSummary-content MuiAccordionSummary-contentGutters css-17o5nyn">
                                            <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3"><svg
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                    data-testid="BusinessCenterOutlinedIcon">
                                                    <path
                                                        d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z">
                                                    </path>
                                                </svg><strong> Company Details </strong></p>
                                        </div>
                                    </div>
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-a0y2e3"
                                            style={{minHeight: '0px'}}>
                                            <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                                    <div aria-labelledby="panel2a-header" id="panel2a-content" role="region"
                                                        className="MuiAccordion-region">
                                                        <div className="MuiAccordionDetails-root css-u7qq7e">
                                                            <p
                                                                className="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                                                                <div
                                                                    className="RegisterForm_company-details-input-group__L4_Ta">
                                                                    <div className="form-group"><label
                                                                            className="RegisterForm_input-name-label__2np7K">Business
                                                                            name<span>*</span></label><input type="text"
                                                                            name="companyName" className="form-control "
                                                                             />
                                                                        <div className="invalid-feedback">
                                                                            <p> </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group"><label
                                                                            className="RegisterForm_input-name-label__2np7K">Business
                                                                            type<span>*</span></label><select
                                                                            name="companyType"
                                                                            className="form-select form-control "
                                                                            >
                                                                            <option disabled=""> Select Business Type
                                                                            </option>
                                                                            <option value="Affordable Casual Dine">
                                                                                Affordable Casual
                                                                                Dine</option>
                                                                            <option value="Cafe">Cafe</option>
                                                                            <option value="Caterers">Caterers</option>
                                                                            <option value="Central Government Entity">
                                                                                Central Government
                                                                                Entity</option>
                                                                            <option value="Cloud Kitchen">Cloud Kitchen
                                                                            </option>
                                                                            <option value="Desserts &amp; Ice-Creams">
                                                                                Desserts &amp;
                                                                                Ice-Creams</option>
                                                                            <option value="Educational Institute">
                                                                                Educational Institute
                                                                            </option>
                                                                            <option value="Fine Dine">Fine Dine</option>
                                                                            <option value="Hotels">Hotels</option>
                                                                            <option value="Institutional Suppliers">
                                                                                Institutional
                                                                                Suppliers</option>
                                                                            <option value="Petroleum Business">Petroleum
                                                                                Business
                                                                            </option>
                                                                            <option value="Premium Casual Dine">Premium
                                                                                Casual Dine
                                                                            </option>
                                                                            <option value="Pubs &amp; Bars">Pubs &amp; Bars
                                                                            </option>
                                                                            <option value="State Government Entity">State
                                                                                Government
                                                                                Entity</option>
                                                                            <option value="Others">Others</option>
                                                                        </select>
                                                                        <div className="invalid-feedback">
                                                                            <p> </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded==='panel3' } onChange={handleChange('panel3')}
                                style={{border: 'none', backgroundColor: 'rgb(241, 240, 238)'}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    <div className="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters css-1iji0d4"
                                        tabindex="0" role="button" aria-expanded="false" aria-controls="panel2a-content"
                                        id="panel2a-header">
                                        <div
                                            className="MuiAccordionSummary-content MuiAccordionSummary-contentGutters css-17o5nyn">
                                            <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3"><svg
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                    data-testid="ArticleOutlinedIcon">
                                                    <path
                                                        d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                                                    </path>
                                                    <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
                                                </svg><strong> Company Documents </strong></p>
                                        </div>
                                    </div>
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-a0y2e3"
                                            style={{minHeight: '0px'}}>
                                            <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                                    <div aria-labelledby="panel2a-header" id="panel2a-content" role="region"
                                                        className="MuiAccordion-region">
                                                        <div className="MuiAccordionDetails-root css-u7qq7e">
                                                            <p
                                                                className="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                                                                <div className="RegisterForm_company-docs-wrapper__3qfkK">
                                                                    <div className="RegisterForm_gst-part-wrap__1PAdk">
                                                                        <div>
                                                                            <div className="RegisterForm_radioDiv__uJwEL"
                                                                                style={{display: 'flex'}}>
                                                                                <div style={{marginRight: '1.5rem'}}><span
                                                                                        className="MuiButtonBase-root MuiIconButton-root jss1 MuiRadio-root MuiRadio-colorSecondary jss2 Mui-checked MuiIconButton-colorSecondary"
                                                                                        aria-disabled="false"><span
                                                                                            className="MuiIconButton-label"><input
                                                                                                className="jss4"
                                                                                                name="docType" type="radio"
                                                                                                value="gstDoc"
                                                                                                checked="" /><svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                stroke-width="0"
                                                                                                viewBox="0 0 512 512"
                                                                                                color="#d2112c" height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                style={{color: 'rgb(210, 17, 44)'}}>
                                                                                                <path
                                                                                                    d="M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z">
                                                                                                </path>
                                                                                            </svg></span><span
                                                                                            className="MuiTouchRipple-root"></span></span><label>GST</label>
                                                                                </div>
                                                                                <div><span
                                                                                        className="MuiButtonBase-root MuiIconButton-root jss1 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary"
                                                                                        aria-disabled="false"><span
                                                                                            className="MuiIconButton-label"><input
                                                                                                className="jss4"
                                                                                                name="docType" type="radio"
                                                                                                value="otherDoc" /><svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                stroke-width="0"
                                                                                                viewBox="0 0 512 512"
                                                                                                color="#707070" height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                style={{color: 'rgb(112, 112, 112)'}}>
                                                                                                <path
                                                                                                    d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z">
                                                                                                </path>
                                                                                            </svg></span><span
                                                                                            className="MuiTouchRipple-root"></span></span><label>Other
                                                                                        document</label></div>
                                                                            </div>
                                                                            <div className="RegisterForm_fileUpload__2-6U2"
                                                                                style={{marginBottom: '0rem'}}>
                                                                                <div className="form-group">
                                                                                    <div style={{display: 'flex'}}>
                                                                                        <div
                                                                                            className="RegisterForm_gstn-input__1114d">
                                                                                            <input type="text" name="gstn"
                                                                                                placeholder="Enter GSTN"
                                                                                                className="form-control " />
                                                                                            <div
                                                                                                className="invalid-feedback">
                                                                                                <p> </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div style={{display: 'flex'}}><label
                                                                                            for="gstUpload"
                                                                                            className="RegisterForm_customFileUploadLabel__1_FdB"><svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                stroke-width="0"
                                                                                                viewBox="0 0 24 24"
                                                                                                height="20" width="20"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                style={{marginRight: '0.4rem'}}>
                                                                                                <path fill="none"
                                                                                                    d="M0 0h24v24H0z">
                                                                                                </path>
                                                                                                <path
                                                                                                    d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z">
                                                                                                </path>
                                                                                            </svg> <span
                                                                                                style={{marginRight: '0.3rem', fontFamily: 'OS-semibold, sans-serif'}}>Upload</span>GST
                                                                                            copy</label> <input
                                                                                            id="gstUpload" type="file"
                                                                                            name="gstUpload"
                                                                                            className="form-control "
                                                                                            style={{display: 'none'}} /><button>
                                                                                            Upload</button></div>
                                                                                    <div className="invalid-feedback"></div>
                                                                                    <div><span
                                                                                            className="RegisterForm_fileNameSpan__3kNLG">
                                                                                            <svg stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                stroke-width="0"
                                                                                                version="1.1"
                                                                                                viewBox="0 0 16 16"
                                                                                                color="#0078ac" height="20"
                                                                                                width="20"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                style={{color: 'rgb(0, 120, 172)'}}>
                                                                                                <path
                                                                                                    d="M10.404 5.11l-1.015-1.014-5.075 5.074c-0.841 0.841-0.841 2.204 0 3.044s2.204 0.841 3.045 0l6.090-6.089c1.402-1.401 1.402-3.673 0-5.074s-3.674-1.402-5.075 0l-6.394 6.393c-0.005 0.005-0.010 0.009-0.014 0.013-1.955 1.955-1.955 5.123 0 7.077s5.123 1.954 7.078 0c0.004-0.004 0.008-0.009 0.013-0.014l0.001 0.001 4.365-4.364-1.015-1.014-4.365 4.363c-0.005 0.004-0.009 0.009-0.013 0.013-1.392 1.392-3.656 1.392-5.048 0s-1.392-3.655 0-5.047c0.005-0.005 0.009-0.009 0.014-0.013l-0.001-0.001 6.395-6.393c0.839-0.84 2.205-0.84 3.045 0s0.839 2.205 0 3.044l-6.090 6.089c-0.28 0.28-0.735 0.28-1.015 0s-0.28-0.735 0-1.014l5.075-5.075z">
                                                                                                </path>
                                                                                            </svg>No file selected</span>
                                                                                        <p>Please select the declaration if
                                                                                            you don't
                                                                                            have GST Registration</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="RegisterForm_multi_GST_declare__1rS1x">
                                                                                <span
                                                                                    className="MuiButtonBase-root MuiIconButton-root jss1 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary"
                                                                                    aria-disabled="false"><span
                                                                                        className="MuiIconButton-label"><input
                                                                                            className="jss4"
                                                                                            name="multipleGST_check"
                                                                                            type="checkbox"
                                                                                            data-indeterminate="false"
                                                                                            value="false" /><svg
                                                                                            stroke="currentColor"
                                                                                            fill="currentColor"
                                                                                            stroke-width="0"
                                                                                            viewBox="0 0 16 16"
                                                                                            color="#707070" height="15"
                                                                                            width="15"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            style={{color: 'rgb(112, 112, 112)'}}>
                                                                                            <path
                                                                                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z">
                                                                                            </path>
                                                                                        </svg></span><span
                                                                                        className="MuiTouchRipple-root"></span></span><label><span>I
                                                                                        have multiple GSTs</span></label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="RegisterForm_no_GST_declare__2MuoE">
                                                                            <span
                                                                                className="MuiButtonBase-root MuiIconButton-root jss1 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary"
                                                                                aria-disabled="false"><span
                                                                                    className="MuiIconButton-label"><input
                                                                                        className="jss4" name="noGstCheck"
                                                                                        type="checkbox"
                                                                                        data-indeterminate="false"
                                                                                        value="false" /><svg
                                                                                        stroke="currentColor"
                                                                                        fill="currentColor" stroke-width="0"
                                                                                        viewBox="0 0 16 16" color="#707070"
                                                                                        height="15" width="15"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        style={{color: 'rgb(112, 112, 112)'}}>
                                                                                        <path
                                                                                            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z">
                                                                                        </path>
                                                                                    </svg></span><span
                                                                                    className="MuiTouchRipple-root"></span></span><label><span>I
                                                                                    do hereby declare that I am not
                                                                                    applicable for GST
                                                                                    registration.</span></label></div>
                                                                    </div>
                                                                    <div
                                                                        className="RegisterForm_form-group__1QUzu RegisterForm_pan-part-wrap__1744S">
                                                                        <spam
                                                                            style={{fontFamily: 'OS-semibold, sans-serif', color: 'rgb(93, 93, 93)', fontWeight: 'bold'}}>
                                                                            PAN card</spam>
                                                                        <div className="RegisterForm_fileUpload__2-6U2">
                                                                            <div
                                                                                style={{display: 'flex', flexDirection: 'column', marginBottom: '0.75rem'}}>
                                                                                <div
                                                                                    className="RegisterForm_pan-input__143vj">
                                                                                    <input type="text" name="panNo"
                                                                                        placeholder="PAN number"
                                                                                        className="form-control " />
                                                                                    <div className="invalid-feedback">
                                                                                        <p> </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div style={{display: 'flex'}}><label
                                                                                        for="file-upload-pan"
                                                                                        className="RegisterForm_customFileUploadLabel__1_FdB"><input
                                                                                            id="file-upload-pan" type="file"
                                                                                            name="panUpload"
                                                                                            className="form-control "
                                                                                            style={{display: 'none'}} /><svg
                                                                                            stroke="currentColor"
                                                                                            fill="currentColor"
                                                                                            stroke-width="0"
                                                                                            viewBox="0 0 24 24" height="20"
                                                                                            width="20"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            style={{marginRight: '0.75rem'}}>
                                                                                            <path fill="none"
                                                                                                d="M0 0h24v24H0z"></path>
                                                                                            <path
                                                                                                d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z">
                                                                                            </path>
                                                                                        </svg> <span
                                                                                            style={{marginRight: '0.4rem', fontFamily: 'OS-semibold, sans-serif'}}>Upload</span>
                                                                                        a PAN</label><button>
                                                                                        Upload</button></div>
                                                                                <div><span
                                                                                        className="RegisterForm_fileNameSpan__3kNLG">
                                                                                        <svg stroke="currentColor"
                                                                                            fill="currentColor"
                                                                                            stroke-width="0" version="1.1"
                                                                                            viewBox="0 0 16 16"
                                                                                            color="#0078ac" height="20"
                                                                                            width="20"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            style={{color: 'rgb(0, 120, 172)'}}>
                                                                                            <path
                                                                                                d="M10.404 5.11l-1.015-1.014-5.075 5.074c-0.841 0.841-0.841 2.204 0 3.044s2.204 0.841 3.045 0l6.090-6.089c1.402-1.401 1.402-3.673 0-5.074s-3.674-1.402-5.075 0l-6.394 6.393c-0.005 0.005-0.010 0.009-0.014 0.013-1.955 1.955-1.955 5.123 0 7.077s5.123 1.954 7.078 0c0.004-0.004 0.008-0.009 0.013-0.014l0.001 0.001 4.365-4.364-1.015-1.014-4.365 4.363c-0.005 0.004-0.009 0.009-0.013 0.013-1.392 1.392-3.656 1.392-5.048 0s-1.392-3.655 0-5.047c0.005-0.005 0.009-0.009 0.014-0.013l-0.001-0.001 6.395-6.393c0.839-0.84 2.205-0.84 3.045 0s0.839 2.205 0 3.044l-6.090 6.089c-0.28 0.28-0.735 0.28-1.015 0s-0.28-0.735 0-1.014l5.075-5.075z">
                                                                                            </path>
                                                                                        </svg>No file selected</span></div>
                                                                                <div className="invalid-feedback"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded==='panel4' } onChange={handleChange('panel4')}
                                style={{border: 'none', backgroundColor: 'rgb(241, 240, 238)'}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    <div className="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters css-1iji0d4"
                                        tabindex="0" role="button" aria-expanded="false" aria-controls="panel2a-content"
                                        id="panel2a-header">
                                        <div
                                            className="MuiAccordionSummary-content MuiAccordionSummary-contentGutters css-17o5nyn">
                                            <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3"><svg
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                    data-testid="AccountBalanceOutlinedIcon">
                                                    <path
                                                        d="M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z">
                                                    </path>
                                                </svg><strong> Bank Details </strong></p>
                                        </div>
                                    </div>
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-a0y2e3"
                                            style={{minHeight: '0px'}}>
                                            <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                                    <div aria-labelledby="panel2a-header" id="panel2a-content" role="region"
                                                        className="MuiAccordion-region">
                                                        <div className="MuiAccordionDetails-root css-u7qq7e">
                                                            <p
                                                                className="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                                                                <div className="RegisterForm_bankDetailsContainer__1Tjf8">
                                                                    <div className="RegisterForm_inputGroup-wrap__2wLi8">
                                                                        <div
                                                                            className="RegisterForm_bankDetailsContainer__inputGroup1__3NEcI">
                                                                            <div className="form-group"><label
                                                                                    className="RegisterForm_input-name-label__2np7K">Account
                                                                                    Number</label><input type="text"
                                                                                    name="accountNo"
                                                                                    className="form-control " />
                                                                                <div className="invalid-feedback">
                                                                                    <p> </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group"><label
                                                                                    className="RegisterForm_input-name-label__2np7K">Account
                                                                                    Holder Name</label><input type="text"
                                                                                    name="accountName"
                                                                                    className="form-control " />
                                                                                <div className="invalid-feedback">
                                                                                    <p> </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div className="form-group"><label
                                                                                    className="RegisterForm_input-name-label__2np7K">IFSC
                                                                                    Code</label><input type="text"
                                                                                    name="ifsc" className="form-control " />
                                                                                <div className="invalid-feedback">
                                                                                    <p> </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group"><label
                                                                                    className="RegisterForm_input-name-label__2np7K">Bank
                                                                                    &amp; Branch</label><input type="text"
                                                                                    name="branchName"
                                                                                    className="form-control " />
                                                                                <div className="invalid-feedback">
                                                                                    <p> </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group"><label
                                                                            style={{fontFamily: 'OS-semibold, sans-serif', color: 'rgb(93, 93, 93)', fontWeight: 'bold', fontSize: '0.9rem'}}>Upload
                                                                            Cancelled cheque or Bank Letter confirming
                                                                            account
                                                                            details</label>
                                                                        <div className="RegisterForm_fileUpload__2-6U2">
                                                                            <div
                                                                                style={{display: 'flex', flexDirection: 'column', marginBottom: '0.75rem'}}>
                                                                                <div style={{display: 'flex'}}><label
                                                                                        for="file-upload-bank"
                                                                                        className="RegisterForm_customFileUploadLabel__1_FdB"><input
                                                                                            id="file-upload-bank"
                                                                                            type="file" name="bankDocUpload"
                                                                                            className="form-control "
                                                                                            style={{display: 'none'}} /><svg
                                                                                            stroke="currentColor"
                                                                                            fill="currentColor"
                                                                                            stroke-width="0"
                                                                                            viewBox="0 0 24 24" height="20"
                                                                                            width="20"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            style={{marginRight: '0.75rem'}}>
                                                                                            <path fill="none"
                                                                                                d="M0 0h24v24H0z"></path>
                                                                                            <path
                                                                                                d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z">
                                                                                            </path>
                                                                                        </svg> <span
                                                                                            style={{marginRight: '0.4rem', fontFamily: 'OS-semibold, sans-serif'}}>Upload
                                                                                            here</span> </label><button>
                                                                                        Upload</button>
                                                                                </div>
                                                                                <div><span
                                                                                        className="RegisterForm_fileNameSpan__3kNLG">
                                                                                        <svg stroke="currentColor"
                                                                                            fill="currentColor"
                                                                                            stroke-width="0" version="1.1"
                                                                                            viewBox="0 0 16 16"
                                                                                            color="#0078ac" height="20"
                                                                                            width="20"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            style={{color: 'rgb(0, 120, 172)'}}>
                                                                                            <path
                                                                                                d="M10.404 5.11l-1.015-1.014-5.075 5.074c-0.841 0.841-0.841 2.204 0 3.044s2.204 0.841 3.045 0l6.090-6.089c1.402-1.401 1.402-3.673 0-5.074s-3.674-1.402-5.075 0l-6.394 6.393c-0.005 0.005-0.010 0.009-0.014 0.013-1.955 1.955-1.955 5.123 0 7.077s5.123 1.954 7.078 0c0.004-0.004 0.008-0.009 0.013-0.014l0.001 0.001 4.365-4.364-1.015-1.014-4.365 4.363c-0.005 0.004-0.009 0.009-0.013 0.013-1.392 1.392-3.656 1.392-5.048 0s-1.392-3.655 0-5.047c0.005-0.005 0.009-0.009 0.014-0.013l-0.001-0.001 6.395-6.393c0.839-0.84 2.205-0.84 3.045 0s0.839 2.205 0 3.044l-6.090 6.089c-0.28 0.28-0.735 0.28-1.015 0s-0.28-0.735 0-1.014l5.075-5.075z">
                                                                                            </path>
                                                                                        </svg>No file selected</span></div>
                                                                                <div className="invalid-feedback"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded style={{border: 'none', backgroundColor: 'rgb(241, 240, 238)'}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    <div className="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded MuiAccordionSummary-gutters css-1iji0d4"
                                        tabindex="0" role="button" aria-expanded="true" aria-controls="panel2a-content"
                                        id="panel2a-header">
                                        <div
                                            className="MuiAccordionSummary-content Mui-expanded MuiAccordionSummary-contentGutters css-17o5nyn">
                                            <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3"><svg
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                    data-testid="DriveFileRenameOutlineOutlinedIcon">
                                                    <path
                                                        d="m15 16-4 4h10v-4zm-2.94-8.81L3 16.25V20h3.75l9.06-9.06-3.75-3.75zM5.92 18H5v-.92l7.06-7.06.92.92L5.92 18zm12.79-9.96c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83z">
                                                    </path>
                                                </svg> <strong> Declaration </strong></p>
                                        </div>
                                    </div>
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr"
                                            style={{minHeight: '0px'}}>
                                            <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                                    <div aria-labelledby="panel2a-header" id="panel2a-content" role="region"
                                                        className="MuiAccordion-region">
                                                        <div className="MuiAccordionDetails-root css-u7qq7e">
                                                            <p
                                                                className="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                                                                <div className="RegisterForm_declaration-wrap__dHgAB">
                                                                    <div className="col-12 termsNConditions"><span
                                                                            className="MuiButtonBase-root MuiIconButton-root jss1 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary"
                                                                            aria-disabled="false"><span
                                                                                className="MuiIconButton-label"><input
                                                                                    className="jss4" name="tncCheck"
                                                                                    type="checkbox"
                                                                                    data-indeterminate="false"
                                                                                    value="false" /><svg
                                                                                    stroke="currentColor"
                                                                                    fill="currentColor" stroke-width="0"
                                                                                    viewBox="0 0 16 16" color="#707070"
                                                                                    height="18" width="18"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    style={{color: 'rgb(112, 112, 112)'}}>
                                                                                    <path
                                                                                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z">
                                                                                    </path>
                                                                                </svg></span><span
                                                                                className="MuiTouchRipple-root"></span></span><label
                                                                            className="tncLabel" for="tncLabel"
                                                                            style={{fontFamily: 'MontserratMedium, sans-serif', color: 'rgb(93, 93, 93)', fontSize: '0.9rem', textAlign: 'justify'}}>I
                                                                            do hereby declare that the information provided
                                                                            by me is
                                                                            correct to my knowledge.</label></div>
                                                                    <div className="RegisterForm_tncError__3H1A9"></div>
                                                                </div>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                        <div className="RegisterForm_submitBtn__3rwob">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
