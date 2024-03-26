import React from 'react'
import AuthLayout from '../../../components/AuthLayout'
import VerificationForm from '../../../components/verificationForm'
import Logo from '../../../img/Tranquil3.png'

function VerifyCode() {

    return (
        <div>
            <div className="">
                <AuthLayout>
              
                    <div className="first pt-5 d-flex justify-content-center">
                        <div className="registerScroll Authpad">
                            <div className="up mb-4">
                                <img src={Logo} alt="" />
                                <h2 className='m-0'>Verify your account</h2>
                            </div>
                            <p>Enter the correct 6 digits code sent to your email [in the boxes below]</p>
                            <VerificationForm />
                            <center className='btnBottom'><p>Didn't receive any mail ? <span><a href="/auth/reset">Forgot password</a></span></p></center>
                        </div>
                    </div>
                </AuthLayout>
            </div>
        </div>
    )
}

export default VerifyCode