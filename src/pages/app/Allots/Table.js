import React from 'react'
import TableAction from '../../../components/TableAction'


function Table({ allots }) {
    return (
        <div>
            <div className="Table mt-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Patient ID</th>
                            <th scope="col">Department</th>
                            <th scope="col">ward</th>
                            <th scope="col">Cabin</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allots ? <>
                            {allots.map((each, i) => (
                                <tr key={i}>
                                    <th scope="row">{each.aid}</th>
                                    <td>{each.pid.hid}</td>
                                    <td>{each.did.name}</td>
                                    <td>{each.wid.name}</td>
                                    <td>{each.cid.name}</td>
                                    <td>{each.status ? "Assigned" : "Unassigned"}</td>
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
                            <td>
                                <TableAction />
                            </td>
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