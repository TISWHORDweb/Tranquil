import React, { useContext, useEffect, useRef, useState } from 'react'
import TableAction from '../../../components/TableAction'
import { DateConverter } from '../../../Utils/Core'
import Other from '../../../img/other.png'
import Actions from './Actions'
import { MyContext } from '../../../context/Context'
import CautionImg from '../../../img/icon/Group 5647.png'
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';


function Table({ patient }) {
    const { display, unDisplay, display2, unDisplay2, token, id } = useContext(MyContext)
    const modalRef = useRef()
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        if (display === true) {
            modalRef.current.click()
            setDisable(true)
            unDisplay()
        }
    }, [display, unDisplay])

    useEffect(() => {
        if (display2 === true) {
            console.log("in");
            setDisable(false)
            modalRef.current.click()
            unDisplay2()
        }
    }, [display2, unDisplay2])

    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "t-token": token
        }
    }

    const HandleDisable = (e) => {
        e.preventDefault();

        if (!id) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Sorry user cannot be deleted, Try again later")
            Clearer()
        } else {

            setSpin(true)

            const body = {
                id
            }
            console.log(body);
            axios.put(`${USER_BASE_URL}/admin/patient/disable`, body, axiosConfig)
                .then(response => {
                    const data = response.data

                    if (data.status === true) {
                        setClick(true)
                        setClassName("alert__message success")
                        setMessage(data.message)
                        setSpin(false)
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
    }

    const HandleEnable = (e) => {
        e.preventDefault();

        if (!id) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Sorry user cannot be deleted, Try again later")
            Clearer()
        } else {

            setSpin(true)

            const body = {
                id
            }
            axios.put(`${USER_BASE_URL}/admin/patient/enable`, body, axiosConfig)
                .then(response => {
                    const data = response.data

                    if (data.status === true) {
                        setClick(true)
                        setClassName("alert__message success")
                        setMessage(data.message)
                        setSpin(false)
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
                                {disable ?
                                    <p>Are you sure you want to Disable this user ?</p>
                                    : <p>Are you sure you want to Enable this user ?</p>
                                }
                                {click ? <div className={className}>
                                    <p>{message}</p>
                                </div> : ""}
                                <div className="buttonss">
                                    <button type="button" onClick={disable ? HandleDisable : HandleEnable} class="btn success">
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
                            <th scope="col">Avatar</th>
                            <th scope="col">Patient ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            <th scope="col">Date Added</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {patient ? <>
                            {patient.map((each, i) => (
                                <tr key={i}>
                                    <th scope="row"><img className='timg' src={Other} alt="" /></th>
                                    <th scope="row">{each.hid}</th>
                                    <td>{each.firstName} {each.lastName}</td>
                                    <td>{each.email}</td>
                                    <td>{each.gender}</td>
                                    <td>{each.age}</td>
                                    <td>{DateConverter(each.creationDateTime)}</td>
                                    <td>{each.blocked ? <span className='redStatus'>Disabled</span> : <span className='greenStatus'>Active</span>}</td>
                                    <td>
                                        <TableAction >
                                            <Actions id={each._id} status={each.blocked ? true : false} />
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