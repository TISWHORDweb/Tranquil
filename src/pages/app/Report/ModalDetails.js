import React, { useContext, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';


function ModalDetails() {
    const { searchQuery, updateSearchQuery, token, filteredPatients } = useContext(MyContext)
    const [patientId, setPatientId] = useState()
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

    const HandleReport = (e) => {
        e.preventDefault()

        if (!currentCondition || !currentMedication || !frequency || !reason || !patientId) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {
            setSpin(true)
            const body = {
                currentCondition,
                currentMedication,
                frequency,
                reason,
                pastCondition,
                pastMedication,
                allergies,
                pid: patientId,
            }

            console.log(body)
            axios.post(`${USER_BASE_URL}/employee/report/create`, body, axiosConfig)
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
                    <h3 className='mb-3 f20'>Create Reports</h3>
                    <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
                </div>
                <form action="">
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
                        </div> : <div className="search_list"><span className='picked'>{patientName}</span></div>
                    }
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Reason</label>  <br />
                        <input type="text" className='inputts' name="" id="" onChange={(e) => setReason(e.target.value)} placeholder='Why were the patient admitted ? ' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Allergies <small className=''>(if any)</small></label>  <br />
                        <input type="text" className='inputts' name="" id="" onChange={(e) => setAllergies(e.target.value)} placeholder='e.g Water' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Current condition</label>  <br />
                        <textarea type="text" cols="30" rows="10" className='inputts' name="" id="discount" onChange={(e) => setCurrentCondition(e.target.value)} placeholder='Current medical diagnosis' ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Current medication</label>  <br />
                        <textarea type="text" cols="30" rows="10" className='inputts' name="" id="discount" onChange={(e) => setCurrentMedication(e.target.value)} placeholder='Current medication patient is being given' ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Frequency </label>  <br />
                        <input type="text" className='inputts' name="" id="" onChange={(e) => setFrequency(e.target.value)} placeholder='1 a day' />
                    </div>
                    <small>Medical History (if known)</small>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Past condition</label>  <br />
                        <textarea type="text" cols="30" rows="10" className='inputts' name="" id="discount" onChange={(e) => setPastCondition(e.target.value)} placeholder='Past medical diagnosis' ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Past medication</label>  <br />
                        <textarea type="text" cols="30" rows="10" className='inputts' name="" id="discount" onChange={(e) => setPastMedication(e.target.value)} placeholder='Past medication patient have being given so far' ></textarea>
                    </div>
                    {click ? <div className={className}>
                        <p>{message}</p>
                    </div> : ""}
                    <div className="pt-3">
                        <button type="button" onClick={HandleReport} class="btnDark  w-100 m-0 f17 " >
                            {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                            Create Report
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalDetails