import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "../CSS/AdminContact.css";

const AdminContact = () => {
  const [contactData, setContactData] = useState([]);

  const getAllContact = async () => {
    try {
      const res = await fetch("/contactadmin", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const data = await res.json();
      setContactData(data);
    } catch (err) {
      console.log(err);
      // Navigate("/login");
    }
  };

  useEffect(() => {
    getAllContact();
  }, []);

  return (
    <div>
      <div className="admin-container-contact">
        <div className="side-bar-div">
          <AdminSidebar />
        </div>
         
       
        <div className="contact-container">
          {contactData.map((contact) => (
            <div className="contact1" key={contact?._id}>
              <div className="main-div-contact">
                <div className="contact-header">
                  <div className="header-option-contact">Email</div>
                  <div className="header-option-contact">Subject</div>
                  <div className="header-option-contact">Description</div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detals-option" id="contact-email">
                    {contact?.Email}
                  </div>
                  <div className="contact-detals-option" id="contact-sub">
                    {contact?.Subject}
                  </div>
                  <div className="contact-detals-option" id="contact-desc">
                    {contact?.Message}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminContact;
