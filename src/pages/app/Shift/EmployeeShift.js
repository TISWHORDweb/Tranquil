import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../context/Context'
import Loader from '../../../components/Loader'
import { USER_BASE_URL } from '../../../Datas/data'
import axios from 'axios'
import Layout from '../../../components/Layout'
import TableHeader from '../../../components/TableHeader'
import Table from './Table'
import ShiftDetails from './ShiftDetails'
import NoData from '../../../img/icon/1746734.png'
import { useParams } from 'react-router-dom'

function EmployeeShift() {
    const [shifts, setShifts] = useState(null)
    const [audit, setAudit] = useState(null)
    const [url, setUrl] = useState(null)
    const [url2, setUrl2] = useState(null)
    const [noShift, setNoshift] = useState(false)
    const { type } = useContext(MyContext)
    let { id } = useParams()

    if (!id) {
        id = 1
    }

    useEffect(() => {
        if (type === "admin") {
            setUrl(`${USER_BASE_URL}/admin/shift/employee/audit/${id}`)
            setUrl2(`${USER_BASE_URL}/admin/shift/employee/${id}`)
        } else {
            setUrl(`${USER_BASE_URL}/employee/shift/audit/all`)
            setUrl2(`${USER_BASE_URL}/employee/shift`)
        }
    }, [type, id])


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data) {
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setAudit(response)
                })
                .catch((err) => console.log(err));

        }

    }, [type, url]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data) {
            axios.get(url2, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data

                    if (response.status === true) {
                        setNoshift(true)
                        setShifts(response.data)
                    }

                })
                .catch((err) => {
                    setNoshift(false)
                    console.log(err)
                });
        }

    }, [type, url2]);

    return (
        <div>
            {shifts ?
                <Layout>
                    <div className="container">
                        <div className="">
                            {type === "admin" ? <div className="">
                                <ShiftDetails shifts={shifts} />
                                <div className=" Patients">
                                    <TableHeader title="Shift Audit" />
                                    <div className="mt-3">
                                        <Table audit={audit} />
                                    </div>
                                </div>
                            </div> :
                                <div className="">
                                    {!noShift ? <center className=''>
                                        <div className="mt-5">
                                            <h4>Sorry you've not been assigned to a shift yet</h4>
                                            <img className='' src={NoData} alt="" />
                                        </div>
                                    </center> :
                                        <div className="">
                                            <ShiftDetails shifts={shifts} />
                                            <div className=" Patients">
                                                <TableHeader title="Shift Audit" />
                                                <div className="mt-3">
                                                    <Table audit={audit} />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </Layout>
                : <Loader />}
        </div>
    )
}

export default EmployeeShift