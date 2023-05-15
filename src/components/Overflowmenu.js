import React, { useState, useEffect, useRef } from 'react';
import '../CSS/Overflowmenu.css';
import { Modal, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";

const OverflowMenu = ({ PostID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleReportClick = () => {
    setShowModal(true);
    setIsOpen(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [reason, setReason] = useState('');




const [cookies, setCookie] = useCookies();
  
const navigate = useNavigate();
const [ReportData, SetReportData] = useState({
 // ID: JSON.parse(localStorage.getItem('Email')),
 PostID: PostID,
 ID: cookies.Name,
 Category: "",
 Report: "",
});

let name,value;
const handleInput = (e) => {
 name = e.target.name;
 value = e.target.value;

 SetReportData({...ReportData, [name]: value})
 
};

const postData = async (e) => {
 e.preventDefault();



 const {PostID,ID,Category,Report} = ReportData;

 const res = await fetch("/report", {
   method: "POST",
   headers: {
     "Content-Type": "application/json"
   },
   body: JSON.stringify({
     PostID,ID,Category,Report
   })

 }); 

 if(res.status === 400 || !res) {
   window.alert("Invalid Data.");
   console.log("Invalid Data");
 }
 else{
   window.alert("Successfully Posted");
   console.log("Successfully Posted");
   handleCloseModal();
   navigate("/dashboard");

 }



};
const [show, setShow] = useState(true);
const handleClose = () => {
  setShow(false);

}
  const handleShow = () =>{
    setShow(true);

  } 

  useEffect(() => {
    setShow(true);
  }, []);


  return (
    <div className="overflow-menu" ref={menuRef}>
      <button className="overflow-menu__button" onClick={toggleMenu}>
        <svg viewBox="0 0 24 24" className="overflow-menu__icon">
          <path fill="currentColor" d="M5 12c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm7 0c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm4-3c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
        </svg>
      </button>
      {isOpen && (
        <div className="overflow-menu__dropdown">
          <ul className="overflow-menu__list">
            
            <li className="overflow-menu__item" onClick={handleReportClick}>Report</li>
          </ul>
        </div>
      )}

      <Modal centered show={showModal} onHide={handleCloseModal}> 
<Modal.Header closeButton>
<Modal.Title>Report Post</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form>

<Form.Group controlId="reason">
<Form.Label>Category of report:</Form.Label>
<Form.Select name='Category' value={ReportData.Category} onChange={handleInput}
              >
              <option value="offensive">Offensive</option>
              <option value="Irrelevant">Irrelevant</option>
              <option value="Abusive">Abusive</option>
              <option value="Inappropriate">Inappropriate Content</option>
              <option value="Bullying">Bullying</option>
              <option value="Other">Other</option>


            </Form.Select>

<Form.Label>Reason for Report:</Form.Label>
<Form.Control
type="text"
placeholder="Enter reason"
name="Report"
 value={ReportData.Report}
 onChange={handleInput}
/>

</Form.Group>
</Form>
</Modal.Body>
<Modal.Footer style={{ backgroundColor: "#434242", color: 'black' }}>
<Button variant="secondary" onClick={handleCloseModal}> 
Cancel
</Button>
<Button variant="warning" onClick={postData}>
Report Post
</Button>
</Modal.Footer>
</Modal>
    </div>
  );
};

export default OverflowMenu;