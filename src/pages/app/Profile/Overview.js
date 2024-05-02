import React from 'react'
import { DateConverter } from '../../../Utils/Core'

function Overview({user}) {

    const DateCreated = DateConverter(user.creationDateTime)
    return (
        <div>
            <div className="overview borderGray">
                <h4>Overview :</h4>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <p>Gender: </p>
                        <h5>{user.gender ? user.gender : "---"}</h5>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p>Age: </p>
                        <h5>{user.age ? user.age : "---"}</h5>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p>Date of birth: </p>
                        <h5>{user.dob ? user.dob : "---"}</h5>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p>Nationality: </p>
                        <h5>{user.nationality ? user.nationality : "---"}</h5>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p>Account created in: </p>
                        <h5>{user.creationDateTime ? DateCreated : "---"}</h5>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p>State of origin: </p>
                        <h5>{user.state ? user.state : "---"}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview