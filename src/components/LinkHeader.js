import React from 'react'
import { Link } from 'react-router-dom'

function LinkHeader(props) {
    if(props.many === "2"){
        return (
            <div>
                <ul className='LinkHeader'>
                    <Link to="/app">
                        <li>Dashboard</li>
                    </Link>
                    <li>|</li>
                    <li className='this'>{props.current}</li>
                </ul>
            </div>
        )
    }
    if(props.many=== "3"){
        return (
            <div>
                <ul className='LinkHeader'>
                    <Link to="/app">
                        <li>Dashboard</li>
                    </Link>
                    <li>|</li>
                    <Link to={props.where}>
                        <li>{props.page}</li>
                    </Link>
                    <li>|</li>
                    <li className='this'>{props.current}</li>
                </ul>
            </div>
        )
    }

}


export default LinkHeader