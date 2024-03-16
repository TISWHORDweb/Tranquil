import React from 'react'
import Layout from '../components/Layout'
import Prof from '../img/1533506.png'

function Profile() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="Profile">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="card1 borderGray">
                                    <div className="header">
                                        <div className="">
                                            <img src={Prof} alt="Profile img" />
                                        </div>
                                        <h4>Batimehin Emmanuel</h4>
                                    </div>
                                    <div className="contact mt-3">
                                        <h5>Contact details</h5>
                                        <ul>
                                            <li>
                                                <i class='bx bx-phone-call'></i>
                                                <span>+2348120963057</span>
                                            </li>
                                            <li>
                                                <i class='bx bxl-gmail'></i>
                                                <span>ebatimehin@gmail.com</span>
                                            </li>
                                            <li>
                                                <i class='bx bx-home' ></i>
                                                <span>Durumi 1, Area 1, Abuja</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card3 borderGray mt-3">
                                    <div className="contact">
                                        <h5>Next of kin details</h5>
                                        <ul>
                                            <li>
                                                <p>Name :</p>
                                                <span>Batimehin young</span>
                                            </li>
                                            <li>
                                                <p>Phone :</p>
                                                <span>+2348120963057</span>
                                            </li>
                                            <li>
                                                <p>Email :</p>
                                                <span>ebatimehin@gmail.com</span>
                                            </li>
                                            <li>
                                                <p>Relationship :</p>
                                                <span>Cousin</span>
                                            </li>
                                            <li>
                                                <p>Address :</p>
                                                <span>Durumi 1, Area 1, Abuja</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="overview borderGray">
                                    <h4>Overview :</h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <p>Gender: </p>
                                            <h5>Female</h5>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <p>Date of birth: </p>
                                            <h5>10/03/1998</h5>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <p>Nationality: </p>
                                            <h5>Nigeria</h5>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <p>Account created in: </p>
                                            <h5>17/03/2024</h5>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <p>State of origin: </p>
                                            <h5>Ondo state</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card2 borderGray mt-3">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="column borderGray">
                                                <div className="icon"> <i class='bx bx-calendar'></i></div>
                                                <p>Appointments</p>
                                                <i class='bx bx-chevron-right'></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="column borderGray">
                                                <div className="icon">  <i class='bx bx-clipboard'></i> </div>
                                                <p>Reports</p>
                                                <i class='bx bx-chevron-right'></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="column borderGray">
                                                <div className="icon">  <i class='bx bx-plus-medical' ></i> </div>
                                                <p>Doctors</p>
                                                <i class='bx bx-chevron-right'></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="column borderGray">
                                                <div className="icon">   <i class='bx bx-injection'></i> </div>
                                                <p>Medications</p>
                                                <i class='bx bx-chevron-right'></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="column borderGray">
                                                <div className="icon"> <i class="bx bx-bed"></i> </div>
                                                <p>Allots</p>
                                                <i class='bx bx-chevron-right'></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="column borderGray">
                                                <div className="icon"> <i class='bx bx-credit-card' ></i> </div>
                                                <p>Payment</p>
                                                <i class='bx bx-chevron-right'></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Profile