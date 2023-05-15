import React from "react";
import "../CSS/AdminSidebar.css";
import AU from "../images/AUnew.png";
import { useNavigate } from "react-router-dom";
// import AdminReport from "./AdminReport";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBIcon,
} from "cdbreact";
import { NavLink } from "react-router-dom";



// const AdminReportPage = () => {
//   history.push("./AdminReport")
// }
const AdminSidebar = () => {
  const navigate = useNavigate();

  const UserLists = () => {
    const handleClick = () => navigate("/userslist");
  };

  return (
    <>
      {/* <div className="admin-container"> */}

      <div className="admin-side-bar">
        <CDBSidebar textColor="#3C4858" backgroundColor="#FAFAFA">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="sidebar_logo text-decoration-none"
              style={{ color: "inherit" }}
            >
              <span>
                <img className="logo" src={AU}></img>
              </span>
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/adminDashboard" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar" icon="home">
                  Dashboard 
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/userslist" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar" icon="user">
                  All Users
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/adminreport"  activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar" icon="flag">
                  All Reports
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
                exact
                to="/login"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem className="sidebar" icon="sign-out-alt">
                  Logout
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>

      {/* </div> */}
    </>
  );
};

export default AdminSidebar;
