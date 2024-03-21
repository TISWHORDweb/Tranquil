import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/Context';
import './sidebar.css'
import Logo from '../../img/Tranquil4.png'
import { Link } from 'react-router-dom'

function Sidebar() {

    const [noItem, setNoItem] = useState(false)

    window.onload = function () {
        const sidebar = document.querySelector('.sidebar');
        const closeBtn = document.querySelector('#btn');

        closeBtn.addEventListener('click', function () {
            sidebar.classList.toggle("open")
            menuBtnChange()
        })

        function menuBtnChange() {
            if (sidebar.classList.contains("open")) {
                setNoItem(true)
            } else {
                setNoItem(false)
            }
        }
    }

    const { updateData } = useContext(MyContext);

    const handleOpen = () => {
        updateData('open');
    };

    const handleClose = () => {
        updateData('close');
    };

    return (
        <div>
            <div class="sidebar">
                <div class="logo_details">
                    {/* <i class="bx bxl-audible icon"></i> */}
                    <img src={Logo} alt="" className='icon' />
                    {!noItem ? <i class="bx bx-menu" id="btn" onClick={handleClose}></i> :
                        <i class="bx bx-menu-alt-right" id="btn" onClick={handleOpen}></i>}
                </div>
                <ul class="nav-list p-0 ">
                    <Link to="/app">
                        <li>
                            <span>
                                <i class="bx bx-grid-alt"></i>
                                <span class="link_name">Dashboard</span>
                            </span>
                            <span class="tooltip">Dashboard</span>
                        </li>
                    </Link>
                    <Link to="/app/patient">
                        <li>
                            <span>
                                <i class='bx bx-child' ></i>
                                <span class="link_name">Patients</span>
                            </span>
                            <span class="tooltip">Patients</span>
                        </li>
                    </Link>
                    <li>
                        <span>
                            <i class='bx bx-clipboard'></i>
                            <span class="link_name">Reports</span>
                        </span>
                        <span class="tooltip">Reports</span>
                    </li>
                    <li>
                        <span>
                            <i class='bx bx-calendar'></i>
                            <span class="link_name">Appointment</span>
                        </span>
                        <span class="tooltip">Appointment</span>
                    </li>
                    <li>
                        <span>
                            <i class='bx bx-plus-medical' ></i>
                            <span class="link_name">Doctors</span>
                        </span>
                        <span class="tooltip">Doctors</span>
                    </li>
                    <li>
                        <span>
                            <i class='bx bx-injection'></i>
                            <span class="link_name">Medication</span>
                        </span>
                        <span class="tooltip">Medication</span>
                    </li>
                    <li>
                        <span>
                            <i class='bx bxs-capsule'></i>
                            <span class="link_name">Medicine</span>
                        </span>
                        <span class="tooltip">Medicine</span>
                    </li>
                    <li>
                        <span>
                            <i class='bx bx-credit-card' ></i>
                            <span class="link_name">Payment</span>
                        </span>
                        <span class="tooltip">Payment</span>
                    </li>
                    <li>
                        <span>
                            <i class='bx bxs-group' ></i>
                            <span class="link_name">Departments</span>
                        </span>
                        <span class="tooltip">Departments</span>
                    </li>
                    <li>
                        <span>
                            <i class="bx bx-user"></i>
                            <span class="link_name">Employee</span>
                        </span>
                        <span class="tooltip">Employee</span>
                    </li>
                    <li>
                        <span>
                            <i class='bx bx-plus-medical' ></i>
                            <span class="link_name">Nurse</span>
                        </span>
                        <span class="tooltip">Nurse</span>
                    </li>
                    <li>
                        <span>
                            <i class="bx bx-bed"></i>
                            <span class="link_name">Allots</span>
                        </span>
                        <span class="tooltip">Allots</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar