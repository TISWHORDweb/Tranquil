import React from 'react'
import Layout from '../../../components/Layout'

import Details from './Details'
import Kin from './Kin'
import Overview from './Overview'
import ButtonLink from './ButtonLink'
import Modal from '../../../components/Modal'
import ModalDetails from './ModalDetails'
import LogOut from '../../../components/LogOut'

function Profile() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="text-end">
                        <Modal title=" Edit profile" id="profileModal" class="" >
                            <ModalDetails />
                        </Modal>
                    </div>
                    <div className="Profile">
                        <div className="row ">
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
                    <LogOut />
                    <div className="m50"></div>
                </div>
            </Layout>
        </div>
    )
}

export default Profile