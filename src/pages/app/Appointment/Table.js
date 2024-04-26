import React, { useContext, useEffect, useRef, useState } from 'react'
import { DateConverter, StatusChecker, timestampToTime } from '../../../Utils/Core'
import TableAction from '../../../components/TableAction'
import Actions from './Actions'
import { MyContext } from '../../../context/Context'
import CautionImg from '../../../img/icon/Group 5647.png'
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';


function Table({ appointment }) {
    const { display, unDisplay, display2, unDisplay2, token, id } = useContext(MyContext)
    const modalRef = useRef()
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const [cancel, setCancel] = useState(false);

    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        setAppointments(appointment)
    }, [appointment])

    useEffect(() => {
        if (display === true) {
            modalRef.current.click()
            setCancel(false)
            unDisplay()
        }
    }, [display, unDisplay])

    useEffect(() => {
        if (display2 === true) {
            setCancel(true)
            modalRef.current.click()
            unDisplay2()
        }
    }, [display2, unDisplay2])

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "t-token": token
        }
    }

    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    const HandleAttended = (e) => {
        e.preventDefault();
        setSpin(true)
        const body = {
            id: id,
            status: 2
        }

        axios.put(`${USER_BASE_URL}/patient/appointment/status`, body, axiosConfig)
            .then(response => {
                const data = response.data

                if (data.status === true) {
                    setClick(true)
                    setClassName("alert__message success")
                    setMessage(data.message)
                    setSpin(false)
                } else {
                    setClick(true)
                    setClassName("alert__message error")
                    setMessage("There was an error trying to process your request, Please try again later")
                    setSpin(false)
                    Clearer()
                }
            }).catch((e) => {
                console.log(e);
                setClick(true)
                setClassName("alert__message error")
                setMessage("There was an error trying to process your request, Please try again later")
                setSpin(false)
                Clearer()
            })
    }

    const HandleCancel = (e) => {
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
                    setClick(true)
                    setClassName("alert__message success")
                    setMessage(data.message)
                    setSpin(false)
                } else {
                    setClick(true)
                    setClassName("alert__message error")
                    setMessage("There was an error trying to process your request, Please try again later")
                    setSpin(false)
                    Clearer()
                }
            }).catch((e) => {
                console.log(e);
                setClick(true)
                setClassName("alert__message error")
                setMessage("There was an error trying to process your request, Please try again later")
                setSpin(false)
                Clearer()
            })
    }
    return (
        <div>
            <button type="button" class="btnRed" ref={modalRef} data-bs-toggle="modal" style={{ display: "none" }} data-bs-target="#disableModal">
            </button>
            <div class="modal fade" id="disableModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body AlertModal p-5">
                            <center>
                                <img src={CautionImg} alt="" />
                                {cancel ?
                                    <p>Are you sure you want to CANCEL this appointmrnt ?</p>
                                    : <p>Are you sure you want are DONE with this appointment ?</p>
                                }
                                {click ? <div className={className}>
                                    <p>{message}</p>
                                </div> : ""}
                                <div className="buttonss">
                                    <button type="button" onClick={cancel ? HandleCancel : HandleAttended} class="btn success">
                                        {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                        Yes
                                    </button>
                                    <button type="button" class="btn cancel" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Table mt-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Title</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Patient</th>
                            <th scope="col">Time</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.length > 0 ? <>
                            {appointments.map((each, i) => (
                                <tr key={i}>
                                    <th scope="row">{i}</th>
                                    <th scope="row">{each.title}</th>
                                    <td>{each.eid.firstName} {each.eid.lastName}</td>
                                    <td>{each.pid.firstName} {each.pid.lastName}</td>
                                    <td>{timestampToTime(parseInt(each.time))}</td>
                                    <td>{each.duration}</td>
                                    <td>{DateConverter(parseInt(each.date))}</td>
                                    <td>{StatusChecker(each.status)}</td>
                                    <td>
                                        <TableAction >
                                            <Actions id={each._id} status={each.status} />
                                        </TableAction>
                                    </td>
                                </tr>
                            ))}

                        </> : <tr>
                            <td>....</td>
                            <td>....</td>
                            <td>....</td>
                            <td>....</td>
                            <td>....</td>
                            <td>....</td>
                            <td>....</td>
                            <td>....</td>
                        </tr>
                        }
                    </tbody>
                </table>
                <div className="down">
                    <div className=""></div>
                    <div className="down">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <span class="page-link" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </span>
                                </li>
                                <li class="page-item"><span class="page-link"  >1</span></li>
                                <li class="page-item"><span class="page-link"  >2</span></li>
                                <li class="page-item"><span class="page-link"  >3</span></li>
                                <li class="page-item">
                                    <span class="page-link" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table