import React, { useContext, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';
import { calculateAge } from '../../../Utils/Core'


function ModalDetails() {
    const { token } = useContext(MyContext)
    const [dob, setDob] = useState()
    const [age, setAge] = useState()
    const [lastName, setLastName] = useState()
    const [firstName, setFirstName] = useState()
    const [gender, setGender] = useState()
    const [email, setEmail] = useState()
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

    const Ageconverter = (date) => {
        setDob(date)
        const NewAge = calculateAge(date)
        setAge(NewAge)
    }

    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    const HandlePatient = (e) => {
        e.preventDefault()

        if (!firstName || !lastName || !email || !dob || !gender) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {
            setSpin(true)
            const body = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                dob: dob,
                age: age,
                gender: gender,
            }

            console.log(body)
            axios.post(`${USER_BASE_URL}/employee/patient/create`, body, axiosConfig)
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
                    <h3 className='mb-3 f20'>Create Patients</h3>
                    <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
                </div>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>First name</label>  <br />
                        <input type="text" className='inputts' name="" id="discount" onChange={(e) => setFirstName(e.target.value)} placeholder='John' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Last name</label>  <br />
                        <input type="text" className='inputts' name="" id="discount" onChange={(e) => setLastName(e.target.value)} placeholder='Doe' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Email</label>  <br />
                        <input type="email" className='inputts' name="" id="discount" onChange={(e) => setEmail(e.target.value)} placeholder='johndoe@gmail.com' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='fw3 f15'>Gender</label>  <br />
                        <select class="form-select inputts selectHolder" onChange={(e) => setGender(e.target.value)} aria-label="Default select example">
                            <option  ><span>select</span></option>
                            <option value="Male" ><span>Male</span></option>
                            <option value="Female" ><span>Female</span></option>
                            <option value="Other" ><span>Others</span></option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <div className="mb-3">
                            <label htmlFor="discount" className='f15 fw3'>Date of birth</label>  <br />
                            <input type="date" className='inputts' name="" id="discount" onChange={(e) => Ageconverter(e.target.value)} placeholder='01-01-1999' />
                        </div>
                        <label htmlFor="discount" className='f15 fw3'>Age</label>  <br />
                        <input type="text" className='inputts' value={age} name="" id="discount" disabled placeholder='johndoe@gmail.com' />
                    </div>
                    {click ? <div className={className}>
                        <p>{message}</p>
                    </div> : ""}
                    <div className="pt-3">
                        <button type="button" onClick={HandlePatient} class="btnDark  w-100 m-0 f17 ">
                            {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                            Create Patient
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalDetails