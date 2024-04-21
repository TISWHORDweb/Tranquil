import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';
import { GetTime, GetTodaysDate, timestampToTime } from '../../../Utils/Core'

function SignInOut(props) {
    const { token } = useContext(MyContext)
    const [status, setStatus] = useState()
    const [shift, setShift] = useState()
    const [esid, setEsid] = useState()
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");

    useEffect(()=>{
        setShift(props.shift)
        setStatus(props.status)
        setEsid(props.shift._id)
    },[props])

    const currentTime = GetTime()
    const Date = GetTodaysDate()
    const Time = timestampToTime(currentTime)
    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "t-token": token
        }
    }

    const HandleSignINSignOut = (e) =>{
        e.preventDefault()

        if (!esid ) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {
            setSpin(true)
            const body = {
                esid
            }
           
            axios.post(`${USER_BASE_URL}/employee/shift/audit/create`, body, axiosConfig)
                .then(response => {
                    const data = response.data

                    if (data.status === true) {
                        setClick(true)
                        setClassName("alert__message success")
                        setMessage(data.message)
                        setSpin(false)
                    } else if (data.status === false) {
                        setClick(true)
                        setClassName("alert__message error")
                        setMessage("There was an error trying to process your request, Please try again later")
                        setSpin(false)
                    } 

                }).catch((e)=>{
                    console.log(e);
                    setClick(true)
                    setClassName("alert__message error")
                    setMessage("There was an error trying to process your request, Please try again later")
                    setSpin(false)
                    Clearer()
                })
        }
    }

    return (
        <div>
            <div class="modal-body AlertModal p-5">
                {shift ?
                <center>
                    {status ? <p>You are about to END your {shift.sid.name} shift at {Time} on {Date}, Clicked the END button to end or cancel to cancel the request</p> :
                    <p>You are about to START your {shift.sid.name} shift at {Time} on {Date}, Clicked the START button to start or cancel to cancel the request</p>}
                    {click ? <div className={className}>
                        <p>{message}</p>
                    </div> : ""}
                    <div className="buttonss">
                        <button type="button" onClick={HandleSignINSignOut} class="btn success">
                        {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                            {status? "End shift" : "Start shift"}
                        </button>
                        <button type="button" class="btn cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </center> : <></>}
            </div>


        </div>
    )
}

export default SignInOut