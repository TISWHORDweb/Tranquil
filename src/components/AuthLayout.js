import React from 'react'

function AuthLayout(props) {
    return (
        <div>
            <div className="auth">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            {props.children}
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="second">
                                <div className="text mb-4">
                                    <h2>Welcome to <br />our community</h2>
                                    <p className=''> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, possimus voluptates necessitatibus quaerat eius voluptate, sequi et architecto natus quibusdam voluptatem placeat dolor culpa, illo sint laudantium iure earum hic.</p>
                                </div>

                                <div className="lorem">
                                    <span className=''>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aliquid laboriosam sequi."</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout