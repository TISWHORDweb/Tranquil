import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Nav from '../components/Nav'

function Dashboard() {
    return (
        <div>
            <div className="dashboard d-flex">
                <div className="">
                    <Sidebar />
                </div>
                <div className="">
                    <Nav />
                </div>
            </div>

        </div>
    )
}

export default Dashboard