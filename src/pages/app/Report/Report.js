import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import Table from './Table'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'
import { MyContext } from '../../../context/Context'
import Loader from '../../../components/Loader'
import { USER_BASE_URL } from '../../../Datas/data'
import axios from 'axios'
import LinkHeader from '../../../components/LinkHeader'

function Report() {
    const { type, token } = useContext(MyContext)
    const [report, setReport] = useState(null)
    const [url2, setUrl2] = useState(null)

    useEffect(() => {
        if (type === "admin") {
            setUrl2(`${USER_BASE_URL}/employee/report/all`)
        } else if (type === "employee") {
            setUrl2(`${USER_BASE_URL}/employee/reports`)
        } else if (type === "patient") {
            setUrl2(`${USER_BASE_URL}/patient/reports`)
        }
    }, [type])

    useEffect(() => {
        if (type) {
            axios.get(url2, {
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
    }, [type, token, url2]);

    return (
        <div>
            {report ?
                <Layout>
                    <LinkHeader many="2" current="Reports" />
                    <div className="container">
                        {type === "admin" ?
                            <Modal title=" Create Report" id="reportModal" >
                                <ModalDetails />
                            </Modal>
                            : <></>
                        }
                        <div className=" Patients">
                            <TableHeader title= {type === "admin" ? "All Reports" : "Your Reports" } />
                            <Table report={report} />
                        </div>
                    </div>
                </Layout>
                : <div className="">
                    <Loader />
                </div>
            }
        </div>
    )
}

export default Report