import React, { useEffect, useRef } from 'react'
import CautionImg from '../img/icon/Group 5647.png'
import { useNavigate } from 'react-router-dom';


function SessionExpireModal() {

    const navigate = useNavigate();
    const expiredRef = useRef(null);

    useEffect(() => {
        expiredRef.current.click()
    }, [])

    const HandleLogout = () => {
        console.log("in");
        localStorage.clear()
        navigate('/');
        window.location.reload();
    }

    return (
        <div>
            <button type="button" ref={expiredRef} class="btn " style={{ display: 'none' }} data-bs-toggle="modal" data-bs-target="#sessionModal">
            </button>

            <div class="modal fade" id="sessionModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body AlertModal p-5">
                            <center>
                                <img src={CautionImg} alt="" />
                                <p>Your session has expired, Please log in again</p>
                                <div className="buttonss">
                                  <button onClick={HandleLogout()} type="button" class="btn success" >Login</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SessionExpireModal