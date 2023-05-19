import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
    
const ReportModal = ({ post, showModal, onClose, handleReportPost }) => {
const [reason, setReason] = useState('');

const handleReport = () => {
handleReportPost(post.id, reason);
onClose(); 
setReason('');
};


const [cookies, setCookie] = useCookies();
  
const navigate = useNavigate();
const [FeedbackData, SetFeedbackData] = useState({
 // ID: JSON.parse(localStorage.getItem('Email')),
 ID: localStorage.getItem('Name'),
 Category: "",
 Feedback: "",
});

let name,value;
const handleInput = (e) => {
 name = e.target.name;
 value = e.target.value;

 SetFeedbackData({...FeedbackData, [name]: value})
 
};

const postData = async (e) => {
 e.preventDefault();



 const {ID,Category,Feedback} = FeedbackData;

 const res = await fetch("https://df-server.vercel.app/report", {
   method: "POST",
   headers: {
     "Content-Type": "application/json"
   },
   body: JSON.stringify({
     ID,Category,Feedback
   })

 }); 

 if(res.status === 400 || !res) {
   window.alert("Invalid Data.");
   console.log("Invalid Data");
 }
 else{
   window.alert("Successfully Posted");
   console.log("Successfully Posted");
   navigate("/dashboard");

 }



};

return (
<Modal centered show={showModal} onHide={onClose}> 
<Modal.Header closeButton>
<Modal.Title>Report Post</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form>
<Form.Group controlId="reason">
<Form.Label>Reason for Report:</Form.Label>
<Form.Control
type="text"
placeholder="Enter reason"
name="Feedback"
 value={FeedbackData.Feedback}
 onChange={handleInput}
/>
</Form.Group>
</Form>
</Modal.Body>
<Modal.Footer style={{ backgroundColor: "#434242", color: 'black' }}>
<Button variant="secondary" onClick={onClose}> 
Cancel
</Button>
<Button variant="warning" onClick={postData}>
Report Post
</Button>
</Modal.Footer>
</Modal>
);
};

export default ReportModal;