import React from 'react'
import Img1 from '../img/face.webp'
import Img2 from '../img/twi.png'
import Img3 from '../img/R.png'
import Logo from '../img/2N-Logo-Transparent.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
             <div class="">
                <div class="col-md-12">
                    <div class="footer">
                        <div class="container">
                            <div class="pt-4 pb-5">
                                <div class="row">
                                    <div class="col-md-3">
                                        <ul> <Link to="/" style={{ textDecoration: "none" }}> <li className='log'><img src={Logo} alt="" width="80%" / > <h4 className='m-0'>Zephyr</h4></li> </Link>
                                           
                                            <li class="ipsum"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bank2" viewBox="0 0 16 16">
                                                <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"/>
                                              </svg>
                                            <span>Phase 1, Federal Secretariat Complex, Abuja, Nigeria.</span></li>
                                            <li class="ipsum"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                              </svg><span>Lorem : <br /> info@health.gov.ng <br />  report@health.gov.ng</span></li>
                                            <li class="ipsum"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
                                              </svg><span>amet : <br /> 09-1234567 <br /> +234 803 456 7890</span></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3">
                                        <ul>
                                            <li class="quick"><b>Quick Links</b></li>
                                            <li>Home</li>
                                            <li>History & Establishment</li>
                                            <li>FMOH Structure</li>
                                            <li>Press Releases</li>
                                            <li>FMOH Mandate</li>
                                            <li>FAQ</li>
                                            <li>Contact Us</li>
                                            <li>Privacy Policy</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3">
                                        <ul>
                                            <li class="quick"><b>FMOH Departments</b></li>
                                            <li>Discipline and Appeals</li>
                                            <li>Finanace and Account</li>
                                            <li>Human Resources</li>
                                            <li>Planning, Research and Statistics</li>
                                            <li>Promotion</li>
                                            <li>Recruitment and Appointment </li>
                                            <li>Information and Communications Technology </li>
                                            <li>Legal Service Unit</li>
                                            <li>Press and Public Relations Unit</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3">
                                        <ul>
                                            <li class="quick"><b>Follow Us</b></li>
                                            <li>
                                                <div class="">
                                                    <span>
                                                        <img src={Img1} alt="" width="15%" />
                                                    </span>
                                                    <span>
                                                        <img src={Img2} alt=""  width="15%" />
                                                    </span>
                                                    <span>
                                                        <img src={Img3} alt=""  width="15%" />
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="last">
                        <div class="container">
                            <div class="p-3">
                                <p> © {2023} Zephyr. All Rights Reserved. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer