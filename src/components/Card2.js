import React, { useEffect, useState } from 'react'
import TableAction from './TableAction'
import { DateConverter } from '../Utils/Core';

function Card2({ data }) {
    console.log(data);

    const [employee, setEmployee] = useState([])
    const [department, setDepartment] = useState({})

    useEffect(() => {
        if (data) {
            setDepartment(data.department)
            setEmployee(data.employees)
        }
    }, [data])
    
    const firstFiveEmployee = employee.slice(0, 5);

    const formattedUsers = firstFiveEmployee.map((employee) => {
        const firstLetterFirstName = employee.firstName[0];
        const lastLetterLastName = employee.lastName[0];
        return {
            each: `${firstLetterFirstName}${lastLetterLastName}`,
        };
    });

    console.log(formattedUsers)

    return (
        <div>
            <div className="Card2">
                <div className="justify-content-space">
                    <h3>{department.name}</h3>
                    <div className="">
                        <TableAction />
                    </div>
                </div>
                <p>{department.description}</p>
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
                            <span className='f13 third'>Date created : {DateConverter(department.creationDateTime)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2