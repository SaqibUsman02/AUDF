import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from "react-router-dom";

import "../CSS/Comment.css"
import { useCookies } from "react-cookie";
   

const Comment = () => {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cookies, setCookie] = useCookies();
  

  const [valuee, setValuee] = useState('');

 const navigate = useNavigate();
 const [CommentData, SetCommentData] = useState({
  // ID: JSON.parse(localStorage.getItem('Email')),
    ID: cookies.Email,
  PostID: JSON.parse(localStorage.getItem('PostID'))  ,
  comment: "",
 });

 let name,value;
 const handleInput = (e) => {
  name = e.target.name;
  value = e.target.value;

  SetCommentData({...CommentData, [name]: value})
  
 };

 const postData = async (e) => {
    
  e.preventDefault();
 


  const {ID,PostID,comment} = CommentData;
  window.alert("ooooooooooooooo" + comment);

  const res = await fetch("/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ID,PostID,comment: valuee
    })
  });

  if(res.status === 400 || !res) {
    window.alert("Invalid Data.");
    console.log("Invalid Data");
  }
  else{
    window.alert("Successfully Comment Posted");
    console.log("Successfully Comment Posted");
    navigate("/feed");

  }



};


  return (
    <div className="bodyT ">
        <Modal size="lg " centered show={show} onHide={handleClose} className="Modal "   
        >
            <div className="modal__question mt-5">
              <h2 >
                {/* {post?.questionName} */}
                Here show the Question Name
              </h2>
              <p>
                asked by <span className="name">
                    {/* {post?.user?.userName} */}
                    saqib usman
                    </span> on{" "}
                <span className="name">
                  {/* {new Date(post?.createdAt).toLocaleString()} */}
                  10/12/2022, 10:22:23 PM
                </span>
              </p>
            </div>    

            <div className="modal__answer">

            <Modal.Body>
            <ReactQuill
            className="input"
            as="textarea"
        theme='snow'
        show={show}
        onHide={handleClose}
        name="comment" value={valuee}
        onChange={setValuee}
        placeholder="Enter your Answer."
      />

            </Modal.Body>
            </div>



            
           <div className="modal__button">
          <Button  className="btn" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn"  onClick={postData}>
            Save
          </Button>
        </div>
        </Modal>
        
      <Button variant="primary" onClick={handleShow}>
        Add Comment
      </Button>
      
    </div>
  )
}

export default Comment