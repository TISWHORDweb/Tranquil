import React from 'react'
import TableAction from './TableAction'


function Table() {
    return (
        <div>
            <div className="Table mt-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Date & Time Added</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">ZP-139318</th>
                            <td>Batimehin Emmanuel</td>
                            <td>ebatimehin@gmail.com</td>
                            <td>Male</td>
                            <td>08/04/2024</td>
                            <td>
                              <TableAction />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">ZP-139318</th>
                            <td>Batimehin Emmanuel</td>
                            <td>ebatimehin@gmail.com</td>
                            <td>Male</td>
                            <td>08/04/2024</td>
                            <td>
                              <TableAction />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">ZP-139318</th>
                            <td>Batimehin Emmanuel</td>
                            <td>ebatimehin@gmail.com</td>
                            <td>Male</td>
                            <td>08/04/2024</td>
                            <td>
                              <TableAction />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">ZP-139318</th>
                            <td>Batimehin Emmanuel</td>
                            <td>ebatimehin@gmail.com</td>
                            <td>Male</td>
                            <td>08/04/2024</td>
                            <td>
                              <TableAction />
                            </td>
                        </tr>
                           <tr>
                            <th scope="row">ZP-139318</th>
                            <td>Batimehin Emmanuel</td>
                            <td>ebatimehin@gmail.com</td>
                            <td>Male</td>
                            <td>08/04/2024</td>
                            <td>
                              <TableAction />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">ZP-139318</th>
                            <td>Batimehin Emmanuel</td>
                            <td>ebatimehin@gmail.com</td>
                            <td>Male</td>
                            <td>08/04/2024</td>
                            <td>
                              <TableAction />
                            </td>
                        </tr>
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