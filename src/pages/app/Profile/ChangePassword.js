import React, { useContext, useState } from 'react'
import { MyContext } from '../../../context/Context';
import { USER_BASE_URL } from '../../../Datas/data';
import axios from 'axios';
import { checkPasswordValidity } from '../../../Utils/Core';

function ChangePassword() {
    const { token, type } = useContext(MyContext)
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [className, setClassName] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


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

    const passwordValidate = checkPasswordValidity(newPassword)

    const HandlePassword = (e) => {
        e.preventDefault()
        if (!password || !newPassword) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else if (passwordValidate) {
            setClick(true)
            setClassName("alert__message error")
            setMessage(passwordValidate)
            Clearer()
        } else if (password < 8) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Password must be atleast 8 Characters Long")
            Clearer()
        } else if (newPassword !== confirmPassword) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Password does not match, please try again")
            Clearer()
        } else {
            setSpin(true)
            const body = {
                newPassword,
                password
            }

            axios.post(`${USER_BASE_URL}/${type}/password/change`, body, axiosConfig)
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
            <div class="modal-body InviteModal ">
                <div class="justify-content-space">
                    <h3 className='mb-3 f20'>Change Password</h3>
                    <button type="button" class=" cancel f20" data-bs-dismiss="modal"><i class='bx bx-x'></i></button>
                </div>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Old password</label>  <br />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className='inputts' name="" id="discount" placeholder='*********' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>New password</label>  <br />
                        <input type="password" onChange={(e) => setNewPassword(e.target.value)} className='inputts' name="" id="discount" placeholder='********' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount" className='f15 fw3'>Confirm password</label>  <br />
                        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className='inputts' name="" id="discount" placeholder='********' />
                    </div>
                    {click ? <div className={className}>
                        <p>{message}</p>
                    </div> : ""}
                    <div className="pt-3">
                        <button type="button" onClick={HandlePassword} class="btnDark  w-100 m-0 f17 " >
                            {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword