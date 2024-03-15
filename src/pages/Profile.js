import React from 'react'
import Layout from '../components/Layout'
import Prof from '../img/pexels-megan-ruth-16642703.jpg'

function Profile() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="Profile">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="card1">
                                    <div className="header">
                                        <div className="">
                                            <img src={Prof} alt="Profile img" />
                                        </div>
                                        <h3>Batimehin Emmanuel</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7"></div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Profile