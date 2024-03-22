import React from 'react'
import Layout from '../../../components/Layout'
import Table from '../../../components/Table'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'

function Payment() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <Modal title=" Make Payment" id="paymentModal" >
                        <ModalDetails  />
                    </Modal>
                    <div className=" Patients">
                        <TableHeader title="Payments" />
                        <Table />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Payment