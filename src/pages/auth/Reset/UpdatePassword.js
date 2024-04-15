import React, { useEffect, useRef, useState } from 'react'
import AuthLayout from '../../../components/AuthLayout'
import { LOCAL_AUTH_BASE_URL } from '../../../Datas/data';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SuccessIcon from '../../../img/icon/Illustration.png'
import { checkPasswordValidity } from '../../../Utils/Core';
import Logo from '../../../img/Tranquil3.png'

function UpdatePassword() {
    const successRef = useRef(null);
    const [email, setEmail] = useState("")
    const [firstPassword, setFirstPassword] = useState("")
    const [secondPassword, setSecondPassword] = useState("")
    const [click, setClick] = useState(false);
    const [spin, setSpin] = useState(false);
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [className, setClassName] = useState("");


    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    }

    useEffect(() => {
        const email = JSON.parse(localStorage.getItem('userEmail'));
        setEmail(email)
      }, []);

    const navigate = useNavigate();

    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    const secondPasswordValidate = checkPasswordValidity(secondPassword)

    async function HandleUpdate(e) {
        e.preventDefault();

        if (!firstPassword || !secondPassword) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else if(firstPassword !== secondPassword){
            setClick(true)
            setClassName("alert__message error")
            setMessage("Password did not match")
            Clearer()
        } else if (secondPasswordValidate) {
            setClick(true)
            setClassName("alert__message error")
            setMessage(secondPasswordValidate)
            Clearer()
        } else if(firstPassword < 8 || secondPassword < 8){
            setClick(true)
            setClassName("alert__message error")
            setMessage("Password must be atleast 8 Characters Long")
            Clearer()
        }else {
            setSpin(true)
            const newPassword = secondPassword
            const body = {
                email,
                newPassword
            }
            axios.post(`${LOCAL_AUTH_BASE_URL}/password/reset/change`, body, axiosConfig)
                .then(response => {
                    const data = response.data
                    console.log(data)

                    if (data.status === true) {
                        setClick(false)
                        setClassName("")
                        successRef.current.click()
                        setSuccessMessage(data.message)
                        localStorage.clear()
                        const timerId = setTimeout(() => {
                            navigate('/auth/login');
                            window.location.reload();

                        }, 4000);

                        return () => clearTimeout(timerId);

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
            <div className="">
                <AuthLayout>
                <div className=''>
                        <div class="modal fade" id="loginSuccess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body AlertModal p-3">
                                        <center>
                                            <img src={SuccessIcon} alt="" />
                                            <p>{successMessage}</p>

                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="" data-bs-toggle="modal" data-bs-target="#loginSuccess" ref={successRef} style={{ display: 'none' }}>
                        </button>
                    </div>
                    <div className="first pt-5 d-flex justify-content-center">
                        <div className="registerScroll Authpad">
                            <div className="up mb-4">
                                <img src={Logo} alt="" />
                                <h2 className='m-0'>Update Password</h2>
                            </div>
                            <p>Kindly enter a new password and confirm the new password. This will be your new credentials to access your account</p>
                            {click ? <div className={className}>
                                <p>{message}</p>
                            </div> : ""}
                            <form action="">
                                <div class=" mb-3">
                                    <label for="floatingInput">Choose a Password</label>
                                    <input type="password" class="" id="floatingInput" onChange={(e) => setFirstPassword(e.target.value)} />
                                </div>
                                <div class=" mb-3">
                                    <label for="floatingInput">Retype Password</label>
                                    <input type="password" class="" id="floatingInput" onChange={(e) => setSecondPassword(e.target.value)} />
                                </div>
                            </form>
                            <div className="mt-4 mb-3" >
                                <button className='btnLight w-100' onClick={HandleUpdate}>
                                    {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                     Save</button>
                            </div>
                            <center className='btnBottom'><p>Didn't receive any mail ? <span><a href="/auth/reset">Forgot password</a></span></p></center>
                        </div>
                    </div>
                </AuthLayout>
            </div>
        </div>
    )
}

export default UpdatePassword