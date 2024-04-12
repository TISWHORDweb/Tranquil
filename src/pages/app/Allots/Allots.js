import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import Modal from '../../../components/Modal'
import TableHeader from '../../../components/TableHeader'
import ModalDetails from './ModalDetails'
import Table from './Table'
import { MyContext } from '../../../context/Context'
import Loader from '../../../components/Loader'
import { USER_BASE_URL } from '../../../Datas/data'
import axios from 'axios'
import { Check } from '../../../Utils/Core'
import SessionExpireModal from '../../../components/SessionExpireModal'

function Allots() {
    const { checkAuth, type } = useContext(MyContext)
    const [allots, setAllots] = useState(null)
    const [expired, setexpired] = useState(false)

    const Checks = Check()
    useEffect(() => {
        checkAuth();

    }, [checkAuth]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (Checks) {

            const url = `${USER_BASE_URL}/employee/allot/all`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setAllots(response)
                })
                .catch((err) => console.log(err));

        } else {
            setexpired(true)
        }
    }, [type, Checks]);

    return (
        <div>
            {expired ? <SessionExpireModal /> : <></>}
            {allots ?
                <Layout>
                    <div className="container">
                        {type === "patient" ? <></> :
                            <Modal title=" Create Allots" id="allotsModal" >
                                <ModalDetails />
                            </Modal>
                        }
                        <div className=" Patients">
                            <TableHeader title="Allots" />
                            <Table allots={allots} />
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

export default Allots