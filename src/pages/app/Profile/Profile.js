import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../../components/Layout'

import Details from './Details'
import Kin from './Kin'
import Overview from './Overview'
import ButtonLink from './ButtonLink'
import Modal from '../../../components/Modal'
import LogOut from '../../../components/LogOut'
import { MyContext } from '../../../context/Context';
import axios from 'axios'
import { USER_BASE_URL } from '../../../Datas/data'
import Loader from '../../../components/Loader'
import { Check } from '../../../Utils/Core'
import EditProfile from './EditProfile'
import ChangePassword from './ChangePassword'

function Profile() {
    const { type } = useContext(MyContext)
    const [user, setUser] = useState(null)
    const [department, setDepartment] = useState([])

    const Checks = Check()


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));

        if (Checks === "true" && data) {
            const url = `${USER_BASE_URL}/${type}/details`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    if (type === "patient") {
                        setUser(response)
                    } else if (type === "employee") {
                        setUser(response)
                        setDepartment(response.did)
                    }

                })
                .catch((err) => console.log(err));
        }
    }, [type, Checks]);

    return (
        <div>
            <div className=''>
                <div class="modal fade" id="loginSuccess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body AlertModal p-5">
                                <ChangePassword />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {user ?
                <Layout>
                    <div className="container">
                        <div className="d-flex">
                            <Modal title=" Edit profile" id="profileModal" class="" >
                                <EditProfile user={user} />
                            </Modal>
                            <button type="button" className="btnNoBg mt-4" data-bs-toggle="modal" data-bs-target="#loginSuccess" >
                                Change password
                            </button>
                        </div>
                        <div className="Profile">
                            <div className="row ">
                                <div className="col-md-5">
                                    <Details user={user} />
                                    {type === "patient" ?
                                        <Kin user={user} /> :
                                        <></>
                                    }
                                    {type === "employee" ?
                                        <>
                                            <div className="Card2 mt-3">
                                                <div className="">
                                                    <small className='third'>Category :</small>
                                                    <h4>{user.ecid.category}</h4>
                                                </div>
                                            </div>
                                            <div className="Card2 mt-3">
                                                <div className="">
                                                    <small className='third'>Assigned to :</small>
                                                    <h3>{department.name}</h3>
                                                </div>
                                                <p>{department.description}</p>
                                            </div>
                                        </> :
                                        <></>
                                    }
                                </div>
                                <div className="col-md-7">
                                    <Overview user={user} />
                                    <ButtonLink />
                                </div>
                            </div>
                        </div>
                        <LogOut />
                        <div className="m50"></div>
                    </div>
                </Layout>
                : <div className="">
                    <Loader />
                </div>
            }
        </div>
    )
}

export default Profile