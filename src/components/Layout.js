import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Nav from './Nav'

function Layout(props) {
  return (
    <div>
         <div className="dashboard d-flex">
                <div className="">
                    <Sidebar />
                </div>
                <div className="">
                    <Nav />
                    <div className="Inner">
                        {props.children}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Layout