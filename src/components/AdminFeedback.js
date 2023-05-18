import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/AdminFeedback.css";
import AdminSidebar from "./AdminSidebar";
import avatar from "../images/usman.jpeg";
import Adminuseless from "./Adminuseless";
import Adminuseless2 from "./Adminuseless2";

const AdminFeedback = () => {
  const Navigate = useNavigate();
  const [userFeedback, setuserFeedback] = useState([]);

  const displayFeedback = async () => {
    try {
      const res = await fetch("/findfeedback", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();


      setuserFeedback(data.data);


      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // Navigate('/login');
    }
  }; 
 

  useEffect(() => {
    displayFeedback();
  }, []);

  return (
    <>
      <div className="admin-container">
      <div className="feed-side-bar-div">
            <AdminSidebar />
          </div>
        <div className="feedback-container">
        
          <div className="all-reports">
            <h5 id="feedback-stats-head">Feedback</h5>
            <div className="col-md-12 col-lg-12  col-xl-12">
              {userFeedback.map((FeedbackData) => {
              return ( <Adminuseless2
                  key={FeedbackData._id}
                  FeedbackData={FeedbackData}
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

export default AdminFeedback;
