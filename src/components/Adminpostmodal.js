import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';


const Adminpostmodal = ({ onClose, PostID }) => {
  const [userQueries, setuserQueries] = useState([]);

  const displayQueries = async () => {
    try {
      const res = await fetch("https://audf-server.vercel.app/showquery", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setuserQueries(data.data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      //   Navigate("/login");
    }
  };

  const deletePost = async () => {
 
    
    try {
      const params = new URLSearchParams();
      params.append("postID", PostID);

      await fetch(`https://df-server.vercel.app/deletequery?${params.toString()}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },      
        credentials: "include",
      });

      console.log('xxxxxxx', PostID)

      // Refresh the list of queries after deletion
      // displayQueries();
      
    } catch (error) {
      console.log(error);
    }
  };


  const deleteReport = async () => {
 
    
    try {
      const params = new URLSearchParams();
      params.append("postID", PostID);

      await fetch(`https://df-server.vercel.app/deleteReport?${params.toString()}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },      
        credentials: "include",
      });

      // console.log('xxxxxxx', PostID)

      // Refresh the list of queries after deletion
      // displayQueries();
      
    } catch (error) {
      console.log(error);
    }
  };


  const handleButtonClick = () => {

    deletePost();
    deleteReport();

    Swal.fire(
      'Action Sucessfull!',
      'Query and Report both are deleted!',
      'success'
    )
    
  };

  const handleButtonClick2 = () => {

    deleteReport();

    Swal.fire(
      'Action Sucessfull!',
      'Only Report is deleted!',
      'success'
    )
    
  };



  useEffect(() => {
    displayQueries();
  }, []);

  const filteredData = userQueries.filter((query) => query.PostID === PostID);
  const mydata = filteredData.length > 0 ? filteredData[0] : null;

  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: '.9rem', fontStyle: 'bold' }}>{mydata ? mydata.UserName : ""}</Modal.Title>
          <Modal.Title style={{ paddingLeft: '2em', fontSize: '.9rem', fontStyle: 'bold' }}>{mydata ? mydata.UserID : ""}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p style={{ fontSize: '.75rem' }}>{mydata ? mydata.QueryDetails : ""}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" style={{ backgroundColor: 'red' }} onClick={handleButtonClick} >  Accept
          </Button>
          <Button variant="primary" style={{ backgroundColor: 'green' }} onClick={handleButtonClick2} >
            Decline
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Adminpostmodal;
