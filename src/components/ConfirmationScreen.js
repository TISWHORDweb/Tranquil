import React, { useEffect, useRef, useState } from 'react'
import Logo from '../img/Tranquil1.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { USER_BASE_URL } from '../Datas/data'
import { DateConverter, timestampToTime } from '../Utils/Core'
import SuccessIcon from '../img/icon/Illustration.png'

function ConfirmationScreen() {

    const [patient, setPatient] = useState()
    const [doctor, setDoctor] = useState()
    const { id } = useParams()
    const successRef = useRef(null);
    const [spin, setSpin] = useState(false);
    const [appointment, setAppointment] = useState(null)
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
    }
    console.log(id);
    useEffect(() => {
        if (id) {

            const url = `${USER_BASE_URL}/patient/appointment/${id}`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setAppointment(response.appointment)
                    setPatient(response.patient)
                    setDoctor(response.doctor)
                })
                .catch((err) => console.log(err));
        }

    }, [id])

    const HandleYes = (e) => {
        e.preventDefault();
        setSpin(true)
        const body = {
            id: id,
            status: 1
        }

        axios.put(`${USER_BASE_URL}/patient/appointment/status`, body, axiosConfig)
            .then(response => {
                const data = response.data

                if (data.status === true) {
                    successRef.current.click()
                    setMessage(`Your appointment has been successfully confirmed. We look forward to seeing you on ${DateConverter(parseInt(appointment.date))} at ${timestampToTime(parseInt(appointment.time))}. If you need to make any changes, please contact us support@tranquil.com. Thank you`)
                    setSpin(false)
                } else {
                    setErrorMessage("Network error, Please try again later")
                    setSpin(false)
                }
            }).catch((e) => {
                console.log(e);
                setErrorMessage("Network error, Please try again later")
                setSpin(false)
            })
    }

    const HandleNo = (e) => {
        e.preventDefault();
        setSpin(true)
        const body = {
            id: id,
            status: 3
        }

        axios.put(`${USER_BASE_URL}/patient/appointment/status`, body, axiosConfig)
            .then(response => {
                const data = response.data

                if (data.status === true) {
                    successRef.current.click()
                    setMessage(`Your appointment has been successfully canceled. Your appointment on ${DateConverter(parseInt(appointment.date))} at ${timestampToTime(parseInt(appointment.time))}. If you need to make any changes, please contact us support@tranquil.com. Thank you`)
                    setSpin(false)
                } else {
                    setErrorMessage("Network error, Please try again later")
                    setSpin(false)
                }
            }).catch((e) => {
                console.log(e);
                setErrorMessage("Network error, Please try again later")
                setSpin(false)
            })
    }

    return (
        <div>
            {appointment ?
                <div className="">
                    <div className=''>
                        <div class="modal fade" id="loginSuccess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body AlertModal p-4">
                                        <center>
                                            <img src={SuccessIcon} alt="" />
                                            <p>{message}!</p>
                                            <a  href="/web">
                                                <button type="button " class="btn btnDark success" onClick={HandleYes}>
                                                    Go back home
                                                </button>
                                            </a>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="" data-bs-toggle="modal" data-bs-target="#loginSuccess" ref={successRef} style={{ display: 'none' }}>
                        </button>
                    </div>
                    <center>
                        <div className="Confirmaation_screen">
                            <img src={Logo} alt="" />
                            <div className="in">
                                <p>Hi {patient.firstName + " " + patient.lastName}. Your appointment at Tranquil medical center with Dr. {doctor.firstName + " " + doctor.lastName} is booked to take place on {DateConverter(parseInt(appointment.date))} at {timestampToTime(parseInt(appointment.time))}. Please confirm by clicking YES or NO button.</p>
                                {errorMessage ? <p className='alert__message error mt-2 mb-2'>{errorMessage}</p> : <></>}
                                <div className="buttonss">
                                    <button type="button " class="btn btnDark success" onClick={HandleYes}>
                                        YES
                                    </button>
                                    <button type="button " class="btn btnNoBg cancel" onClick={HandleNo} >
                                        NO
                                    </button>
                                </div>
                                <center> {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}</center>
                                <p className='alert__message error'></p>
                            </div>
                        </div>
                    </center>
                </div>
                : <center><span class="spinner-border spinner-border-sm me-2 second mt-5" style={{ width: "50px", height: "50px" }} aria-hidden="true"></span></center>}
        </div>
    )
}

export default ConfirmationScreen