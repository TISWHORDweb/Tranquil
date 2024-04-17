import React from 'react'
import TableAction from '../../../components/TableAction'
import { DateConverter } from '../../../Utils/Core'
import Other from '../../../img/other.png'
import Actions from './Actions'


function Table({ patient }) {
    return (
        <div>
            <div className="Table mt-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Avatar</th>
                            <th scope="col">Patient ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            <th scope="col">Date Added</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {patient ? <>
                            {patient.map((each, i) => (
                                <tr key={i}>
                                     <th scope="row"><img className='timg' src={Other} alt="" /></th>
                                    <th scope="row">{each.hid}</th>
                                    <td>{each.firstName} {each.lastName}</td>
                                    <td>{each.email}</td>
                                    <td>{each.gender}</td>
                                    <td>{each.age}</td>
                                    <td>{DateConverter(each.creationDateTime)}</td>
                                    <td>
                                        <TableAction >
                                            <Actions />
                                        </TableAction>
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