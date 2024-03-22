import React from 'react'
import Layout from '../../../components/Layout'
import Table from '../../../components/Table'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'

function Employee() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <Modal title=" Create Employee" id="employeeModal" >
                        <ModalDetails />
                    </Modal>
                    <div className=" Patients">
                        <TableHeader title="Employees" />
                        <Table />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Employee