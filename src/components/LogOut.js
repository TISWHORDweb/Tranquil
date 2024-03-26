import React from 'react'
import CautionImg from '../img/icon/Group 5647.png'

function LogOut() {
    return (
        <div>
            <div className="Logout">
                <div className="PatientModal mt-4">
                    <button type="button" class="btnRed" data-bs-toggle="modal" data-bs-target="#logoutModal">
                        Log out
                    </button>
                    <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog ">
                            <div class="modal-content">
                                <div class="modal-body AlertModal p-5">
                                    <center>
                                        <img src={CautionImg} alt="" />
                                        <p>Are you sure you want to log out ?</p>
                                        <div className="buttonss">
                                            <a href="/auth/login"> <button type="button" class="btn success">Yes</button></a>
                                            <button type="button" class="btn cancel" data-bs-dismiss="modal">Cancel</button>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogOut