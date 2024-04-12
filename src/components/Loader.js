import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/Context'
import SessionExpireModal from '../components/SessionExpireModal'
import { Check } from '../Utils/Core'

function Loader() {
    const { checkAuth } = useContext(MyContext)
    const [expired, setexpired] = useState(false)

    useEffect(() => {
        checkAuth();

    }, [checkAuth]);

    const Checks = Check()

    useEffect(() => {
        if (!Checks) {
            setexpired(true)
        }
    }, [Checks]);
    return (
        <div>
            {expired ? <SessionExpireModal /> :
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