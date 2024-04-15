import Logo from '../../img/Tranquil3.png'
import React, { useEffect, useRef, useState } from 'react'
import AuthLayout from '../../components/AuthLayout'
import { LOCAL_AUTH_BASE_URL } from '../../Datas/data';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import SuccessIcon from '../../img/icon/Illustration.png'
import { checkPasswordValidity } from '../../Utils/Core';

function Register() {
    const successRef = useRef(null);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
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

    const passwordValidate = checkPasswordValidity(password)

    async function HandleUpdate(e) {
        e.preventDefault();

        if (!email || !password || !lastName || !firstName) {
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
        } else {
            setSpin(true)
            const body = {
                email,
                password,
                lastName,
                firstName
            }

            axios.post(`${LOCAL_AUTH_BASE_URL}/admin/register`, body, axiosConfig)
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
                <div className="first ">
                    <div className="registerScroll Authpad">
                        <div className="up mb-4">
                            <img src={Logo} alt="" />
                            <h2 className='m-0'>Sign up</h2>
                            <p>Already have an account? <Link to="/auth/login" style={{ textDecoration: "none" }}><span >Sign in</span></Link></p>
                        </div>
                        {click ? <div className={className}>
                            <p>{message}</p>
                        </div> : ""}
                        <form action="">
                            <div class=" mb-3">
                                <label for="floatingInput">First name </label>
                                <input type="text" class="" id="floatingInput" onChange={(e) => setFirstname(e.target.value)} />
                            </div>
                            <div class=" mb-3">
                                <label for="floatingInput">Last name </label>
                                <input type="text" class="" id="floatingInput" onChange={(e) => setLastname(e.target.value)} />
                            </div>
                            <div class=" mb-3">
                                <label for="floatingInput">Email address</label>
                                <input type="email" class="" id="floatingInput" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="">
                                <label for="floatingPassword">Password</label>
                                <input type="password" class="" id="floatingPassword" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </form>
                        <div className="check marg mt-4">
                            <input type="checkbox" />
                            <p className='m-0 ms-3'>I agree with <span>Terms</span> and <span>Privacy Policy</span></p>
                        </div>
                        <div className="mt-4 mb-5" >
                            <button className='btnLight w-100' onClick={HandleUpdate}>
                                {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                Create account</button>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </div>
    )
}

export default Register