import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../../context/Context'
import AdminShift from './AdminShift'
import EmployeeShift from './EmployeeShift'

function Shift() {

    const { checkAuth, type } = useContext(MyContext)

    useEffect(() => {
        checkAuth();

    }, [checkAuth]);

    return (
        <div>
            <div className="">
                {type === 'admin' ? <AdminShift  /> : <EmployeeShift  />}
            </div>

        </div>
    )
}

export default Shift