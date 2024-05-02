import React, { useEffect, useRef, useState } from 'react'
import AddKin from './AddKin'
import Modal from '../../../components/Modal'
import EditKin from './EditKin';

function Kin({ user }) {
    const [kin, setKin] = useState()
    const editRef = useRef(null);
    useEffect(() => {
        if (user) {
            setKin(user.kid)
        }
    }, [setKin, user])

    const EditClick = () => {
        editRef.current.click()
    }

    return (
        <div>
            <div className=''>
                <div class="modal fade" id="loginSuccess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body AlertModal p-5">
                                <EditKin user={kin}/>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="" data-bs-toggle="modal" data-bs-target="#loginSuccess" ref={editRef} style={{ display: 'none' }}>
                </button>
            </div>
            <div className="card3 borderGray mt-3">
                <div className="contact">
                    <div className="justify-content-space">
                        <h5>Next of kin details</h5>
                        <span className='EditKin' onClick={EditClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg>
                        </span>
                    </div>

                    {kin ? <ul>
                        <li>
                            <p>Name :</p>
                            <span>{kin.fullName ? kin.fullName : "---"}</span>
                        </li>
                        <li>
                            <p>Phone :</p>
                            <span>{kin.phone ? kin.phone : "---"}</span>
                        </li>
                        <li>
                            <p>Email :</p>
                            <span>{kin.email ? kin.email : "---"}</span>
                        </li>
                        <li>
                            <p>Relationship :</p>
                            <span>{kin.relationship ? kin.relationship : "---"}</span>
                        </li>
                        <li>
                            <p>Address :</p>
                            <span>{kin.address ? kin.address : "---"}</span>
                        </li>
                    </ul> : <Modal title=" Add kin" id="addKinModal" class="" >
                        <AddKin user={user} />
                    </Modal>
                    }
                </div>
            </div>
        </div>
    )
}

export default Kin