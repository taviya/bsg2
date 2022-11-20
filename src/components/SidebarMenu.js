import React from 'react'
import {
    Link,
} from "react-router-dom";
import navGrayDashboard from '../icon/nav-gray-dashboard.png';
import navGrayTeam from '../icon/nav-gray-team.png';
import navGrayDepositDetail from '../icon/nav-gray-deposit-detail.png';
import navGrayRule from '../icon/nav-gray-rule.png';

export default function SidebarMenu() {

    return (
        <>
            <nav id="sidebarMenu" className="col-md-2 col-lg-2 bg-light d-md-block sidebar collapse">
                <div className="position-sticky pt-3 sidebar-sticky">
                    <div className="light-mode">
                        <p data-lang="display_mode">Light Mode</p>
                        <div className="form-check form-switch">
                            <input className="form-check-input switch" value="true" type="checkbox" id="flexSwitchCheckDefault"
                                checked />
                        </div>
                    </div>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">
                                <span className="icon-sidebar"><img height="24" weight="24"
                                        src={navGrayDashboard} alt="BigCo"/></span>
                                <span data-lang="dashboard">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myteam">
                                <span className="icon-sidebar"><img height="24" weight="24" src={navGrayTeam} alt="BigCo"/></span>
                                <span data-lang="myteam">My Team</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mydeposits">
                                <span className="icon-sidebar"><img height="24" weight="24"
                                        src={navGrayDepositDetail} alt="BigCo"/></span>
                                <span data-lang="deposit_details">Deposit Details</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="docs/rules.pdf">
                                <span className="icon-sidebar"><img height="24" weight="24" src={navGrayRule} alt="BigCo"/></span>
                                <span data-lang="rules">Rules</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}




