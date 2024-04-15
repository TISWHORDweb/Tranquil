import React, { useEffect, useState } from 'react'
import TableAction from './TableAction'
import { timestampToTime } from '../Utils/Core';
import { Link } from 'react-router-dom';


function Card3({ data }) {

    const [employee, setEmployee] = useState([])
    const [shift, setShift] = useState({})

    useEffect(() => {
        if (data) {
            setShift(data.shift)
            setEmployee(data.employees)
        }
    }, [data])

    const firstFiveEmployee = employee.slice(0, 5);

    const formattedUsers = firstFiveEmployee.map((employee) => {
        const firstLetterFirstName = employee.eid.firstName[0];
        const lastLetterLastName = employee.eid.lastName[0];
        return {
            each: `${firstLetterFirstName}${lastLetterLastName}`,
        };
    });

    return (
        <div>
            <Link to={`/app/shift/${shift._id}`}>
                <div className="Card2">
                    <div className="justify-content-space">
                        <h4 className='TopColumn'>{shift.name}</h4>
                        <div className="">
                            <TableAction />
                        </div>
                    </div>
                    <p>{shift.description}</p>
                    <div className=" mt-3">
                        <div className="justify-content-space">
                            <div className="d-flex">
                                {formattedUsers.map((each, i) => (
                                    <div className="Depeach m-1">
                                        {each.each}
                                    </div>
                                ))}
                            </div>
                            <div className="">
                                <span className='f13 third'>Start time : {timestampToTime(parseInt(shift.startDate))}</span> <br />
                                <span className='f13 third'>End time : {timestampToTime(parseInt(shift.endDate))}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card3