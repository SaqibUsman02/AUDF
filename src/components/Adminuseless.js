import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CSS/AdminReport.css";
import AdminSidebar from "./AdminSidebar";
import avatar from "../images/usman.jpeg";

const Adminuseless = ({ QueriesData })  => {
//  const [deleteReport, setDeleteReport]=useState(null);

//  const handleDelete = () => {
//   fetch(`/delete-object/${deleteReport}`, {
//     method: 'DELETE'
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         console.log(data.message);
//       } else {
//         console.log(data.message);
//       }
//     })
//     .catch(error => console.log(error));
// };




  return (
    <div className="report1">
    <div className="info">
      <img className="avatar" src={avatar} alt="" />
      <div className="name">{QueriesData?.ID}</div>
    </div>
    <div className="main-div">
      <div className="report-header">
        <div className="header-option">Category</div>
        <div className="header-option">Description</div>
        <div className="header-option">Action</div>
      </div>
      <div className="report-detail">
        <div className="detals-option" id="category">
          {QueriesData?.Category}
        </div>
        <div className="detals-option">
          {QueriesData?.Feedback}
        </div>
        <div className="detals-option" id="status-buttons">
          <button className="button" id="accept">
            Accept
          </button>{" "}
          <button className="button" id="decline" >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Adminuseless