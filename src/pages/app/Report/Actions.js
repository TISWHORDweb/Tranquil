import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../../context/Context'

function Actions({ id, data }) {
    const { Display, Display2, type } = useContext(MyContext)

    const Click = (id) => {
        Display(id)
    }

    const Click2 =(data)=>{
        Display2(data)
    }

    return (
        <div>
            <Link to={`/app/report/view/${id}`}>
                <div className="flex">
                    <span type="button" class="defaultColor" >
                        View report
                    </span>
                </div>
            </Link>
            {type === "patient" ?
                <></> :
                <>
                    <div className="flex" onClick={()=>Click2(data)}>
                        <span type="button" class="defaultColor" >
                            Edit report
                        </span>
                    </div>
                    <div className="flex" onClick={() => Click(id)}>
                        <span type="button" class="defaultColor" >
                            Delete report
                        </span>
                    </div>
                </>

            }
        </div>
    )
}

export default Actions