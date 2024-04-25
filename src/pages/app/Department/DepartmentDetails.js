import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import TableHeader from '../../../components/TableHeader'
import { MyContext } from '../../../context/Context'
import Loader from '../../../components/Loader'
import { USER_BASE_URL } from '../../../Datas/data'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { timestampToTime } from '../../../Utils/Core'
import Modal from '../../../components/Modal'
import EmployeeTable from './EmployeeTable'
import LinkHeader from '../../../components/LinkHeader'

function DepartmentDetails() {
    const { type } = useContext(MyContext)
    const [department, setDepartment] = useState(null)
    const [employee, setEmployee] = useState(null)
    const { id } = useParams()


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));

        if (data) {
            const url = `${USER_BASE_URL}/admin/department/${id}`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setDepartment(response.department)
                    setEmployee(response.employees)
                })
                .catch((err) => console.log(err));
        }

    }, [type, id]);
    return (
        <div>
            {department ?
                <Layout>
                    <LinkHeader many="3" current={department.name+" Department" } where="/app/department" page="Departments" />
                    <div className="container">
                        <div className="mt-5">
                            <div className="justify-content-space">
                                <div className="">
                                    <small className='third'>Details of :</small>
                                    <h3 style={{ textTransform: "uppercase" }}>{department.name} </h3>
                                </div>
                                <div className="mb-3">
                                    <Modal title=" Assigned Employee" id="assignModal" >
                                       <p>Assign employee to department</p>
                                    </Modal>
                                </div>
                            </div>

                            <p>{department.description}</p>
                            <div className="justify-content-space">

                                <div className="d-flex">
                                    <span className='me-3 '><span className='third'>Date created : <br /></span> <span style={{ fontWeight: "600" }}> {timestampToTime(parseInt(department.creationDateTime))}</span></span>
                                </div>
                                <button className='btnThird'> <i class='bx bx-edit-alt'></i> Edit Department</button>
                            </div>
                        </div>
                        <div className=" Patients">
                            <TableHeader title="Employes assigned to this Department" />
                            <div className="mt-3">
                                <EmployeeTable employee={employee} department={department}/>
                            </div>
                        </div>
                    </div>
                </Layout>
                : <Loader />}
        </div>
    )
}

export default DepartmentDetails