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

function EmployeeShift() {
    const [shifts, setShifts] = useState(null)
    const [check, setCheck] = useState(false)
    const [audit, setAudit] = useState(null)
    const [noShift, setNoshift] = useState(false)
    const { checkAuth, type } = useContext(MyContext)

    useEffect(() => {
        checkAuth();

    }, [checkAuth]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data) {
            const url = `${USER_BASE_URL}/employee/shift/audit/all`
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

    }, [type]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data) {
            const url = `${USER_BASE_URL}/employee/shift`
            axios.get(url, {
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
                        setShifts(response.data)
                    }

                })
                .catch((err) => {
                    setCheck(true)
                    setNoshift(false)
                    console.log(err)
                });
        }

    }, [type]);

    return (
        <div>
            {check ?
                <Layout>
                    <div className="container">
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
                    </div>
                </Layout>
                : <Loader />}
        </div>
    )
}

export default EmployeeShift