import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { MyContext } from '../../../context/Context';
import axios from 'axios'
import { USER_BASE_URL } from '../../../Datas/data'
import Loader from '../../../components/Loader'
import { useParams } from 'react-router-dom'
import LinkHeader from '../../../components/LinkHeader';
import { DateConverter, StatusChecker, timestampToTime } from '../../../Utils/Core';

function ViewAppointment() {
    const { id } = useParams()
    const [appointment, setAppointment] = useState(null)
    const { token, type } = useContext(MyContext)

    useEffect(() => {

        if (token) {
            let who
            if (type === "patient") {
                who = "patient"
            } else {
                who = "employee"
            }
            axios.get(`${USER_BASE_URL}/${who}/appointment/${id}`, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setAppointment(response)
                })
                .catch((err) => console.log(err));
        }
    }, [token, id, type]);

    return (
        <div className='ViewReport'>
            {appointment ?
                <Layout>
                    <LinkHeader many="3" current="View Appointment" where="/app/appointment" page="Appointment" />
                    <div className="container">
                        <div className="justify-content-space mt-4">
                        <h3 className=''>View Appointment details</h3>
                        <span>{StatusChecker(appointment.appointment.status)}</span>
                        </div>
                        <div className="Patients ">
                            <div className="borderGray p-3 mb-3">
                                <h6><b>Details</b></h6>
                                <ul className='ul justify-content-space'>
                                    <li>
                                        <small>Date:</small> <br />
                                        <span>{DateConverter(parseInt(appointment.appointment.date))} </span>
                                    </li>
                                    <li>
                                        <small>Time:</small> <br />
                                        <span>{timestampToTime(parseInt(appointment.appointment.time))} </span>
                                    </li>
                                    <li>
                                        <small>Duration:</small> <br />
                                        <span>{appointment.appointment.duration}  years</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="borderGray p-3 mb-3">
                                        <h6><b>Patient Details</b></h6>
                                        <ul className='ul'>
                                            <li>
                                                <small>Full name:</small> <br />
                                                <span>{appointment.patient.firstName} {appointment.patient.lastName} </span>
                                            </li>
                                            <li>
                                                <small>Age:</small> <br />
                                                <span>{appointment.patient.age}  years</span>
                                            </li>
                                            <li>
                                                <small>Gender:</small> <br />
                                                <span>{appointment.patient.gender} </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className=" borderGray p-3 mb-3">
                                        <h6><b>Attendants Details</b></h6>
                                        <ul className='ul'>
                                            <li>
                                                <small>Full name:</small> <br />
                                                <span>{appointment.doctor.firstName} {appointment.doctor.lastName} </span>
                                            </li>
                                            <li>
                                                <small>Phone number:</small><br />
                                                <span>{appointment.doctor.phone ? appointment.doctor.phone : "----"} </span>
                                            </li>
                                            <li>
                                                <small>Category:</small><br />
                                                <span>{appointment.doctor.ecid.category} </span>
                                            </li>
                                            <li>
                                                <small>Gender:</small> <br />
                                                <span>{appointment.doctor.gender ? appointment.doctor.gender : "----"} </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="borderGray p-3 ">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <h6><b>Title :</b></h6>
                                        <p>{appointment.appointment.title}</p>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <h6><b>Description :</b></h6>
                                        <p>{appointment.appointment.description}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Layout> :
                <Loader />}
        </div>
    )
}

export default ViewAppointment