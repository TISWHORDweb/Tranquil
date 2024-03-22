import React from 'react'
import Layout from '../../../components/Layout'
import Table from '../../../components/Table'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'

function Allots() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <Modal title=" Create Allots" id="allotsModal" >
                        <ModalDetails />
                    </Modal>
                    <div className=" Patients">
                        <TableHeader  title="Allots" />
                        <Table />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Allots