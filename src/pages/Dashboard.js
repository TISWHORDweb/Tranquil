import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Nav from '../components/Nav'
import Banner from '../components/Banner'

function Dashboard() {
    return (
        <div>
            <div className="dashboard d-flex">
                <div className="">
                    <Sidebar />
                </div>
                <div className="">
                    <Nav />
                    <div className="side">
                        <Banner />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dashboard