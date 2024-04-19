import React from 'react'

function TableHeader(props) {
    return (
        <div>
            <div className="header">
                <h5>{props.title}</h5>
                <div className="right">
                    <div className="search">
                        <input type="text" placeholder='Search.....' />
                        <span>search</span>
                    </div>
                    <div class="dropdown">
                        <button class="LightBg btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter by
                        </button>
                        <ul class="dropdown-menu">
                            <li><span class="dropdown-item"  >Date</span></li>
                            <li><span class="dropdown-item"  >Gender(Male)</span></li>
                            <li><span class="dropdown-item"  >Gender(Female)</span></li>
                            <li><span class="dropdown-item"  >Date Added</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableHeader