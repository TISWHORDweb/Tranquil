import React, { useContext, useEffect, useState } from 'react'
import { timestampToTime } from '../../../Utils/Core';
import Modal from '../../../components/Modal'
import SignInOut from './SignIn&Out';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';
import { MyContext } from '../../../context/Context';

function ShiftDetails({ shifts }) {
    const [status, setStatus] = useState()
    const { token } = useContext(MyContext)

    useEffect(() => {
        if (shifts) {
            const url = `${USER_BASE_URL}/employee/shift/audit/status`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "t-token": token
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setStatus(response)
                })
                .catch((err) => console.log(err));
        }
    }, [shifts,token]);
console.log(status)
    return (
        <div>
            {shifts ? <div className="">
                {shifts.map((each, i) => (
                    <div className="mt-5">
                        <div className="justify-content-space">
                            <div className="">
                                <small className='third'>You're assign to :</small>
                                <h3 style={{ textTransform: "uppercase" }}>{each.sid.name} SHIFT</h3>
                            </div>
                            <div className="">
                                <small className='third'>In Department :</small>
                                <h3 style={{ textTransform: "uppercase" }}>{each.did.name} </h3>
                            </div>
                        </div>

                        <p>{each.sid.description}</p>
                        <div className="justify-content-space">
                            <div className="">
                                <span><span className='third'>From :</span> <span style={{ fontWeight: "600" }}> {timestampToTime(parseInt(each.sid.startDate))}</span></span>

                                <br />
                                <span><span className='third'>To:</span> <span style={{ fontWeight: "600" }}> {timestampToTime(parseInt(each.sid.endDate))}</span></span>
                            </div>
                            <div className="sign">
                                <Modal title={status ? "End shift" : "Start shift"} id="signin&outModal" >
                                    <SignInOut shift={each} status ={status}/>
                                </Modal>
                            </div>
                        </div>
                    </div>
                ))}

            </div> : <>

            </>}

        </div>
    )
}

export default ShiftDetails