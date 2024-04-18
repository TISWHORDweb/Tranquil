import React, { useContext, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';


function AssignShift(props) {
    const { token, department, searchTerm, handleSearchChange, filteredEmployees } = useContext(MyContext)
    const [eid, setEid] = useState()
    const [did, setDid] = useState()
    const [employeeName, setEmployeeName] = useState("")
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

    const name = props.name
    const sid = props.id


    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    const HandlePatient = (e) => {
        e.preventDefault()

        if (!eid || !sid || !did) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {
            setSpin(true)
            const body = {
                did,
                eid,
                sid
            }

            axios.post(`${USER_BASE_URL}/admin/shift/assign`, body, axiosConfig)
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

    const EmployeeClicked = (patient) => {
        if (patient) {
            setEid(patient._id)
            setEmployeeName(patient.firstName + " " + patient.lastName)
        }
    }
    console.log(filteredEmployees);
    return (
        <div>
            <div class="modal-body InviteModal p-5">
                <div class="justify-content-space">
                    <h3 className='mb-3 f20'>Create Shift</h3>
                    <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
                </div>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Employee</label>  <br />
                        <input type="text" className='inputts' name="" id="discount" value={searchTerm} onChange={handleSearchChange} placeholder='Tid-' />
                    </div>
                    {employeeName === "" ?
                        <div className="">
                            {searchTerm !== "" ?
                                <div className="search_list">
                                    {filteredEmployees.map((each) => (
                                        <span onClick={() => EmployeeClicked(each)}>{each.firstName + " " + each.lastName}</span>
                                    ))}
                                </div> : <div className=""></div>}
                        </div> : <div className="search_list"><span className='picked'>{employeeName}</span></div>}

                    <div className="mb-3">
                        <label htmlFor="discount" className='fw3 f15'>Department</label>  <br />
                        <select class="form-select inputts selectHolder" onChange={(e) => setDid(e.target.value)} aria-label="Default select example">
                            <option  ><span>select</span></option>
                            {department.map((each, i) => (
                                <option value={each.department._id} ><span>{each.department.name}</span></option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='fw3 f15'>Shift</label>  <br />
                        <input type="text" className='inputts' name="" id="discount" value={name} />
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

export default AssignShift