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

function Report() {
    const { type } = useContext(MyContext)
    const [report, setReport] = useState(null)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data) {

            const url = `${USER_BASE_URL}/employee/report/all`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setReport(response)
                })
                .catch((err) => console.log(err));

        }
    }, [type]);

    return (
        <div>
            {report ?
                <Layout>
                    <div className="container">
                        <Modal title=" Create Report" id="reportModal" >
                            <ModalDetails />
                        </Modal>
                        <div className=" Patients">
                            <TableHeader title="All Reports" />
                            <Table report={report}/>
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