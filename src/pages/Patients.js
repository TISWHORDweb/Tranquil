import React from 'react'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Modal from '../components/Modal'

function Patients() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <Modal title=" Add Patient" id="patientModal" >
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
                    </Modal>
                    <div className=" Patients">
                        <div className="header">
                            <h4>Patient List</h4>
                            <div className="right">
                                <div className="search">
                                    <input type="text" placeholder='Search.....' />
                                    <span>search</span>
                                </div>
                                <div class="dropdown">
                                    <button class="LightBg btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Filter by
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><span class="dropdown-item"  >Date</span></li>
                                        <li><span class="dropdown-item"  >Gender(Male)</span></li>
                                        <li><span class="dropdown-item"  >Gender(Female)</span></li>
                                        <li><span class="dropdown-item"  >Date Added</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Table />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Patients