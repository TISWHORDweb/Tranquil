import React from 'react'
import Layout from '../../../components/Layout'
import Table from '../../../components/Table'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'

function Medicine() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <Modal title=" Create Medicine" id="medicineModal" >
                        <ModalDetails />
                    </Modal>
                    <div className=" Patients">
                        <TableHeader  title="Medicine" />
                        <Table />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Medicine