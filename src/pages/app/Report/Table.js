import React, { useContext, useEffect, useRef, useState } from 'react'
import TableAction from '../../../components/TableAction'
import { DateConverter } from '../../../Utils/Core'
import { MyContext } from '../../../context/Context'
import CautionImg from '../../../img/icon/Group 5647.png'
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';
import Actions from './Actions'
import EditReport from './EditReport'


function Table({ report }) {
    const { display, unDisplay, display2, unDisplay2, token, id } = useContext(MyContext)
    const modalRef = useRef()
    const modalRef2 = useRef()
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");

    useEffect(() => {
        if (display === true) {
            modalRef.current.click()
            unDisplay()
        }
    }, [display, unDisplay])

    useEffect(() => {
        if (display2 === true) {
            modalRef2.current.click()
            unDisplay2()
     
        }
    }, [ display2, unDisplay2])
    console.log(id);
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

    const HandleDelete = (e) => {
        e.preventDefault();

        if (!id) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Sorry user cannot be deleted, Try again later")
            Clearer()
        } else {

            setSpin(true)

            axios.delete(`${USER_BASE_URL}/employee/report/delete/${id}`, axiosConfig)
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
                                <p>Are you sure you want to DELETE this Report ?</p>
                                {click ? <div className={className}>
                                    <p>{message}</p>
                                </div> : ""}
                                <div className="buttonss">
                                    <button type="button" onClick={HandleDelete} class="btn success">
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
            <button type="button" class="btnRed" ref={modalRef2} data-bs-toggle="modal" style={{ display: "none" }} data-bs-target="#EDITModal">
            </button>
            <div class="modal fade" id="EDITModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <EditReport data={id}/>
                    </div>
                </div>
            </div>
            <div className="Table mt-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Patient</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Current condition</th>
                            <th scope="col">Past condition</th>
                            <th scope="col">Allergies</th>
                            <th scope="col">Date created</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {report ? <>
                            {report.map((each, i) => (
                                <tr key={i}>
                                    <th scope="row">{each.pid.firstName} {each.pid.lastName}</th>
                                    <th scope="row">{each.eid.firstName} {each.eid.lastName}</th>
                                    <td>{each.reason} </td>
                                    <td>{each.currentCondition}</td>
                                    <td>{each.pastCondition}</td>
                                    <td>{each.allergies}</td>
                                    <td>{DateConverter(each.creationDateTime)}</td>
                                    <td>
                                        <TableAction >
                                            <Actions id={each._id} data={each} />
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