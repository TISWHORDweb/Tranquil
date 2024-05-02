import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';
import { calculateAge } from '../../../Utils/Core';

function EditProfile({ user }) {
    const { token, type } = useContext(MyContext)
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [nationality, setNationality] = useState("");
    const [state, setState] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState()
    const [gender, setGender] = useState()
    const [age, setAge] = useState()

    const Ageconverter = (date) => {
        setDob(date)
        const NewAge = calculateAge(date)
        setAge(NewAge)
    }

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setDob(user.dob)
            setNationality(user.nationality)
            setState(user.state)
            setAddress(user.address)
            setPhone(user.phone)
            setId(user._id)
            setAge(user.age)
            setGender(user.gender)
        }
    }, [user])

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

    const HandleEditProfile = (e) => {
        e.preventDefault()
        if (user) {
            setSpin(true)
            const body = {
                firstName,
                lastName,
                dob,
                nationality,
                state,
                gender,
                age,
                address,
                phone,
                id
            }

            console.log(body)
            axios.put(`${USER_BASE_URL}/${type}/edit`, body, axiosConfig)
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
                    <h3 className='mb-3 f20'>Create Patients</h3>
                    <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
                </div>
                <form action="E">
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>First name</label>  <br />
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='inputts' name="" id="discount" placeholder='John' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Last name</label>  <br />
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='inputts' name="" id="discount" placeholder='Doe' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Phone number</label>  <br />
                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className='inputts' name="" id="discount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Address</label>  <br />
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className='inputts' name="" id="discount" />
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
                            <input type="date" className='inputts' value={dob} name="" id="discount" onChange={(e) => Ageconverter(e.target.value)} placeholder='01-01-1999' />
                        </div>
                        <label htmlFor="discount" className='f15 fw3'>Age</label>  <br />
                        <input type="text" className='inputts' value={age} name="" id="discount" disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Nationality</label>  <br />
                        <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} className='inputts' name="" id="discount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>State of origin</label>  <br />
                        <input type="text" value={state} onChange={(e) => setState(e.target.value)} className='inputts' name="" id="discount" />
                    </div>
                    {click ? <div className={className}>
                        <p>{message}</p>
                    </div> : ""}
                    <div className="pt-3">
                        <button type="button" onClick={HandleEditProfile} class="btnDark  w-100 m-0 f17 " >
                            {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile