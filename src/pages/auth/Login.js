import Logo from '../../img/Tranquil3.png'
import AuthLayout from '../../components/AuthLayout'
import Socials from '../../components/Socials'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LOCAL_AUTH_BASE_URL } from '../../Datas/data';
import SuccessIcon from '../../img/icon/Illustration.png'
import axios from 'axios'


function Login() {
    const successRef = useRef(null);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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

    async function handleLogin(e) {
        e.preventDefault();

        if (!password || !email) {
            setClick(true)
            setClassName("alert__message error")
            setMessage("Fill all fields and try again")
            Clearer()
        } else {
            setSpin(true)
            const body = {
                email,
                password
            }
            axios.post(`${LOCAL_AUTH_BASE_URL}/login`, body, axiosConfig)
                .then(response => {
                    const data = response.data
                    console.log(data)

                    if (data.status === true) {
                        setClick(false)
                        setClassName("")
                        successRef.current.click()
                        setSuccessMessage(data.message)
                        localStorage.setItem('userLoggedIn', true);
                        localStorage.setItem('userData', JSON.stringify(data.data));
                        const timerId = setTimeout(() => {
                            navigate('/app');
                            window.location.reload();

                        }, 4000);

                        return () => clearTimeout(timerId);

                    } else if (data.status === false) {
                        console.log("in")
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
                <div className="">
                    <div className="first Authpad">
                        <div className="up mb-4">
                            <img src={Logo} alt="" />
                            <h2 className='m-0'>Sign in</h2>
                        </div>
                        {click ? <div className={className}>
                            <p>{message}</p>
                        </div> : ""}
                        <form action="">
                            <div class=" mb-3">
                                <label for="floatingInput">Email address</label>
                                <input type="email" class="" id="floatingInput" onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div class="">
                                <label for="floatingPassword">Password</label>
                                <input type="password" class="" onChange={(e) => setPassword(e.target.value)} id="floatingPassword" />

                            </div>
                        </form>
                        <div className="rem">
                            <div className="check">
                                <input type="checkbox" />
                                <p className='m-0 ms-3'>Remember me</p>
                            </div>
                            <div className="pass">
                                <p className='m-0'>Forgot password ?</p>
                            </div>
                        </div>
                        <div className="mt-4 mb-4">
                            <button className='btnLight w-100' onClick={handleLogin}>
                                {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                Sign In
                            </button>
                        </div>

                        <Socials />
                    </div>
                </div>
            </AuthLayout>
        </div>
    )
}

export default Login