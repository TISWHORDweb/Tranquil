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

function Appointment() {

    const { type, token } = useContext(MyContext)
    const [appointment, setAppointment] = useState(null)
    const [url2, setUrl2] = useState(null)


    useEffect(() => {
        if (type === "admin") {
            setUrl2(`${USER_BASE_URL}/admin/appointment/all`)
        } else if (type === "employee") {
            setUrl2(`${USER_BASE_URL}/employee/appointments`)
        } else if (type === "patient") {
            setUrl2(`${USER_BASE_URL}/patient/appointments`)
        }
    }, [type])

    useEffect(() => {
        if (token) {
            axios.get(url2, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setAppointment(response)
                })
                .catch((err) => console.log(err));

        }
    }, [type,token,url2]);

    return (
        <div>
            {appointment ?
                <Layout>
                    <LinkHeader many="2" current="Appointment" />
                    <div className="container">
                        {type === "employee" ?
                            <Modal title=" Create Appointment" id="appointmentModal" >
                                <ModalDetails />
                            </Modal> : null}
                        <div className=" Patients">
                            <TableHeader title={type === "admin" ? "All Appointments" : "All your Appointments" } />
                            <Table appointment={appointment} />
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

export default Appointment