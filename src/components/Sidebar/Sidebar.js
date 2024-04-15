import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../context/Context';
import './sidebar.css'
import Logo from '../../img/Tranquil4.png'
import { Link } from 'react-router-dom'

function Sidebar() {

    const [noItem, setNoItem] = useState(false)
    const [patient, setPatient] = useState()
    const [report, setReport] = useState()
    const [allot, setAllot] = useState()
    const [appointment, setAppointment] = useState()
    const [medication, setMedication] = useState()
    const [medicine, setMedicine] = useState()
    const [department, setDepartment] = useState()
    const [payment, setPayment] = useState()
    const [employee, setEmployee] = useState()
    const [shift, setShift] = useState()


    const { updateData, data } = useContext(MyContext);

    const handleOpen = () => {
        updateData('open');
        setNoItem(true)
    };

    const handleClose = () => {
        updateData('close');
        setNoItem(false)
    };

    useEffect(() => {
        const Access = JSON.parse(localStorage.getItem("Access"))
        if (Access) {
            setPatient(Access.patient)
            setAllot(Access.allot)
            setReport(Access.report)
            setAppointment(Access.appointment)
            setDepartment(Access.department)
            setPayment(Access.payment)
            setEmployee(Access.employee)
            setMedication(Access.medication)
            setMedicine(Access.medicine)
            setShift(Access.shift)
        }
        console.log(Access.patient)
    }, [])

    return (
        <div>
            <div class={`sidebar  ${data}`}>
                <div class="logo_details">
                    {/* <i class="bx bxl-audible icon"></i> */}
                    <img src={Logo} alt="" className='icon' />
                    {!noItem ? <i class="bx bx-menu" id="btn" onClick={handleOpen}></i> :
                        <i class="bx bx-menu-alt-right" id="btn" onClick={handleClose}></i>}
                </div>
                <ul class="nav-list navFlow p-0 ">
                    <Link to="/app">
                        <li>
                            <span>
                                <i class="bx bx-grid-alt"></i>
                                <span class="link_name">Dashboard</span>
                            </span>
                            <span class="tooltip">Dashboard</span>
                        </li>
                    </Link>
                    {patient ?
                        <Link to="/app/patient">
                            <li>
                                <span>
                                    <i class='bx bx-child' ></i>
                                    <span class="link_name">Patients</span>
                                </span>
                                <span class="tooltip">Patients</span>
                            </li>
                        </Link>
                        : <li></li>
                    }
                    {shift ?
                        <Link to="/app/shift">
                            <li>
                                <span>
                                    <i class='bx bx-analyse'></i>
                                    <span class="link_name">Shift</span>
                                </span>
                                <span class="tooltip">Shift</span>
                            </li>
                        </Link>
                        : <li></li>
                    }
                    {report ?
                        <Link to="/app/report">
                            <li>
                                <span>
                                    <i class='bx bx-clipboard'></i>
                                    <span class="link_name">Reports</span>
                                </span>
                                <span class="tooltip">Reports</span>
                            </li>
                        </Link>
                        : <li></li>
                    }
                    {appointment ?
                        <Link to="/app/appointment">
                            <li>
                                <span>
                                    <i class='bx bx-calendar'></i>
                                    <span class="link_name">Appointment</span>
                                </span>
                                <span class="tooltip">Appointment</span>
                            </li>
                        </Link>
                        : <li></li>
                    }
                    {medicine ?
                        <Link to="/app/medicine">
                            <li>
                                <span>
                                    <i class='bx bxs-capsule'></i>
                                    <span class="link_name">Medicine</span>
                                </span>
                                <span class="tooltip">Medicine</span>
                            </li>
                        </Link>
                        : <li></li>
                    }
                    {department ?
                        <Link to="/app/department">
                            <li>
                                <span>
                                    <i class='bx bxs-group' ></i>
                                    <span class="link_name">Departments</span>
                                </span>
                                <span class="tooltip">Departments</span>
                            </li>
                        </Link>
                        : <li></li>
                    }
                    {medication ?
                        <Link to="/app/medication">
                            <li>
                                <span>
                                    <i class='bx bx-injection'></i>
                                    <span class="link_name">Medication</span>
                                </span>
                                <span class="tooltip">Medication</span>
                            </li>
                        </Link>
                        : <li></li>
                    }
                    {employee ?
                        <Link to="/app/employee">
                            <li>
                                <span>
                                    <i class="bx bx-user"></i>
                                    <span class="link_name">Employee</span>
                                </span>
                                <span class="tooltip">Employee</span>
                            </li>
                        </Link>
                        : <li></li>
                    }
                    {allot ?
                        <Link to="/app/allots">
                            <li>
                                <span>
                                    <i class="bx bx-bed"></i>
                                    <span class="link_name">Allots</span>
                                </span>
                                <span class="tooltip">Allots</span>
                            </li>
                        </Link>
                        : <li></li>
                    }
                    {payment ?
                        <Link to="/app/payment">
                            <li>
                                <span>
                                    <i class='bx bx-credit-card' ></i>
                                    <span class="link_name">Payment</span>
                                </span>
                                <span class="tooltip">Payment</span>
                            </li>
                        </Link>
                        : <li></li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar