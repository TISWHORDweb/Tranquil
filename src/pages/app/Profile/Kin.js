import React, { useEffect, useState } from 'react'

function Kin({ user }) {
    const [kin, setKin] = useState()
    useEffect(() => {
        if (user) {
            setKin(user.kid)
        }
    }, [setKin, user])
    
    return (
        <div>
            <div className="card3 borderGray mt-3">
                <div className="contact">
                    <h5>Next of kin details</h5>
                    {kin ? <ul>
                        <li>
                            <p>Name :</p>
                            <span>{kin.fullName ? kin.fullName : "---"}</span>
                        </li>
                        <li>
                            <p>Phone :</p>
                            <span>{kin.phone ? kin.phone : "---"}</span>
                        </li>
                        <li>
                            <p>Email :</p>
                            <span>{kin.email ? kin.email : "---"}</span>
                        </li>
                        <li>
                            <p>Relationship :</p>
                            <span>{kin.relationship ? kin.relationship : "---"}</span>
                        </li>
                        <li>
                            <p>Address :</p>
                            <span>{kin.address ? kin.address : "---"}</span>
                        </li>
                    </ul> : <div></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Kin