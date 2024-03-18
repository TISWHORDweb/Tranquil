import React from 'react'
import Layout from '../components/Layout'
import Table from '../components/Table'
import PatientModal from '../components/PatientModal'

function Patients() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <PatientModal />
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