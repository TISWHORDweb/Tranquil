import React, { useContext, useEffect, useRef, useState } from 'react'
import TableAction from '../../../components/TableAction'
import { DateConverter } from '../../../Utils/Core'
import Action from './Action'
import { MyContext } from '../../../context/Context'
import CautionImg from '../../../img/icon/Group 5647.png'
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios'

function EmployeeTable({ employee }) {
    const { display, unDisplay, token, id } = useContext(MyContext)
    const [employees, setEmployee] = useState([])
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");

    useEffect(() => {
        setEmployee(employee)
    }, [employee])

    const modalRef = useRef()

    useEffect(() => {
        if (display === true) {
            modalRef.current.click()
            unDisplay()

        }
    }, [display, unDisplay])

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

    const HandleUnassigned = (e) => {
        e.preventDefault();

        if (!id) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Sorry user cannot be deleted, Try again later")
            Clearer()
        } else {
            setSpin(true)
            const body ={
                id
            }
            console.log(body);
            axios.post(`${USER_BASE_URL}/admin/shift/unassign`, body, axiosConfig)
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
            <button type="button" class="btnRed" ref={modalRef} data-bs-toggle="modal" style={{ display: "none" }} data-bs-target="#unassignedModal">
            </button>
            <div class="modal fade" id="unassignedModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body AlertModal p-5">
                            <center>
                                <img src={CautionImg} alt="" />
                                <p>Are you sure you want to Unassigned this employee from this shift ?</p>
                                {click ? <div className={className}>
                                    <p>{message}</p>
                                </div> : ""}
                                <div className="buttonss">
                                    <button type="button" onClick={HandleUnassigned} class="btn success">
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
                            <th scope="col">Shift Name</th>
                            <th scope="col">Employee</th>
                            <th scope="col">Department</th>
                            <th scope="col">Date Assigned</th>
                            <th scope="col">Employee Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length > 0 ? <>
                            {employees.map((each, i) => (
                                <tr key={i}>
                                    <th scope="row">{each.sid.name}</th>
                                    <td>{each.eid.firstName} {each.eid.lastName}</td>
                                    <td>{each.did.name}</td>
                                    <td>{DateConverter(each.creationDateTime)}</td>
                                    <td>{each.eid.status ? <span className='redStatus'>Inactive</span> : <span className='greenStatus'>Active</span>}</td>
                                    <td>
                                        <TableAction >
                                            <Action id={each._id}/>
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

export default EmployeeTable