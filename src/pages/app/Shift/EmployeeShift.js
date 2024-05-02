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
import LinkHeader from '../../../components/LinkHeader'


function EmployeeShift() {
    const [shifts, setShifts] = useState([])
    const [check, setCheck] = useState(false)
    const [audit, setAudit] = useState([])
    const [url2, setUrl2] = useState(null)
    const [noShift, setNoshift] = useState()
    const { type } = useContext(MyContext)
    let { id } = useParams()

    if (!id) {
        id = 1
    }

    useEffect(() => {
        if (type === "admin") {
            setUrl2(`${USER_BASE_URL}/admin/shift/employee/${id}`)
        } else {
            setUrl2(`${USER_BASE_URL}/employee/shift`)
        }
    }, [type, id])

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
                    if (response) {
                        setCheck(true)
                    }
                    if (response.status === true) {
                        setNoshift(true)
                        setShifts(response.data.shifts)
                        setAudit(response.data.audit)
                    }

                    if (response.status === false) {
                        setNoshift(false)
                    }
                })
                .catch((err) => {
                    setCheck(true)
                    setNoshift(false)
                    console.log(err)
                });
        }

    }, [type, url2]);

    console.log(noShift)
    return (
        <div>
            {check ?
                <Layout>
                    <LinkHeader many="2" current="Shifts"/>
                    <div className="container">
                        <div className="">
                            {type === "admin" ? < div className="">
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
                                </div>}
                        </div>
                    </div>
                </Layout>
                : <Loader />
            }
        </div >
    )
}

export default EmployeeShift