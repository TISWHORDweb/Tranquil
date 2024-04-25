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

    const { type } = useContext(MyContext)
    const [appointment, setAppointment] = useState(null)
    const [isPatient, setIsPatient] = useState(false)

  

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data) {
            if (type === 'patient') {
                setIsPatient(true)
                const url = `${USER_BASE_URL}/patient/appointments`
                axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                        "t-token": data.token
                    }
                })
                    .then((res) => {
                        const response = res.data.data
                        setAppointment(response)
                    })
                    .catch((err) => console.log(err));
            } else {
                const url = `${USER_BASE_URL}/employee/appointment/all`
                axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                        "t-token": data.token
                    }
                })
                    .then((res) => {
                        const response = res.data.data
                        setAppointment(response)
                    })
                    .catch((err) => console.log(err));
            }

        }
    }, [type]);

    return (
        <div>
            {appointment ?
                <Layout>
                    <LinkHeader many="2" current="Appointment"/>
                    <div className="container">
                        {!isPatient ? 
                        <Modal title=" Create Appointment" id="appointmentModal" >
                            <ModalDetails />
                        </Modal> : null}
                        <div className=" Patients">
                            <TableHeader title={ isPatient ? "All your Appointments" : "All Appointments"} />
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