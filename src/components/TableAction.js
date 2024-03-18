import React from 'react'
import Icon from '../img/Group 5.png'

function TableAction() {
    return (
        <div>
            <div className="TableAction">
                <div className="dot">
                    <img className='' src={Icon} alt="" />
                    <div className="firstDiv">
                        <div className="flex">
                            {/* <img src={Icon4} alt="" /> */}
                            <span type="button" class="" >
                                View profile
                            </span>
                        </div>
                        <div className="flex">
                            {/* <img src={Icon4} alt="" /> */}
                            <span type="button" class="" >
                                Disable patient
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableAction