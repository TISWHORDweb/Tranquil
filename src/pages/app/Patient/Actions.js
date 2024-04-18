import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../../context/Context'

function Actions(props) {
    const { Display,Display2  } = useContext(MyContext)

    const Click =(id)=>{
        Display(id)
    }

    const Click2 =(id)=>{
        Display2(id)
    }

    return (
        <div>
            <Link to={`/app/profile/view/patient/${props.id}`}>
                <div className="flex">
                    <span type="button" class="defaultColor" >
                        View profile
                    </span>
                </div>
            </Link>
            <Link to={`/app/payment`}>
                <div className="flex">
                    <span type="button" class="defaultColor" >
                        Payment details
                    </span>
                </div>
            </Link>
            <Link to={`/app/report`}>
                <div className="flex">
                    <span type="button" class="defaultColor" >
                        Diagnostics
                    </span>
                </div>
            </Link>
            {props.status ? 
            <div className="flex" onClick={()=>Click2(props.id)}>
                <span type="button" class="defaultColor" >
                    Enable user
                </span>
            </div> : <div className="flex" onClick={()=>Click(props.id)}>
                <span type="button" class="defaultColor" >
                    Disable user
                </span>
            </div> }
        </div>
    )
}

export default Actions