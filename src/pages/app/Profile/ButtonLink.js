import React from 'react'

function ButtonLink() {
    return (
        <div>
            <div className="card2 borderGray mt-3">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="column borderGray">
                            <div className="icon"> <i class='bx bx-calendar'></i></div>
                            <p>Appointments</p>
                            <i class='bx bx-chevron-right'></i>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="column borderGray">
                            <div className="icon">  <i class='bx bx-clipboard'></i> </div>
                            <p>Reports</p>
                            <i class='bx bx-chevron-right'></i>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="column borderGray">
                            <div className="icon">  <i class='bx bx-plus-medical' ></i> </div>
                            <p>Doctors</p>
                            <i class='bx bx-chevron-right'></i>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="column borderGray">
                            <div className="icon">   <i class='bx bx-injection'></i> </div>
                            <p>Medications</p>
                            <i class='bx bx-chevron-right'></i>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="column borderGray">
                            <div className="icon"> <i class="bx bx-bed"></i> </div>
                            <p>Allots</p>
                            <i class='bx bx-chevron-right'></i>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="column borderGray">
                            <div className="icon"> <i class='bx bx-credit-card' ></i> </div>
                            <p>Payment</p>
                            <i class='bx bx-chevron-right'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonLink