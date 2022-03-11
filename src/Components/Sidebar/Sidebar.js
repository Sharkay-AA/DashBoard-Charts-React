import React from 'react';
import "./Sidebar.css";
import iconDashboard from "./analytics.svg";
import { Link } from "react-router-dom";

function Sidebar(props) {
    return (
        <nav className='sidenav'>
            <img src={iconDashboard} alt="" />
            <Link to="">FINANCES</Link>
            <Link to="/dashboardEmployees">EMPLOI</Link>
        </nav>
    );
}

export default Sidebar;