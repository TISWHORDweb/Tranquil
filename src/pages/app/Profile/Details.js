import React from 'react'
import Prof from '../../../img/1533506.png'

function Details({user}) {

    return (
        <div>
            <div className="card1 borderGray">
                <div className="header">
                    <div className="d-flex align-items-center">
                        <div className="">
                        <img src={Prof} alt="Profile img" />
                        </div>
                        <div className="ms-3">
                        <h4>{user.firstName} {user.lastName}</h4>
                        </div>
                    </div>
                </div>
                <div className="contact mt-3">
                    <h5>Contact details</h5>
                    <ul>
                        <li>
                            <i class='bx bx-phone-call'></i>
                            <span>{user.phone ? user.phone : "---"}</span>
                        </li>
                        <li>
                            <i class='bx bxl-gmail'></i>
                            <span>{user.email ? user.email : "---"}</span>
                        </li>
                        <li>
                            <i class='bx bx-home' ></i>
                            <span>{user.address ? user.address : "---"}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Details