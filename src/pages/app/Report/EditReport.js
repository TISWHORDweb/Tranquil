import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';

function EditReport({ data }) {
    const { token } = useContext(MyContext)
    const [patient, setPatient] = useState()
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const [reason, setReason] = useState("");
    const [frequency, setFrequency] = useState("");
    const [currentCondition, setCurrentCondition] = useState("");
    const [currentMedication, setCurrentMedication] = useState("");
    const [pastCondition, setPastCondition] = useState("");
    const [pastMedication, setPastMedication] = useState("");
    const [allergies, setAllergies] = useState("");
    const [patientName, setPatientName] = useState("");
    const [id, setId] = useState()

    useEffect(() => {
        if (data) {
            setAllergies(data.allergies)
            setCurrentCondition(data.currentCondition)
            setCurrentMedication(data.currentMedication)
            setFrequency(data.frequency)
            setPastCondition(data.pastCondition)
            setPastMedication(data.pastMedication)
            setReason(data.reason)
            setPatient(data.pid._id)
            setId(data._id)
            setPatientName(data.pid.firstName + " " + data.pid.lastName)
        }
    }, [data])

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

    const HandleEditReport = (e) => {
        e.preventDefault()
        if (data) {
            setSpin(true)
            const body = {
                currentCondition,
                currentMedication,
                frequency,
                reason,
                pastCondition,
                pastMedication,
                allergies,
                pid: patient,
                id
            }

            console.log(body)
            axios.put(`${USER_BASE_URL}/employee/report/edit`, body, axiosConfig)
                .then(response => {
                    const data = response.data

                    if (data.status === true) {
                        setClick(true)
                        setClassName("alert__message success")
                        setMessage(data.message)
                        setSpin(false)
                    }
                }).catch((e) => {
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
                    <h3 className='mb-3 f20'>Edit Reports</h3>
                    <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
                </div>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Patients</label>  <br />
                        <input type="text" className='inputts' value={patientName} disabled name="" id="discount" placeholder='Tid-' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Reason</label>  <br />
                        <input type="text" className='inputts' value={reason} name="" id="" onChange={(e) => setReason(e.target.value)} placeholder='Why were the patient admitted ? ' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Allergies <small className=''>(if any)</small></label>  <br />
                        <input type="text" className='inputts' value={allergies} name="" id="" onChange={(e) => setAllergies(e.target.value)} placeholder='e.g Water' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Current condition</label>  <br />
                        <textarea type="text" cols="30" rows="10" value={currentCondition} className='inputts' name="" id="discount" onChange={(e) => setCurrentCondition(e.target.value)} placeholder='Current medical diagnosis' ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Current medication</label>  <br />
                        <textarea type="text" cols="30" rows="10" value={currentMedication} className='inputts' name="" id="discount" onChange={(e) => setCurrentMedication(e.target.value)} placeholder='Current medication patient is being given' ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Frequency </label>  <br />
                        <input type="text" className='inputts' name="" value={frequency} id="" onChange={(e) => setFrequency(e.target.value)} placeholder='1 a day' />
                    </div>
                    <small>Medical History (if known)</small>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Past condition</label>  <br />
                        <textarea type="text" cols="30" rows="10" value={pastCondition} className='inputts' name="" id="discount" onChange={(e) => setPastCondition(e.target.value)} placeholder='Past medical diagnosis' ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Past medication</label>  <br />
                        <textarea type="text" cols="30" rows="10" value={pastMedication} className='inputts' name="" id="discount" onChange={(e) => setPastMedication(e.target.value)} placeholder='Past medication patient have being given so far' ></textarea>
                    </div>
                    {click ? <div className={className}>
                        <p>{message}</p>
                    </div> : ""}
                    <div className="pt-3">
                        <button type="button" onClick={HandleEditReport} class="btnDark  w-100 m-0 f17 " >
                            {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                            Update Report
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditReport