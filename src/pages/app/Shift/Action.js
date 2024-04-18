import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../../context/Context'

function Action(props) {
    const { Display } = useContext(MyContext)

    const Click =(id)=>{
        Display(id)
        console.log(id);
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
                        Shift audit
                    </span>
                </div>
            </Link>
            <div className="flex" onClick={()=>Click(props.id)}>
                <span type="button" class="defaultColor" >
                   Unassigned 
                </span>
            </div>
        </div>
    )
}

export default Action