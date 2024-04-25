import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { MyContext } from '../../../context/Context';
import axios from 'axios'
import { USER_BASE_URL } from '../../../Datas/data'
import Loader from '../../../components/Loader'
import { useParams } from 'react-router-dom'

function ViewReport() {
    const {id} = useParams()
    const [report, setReport] = useState(null)
    const { token, type } = useContext(MyContext)

    useEffect(() => {

        if (token) {
            let who
            if(type=== "patient"){
                who = "patient"
            }else{
                who="employee"
            }
            axios.get(`${USER_BASE_URL}/${who}/report/${id}`, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setReport(response)
                })
                .catch((err) => console.log(err));
        }
    }, [token, id, type]);

    return (
        <div className='ViewReport'>
            {report ?
            <Layout>
                <div className="container">
                    <h3 className='mt-4'>Medical Report</h3>
                    <div className="Patients ">
                        <div className="borderGray p-3 mb-3">
                            <h6><b>Patient Details</b></h6>
                            <ul className='ul'>
                                <li>
                                    <small>Full name:</small> <br />
                                    <span>{report.Patient.firstName} {report.Patient.lastName} </span>
                                </li>
                                <li>
                                    <small>Date of birth:</small> <br />
                                    <span>{report.Patient.dob} </span>
                                </li>
                                <li>
                                    <small>Age:</small> <br />
                                    <span>{report.Patient.age}  years</span>
                                </li>
                                <li>
                                    <small>Phone number:</small> <br />
                                    <span>{report.Patient.phone ? report.Patient.phone : "----"}  </span>
                                </li>
                                <li>
                                    <small>Gender:</small> <br />
                                    <span>{report.Patient.gender} </span>
                                </li>
                                <li>
                                    <small>Address:</small> <br />
                                    <span>{report.Patient.address ? report.Patient.address : "----"} </span>
                                </li>
                            </ul>
                        </div>
                        <div className=" borderGray p-3 mb-3">
                            <h6><b>Attendee Details</b></h6>
                            <ul className='ul'>
                                <li>
                                    <small>Full name:</small> <br />
                                    <span>{report.Doctor.firstName} {report.Doctor.lastName} </span>
                                </li>
                                <li>
                                    <small>Phone number:</small><br />
                                    <span>{report.Doctor.phone  ? report.Doctor.phone : "----"} </span>
                                </li>
                                <li>
                                    <small>Category:</small><br />
                                    <span>{report.Doctor.ecid.category} </span>
                                </li>
                                <li>
                                    <small>Gender:</small> <br />
                                    <span>{report.Doctor.gender  ? report.Doctor.gender : "----"} </span>
                                </li>
                            </ul>
                        </div>
                        <div className="borderGray p-3 ">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <h6><b>Condition :</b></h6>
                                    <p>{report.report.currentCondition}</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <h6><b>Medication :</b></h6>
                                    <p>{report.report.currentMedication}</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <h6><b>Allergies :</b></h6>
                                    <p>{report.report.allergies} </p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <h6><b>Frequency :</b></h6>
                                    <p>{report.report.frequency} </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3"> <span className='tit'>*Medical History</span></div>
                        <div className="borderGray p-3 ">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <h6><b>Condition :</b></h6>
                                    <p>{report.report.pastCondition}</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <h6><b>Medication :</b></h6>
                                    <p>{report.report.pastMedication}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>:
            <Loader/>}
        </div>
    )
}

export default ViewReport