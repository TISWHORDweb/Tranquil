import React, { useContext, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';
import { convertDateToTimestamp, convertTimeToTimestamp } from '../../../Utils/Core';

function ModalDetails() {
    const { searchQuery, updateSearchQuery, token, filteredPatients } = useContext(MyContext)
    const [patientId, setPatientId] = useState()
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const [patientName, setPatientName] = useState("");
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [time, setTime] = useState();
    const [duration, setDuration] = useState();
    const [date, setDate] = useState();


    const PatientClicked = (patient) => {
        if (patient) {
            setPatientId(patient._id)
            setPatientName(patient.firstName + " " + patient.lastName)
        }
    }
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

    const HandleAppointment = (e) => {
        e.preventDefault()

        if (!title || !time || !date || !duration || !patientId) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {
            setSpin(true)
            const body = {
                title: title,
                time: time,
                date: date,
                duration: duration,
                pid: patientId,
                description: description,
            }

            console.log(body)
            axios.post(`${USER_BASE_URL}/employee/appointment/create`, body, axiosConfig)
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
                    <h3 className='mb-3 f20'>Create Appointment</h3>
                    <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
                </div>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Appointmnet Title</label>  <br />
                        <input type="text" className='inputts' name="" id="" onChange={(e)=>setTitle(e.target.value)} placeholder='Title' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Appointmnet Description</label>  <br />
                        <input type="text" className='inputts' name="" id="" onChange={(e)=>setDescription(e.target.value)} placeholder='.......' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Patients</label>  <br />
                        <input type="text" className='inputts' value={searchQuery} onChange={(e) => updateSearchQuery(e.target.value)} name="" id="discount" placeholder='Tid-' />
                    </div>

                    {filteredPatients.length === 0 && <p>No patient found matching your search.</p>}
                    {patientName === "" ?
                        <div className="">
                            {searchQuery !== "" ?
                                <div className="search_list">
                                    {filteredPatients.map((each) => (
                                        <span onClick={() => PatientClicked(each)}>{each.firstName + " " + each.lastName}</span>
                                    ))}
                                </div> : <div className=""></div>}
                        </div> : <div className="search_list"><span className='picked'>{patientName}</span></div>}
                        <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Appointmnet Date</label>  <br />
                        <input type="date" className='inputts' onChange={(e)=>setDate(convertDateToTimestamp(e.target.value))} name="" id="" placeholder='03-04-2024' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Appointmnet Time</label>  <br />
                        <input type="time" className='inputts' onChange={(e)=>setTime(convertTimeToTimestamp(e.target.value))} name="" id="" placeholder='20 Minutes' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Appointmnet Duration (in minutes):</label>  <br />
                        <input type="number" className='inputts' name="" onChange={(e)=>setDuration(e.target.value)} id="" placeholder='20 Minutes' />
                    </div>
                    {click ? <div className={className}>
                        <p>{message}</p>
                    </div> : ""}
                    <div className="pt-3">
                        <button type="button" onClick={HandleAppointment} class="btnDark  w-100 m-0 f17 " >
                            {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                            Book Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalDetails