import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../../context/Context'

function Actions({id}) {
    const { Display } = useContext(MyContext)

    const Click = (id) => {
        Display(id)
    }

    return (
        <div>
            <Link to={`/app/profile/view/patient/${id}`}>
                <div className="flex">
                    <span type="button" class="defaultColor" >
                        View report
                    </span>
                </div>
            </Link>
            <div className="flex" onClick={() => Click(id)}>
                <span type="button" class="defaultColor" >
                    Delete report
                </span>
            </div>
        </div>
    )
}

export default Actions