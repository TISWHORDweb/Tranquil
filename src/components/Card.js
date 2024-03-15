import React from 'react'

function Card() {
    return (
        <div>
            <div className="Card">
                <div className="cards mb-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="set">
                                <div className="opt1">
                                    <p className='m-0'>Summary</p>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    </svg></span>
                                </div>
                                <center>
                                    <div className="due mt-4" >
                                        <h1 className='m-0'>21</h1>
                                        <p>Due Tasks</p>
                                    </div>
                                    <div className="down">
                                        <p>Completed: <b>13</b></p>
                                    </div>
                                </center>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="set">
                                <div className="opt1">
                                    <p className='m-0'>Overdue</p>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    </svg></span>
                                </div>
                                <center>
                                    <div className="task mt-4">
                                        <h1 className='m-0'>17</h1>
                                        <p>Tasks</p>
                                    </div>
                                    <div className="down">
                                        <p>From yesterday: <b>9</b></p>
                                    </div>
                                </center>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="set">
                                <div className="opt1">
                                    <p className='m-0'>Issues</p>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    </svg></span>
                                </div>
                                <center>
                                    <div className="open mt-4">
                                        <h1 className='m-0'>24</h1>
                                        <p>Open</p>
                                    </div>
                                    <div className="down">
                                        <p>Closed today: <b>19</b></p>
                                    </div>
                                </center>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="set">
                                <div className="opt1">
                                    <p className='m-0'>Features</p>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    </svg></span>
                                </div>
                                <center>
                                    <div className="proposal mt-4">
                                        <h1 className='m-0'>38</h1>
                                        <p>Proposals</p>
                                    </div>
                                    <div className="down">
                                        <p>Implemented: <b>16</b></p>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card