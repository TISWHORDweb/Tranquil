import React from 'react'
import '../css/style.css'
import Logo from '../img/2N-Logo-Transparent.png'
// import Bg from '../img/vector-gray-and-white-color-geometric-abstract-background.jpeg'
// import Dot from '../img/Dot-Transparent-Isolated-Background.png'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div>
            <div className="auth">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="">
                            <div className="first">
                                <div className="up mb-4">
                                    <img src={Logo} alt="" />
                                    <h2 className='m-0'>Sign up</h2>
                                    <p>Already have an account? <Link to="/auth/login" style={{ textDecoration: "none" }}><span >Sign in</span></Link></p>
                                </div>
                                <form action="">
                                    <div class=" mb-3">  <label for="floatingInput">Full name </label>
                                        <input type="text" class="" id="floatingInput" />

                                    </div>
                                    <div class=" mb-3">
                                        <label for="floatingInput">Email address</label>
                                        <input type="email" class="" id="floatingInput" />

                                    </div>
                                    <div class=" mb-3">
                                        <label for="floatingPhone">Phome number</label>
                                        <input type="number" class="" id="floatingPhone" />

                                    </div>
                                    <div class="">
                                        <label for="floatingPassword">Password</label>
                                        <input type="password" class="" id="floatingPassword" />

                                    </div>
                                </form>
                                <div className="check marg mt-4">
                                    <input type="checkbox" />
                                    <p className='m-0 ms-3'>I agree with <span>Terms</span> and <span>Privacy Policy</span></p>
                                </div>
                                <div className="mt-4 mb-5" >
                                    <button className='button'>Create your free account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="second">
                            <div className="text mb-4">
                                <h2>Welcome to <br />our community</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, possimus voluptates necessitatibus quaerat eius voluptate, sequi et architecto natus quibusdam voluptatem placeat dolor culpa, illo sint laudantium iure earum hic.</p>
                            </div>
                            <div className="lorem">
                                <span className=''>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aliquid laboriosam sequi."</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register