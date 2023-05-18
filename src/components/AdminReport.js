import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/AdminReport.css";
import AdminSidebar from "./AdminSidebar";
import avatar from "../images/usman.jpeg";
import Adminuseless from "./Adminuseless";

const AdminReport = () => {
  const Navigate = useNavigate();
  const [userReports, setuserReports] = useState([""]);

  const displayReports = async () => {
    
    try {
      const res = await fetch("https://audf-server.vercel.app/findreport", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
  

      setuserReports(data);


      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/login");
    }
  };
  
  useEffect (() =>{
    displayReports();
  }, [])




  return (
    <>
      <div className="admin-container">
      <div className="side-bar-div">
            <AdminSidebar />
          </div>
        <div className="report-container">
          
          <div className="all-reports">
            <h5 id="report-stats">Reports</h5>
     



            <div className="col-md-12 col-lg-12  col-xl-12">
          {/* <Adminuseless/> */}   

              {  userReports.map((QueriesData) => {
              return (

                <Adminuseless
                key={QueriesData._id}
                QueriesData={QueriesData}
                />
                
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminReport;
