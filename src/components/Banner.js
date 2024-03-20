import React from 'react'
import BannerImg from '../img/Banner.png'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div>
        <div className="NewBanner">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6 mb-3">
                        <div className="text mt-5">
                            <h3>Personal Care For Your Healthy Living</h3>
                            <p>At Tranquil Hospital, we are dedicated to providing exceptional healthcare services in a serene and calming environment. Our team of experienced healthcare professionals is committed to delivering compassionate care and personalized treatment to each patient. From advanced medical technologies to holistic wellness programs, we strive to promote healing, comfort, and well-being for all our patients. Experience the tranquility of healthcare excellence at Tranquil Hospital.</p>
                            <div className="">
                               <Link to="/web/about"> <button className='btnDark'>About Us</button></Link>
                               <Link to="/web/service"><button className='btnLight'>Get Started</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <img src={BannerImg} alt="" className='w-80' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
