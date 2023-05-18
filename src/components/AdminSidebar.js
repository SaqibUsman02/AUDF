// import React from "react";
// import "../CSS/AdminSidebar.css";
// import AU from "../images/AUnew.png";
// import { useNavigate } from "react-router-dom";
// // import AdminReport from "./AdminReport";
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
//   CDBIcon,
// } from "cdbreact";
// import { NavLink } from "react-router-dom";



// // const AdminReportPage = () => {
// //   history.push("./AdminReport")
// // }
// const AdminSidebar = () => {
//   const navigate = useNavigate();

 
//   return (
//     <>
//       {/* <div className="admin-container"> */}

//       <div className="admin-side-bar">
//         <CDBSidebar textColor="#3C4858" backgroundColor="#FAFAFA">
//           <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//             <a
//               href="/"
//               className="sidebar_logo text-decoration-none"
//               style={{ color: "inherit" }}
//             >
//               <span>
//                 <img className="logo" src={AU}></img>
//               </span>
//             </a>
//           </CDBSidebarHeader>

//           <CDBSidebarContent className="sidebar-content">
//             <CDBSidebarMenu>
//               <NavLink exact to="/adminDashboard" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem className="sidebar" icon="home">
//                   Dashboard 
//                 </CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/userslist" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem className="sidebar" icon="user">
//                   All Users
//                 </CDBSidebarMenuItem>
//               </NavLink>

//               <NavLink exact to="/adminreport"  activeClassName="activeClicked">
//                 <CDBSidebarMenuItem className="sidebar" icon="flag">
//                   Reports
//                 </CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/adminfeedback"  activeClassName="activeClicked">
//                 <CDBSidebarMenuItem className="sidebar" icon="flag">
//                   Feedback
//                 </CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink
//                 exact
//                 to="/hero404"
//                 activeClassName="activeClicked"
//               >
//                 <CDBSidebarMenuItem className="sidebar" icon="sign-out-alt">
//                   Logout
//                 </CDBSidebarMenuItem>
//               </NavLink>
//             </CDBSidebarMenu>
//           </CDBSidebarContent>
//         </CDBSidebar>
//       </div>

//       {/* </div> */}
//     </>
//   );
// };

// export default AdminSidebar;


import React from "react";
import "../CSS/AdminSidebar.css";
import AU from "../images/AUnew.png";
import { useNavigate } from "react-router-dom";
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

const AdminSidebar = () => {
  const navigate = useNavigate();

  return (
    <>
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
                  Reports
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/adminfeedback"  activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar" icon="flag">
                  Feedback
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/admincontact"  activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar" icon="flag">
                  Contact Us  
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/hero404" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar" icon="sign-out-alt">
                  Logout
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </>
  );
};

export default AdminSidebar;
