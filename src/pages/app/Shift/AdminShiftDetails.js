import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import TableHeader from '../../../components/TableHeader'
import { MyContext } from '../../../context/Context'
import Loader from '../../../components/Loader'
import { USER_BASE_URL } from '../../../Datas/data'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { timestampToTime } from '../../../Utils/Core'
import EmployeeTable from './EmployeeTable'
import Modal from '../../../components/Modal'
import AssignShift from './AssignShift'
function AdminShiftDetails() {

    const { type } = useContext(MyContext)
    const [shift, setShift] = useState(null)
    const [employee, setEmployee] = useState(null)
    const { id } = useParams()
  

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));

        if (data) {
            const url = `${USER_BASE_URL}/employee/shift/${id}`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setShift(response.shift)
                    setEmployee(response.employee)
                })
                .catch((err) => console.log(err));
        }

    }, [type, id]);
    return (
        <div>
            {shift ?
                <Layout>
                    <div className="container">
                        <div className="mt-5">
                            <div className="justify-content-space">
                                <div className="">
                                    <small className='third'>Details of :</small>
                                    <h3 style={{ textTransform: "uppercase" }}>{shift.name} SHIFT</h3>
                                </div>
                                <div className="mb-3">
                                    <Modal title=" Assigned Shift" id="assignModal" >
                                        <AssignShift id={id} name={shift.name}/>
                                    </Modal>
                                </div>
                            </div>

                            <p>{shift.description}</p>
                            <div className="justify-content-space">

                                <div className="d-flex">
                                    <span className='me-3 '><span className='third'>Shift start from : <br /></span> <span style={{ fontWeight: "600" }}> {timestampToTime(parseInt(shift.startDate))}</span></span>
                                    {/* <span>| <br /> |</span> */}
                                    <span className='ms-3'><span className='third'>Shift end by: <br /></span> <span style={{ fontWeight: "600" }}> {timestampToTime(parseInt(shift.endDate))}</span></span>
                                </div>
                                <button className='btnThird'> <i class='bx bx-edit-alt'></i> Edit Shift</button>
                            </div>
                        </div>
                        <div className=" Patients">
                            <TableHeader title="Employes assigned to this Shift" />
                            <div className="mt-3">
                                <EmployeeTable employee={employee} />
                            </div>
                        </div>
                    </div>
                </Layout>
                : <Loader />}
        </div>
    )
}

export default AdminShiftDetails