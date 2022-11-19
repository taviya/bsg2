import React from 'react'
import logo from '../icon/bsg-logo-only.png';
import tron2 from '../icon/top-tron-2.png';
import telegram from '../icon/top-telegram.png';
import facebook from '../icon/top-facebook.png';
import tronFull from '../icon/top-tron-full.png';
import barLogo from '../icon/top-bar-logo.png';
import navDrawer from '../icon/nav-drawer.png';

export default function Header() {

    return (
        <>
            <header className="navbar sticky-top  topbar">
                <div>
                {/* <div style="display: flex;align-items: center;"> */}
                    <a className="pc-only mode" href="#sec"> <img height="30" width="25"
                            src={logo} alt="BigCo"/>BSG2.0</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <a href="#sec"><img height="40" src={navDrawer} alt="BigCo"/></a>
                    </button>
                    <a className="mobile-only mode-2" href="#sec"> <img className="bsg-logo" height="35px" width="80px"
                            src={logo} alt="BigCo"/>BSG2.0</a>
                </div>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap prof pc-only">
                        <a href="#sec"><img height="50" weight="50" src={barLogo} alt="BigCo"/></a>
                    </div>
                    {/* <div className="nav-item text-nowrap en">
                        <div className="dropdown">
                            <button className="btn lang-drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <a href="#"><img height="20" weight="20" src="icon/flags/en.png" alt="BigCo"/><img height="20" weight="20"
                                        src="icon/down.png" alt="BigCo"/></a>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#"><img height="20" weight="20"
                                            src="icon/flags/en.png" alt="BigCo"/></a></li>
                                <li><a className="dropdown-item" href="#"><img height="20" weight="20"
                                            src="icon/flags/ph.png" alt="BigCo"/></a></li>
                                <li><a className="dropdown-item" href="#"><img height="20" weight="20"
                                            src="icon/flags/ge.png" alt="BigCo"/></a></li>
                                <li><a className="dropdown-item" href="#"><img height="20" weight="20"
                                            src="icon/flags/ni.png" alt="BigCo"/></a></li>
                                <li><a className="dropdown-item" href="#"><img height="20" weight="20"
                                            src="icon/flags/pa.png" alt="BigCo"/></a></li>
                                <li><a className="dropdown-item" href="#"><img height="20" weight="20"
                                            src="icon/flags/in.png" alt="BigCo"/></a></li>
                                <li><a className="dropdown-item" href="#"><img height="20" weight="20"
                                            src="icon/flags/cn.png" alt="BigCo"/></a></li>
                            </ul>
                        </div>

                    </div> */}
                    <div className="nav-item text-nowrap pc-only">
                        <a className="tronscan" target="_blank" href="#"><img height="40" src={tronFull} alt="BigCo"/></a>
                    </div>
                    <div className="nav-item text-nowrap mobile-only">
                        <a className="tronscan" target="_blank" href="#"><img height="40" weight="40"
                                src={tron2} alt="BigCo"/></a>
                    </div>
                    
                    <div className="nav-item text-nowrap">
                        <a data-bs-toggle="modal" data-bs-target="#telegram-modal">
                            <img height="40" weight="40" src={telegram} alt="BigCo"/>
                        </a>
                    </div>
                    <div className="nav-item text-nowrap">
                        <a className="facebook" target="_blank" href="#"><img height="40" weight="40"
                                src={facebook} alt="BigCo"/></a>
                    </div>
                </div>
            </header>
        </>
    )
}




