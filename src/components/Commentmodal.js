import React, { useState, useEffect } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import data from './data.json';
import "../CSS/Comment.css"
import ReactQuill from "react-quill"
import { useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const CommentModal = ({ isOpen, onRequestClose }) => {

  const navigate = useNavigate();

  const reload=()=>window.location.reload();


  const [comments, setComments] = useState(data);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);

    // navigate("/dashboard");
  }
    const handleShow = () => setShow(true);
  const [valuee, setValuee] = useState('');
  const [cookies, setCookie] = useCookies();



  const [CommentData, SetCommentData] = useState({
   // ID: JSON.parse(localStorage.getItem('Email')),
     ID: cookies.Email,
     Name: cookies.Name,
   PostID: ""  ,
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
   
  
  
    const {ID,Name,PostID,comment} = CommentData;
    window.alert("ooooooooooooooo" + comment);
  
    const res = await fetch("/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ID,Name,PostID: JSON.parse(localStorage.getItem('PostID')),comment: valuee
      })
    });
  
    if(res.status === 400 || !res) {
      window.alert("Invalid Data.");
      console.log("Invalid Data");
    }
    else{
      window.alert("Successfully Comment Posted");
      console.log("Successfully Comment Posted");
      handleClose();
  
    }
  
  
  
  };

  const [userDataa, setUserDataa] = useState("");

  const getAllComment = async (req, res) => {
   
    try {
      console.log("===========");
      const params = new URLSearchParams();
      params.append("PostID", JSON.parse(localStorage.getItem('PostID')));

      // fetch(`/OwnPhoto?${params.toString()}`)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     // do something with the retrieved data
      //     console.log(data);
      //     setUserDataa(data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });

      const res= await fetch(`/getAllComment?${params.toString()}`,{
        method:"GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"

    });

      const data = await res.json();
      console.log(data);
      setUserDataa(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // Navigate("/login");
    }
  };


  useEffect(() => {
    // Fetch comments from backend
    //   fetch('/api/comments')
    //     .then(response => response.json())
    //     .then(data => setComments(data));
    getAllComment();
    // alert('reload!');
    }, [isOpen]);

  return (

<>








    <Modal
      show={isOpen}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      onExit={reload}
      size='lg'
    >
      <Modal.Header closeButton>
        <Modal.Title>Comments</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        <Container>
          <Row>
          <button  onClick={handleShow} className="add_comment_btn" variant='secondary'>
          Add Comment
        </button>   
          </Row>
          
          {comments.map(comment => (
            <div>
            <Row key={comment.id}>
              <Col xs={3} md={2}>
                <img src={comment.userprofile} alt={`${comment.username}'s profile`} width="75%" style={{borderRadius: '50%'}} />
              </Col>
              <Col xs={9} md={10}>
                <h5>{comment.username}</h5>
                <p>{comment.date}</p>
                <p>{comment.commentDetails}</p>
              </Col>
            </Row></div>
          ))}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onRequestClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>



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


</>


  );
};

export default CommentModal;
