import React, { useContext, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';

function ModalDetails() {
    const { token } = useContext(MyContext)
    const [name, setName] = useState()
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

    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    const HandleDepartment = (e) => {
        e.preventDefault()

        if (!name || !description ) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {
            setSpin(true)

            const body = {
                description: description,
                name: name,
            }

            console.log(body)
            axios.post(`${USER_BASE_URL}/admin/department/create`, body, axiosConfig)
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
            <div class="justify-content-space">
                <h3 className='mb-3 f20'>Create Department</h3>
                <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
            </div>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="discount" className='f15 fw3'>Department name</label>  <br />
                    <input type="text" className='inputts' name="" id="discount" onChange={(e) => setName(e.target.value)} placeholder='John' />
                </div>
                <div className="mb-3">
                    <label htmlFor="discount" className='f15 fw3'>Description</label>  <br />
                    <textarea type="text"  cols="30" rows="10" className='inputts' name="" id="discount" onChange={(e) => setDescription(e.target.value)} placeholder='Doe' ></textarea>
                </div>
                {click ? <div className={className}>
                    <p>{message}</p>
                </div> : ""}
                <div className="pt-3">
                    <button type="button" onClick={HandleDepartment} class="btnDark  w-100 m-0 f17 ">
                        {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                        Create Department
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default ModalDetails