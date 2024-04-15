import React from 'react'
import { timestampToTime } from '../../../Utils/Core';

function ShiftDetails({ shifts }) {
    return (
        <div>
            {shifts ? <div className="">
                {shifts.map((each, i) => (
                    <div className="mt-5">
                        <div className="justify-content-space">
                            <div className="">
                                <small className='third'>You're assign to :</small>
                                <h3 style={{ textTransform: "uppercase" }}>{each.sid.name} SHIFT</h3>
                            </div>
                            <div className="">
                                <small className='third'>In Department :</small>
                                <h3 style={{ textTransform: "uppercase" }}>{each.did.name} </h3>
                            </div>
                        </div>

                        <p>{each.sid.description}</p>
                        <div className="justify-content-space">
                            <span><span className='third'>From :</span> <span style={{fontWeight:"600"}}> {timestampToTime(parseInt(each.sid.startDate))}</span></span>
                            <span><span className='third'>To:</span> <span  style={{fontWeight:"600"}}> {timestampToTime(parseInt(each.sid.endDate))}</span></span>
                        </div>
                    </div>
                ))}

            </div> : <>
                    
            </>}

        </div>
    )
}

export default ShiftDetails