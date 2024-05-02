import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';

function ModalDetails() {
    const { type, token } = useContext(MyContext)
    const [department, setDepartment] = useState()
    const [category, setCategory] = useState()
    const [lastName, setLastName] = useState()
    const [firstName, setFirstName] = useState()
    const [email, setEmail] = useState()
    const [fetch, setFetched] = useState()
    const [departmentValue, setDepartmentValue] = useState()
    const [categoryValue, setCategoryValue] = useState()
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

    useEffect(() => {

        if (type === "admin") {
            const url = `${USER_BASE_URL}/employee/dropdown`
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
            })
                .then((res) => {
                    const response = res.data.data
                    setDepartment(response.department)
                    setCategory(response.category)
                    setFetched(true)
                }).catch((e)=>{
                    console.log(e);
                    setClick(true)
                    setClassName("alert__message error")
                    setMessage("There was an error trying to process your request, Please try again later")
                    setSpin(false)
                    Clearer()
                })
        }
    }, [type]);

    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    const HandleEmployee = () => {

        if (!firstName || !lastName || !email || !departmentValue || !category) {
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
                did: departmentValue,
                ecid: categoryValue
            }

            axios.post(`${USER_BASE_URL}/admin/employee/create`, body, axiosConfig)
                .then(response => {
                    const data = response.data

                    if (data.status === true) {
                        setClick(true)
                        setClassName("alert__message success")
                        setMessage(data.message)
                        setSpin(false)
                    } else  if (data.status === false) {
                        setClick(true)
                        setClassName("alert__message error")
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
                    <h3 className='mb-3 f20'>Create Employee</h3>
                    <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
                </div>
                {fetch ? <form action="">
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
                        <label htmlFor="discount" className='fw3 f15'>Category</label>  <br />
                        <select class="form-select inputts selectHolder" onChange={(e) => setCategoryValue(e.target.value)} aria-label="Default select example">
                            <option value="">----</option>
                            {category.map((each, i) => (
                                <option value={each._id} key={i}>{each.category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='fw3 f15'>Deparment</label>  <br />
                        <select class="form-select inputts selectHolder" onChange={(e) => setDepartmentValue(e.target.value)} aria-label="Default select example">
                            <option value="">----</option>
                            {department.map((each, i) => (
                                <option value={each._id} key={i}>{each.name}</option>
                            ))}
                        </select>
                    </div>
                    {click ? <div className={className}>
                        <p>{message}</p>
                    </div> : ""}
                    <div className="pt-3">
                        <button type="button" onClick={HandleEmployee} class="btnDark  w-100 m-0 f17 ">
                            {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                            Create Employee
                        </button>
                    </div>
                </form> : <center><span class="spinner-border spinner-border-sm me-2 second " style={{ width: "50px", height: "50px" }} aria-hidden="true"></span></center>}
            </div>
        </div>
    )
}

export default ModalDetails