import React from 'react'
import Layout from '../../../components/Layout'
import Table from '../../../components/Table'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'

function Medication() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <Modal title=" Create Medication" id="medicationModal" >
                        <ModalDetails />
                    </Modal>
                    <div className=" Patients">
                        <TableHeader title="Medications"  />
                        <Table />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Medication