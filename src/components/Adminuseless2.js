import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/AdminReport.css";
import AdminSidebar from "./AdminSidebar";
import avatar from "../images/usman.jpeg";

const Adminuseless2 = ({FeedbackData}) => {


  return (
    <div className="feedback1">
      <div className="info">
        {/* <img className="avatar" src={avatar} alt="" /> */}
        <div className="name">{FeedbackData?.ID}</div>
      </div>
      <div className="main-div">
        <div className="feedback-header">
          <div className="header-option" id="feedback-category">Category</div>
          <div className="header-option" id="desciption-category">Description</div>
        </div>
        <div className="report-detail">
          <div className="detals-option" id="category">
            {FeedbackData?.Category}
          </div>
          <div className="detals-option" id="fedback-desc">{FeedbackData?.Feedback}</div>
        </div>
      </div>
    </div>
  );
};

export default Adminuseless2;
