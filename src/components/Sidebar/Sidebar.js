import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/Context';
import './sidebar.css'
import Profile from '../../img/pexels-megan-ruth-16642703.jpg'

function Sidebar() {

    const [noItem,setNoItem] = useState(false)

    window.onload = function(){
        const sidebar = document.querySelector('.sidebar');
        const closeBtn = document.querySelector('#btn');
    
        closeBtn.addEventListener('click', function(){
            sidebar.classList.toggle("open")
            menuBtnChange()
        })
    
        function menuBtnChange() {
            if(sidebar.classList.contains("open")) {
                setNoItem(true)
            } else {
                setNoItem(false)
            }
        }
    }

    const { updateData } = useContext(MyContext);

    const handleOpen = () => {
      updateData('open');
    };

    const handleClose = () => {
        updateData('close');
      };

    return (
        <div>
            <div class="sidebar">
                <div class="logo_details">
                    <i class="bx bxl-audible icon"></i>
                    <div class="logo_name">Code effect</div>
                    {!noItem? <i class="bx bx-menu" id="btn" onClick={handleClose}></i>: 
                    <i class="bx bx-menu-alt-right" id="btn" onClick={handleOpen}></i>}
                </div>
                <ul class="nav-list p-0">
                    <li>
                        <a href="">
                            <i class="bx bx-grid-alt"></i>
                            <span class="link_name">Dashboard</span>
                        </a>
                        <span class="tooltip">Dashboard</span>
                    </li>
                    <li>
                        <a href="">
                            <i class="bx bx-user"></i>
                            <span class="link_name">User</span>
                        </a>
                        <span class="tooltip">User</span>
                    </li>
                    <li>
                        <a href="">
                            <i class="bx bx-chat"></i>
                            <span class="link_name">Message</span>
                        </a>
                        <span class="tooltip">Message</span>
                    </li>
                    <li>
                        <a href="">
                            <i class="bx bx-pie-chart-alt-2"></i>
                            <span class="link_name">Analytics</span>
                        </a>
                        <span class="tooltip">Analytics</span>
                    </li>
                    <li>
                        <a href="">
                            <i class="bx bx-folder"></i>
                            <span class="link_name">File Manager</span>
                        </a>
                        <span class="tooltip">File Manager</span>
                    </li>
                    <li>
                        <a href="">
                            <i class="bx bx-cart-alt"></i>
                            <span class="link_name">Order</span>
                        </a>
                        <span class="tooltip">Order</span>
                    </li>
                    <li>
                        <a href="">
                            <i class="bx bx-cog"></i>
                            <span class="link_name">Settings</span>
                        </a>
                        <span class="tooltip">Settings</span>
                    </li>
                    <li class="profile">
                        <div class="profile_details">
                            <img src={Profile} alt="Profile Image"/>
                                <div class="profile_content">
                                    <div class="name">John Doe</div>
                                    <div class="designation">Admin</div>
                                </div>
                        </div>
                        <i class="bx bx-log-out" id="log_out"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar