import React from "react";
import "../CSS/AdminPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import query_icon from "../images/Query_icon.png";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
// import { Chart } from "react-google-charts";


// import Querydesign from './Querydesign'
import usman from "../images/usman.jpeg";
import hammad from "../images/hamad.jpeg";
import saqib from "../images/saqib.jpeg";

// import HomeIcon from "../images/Home_icon.png";
// import FeedbackIcon from "../images/Feedback_icon.png";
// import TeacherIcon from "../images/Teacher_icon.png";
// import StudentIcon from "../images/Student_icon.png";
// import ReportIcon from "../images/Report_icon.png";

import HomeIcon from "../images/AU.png";
import FeedbackIcon from "../images/AU.png";
import TeacherIcon from "../images/AU.png";
import StudentIcon from "../images/AU.png";
import ReportIcon from "../images/AU.png";
import AU from "../images/AU.png";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";





const AdminPanel = () => {
  return (
    <>
      <div className="outer-box">
          <AdminSidebar/>
          <AdminDashboard/>
{/*         
        <div className="left-side">
          <div>
            <img className="logo" src={AU} alt="" />
          </div>
          <div className="dashboard">
            <img className="admin-icons" src={HomeIcon} alt="" />
            <button className="dashboard-btn">Dashboard</button>
          </div>

          <div className="dashboard">
            <img className="admin-icons" src={FeedbackIcon} alt="" />
            <button className="dashboard-btn">Feedback</button>
          </div>

          <div className="dashboard">
            <img className="admin-icons" src={StudentIcon} alt="" />
            <button className="dashboard-btn">Students</button>
          </div>

          <div className="dashboard">
            <img className="admin-icons" src={TeacherIcon} alt="" />
            <button className="dashboard-btn">Teachers</button>
          </div>

          <div className="dashboard">
            <img className="admin-icons" src={ReportIcon} alt="" />
            <button className="dashboard-btn">Reports</button>
          </div>
        </div> */}

        {/* <div className="content-box">  */}
          {/* 33333333333333333333333333333333333333333 Useerslist  */}

          <div className="user-design">
            <img className="user-avatar-admin-panel" src={saqib} alt="" />
            <div className="user-info-admin-panel">
              <div className="name-admin-panel">Saqib Usman</div>
              <div className="title-admin-panel">Full Stack Developer</div>
            </div>
            <FontAwesomeIcon
              className="icon-user-query-admin"
              icon={faEllipsisVertical}
            />
          </div>

          <div className="user-design">
            <img className="user-avatar-admin-panel" src={hammad} alt="" />
            <div className="user-info-admin-panel">
              <div className="name-admin-panel">Hamad Ali</div>
              <div className="title-admin-panel">Full Stack Developer</div>
            </div>
            <FontAwesomeIcon
              className="icon-user-query-admin"
              icon={faEllipsisVertical}
            />
          </div>


          <div className="user-design">
            <img className="user-avatar-admin-panel" src={usman} alt="" />
            <div className="user-info-admin-panel">
              <div className="name-admin-panel">Muhammad Usman</div>
              <div className="title-admin-panel">Full Stack Developer</div>
            </div>
            <FontAwesomeIcon id="usman-icon-admin"
              className="icon-user-query-admin"
              icon={faEllipsisVertical}
            />
          </div>

          <div className="user-design">
            <img className="user-avatar-admin-panel" src={saqib} alt="" />
            <div className="user-info-admin-panel">
              <div   className="name-admin-panel">Saqib Usman    </div>
              <div className="title-admin-panel">Full Stack Developer</div>
            </div>
            <FontAwesomeIcon id="saqib-icon-admin"
              className="icon-user-query-admin"
              icon={faEllipsisVertical}
            />
          </div>

          <div className="user-design">
            <img className="user-avatar-admin-panel" src={hammad} alt="" />
            <div className="user-info-admin-panel">
              <div className="name-admin-panel">Hamad Ali</div>
              <div className="title-admin-panel">Full Stack Developer</div>
            </div>
            <FontAwesomeIcon
              className="icon-user-query-admin"
              icon={faEllipsisVertical}
            />
          </div>


          <div className="user-design">
            <img className="user-avatar-admin-panel" src={usman} alt="" />
            <div className="user-info-admin-panel">
              <div className="name-admin-panel">Muhammad Usman</div>
              <div className="title-admin-panel">Full Stack Developer</div>
            </div>
            <FontAwesomeIcon id="usman-icon-admin"
              className="icon-user-query-admin"
              icon={faEllipsisVertical}
            />
          </div> <div className="user-design">
            <img className="user-avatar-admin-panel" src={saqib} alt="" />
            <div className="user-info-admin-panel">
              <div className="name-admin-panel">Saqib Usman</div>
              <div className="title-admin-panel">Full Stack Developer</div>
            </div>
            <FontAwesomeIcon
              className="icon-user-query-admin"
              icon={faEllipsisVertical}
            />
          </div>

          {/*33333333333333333333333333333333333333333 Dashboard */}

          {/* <div className="new-div"> */}
            {/* **********************************query design */}

            <div className="query-container">
              <div className="query-head">Query History</div>

              <div className="query-design">
                <div className="query-meta">
                  <img
                    className="user-avatar-query-admin-panel "
                    src={usman}
                    alt=""
                  />
                  <div className="query-user-name">Muhammad Usman</div>
                  <div className="date">24.11.2022</div>
                </div>
                <p className="query-field">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia vero deleniti velit. Ab, possimus. Illo fugit aliquid
                  fugiat magnam cumque porro, dolorem deleniti illum quod sequi!
                  Eligendi culpa iure alias facilis minus nobis.
                </p>
                <div className="query-bottom">
                  <button className="comment-btn">Comments</button>
                  <button className="comment-btn">Block</button>
                </div>
              </div>

              
              <div className="query-design">
                <div className="query-meta">
                  <img
                    className="user-avatar-query-admin-panel "
                    src={saqib}
                    alt=""
                  />
                  <div className="query-user-name">Saqib Usman</div>
                  <div className="date">24.11.2022</div>
                </div>
                <p className="query-field">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia vero deleniti velit. Ab, possimus. Illo fugit aliquid
                  fugiat magnam cumque porro, dolorem deleniti illum quod sequi!
                  Eligendi culpa iure alias facilis minus nobis.
                </p>
                <div className="query-bottom">
                  <button className="comment-btn">Comments</button>
                  <button className="comment-btn">Block</button>
                </div>
              </div>

              
              <div className="query-design">
                <div className="query-meta">
                  <img
                    className="user-avatar-query-admin-panel "
                    src={hammad}
                    alt=""
                  />
                  <div className="query-user-name">Hammad Ali</div>
                  <div className="date">24.11.2022</div>
                </div>
                <p className="query-field">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia vero deleniti velit. Ab, possimus. Illo fugit aliquid
                  fugiat magnam cumque porro, dolorem deleniti illum quod sequi!
                  Eligendi culpa iure alias facilis minus nobis.
                </p>
                <div className="query-bottom">
                  <button className="comment-btn">Comments</button>
                  <button className="comment-btn">Block</button>
                </div>
              </div>
            </div>

            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default AdminPanel;
