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

function Patients() {
    const { type } = useContext(MyContext)
    const [patient, setPatient] = useState(null)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data) {

            const url = `${USER_BASE_URL}/${type}/patient/all`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setPatient(response)
                })
                .catch((err) => console.log(err));

        }
    }, [type]);

    return (
        <div>
            {patient ?
                <Layout>
                    <LinkHeader many="2" current="Patients"/>
                    <div className="container">
                        <Modal title=" Add Patient" id="patientModal" >
                            <ModalDetails />
                        </Modal>
                        <div className=" Patients">
                            <TableHeader title="Patients" />
                            <Table patient={patient}/>
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

export default Patients