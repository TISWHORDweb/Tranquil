import React from 'react'
import Logo from '../img/Tranquil1.png'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <div className="nan">
                <div className="col-md-12">
                    <div className="container">
                        <nav class="navbar2 navbar navbar-expand-lg ">
                            <div class="container-fluid ">
                                <div className="d-flex">
                                <Link to="/" style={{ textDecoration: "none" }}>  <li class="col-md-2 m-1 logo  "> <img src={Logo}
                                    alt="" />
                                </li></Link>

                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                </div>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div class="navbar-nav info ms-auto mb-2 mb-lg-0">
                                        <ul class="">
                                            <Link to="/web/about" style={{ textDecoration: "none" }}> <li class="">ABOUT  </li></Link>
                                            <Link to="/web/service" style={{ textDecoration: "none" }}>  <li class=" ">SERVICES</li></Link>
                                            <Link to="/web/blog" style={{ textDecoration: "none" }}>  <li class=" ">BLOG</li></Link>
                                            <Link to="/web/contact" style={{ textDecoration: "none" }}>  <li class=" ">CONTACT</li></Link>
                                            <Link to="/auth/login" style={{ textDecoration: "none" }}>  <li class="btnLight white">SIGN IN</li></Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="secondnav">
                <div class="col-md-12">
                    <div class="container">
                        <div class="dd">
                            <div class="">
                                <p class="m-0">Phase 1, Federal Secretariat Complex, Abuja, Nigeria.</p>
                            </div>
                            <ul class="rep">
                                <li>Report it </li>
                                <span>|</span>
                                <li>Staff Only </li>
                                <span>|</span>
                                <li>COVID 19 </li>
                                <span>|</span>
                                <li>Health Toll Free Number: 144</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="navbars">
                <div className="">
                    <a class="navbar-brand nan " href="#"><img src={Logo} alt="" /> <h4 className='m-0'>Zephyr</h4></a>
                </div>
                <div className="">
                    <ul class=" ">
                        <li class="nav-item">
                            <span class="link_name">Home</span>
                        </li>
                        <li class="nav-item">
                            <span class="link_name">About</span>
                        </li>
                        <li class="nav-item">
                            <span class="link_name">Services</span>
                        </li>
                        <li class="nav-item">
                            <span class="link_name">Blog</span>
                        </li>
                        <li class="nav-item">
                            <span class="link_name">Contact</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="secondNav">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <a class="navbar-brand nan " href="#"><img src={Logo} alt="" /> <h2 className='m-0'>Zephyr</h2></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                               
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-3">
                                    <li class="nav-item">
                                        <div className="">
                                            <span class="link_name">Home</span>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <div className="">
                                            <span class="link_name">About</span>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <div className="">
                                            <span class="link_name">Services</span>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <div className="">
                                            <span class="link_name">Blog</span>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <div className="">
                                            <span class="link_name">Contact</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div> */}

            <div className="">

            </div>
        </div>
    )
}

export default Navbar