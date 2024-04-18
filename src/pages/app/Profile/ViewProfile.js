import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import Details from './Details'
import Kin from './Kin'
import Overview from './Overview'
import ButtonLink from './ButtonLink'
import { MyContext } from '../../../context/Context';
import axios from 'axios'
import { USER_BASE_URL } from '../../../Datas/data'
import Loader from '../../../components/Loader'
import { useParams } from 'react-router-dom'

function ViewProfile() {
    const { type } = useContext(MyContext)
    const [user, setUser] = useState(null)
    const {id, types} = useParams()

    console.log(types);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));

        if (data) {
            let url;

            if(types === "employee"){
                url = `${USER_BASE_URL}/admin/employee/${id}`
            }else if(types === "patient"){
                url = `${USER_BASE_URL}/admin/patient/${id}`
            }
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": data.token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setUser(response)
                })
                .catch((err) => console.log(err));
        }
    }, [type, id, types]);

  return (
    <div>
            {user ?
                <Layout>
                    <div className="container">
                        <div className="Profile">
                            <div className="row ">
                                <div className="col-md-5">
                                    <Details user={user} />
                                    <Kin user={user} />
                                </div>
                                <div className="col-md-7">
                                    <Overview user={user} />
                                    <ButtonLink />
                                </div>
                            </div>
                        </div>
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

export default ViewProfile