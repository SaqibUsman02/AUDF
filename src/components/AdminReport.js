import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CSS/AdminReport.css";
import AdminSidebar from "./AdminSidebar";
import avatar from "../images/usman.jpeg";
import Adminuseless from './Adminuseless';

const AdminReport = () => {

  // const reportTemplate = () => {
  //   return (
      // <div className="report1">
      //   <div className="info">
      //     <img className="avatar" src={avatar} alt="" />
      //     <div className="name">{QueriesData?.ID}</div>
      //   </div>
      //   <div className="main-div">
      //     <div className="report-header">
      //       <div className="header-option">Category</div>
      //       <div className="header-option">Description</div>
      //       <div className="header-option">Action</div>
      //     </div>
      //     <div className="report-detail">
      //       <div className="detals-option" id="category">
      //         {QueriesData?.Category}
      //       </div>
      //       <div className="detals-option">
      //         {QueriesData?.Feedback}
      //       </div>
      //       <div className="detals-option" id="status-buttons">
      //         <button className="button" id="accept">
      //           Accept
      //         </button>{" "}
      //         <button className="button" id="decline">
      //           Decline
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
  //   );
  // }

  const Navigate = useNavigate();
  const [userReports, setuserReports] = useState([]);

  const displayReports = async () => {
    try {
      const res = await fetch('/FetchReport', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
      setuserReports(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate('/login');
    }
  };

  useEffect(() => {
      displayReports();
  }, []);


  return (
    <>
      <div className="admin-container">
        <div className="report-container">
          <div className="side-bar-div">
            <AdminSidebar />
          </div>
          <div className="all-reports">
            <h5 id="report-stats-head">Reports</h5>
            {/* {reportTemplate()} */}
            <div className='col-md-12 col-lg-12  col-xl-12'>
      {userReports.map((QueriesData) => (
        <Adminuseless key={QueriesData._id} QueriesData={QueriesData} />
      ))}
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminReport;
