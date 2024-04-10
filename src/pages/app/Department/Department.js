import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'
import { MyContext } from '../../../context/Context'
import Loader from '../../../components/Loader'
import { USER_BASE_URL } from '../../../Datas/data'
import axios from 'axios'
import { Check } from '../../../Utils/Core'
import Card2 from '../../../components/Card2'


function Department() {
    const { checkAuth, type } = useContext(MyContext)
    const [department, setDepartment] = useState(null)

    const Checks = Check()
    useEffect(() => {
        checkAuth();

    }, [checkAuth]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (Checks) {

            const url = `${USER_BASE_URL}/admin/department/all`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setDepartment(response)
                })
                .catch((err) => console.log(err));

        }
    }, [type, Checks]);

    return (
        <div>
            {department ?
                <Layout>
                    <div className="container">
                        <Modal title=" Create Department" id="departmentModal" >
                            <ModalDetails />
                        </Modal>
                        <div className=" Patients">
                            <TableHeader title="Departments" />
                            <div className="mt-3">
                                <div className="row">
                                    {department.map((each, i) => (
                                        <div className="col-md-6 mb-3">
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