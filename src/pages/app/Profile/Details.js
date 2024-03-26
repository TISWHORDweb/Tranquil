import React from 'react'
import Prof from '../../../img/1533506.png'

function Details() {
    return (
        <div>
            <div className="card1 borderGray">
                <div className="header">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                        <img src={Prof} alt="Profile img" />
                        </div>
                        <div className="col-md-9 p-0">
                        <h4>Batimehin Emmanuel</h4>
                        </div>
                    </div>
                </div>
                <div className="contact mt-3">
                    <h5>Contact details</h5>
                    <ul>
                        <li>
                            <i class='bx bx-phone-call'></i>
                            <span>+2348120963057</span>
                        </li>
                        <li>
                            <i class='bx bxl-gmail'></i>
                            <span>ebatimehin@gmail.com</span>
                        </li>
                        <li>
                            <i class='bx bx-home' ></i>
                            <span>Durumi 1, Area 1, Abuja</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Details