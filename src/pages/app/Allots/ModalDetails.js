import React, { useContext, useEffect, useRef, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';

function ModalDetails() {
    const { type, searchQuery, updateSearchQuery, token, filteredPatients } = useContext(MyContext)
    const [department, setDepartment] = useState()
    const [bed, setBed] = useState()
    const [ward, setWard] = useState()
    const [cabin, setCabin] = useState()
    const [fetch, setFetched] = useState()
    const [patientId, setPatientId] = useState()
    const [departmentValue, setDepartmentValue] = useState()
    const [bedValue, setBedValue] = useState()
    const [wardValue, setWardValue] = useState()
    const [cabinValue, setCabinValue] = useState()
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const [patientName, setPatientName] = useState("");

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "t-token": token
        }
    }

    useEffect(() => {

        if (type === "employee") {
            const url = `${USER_BASE_URL}/employee/allot/dropdown`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setDepartment(response.department)
                    setBed(response.bed)
                    setWard(response.ward)
                    setCabin(response.cabin)
                    setFetched(true)
                })
                .catch((err) => console.log(err));
        }
    }, [type]);

    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    const PatientClicked = (patient) => {
        if (patient) {
            setPatientId(patient._id)
            setPatientName(patient.firstName + " " + patient.lastName)
        }
    }

    const HandleAllot = () => {
        const isValid = (wardValue && !cabinValue) || (!wardValue && cabinValue);

        if (!bed || !ward || !patientId || !cabin) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else if (!isValid) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Sorry you can only assigned a ward or cabin to a patient")
            Clearer()
        } else {
            setSpin(true)

            const body = {
                bid: bedValue,
                wid: wardValue,
                pid: patientId,
                did: departmentValue,
                cid: cabinValue
            }

            axios.post(`${USER_BASE_URL}/${type}/allot/create`, body, axiosConfig)
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
                        setMessage(data.message)
                        setSpin(false)
                        Clearer()
                    }

                })
        }
    }

    return (
        <div>
            <div class="modal-body InviteModal p-5">
                <h3 className='mb-3 f20'>Create Allots</h3>
                {fetch ? <form action="">
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
                        <label htmlFor="discount" className='fw3 f15'>Departments</label>  <br />
                        <select class="form-select inputts selectHolder" onChange={(e) => setDepartmentValue(e.target.value)} aria-label="Default select example">
                            <option value="">----</option>
                            {department.map((each, i) => (
                                <option value={each._id} key={i}>{each.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='fw3 f15'>Bed</label>  <br />
                        <select class="form-select inputts selectHolder" onChange={(e) => setBedValue(e.target.value)} aria-label="Default select example">
                            <option value="">----</option>
                            {bed.map((each, i) => (
                                <option value={each._id} key={i}>{each.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='fw3 f15'>Ward</label>  <br />
                        <select class="form-select inputts selectHolder" onChange={(e) => setWardValue(e.target.value)} aria-label="Default select example">
                            <option value="">----</option>
                            {ward.map((each, i) => (
                                <option value={each._id} key={i}>{each.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='fw3 f15'>Cabin</label>  <br />
                        <select class="form-select inputts selectHolder" onChange={(e) => setCabinValue(e.target.value)} aria-label="Default select example">
                            <option value="">----</option>
                            {cabin.map((each, i) => (
                                <option value={each._id} key={i}>{each.name}</option>
                            ))}
                        </select>
                    </div>
                    {click ? <div className={className}>
                        <p>{message}</p>
                    </div> : ""}
                    <div className="pt-3">
                        <button type="button" onClick={HandleAllot} class="btnLight  w-100 m-0 f17 ">
                            {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                            Create Allotment
                        </button>
                    </div>
                </form> : <center><span class="spinner-border spinner-border-sm me-2 second " style={{ width: "50px", height: "50px" }} aria-hidden="true"></span></center>}
            </div>
        </div>
    )
}

export default ModalDetails