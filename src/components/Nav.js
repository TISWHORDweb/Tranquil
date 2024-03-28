import React, { useContext, useEffect, useState } from 'react'
import '../css/style.css'
import { MyContext } from '../context/Context';
import Logo from '../img/Tranquil3.png'
import { Link } from 'react-router-dom';


function Nav() {

    const [width, setWidth] = useState('')
    const [cardWidth, setCardWidth] = useState(0);

    const { data } = useContext(MyContext);

    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (data === '') {
            const calculatedWidth = screenWidth - 78;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        } else if (data === 'open') {
            const calculatedWidth = screenWidth - 250;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        }

        if (data === 'close') {
            const calculatedWidth = screenWidth - 78;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        } 

    }, [ cardWidth, data])
    return (
        <div>
            <div className="nav" id="nav" style={{ width: width }}>
                <div className="">
                </div>
                <div className="right">
                    <ul>
                        <li> <Link to="/app/profile"><button className='btnNoBg'>  <i class="bx bx-user"></i>View Profile</button></Link></li>
                    </ul>
                </div>
            </div>

            <div className="">
                <nav class="navbar navbar-expand-lg navbarDisplay">
                    <div class="container-fluid">
                        <a class="navbar-brand nan" href="/"><img src={Logo} alt="" /> </a>
                        <button class="btn Nav-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="bx bx-menu" id="btn" ></i></button>

                        <div class="offcanvas offcanvas-start w-300" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"><img src={Logo} alt="" /></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="m-0 p-0">
                                    <li class="">
                                        <div className="">
                                            <i class="bx bx-grid-alt"></i>
                                            <span class="link_name">Dashboard</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class='bx bx-child' ></i>
                                            <span class="link_name">Patients</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class='bx bx-clipboard'></i>
                                            <span class="link_name">Reports</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class='bx bx-calendar'></i>
                                            <span class="link_name">Appointment</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class='bx bx-plus-medical' ></i>
                                            <span class="link_name">Doctors</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class='bx bx-injection'></i>
                                            <span class="link_name">Medication</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class='bx bxs-capsule'></i>
                                            <span class="link_name">Medicine</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class='bx bx-credit-card' ></i>
                                            <span class="link_name">Payment</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class='bx bxs-group' ></i>
                                            <span class="link_name">Departments</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class="bx bx-user"></i>
                                            <span class="link_name">Employee</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class="bx bx-bed"></i>
                                            <span class="link_name">Allots</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav