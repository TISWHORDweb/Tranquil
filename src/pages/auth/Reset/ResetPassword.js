import React, { useRef, useState } from 'react'
import Logo from '../../../img/Tranquil3.png'
import AuthLayout from '../../../components/AuthLayout'
import { LOCAL_AUTH_BASE_URL } from '../../../Datas/data';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SuccessIcon from '../../../img/icon/Illustration.png'

function ResetPassword() {
    const successRef = useRef(null);
    const [email, setEmail] = useState("")
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

    const navigate = useNavigate();

    const Clearer = () => {
        const timerId = setTimeout(() => {
            setClick(false)
            setMessage("")
        }, 5000);

        return () => clearTimeout(timerId);
    }

    async function HandleReset(e) {
        e.preventDefault();

        if (!email) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {
            setSpin(true)
            const body = {
                email
            }
            axios.post(`${LOCAL_AUTH_BASE_URL}/password/reset`, body, axiosConfig)
                .then(response => {
                    const data = response.data
                    console.log(data)

                    if (data.status === true) {
                        setClick(false)
                        setClassName("")
                        successRef.current.click()
                        setSuccessMessage(data.message)
                        localStorage.setItem('userEmail', JSON.stringify(email));
                        const timerId = setTimeout(() => {
                            navigate('/auth/verify');
                            window.location.reload();

                        }, 4000);

                        return () => clearTimeout(timerId);

                    } else if (data.status === false) {
                        setClick(true)
                        setClassName("alert__message error")
                        setMessage(data.message)
                        setSpin(false)
                        Clearer()
                    }

                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div>
            <div className="ResetPassword">
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
                                <h2 className='m-0'>Forgot your password</h2>
                            </div>
                            {click ? <div className={className}>
                                <p>{message}</p>
                            </div> : ""}
                            <form action="">
                                <div class=" mb-3">
                                    <label for="floatingInput">Email address</label>
                                    <input type="email" class="" id="floatingInput"  onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </form>
                            <div className="mt-4 mb-3" >
                                <button className='btnLight w-100' onClick={HandleReset}>
                                    {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                    Reset password</button>
                            </div>
                            <center className='btnBottom'><p>Remember your password ? <span><a href="/auth/login">Log in</a></span></p></center>
                        </div>
                    </div>
                </AuthLayout>
            </div>
        </div>
    )
}

export default ResetPassword