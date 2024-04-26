import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../../context/Context'

function Actions(props) {
    const { Display, Display2, type } = useContext(MyContext)

    const Click = (id) => {
        Display(id)
    }

    const Click2 = (id) => {
        Display2(id)
    }

    return (
        <div>
            <Link to={`/app/appointment/view/${props.id}`}>
                <div className="flex">
                    <span type="button" class="defaultColor" >
                        View appointment
                    </span>
                </div>
            </Link>
            {type === "patient" ?
                <>
                    {props.status === 0 ?
                     <Link target={"_blank"} to={`/web/confirmation/${props.id}`}>
                        <div className="flex" >
                            <span type="button" class="defaultColor" >
                                Accept
                            </span>
                        </div> </Link> : <></>
                    }
                </> : <></>}
            {type === "employee" ?
                <>
                    {props.status === 1 ?
                        <div className="flex" onClick={() => Click(props.id)}>
                            <span type="button" class="defaultColor" >
                                Done
                            </span>
                        </div> : <></>
                    }
                </> : <></>}
            {props.status === 3 || props.status === 2 ? <></> :
                <div className="flex" onClick={() => Click2(props.id)}>
                    <span type="button" class="defaultColor" >
                        Cancel appointment
                    </span>
                </div>
            }
        </div>
    )
}

export default Actions