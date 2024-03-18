import React from 'react'

function PatientModal() {
    return (
        <div>
            <div className="PatientModal mt-4">
                <button type="button" class="btnDark" data-bs-toggle="modal" data-bs-target="#patientModal">
                    Add Patient
                </button>
                <div class="modal fade" id="patientModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog ">
                        <div class="modal-content">
                            <div class="modal-body InviteModal p-5">
                                <h3 className='mb-3 f20'>Add patients</h3>
                                <div className="mb-3">
                                    <label htmlFor="discount" className='f15 fw3'>First name</label>  <br />
                                    <input type="text" className='inputts' name="" id="discount" placeholder='John' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="discount" className='f15 fw3'>Last name</label>  <br />
                                    <input type="text" className='inputts' name="" id="discount" placeholder='Doe' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="discount" className='f15 fw3'>Email</label>  <br />
                                    <input type="email" className='inputts' name="" id="discount" placeholder='johndoe@gmail.com' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="discount" className='fw3 f15'>Gender</label>  <br />
                                    <select class="form-select inputts selectHolder" aria-label="Default select example">
                                        <option  ><span>Male</span></option>
                                        <option  ><span>Female</span></option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="discount" className='f15 fw3'>Password</label>  <br />
                                    <input type="password" className='inputts' name="" id="discount" placeholder='**********' />
                                </div>
                                <div className="pt-3">
                                    <button type="button" class="btnLight  w-100 m-0 f17 " data-bs-toggle="modal" data-bs-target="#patientModal">Add Patient</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientModal