import React from 'react'
import Layout from '../../../components/Layout'

import Details from './Details'
import Kin from './Kin'
import Overview from './Overview'
import ButtonLink from './ButtonLink'

function Profile() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="Profile">
                        <div className="row">
                            <div className="col-md-5">
                                <Details />
                                <Kin />
                            </div>
                            <div className="col-md-7">
                                <Overview />
                                <ButtonLink />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Profile