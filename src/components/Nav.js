import React, { useContext, useEffect, useState } from 'react'
import '../css/style.css'
import { MyContext } from '../context/Context';
import Logo from '../img/2N-Logo-Transparent.png'


function Nav() {

    const [noItem, setNoItem] = useState(false)
    const [width, setWidth] = useState('')
    const [cardWidth, setCardWidth] = useState(0);

    const { data } = useContext(MyContext);

    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (data === '') {
            setNoItem(false);
            const calculatedWidth = screenWidth - 78;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        } else if (data === 'open') {
            setNoItem(true);
            const calculatedWidth = screenWidth - 250;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        }

        if (data === 'close') {
            setNoItem(false);
            const calculatedWidth = screenWidth - 78;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        } else (
            setNoItem(false)
        )

    })

    return (
        <div>
            <div className="nav" id="nav" style={{ width: width }}>
                <div className="search">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></span>
                    <input type="text" placeholder='Search.....' />
                </div>
                <div className="right">
                    <ul>
                        <li><img src="https://flagsapi.com/NG/flat/64.png" /></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
                            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                        </svg>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand nan" href="#"><img src={Logo} alt="" /> <h2 className='m-0'>Zephyr</h2></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            {/* <span class="navbar-toggler-icon"></span> */}
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-3">
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-grid-alt"></i>
                                        <span class="link_name">Dashboard</span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-user"></i>
                                        <span class="link_name">User</span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-chat"></i>
                                        <span class="link_name">Message</span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-pie-chart-alt-2"></i>
                                        <span class="link_name">Analytics</span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-folder"></i>
                                        <span class="link_name">File Manager</span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-cart-alt"></i>
                                        <span class="link_name">Order</span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-cog"></i>
                                        <span class="link_name">Settings</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav