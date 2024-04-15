import React, { useContext, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';
import { generateTimeOptions, subtractHourFromTimestamp } from '../../../Utils/Core'


function ModalDetails() {
    const { token } = useContext(MyContext)
    const [name, setName] = useState()
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [description, setDescription] = useState()
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "t-token": token
        }
    }

    const timeOptions = generateTimeOptions();


    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    const HandlePatient = (e) => {
        e.preventDefault()

        if (!name || !startTime || !endTime) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {
            setSpin(true)
            const body = {
                name: name,
                description: description,
                startDate: subtractHourFromTimestamp(startTime),
                endDate: subtractHourFromTimestamp(endTime)
            }
           
            axios.post(`${USER_BASE_URL}/admin/shift/create`, body, axiosConfig)
                .then(response => {
                    const data = response.data

                    if (data.status === true) {
                        setClick(true)
                        setClassName("alert__message success")
                        setMessage(data.message)
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
            <div class="modal-body InviteModal p-5">
                <div class="justify-content-space">
                    <h3 className='mb-3 f20'>Create Shift</h3>
                    <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
                </div>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Name</label>  <br />
                        <input type="text" className='inputts' name="" id="discount" onChange={(e) => setName(e.target.value)} placeholder='John' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Description</label>  <br />
                        <input type="text" className='inputts' name="" id="discount" onChange={(e) => setDescription(e.target.value)} placeholder='Doe' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='fw3 f15'>Start time</label>  <br />
                        <select class="form-select inputts selectHolder" onChange={(e) => setStartTime(e.target.value)} aria-label="Default select example">
                            <option  ><span>select</span></option>
                            {timeOptions.map((each, i) => (
                                <option value={each.timestamp} ><span>{each.time}</span></option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='fw3 f15'>End time</label>  <br />
                        <select class="form-select inputts selectHolder" onChange={(e) => setEndTime(e.target.value)} aria-label="Default select example">
                            <option  ><span>select</span></option>
                            {timeOptions.map((each, i) => (
                                <option value={each.timestamp} ><span>{each.time}</span></option>
                            ))}
                        </select>
                    </div>
                    {click ? <div className={className}>
                        <p>{message}</p>
                    </div> : ""}
                    <div className="pt-3">
                        <button type="button" onClick={HandlePatient} class="btnDark  w-100 m-0 f17 ">
                            {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                            Create Shift
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalDetails