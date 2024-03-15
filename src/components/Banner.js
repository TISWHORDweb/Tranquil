import React from 'react'
// import { Link } from 'react-router-dom'
// import img1 from '../img/pexels-alexander-rondón-15206807.jpg'
// import img2 from '../img/pexels-sevil-yeva-15895543.jpg'
// import img3 from '../img/pexels-néo-rioux-9489163.jpg'



function Banner() {
    return (
        <div>
            <div className="Banner">
                <div className="sets">
                    <div className="set1">
                        <div className="ms-3">
                            <h2 className='m-0'>Welcome back, Brian!</h2>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                            </svg> You have 2 new messages and 15 new tasks</p>
                        </div>
                    </div>
                    <div className="set2">
                        <button className='message'> <i class='bx bx-calendar'></i> View Appointments</button>
                        {/* <Link to="/profile"><button className='setting'>  <i class="bx bx-user"></i> Profile</button></Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner