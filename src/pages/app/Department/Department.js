import React, { useContext } from 'react'
import Layout from '../../../components/Layout'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'
import { MyContext } from '../../../context/Context'
import Loader from '../../../components/Loader'
import Card2 from '../../../components/Card2'
import LinkHeader from '../../../components/LinkHeader'


function Department() {
    const { department } = useContext(MyContext)

    return (
        <div>
            {department ?
                <Layout>
                     <LinkHeader many="2" current="Department"/>
                    <div className="container">
                        <Modal title=" Create Department" id="departmentModal" >
                            <ModalDetails />
                        </Modal>
                        <div className=" Patients">
                            <TableHeader title="Departments" />
                            <div className="mt-3">
                                <div className="row">
                                    {department.map((each, i) => (
                                        <div className="col-md-6 mb-3" key={i}>
                                            <Card2
                                            data={each}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* <Table department={department} /> */}
                        </div>
                    </div>
                </Layout>
                : <div className="">
                    <Loader />
                </div>
            }
        </div>
    )
}

export default Department