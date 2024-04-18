import React, { useContext } from 'react'
import { MyContext } from '../../../context/Context'
import AdminShift from './AdminShift'
import EmployeeShift from './EmployeeShift'

function Shift() {

    const { type } = useContext(MyContext)

  

    return (
        <div>
            <div className="">
                {type === 'admin' ? <AdminShift  /> : <EmployeeShift  />}
            </div>

        </div>
    )
}

export default Shift