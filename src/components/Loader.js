import React from 'react'

function Loader() {
    return (
        <div>
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

        </div>
    )
}

export default Loader