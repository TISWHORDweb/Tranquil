import React, { useEffect, useState } from 'react'
import TableAction from '../../../components/TableAction'
import { DateConverter, timestampToTime } from '../../../Utils/Core'


function Table({ audit }) {
    const [audits, setAudits] = useState([])
    useEffect(()=>{
        setAudits(audit)
    },[audit])
    return (
        <div>
            <div className="Table mt-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Shift</th>
                            <th scope="col">Department</th>
                            <th scope="col">Date</th>
                            <th scope="col">Sign in time</th>
                            <th scope="col">Sign out time</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {audits.length > 0 ? <>
                            {audits.map((each, i) => (
                                <tr key={i}>
                                    <th scope="row">{each.eid.hid}</th>
                                    <td>{each.sid.name} {each.lastName}</td>
                                    <td>{each.did.name}</td>
                                    <td>{DateConverter(each.date)}</td>
                                    <td> {timestampToTime(parseInt(each.startDateTime))}</td>
                                    <td>{each.endDateTime ? timestampToTime(parseInt(each.endDateTime)) : "-----"}</td>
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

export default Table