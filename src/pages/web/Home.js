import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner1 from '../../components/Banner1'

function Home() {
  return (
    <div>
        <Navbar />
        <div className="">
            <Banner1 />
        </div>
        <Footer />
    </div>
  )
}

export default Home