import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/Context'
import SessionExpireModal from '../components/SessionExpireModal'
import { Check } from '../Utils/Core'
import { useNavigate } from 'react-router-dom'

function Loader() {
    const { checkAuth } = useContext(MyContext)
    const [expired, setexpired] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        checkAuth();

    }, [checkAuth]);

    useEffect(() => {
        const Checks = Check()
        if (Checks === "false") {
            setexpired(true)
        }
    }, []);

    let documentLoaded = false;
    const timeout = 60000; // 60 seconds

    document.addEventListener('DOMContentLoaded', () => {
        documentLoaded = true;
    });

    setTimeout(() => {
        if (!documentLoaded) {
            navigate('/')
        }
    }, timeout);


    return (
        <div>
            {
                expired ? <SessionExpireModal /> :
                    <div className='loadWrapper m-5'>
                        <div className="loader">
                            <div class="spinner-grow second loaderHeightWeight" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow second loaderHeightWeight" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow second loaderHeightWeight" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow second loaderHeightWeight" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Loader