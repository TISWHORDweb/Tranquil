import React from 'react'
import Layout from '../../../components/Layout'
import Table from '../../../components/Table'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'

function Appointment() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <Modal title=" Create Appointment" id="appointmentModal" >
                        <ModalDetails />
                    </Modal>
                    <div className=" Patients">
                        <TableHeader title="Appointments" />
                        <Table />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Appointment