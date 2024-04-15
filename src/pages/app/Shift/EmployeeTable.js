import React, { useEffect, useState } from 'react'
import TableAction from '../../../components/TableAction'
import { DateConverter } from '../../../Utils/Core'


function EmployeeTable({ employee }) {
    const [employees, setEmployee] = useState([])
    useEffect(()=>{
        setEmployee(employee)
    },[employee])
    return (
        <div>
            <div className="Table mt-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Shift Name</th>
                            <th scope="col">Employee</th>
                            <th scope="col">Department</th>
                            <th scope="col">Date Assigned</th>
                            <th scope="col">Employee Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length > 0 ? <>
                            {employees.map((each, i) => (
                                <tr key={i}>
                                    <th scope="row">{each.sid.name}</th>
                                    <td>{each.eid.firstName} {each.eid.lastName}</td>
                                    <td>{each.did.name}</td>
                                    <td>{DateConverter(each.creationDateTime)}</td>
                                    <td>{each.eid.status ? <span className='redStatus'>Inactive</span> : <span className='greenStatus'>Active</span>}</td>
                                    <td>
                                        <TableAction />
                                    </td>
                                </tr>
                            ))}
                        </> : <tr>
                            <td>....</td>
                            <td>....</td>
                            <td>....</td>
                            <td>....</td>
                            <td>....</td>
                            <td>....</td>
                        </tr>
                        }
                    </tbody>
                </table>
                <div className="down">
                    <div className=""></div>
                    <div className="down">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <span class="page-link" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </span>
                                </li>
                                <li class="page-item"><span class="page-link"  >1</span></li>
                                <li class="page-item"><span class="page-link"  >2</span></li>
                                <li class="page-item"><span class="page-link"  >3</span></li>
                                <li class="page-item">
                                    <span class="page-link" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeTable