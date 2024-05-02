import React, { useEffect, useState } from 'react'
import { DateConverter, timestampToTime } from '../../../Utils/Core'

function FewAudit(audit) {
    const [audits, setAudits] = useState([])
    useEffect(() => {
        setAudits(audit.audit)
    }, [audit])
    console.log(audits)

    return (
        <div>
            <div>
                <div className="Table mt-4">
                    <h4>Shift Audits</h4>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Shift</th>
                                <th scope="col">Date</th>
                                <th scope="col">Sign in time</th>
                                <th scope="col">Sign out time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {audits.length > 0 ? <>
                                {audits.map((each, i) => (
                                    <tr key={i}>
                                        <td>{each.sid.name} </td>
                                        <td>{DateConverter(each.date)}</td>
                                        <td> {timestampToTime(parseInt(each.startDateTime))}</td>
                                        <td>{each.endDateTime ? timestampToTime(parseInt(each.endDateTime)) : "Not yet"}</td>
                                    </tr>
                                ))}

                            </> : <tr>
                                <td>....</td>
                                <td>....</td>
                                <td>....</td>
                                <td>....</td>
                            </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FewAudit