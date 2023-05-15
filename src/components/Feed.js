import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { v4 as uuid } from 'uuid';

import { useCookies } from "react-cookie";
    
import "../CSS/Feed.css";
function Feed() {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const unique_id = uuid();
  const [cookies, setCookie] = useCookies();
  
  

  const [queryData, setQueryData] = useState({
    // UserID: JSON.parse(localStorage.getItem('Email')),
    // UserID: cookies.Email,
    UserID: "asdas",
    PostID: "as",
    QueryCategory: "",
    QueryTitle: "",
    QueryDetails: "",
    QueryTags: "",
  });

  let name,value;
  const handleInput =(e) => {    
    name = e.target.name;
    value = e.target.value;

    setQueryData({...queryData, [name]: value});

  };

  const postData = async (e) => {
    
    e.preventDefault();
   


    const { UserID, PostID, QueryCategory, QueryTitle, QueryDetails, QueryTags } = queryData;

    const res = await fetch("/Question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        UserID,PostID,QueryCategory,QueryTitle,QueryDetails,QueryTags
      })
    });

    if(res.status === 400 || !res) {
      window.alert("Invalid Data.");
      console.log("Invalid Data");
    }
    else{
      window.alert("Successfully Posted");
      console.log("Successfully Posted");
      navigate("/feed");

    }



  };
  

  
  return (
    <div className="body" >

      <Button variant="primary" onClick={handleShow}>
        Post Query
      </Button>

      <Modal size="lg" centered show={show} onHide={handleClose} className="Modal" >
        <div >
          <h2 className="Title mt-3">Add Query</h2>
          <hr className="mt-3"></hr>
        </div>
        <Modal.Body>
          <Form>

          <div >
            <Form.Select size="sm" className="select" 
            name="QueryCategory"
             value={value}
              onChange={handleInput}>
      <option>Select Category</option>
      <option value="C++">C++</option>
      <option value="Java">Java</option>
      <option value="Python">Python</option>
      <option value="dotnet">dotnet</option>

    </Form.Select>
    </div>
         

            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
           <h3> Title </h3>

              <Form.Control
                type="text"
                className="input"
                placeholder="Start your Question with 'What', 'How', 'Why' etc."
                name= "QueryTitle"
                value={queryData.QueryTitle}
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              
             <h3>Details of your Problem</h3>
              <Form.Control as="textarea" rows={10} className="input" placeholder="Write the Description of your Question."
               name= "QueryDetails"
               value={queryData.QueryDetails}
               onChange={handleInput}
              />
            </Form.Group>



    <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
                           <h3>Tags </h3>

              
              <Form.Control as="textarea" rows={3} className="input" placeholder="Mentioned Tags"
               name= "QueryTags"
               value={queryData.QueryTags}
               onChange={handleInput}
              />
            </Form.Group>


          </Form>
        </Modal.Body>
        <div className="modal__button">
          <Button  className="btn" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn"  onClick={postData}>
            Save Changes
          </Button>
        </div>
      </Modal>
      
      
   
    </div>

  )
}

export default Feed