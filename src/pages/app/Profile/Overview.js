import React from 'react'

function Overview() {
    return (
        <div>
            <div className="overview borderGray">
                <h4>Overview :</h4>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <p>Gender: </p>
                        <h5>Female</h5>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p>Date of birth: </p>
                        <h5>10/03/1998</h5>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p>Nationality: </p>
                        <h5>Nigeria</h5>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p>Account created in: </p>
                        <h5>17/03/2024</h5>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p>State of origin: </p>
                        <h5>Ondo state</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview