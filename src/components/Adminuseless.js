import React, { useState } from 'react';
import "../CSS/AdminReport.css";
import avatar from "../images/usman.jpeg";
import Adminpostmodal from "./Adminpostmodal";

const Adminuseless = ({ QueriesData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostID, setSelectedPostID] = useState(null);


  const openModal = () => {
    
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // console.log(QueriesData)
  function getModaldata  () {
    openModal();
    setSelectedPostID(QueriesData.PostID)
  }


  return (
    <div className="admin-useless-container">
      {!isModalOpen && (
        <div className="admin-useless-background">
          <div className="report1">
            <div className="info">
              {/* <img className="avatar" src={avatar} alt="" /> */}
              <div className="name">{QueriesData.ID}</div>
            </div>
            <div className="main-div">
              <div className="report-header">
                <div className="header-option">Category</div>
                <div className="header-option">Description</div>
                <div className="header-option">Action</div>
              </div>
              <div className="report-detail">
                <div className="detals-option" id="report-category">
                  {QueriesData.Category}
                </div>
                <div className="detals-option" id="report-desc">
                  {QueriesData.Report}
                </div>
                <div className="detals-option" id="status-buttons">
                  <div className="div-view-btn">
                    <button id="view-btn" onClick={getModaldata}>
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="admin-modal">
          <Adminpostmodal PostID={selectedPostID} onClose={closeModal} />
        </div>
      )}
    </div>
  );
};

export default Adminuseless;
