import React, { useContext } from 'react'
import Layout from '../../../components/Layout'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'
import Card3 from '../../../components/Card3'
import { MyContext } from '../../../context/Context'
import Loader from '../../../components/Loader'
import LinkHeader from '../../../components/LinkHeader'

function AdminShift() {

    const { shift } = useContext(MyContext)

    return (
        <div>
            {shift ?
                <Layout>
                    <LinkHeader many="2" current="Shifts"/>
                    <div className="container">
                        <Modal title=" Create Shift" id="shiftModal" >
                            <ModalDetails />
                        </Modal>
                        <div className=" Patients">
                            <TableHeader title="Shift" />
                            <div className="mt-3">
                                <div className="row">
                                    {shift.map((each, i) => (
                                        <div className="col-md-6 mb-3" key={i}>
                                            <Card3
                                                data={each}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
                : <Loader />}
        </div>
    )
}

export default AdminShift