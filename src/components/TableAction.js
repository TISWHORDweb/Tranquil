import React from 'react'
import Icon from '../img/Group 5.png'

function TableAction(props) {
    return (
        <div>
            <div className="TableAction">
                <div className="dot">
                    <img className='' src={Icon} alt="" />
                    <div className="firstDiv">
                      {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableAction