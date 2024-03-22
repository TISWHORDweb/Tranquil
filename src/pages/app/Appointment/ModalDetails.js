import React from 'react'

function ModalDetails() {
    return (
        <div>
            <div class="modal-body InviteModal p-5">
                <h3 className='mb-3 f20'>Create Appointment</h3>
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
                <div className="pt-3">
                    <button type="button" class="btnLight  w-100 m-0 f17 " data-bs-toggle="modal" data-bs-target="#patientModal">Add Patient</button>
                </div>
            </div>
        </div>
    )
}

export default ModalDetails