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
            <Link to={`/app/profile/view/employee/${props.id}`}>
                <div className="flex">
                    <span type="button" class="defaultColor" >
                        View profile
                    </span>
                </div>
            </Link>
            <Link to={`/app/shift/audit/${props.id}`}>
                <div className="flex">
                    <span type="button" class="defaultColor" >
                        Shift audits
                    </span>
                </div>
            </Link>
            {props.status ? 
            <div className="flex" onClick={()=>Click2(props.id)}>
                <span type="button" class="defaultColor" >
                    Enable employee
                </span>
            </div> : <div className="flex" onClick={()=>Click(props.id)}>
                <span type="button" class="defaultColor" >
                    Disable employee
                </span>
            </div> }
        </div>
    )
}

export default Actions