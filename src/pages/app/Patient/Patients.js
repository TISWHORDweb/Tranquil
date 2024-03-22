import React from 'react'
import Layout from '../../../components/Layout'
import Table from '../../../components/Table'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'

function Patients() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <Modal title=" Add Patient" id="patientModal" >
                        <ModalDetails  />
                    </Modal>
                    <div className=" Patients">
                        <TableHeader title="Patients"/>
                        <Table />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Patients