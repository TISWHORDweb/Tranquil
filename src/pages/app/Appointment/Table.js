import React from 'react'
import TableAction from '../../../components/TableAction'
import { DateConverter, StatusChecker, timestampToTime } from '../../../Utils/Core'


function Table({ appointment }) {
    return (
        <div>
            <div className="Table mt-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Title</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Patient</th>
                            <th scope="col">Time</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointment ? <>
                            {appointment.map((each, i) => (
                                <tr key={i}>
                                     <th scope="row">{i}</th>
                                    <th scope="row">{each.title}</th>
                                    <td>{each.eid.firstName} {each.eid.lastName}</td>
                                    <td>{each.pid.firstName} {each.pid.lastName}</td>
                                    <td>{timestampToTime(parseInt(each.time))}</td>
                                    <td>{each.duration}</td>
                                    <td>{DateConverter(parseInt(each.date))}</td>
                                    <td>{StatusChecker(each.status)}</td>
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