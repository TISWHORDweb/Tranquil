import React from 'react'
import Layout from '../../../components/Layout'
import Table from '../../../components/Table'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'

function Department() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <Modal title=" Create Department" id="departmentModal" >
                        <ModalDetails />
                    </Modal>
                    <div className=" Patients">
                        <TableHeader title="Departments" />
                        <Table />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Department