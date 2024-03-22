import React from 'react'
import Layout from '../../../components/Layout'
import Table from '../../../components/Table'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'

function Report() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <Modal title=" Create Report" id="reportModal" >
                        <ModalDetails />
                    </Modal>
                    <div className=" Patients">
                        <TableHeader title="Reports"/>
                        <Table />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Report