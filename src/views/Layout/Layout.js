import React, { useState } from "react";
import Logo from '../../assets/images/logo.svg'
import { ExpandMore, ExpandLess, Person, Settings, Logout, Notifications, IntegrationInstructions } from "@mui/icons-material";


const Layout = ({ children }) => {

    const [companyOpen, setCompanyOpen] = useState(true);
    const [settingsOpen, setSettingsOpen] = useState(true);
    const [selectedCompany, setSelectedCompany] = useState("All Companies");

    const companies = [
        "Micro", "TSMC", "LinkedIn", "Cisco", "Samsung", "Apple", "Google",
        "Microsoft", "Amazon", "Tesla", "Sony", "LG", "Huawei"
    ];

    return (
        <div className="main-page">
            <header className="app-header sticky" id="header">
                <div className="main-header-container container-fluid">
                    <div className="header-content-left">
                        <div className="pageName">
                            {/* <h4>Dashboard</h4> */}
                        </div>
                    </div>
                    <div className="header-content-center">
                        <div className="feilds">
                            <div className="searchBar">
                                <input type="text" placeholder="Search..." />
                                <span className="searchIcon"><i class="material-icons">search</i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <aside className="app-sidebar sticky">
                <div className="main-sidebar-header">
                    <a href="#"><img src={Logo} alt="Logo" /></a>
                </div>
                <div className="main-sidebar simplebar-scrollable-y">
                    <div className="allCompany">
                        <div
                            className="section-header"
                            onClick={() => setCompanyOpen(!companyOpen)}
                        >
                            <span>{selectedCompany}</span>
                            <span className="arrow">{companyOpen ? "▲" : "▼"}</span>
                        </div>

                        {companyOpen && (
                            <ul className="list">
                                {companies.map((name) => (
                                    <li
                                        key={name}
                                    >
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <hr />

                    {/* ---- Settings Dropdown ---- */}
                    <div className="settings">
                        <div
                            className="section-header"
                            onClick={() => setSettingsOpen(!settingsOpen)}
                        >
                            <span>Settings</span>
                            <span className="arrow">{settingsOpen ? "▲" : "▼"}</span>
                        </div>

                        {settingsOpen && (
                            <ul className="list icon-list">
                                <li><span className="icon">👤</span> Profile</li>
                                <li><span className="icon">🔗</span> Integration</li>
                                <li><span className="icon">🔔</span> Notifications</li>
                                <li><span className="icon">⚙️</span> Settings</li>
                                <li><span className="icon">🚪</span> Logout</li>
                            </ul>
                        )}
                    </div>

                    <hr />

                    {/* ---- User Info ---- */}
                    <div className="userAvtar">
                        <div className="avatar">A</div>
                        <div>
                            <p className="name">Auditor</p>
                            <p className="role">Admin</p>
                        </div>
                    </div>


                </div>
            </aside>
            <div className="main-content app-content py-3">
                <div className="container-fluid">
                    {children}
                </div>
            </div>




        </div>
    )
}

export default Layout