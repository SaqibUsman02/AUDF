import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { v4 as uuid } from "uuid";

import saqib from "../images/avatar.png";
import usman from "../images/usman.jpeg";
import hamad from "../images/hamad.jpeg";
import "../CSS/Dashboard_feed.css";
import { useCookies } from "react-cookie";
import data from './data.json';
import OverflowMenu from "./Overflowmenu";
import Profile from './Profile';
import { PostcardHeartFill } from "react-bootstrap-icons";



const Dashboard_feed = ({ QueriesData }) => {
  let vote_Value = " ";
  let CommentVote_Value = " ";


  const Navigate = useNavigate();
  const [cookies, setCookie] = useCookies();

  const [queryData, setQueryData] = useState({
    PostID: QueriesData?.PostID,
    Upvote: QueriesData?.Upvote,
    Devote: QueriesData?.Devote,
    Message: "",
  });

  let name, value;
  // ********* Query Upvote ****************
  const Query_Upvote = async (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setQueryData({ ...queryData, [name]: value });

    const { PostID, Upvote } = queryData;

    const res = await fetch("https://audf-server.vercel.app/QueryUpvote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        PostID,
        Upvote,
      }),
    });

    if (res.status === 400 || !res) {
      window.alert("Invalid Data.");
      console.log("Invalid Data");
    } else {
      window.alert("Successfully Posted");
      console.log("Successfully Posted");
      window.location.reload(false);

      // Navigate("/dashboard");
    }
  };


  // *************** Query Devote *****************
  const Query_Devote = async (e) => {
    e.preventDefault();

    let name = e.target.name;
    let value = e.target.value;

    setQueryData({ ...queryData, [name]: value });

    const { PostID, Devote } = queryData;

    const res = await fetch("https://audf-server.vercel.app/QueryDevote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        PostID,
        Devote,
      }),
    });

    if (res.status === 400 || !res) {
      window.alert("Invalid Data.");
      console.log("Invalid Data");
    } else {
      window.alert("Successfully Posted");
      console.log("Successfully Posted");
      window.location.reload(false);

      // Navigate("/dashboard");
    }
  };



// -----------------------------------------------------
const [queryVote, setQueryVote] = useState({
  UserID: localStorage.getItem('Email'),
  PostID: QueriesData?.PostID,
  Type:  " ",
  UpVote: QueriesData?.Upvote,
  DeVote: QueriesData?.Devote,
});

const Query_Vote = async (e,name) => {
  e.preventDefault();


  // name = e.target.name;
  // value = e.target.value;

  // setQueryVote({ ...queryVote, Type: name });

  const {UserID, PostID,Type, UpVote, DeVote } = queryVote;
  // window.alert(Type+ name + value + e.target.getAttribute('name'));


  const res = await fetch("https://audf-server.vercel.app/QueryVote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      UserID,
      PostID,
      Type: name,
      UpVote,
      DeVote
    }),
  });
  const data = await res; // Parse the response body as JSON
  if (res.status === 400 || !res) {
    window.alert(data.message);
  } else if (res.status === 300) {
    window.alert(data.message);
  } else {
    window.alert(data.message);
    window.location.reload(false);

    // Navigate("/dashboard");
  }
};


const [UserDtaa, setUserDtaa] = useState("");

const CheckQueryVote = async (req, res) => {
 
  try {
   const params = new URLSearchParams();
      const email = localStorage.getItem('Email');
      const encodedEmail = encodeURIComponent(email);
      params.append("Email", encodedEmail);
    params.append("PostID", QueriesData?.PostID);

    const res= await fetch(`https://audf-server.vercel.app/VoteData?${params.toString()}`,{
      method:"GET",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      credentials: "include"

  });

    const data = res.json();
          window.alert(res.Upvote + " gfgdfgdfgdfgdf "+ "asdsadsa" + data + "6666666666" + data?.PostID +  "  "+ res.UserID);

    vote_Value= data[0]?.Type;
    setUserDtaa(vote_Value);
    // window.alert(QueriesData?.QueryTitle + "  "+  vote_Value +"     " + UserDtaa);
    // setUserDtaa(data[0]?.Type);
    // console.log("222222222222222222" + value);

    // if(data){
    //   window.alert(data.type + "  "+ data.PostID +  "  "+ data.UserID);

    //   setUserDtaa(data.Type);
    // }

    if (!res.status === 200) {
      const error = new Error(res.error);
      throw error;
    }
  } catch (err) {
    console.log(err);
    Navigate("/login");
  }
};





const [CommentVoteData, setCommentVoteData] = useState("");

const CheckCommentVote = async (commentid) => {
 
  try {
    const params = new URLSearchParams();
      const email = localStorage.getItem('Email');
      const encodedEmail = encodeURIComponent(email);
      params.append("Email", encodedEmail);
    params.append("PostID", QueriesData?.PostID);
    params.append("CommentID", commentid);

    const res= await fetch(`https://audf-server.vercel.app/CommentVoteData?${params.toString()}`,{
      method:"GET",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      credentials: "include"

  });

  const data = await res;
  CommentVote_Value= data[0]?.Type;
        // window.alert(CommentVote_Value);

    // // vote_Value= data[0]?.Type;
    setCommentVoteData(CommentVote_Value);
    // window.alert(QueriesData?.QueryTitle + "  "+  vote_Value +"     " + UserDtaa);
    // setUserDtaa(data[0]?.Type);
    // console.log("222222222222222222" + value);

    // if(data){
    //   window.alert(data.type + "  "+ data.PostID +  "  "+ data.UserID);

    //   setUserDtaa(data.Type);
    // }

    if (!res.status === 200) {
      const error = new Error(res.error);
      throw error;
    }
  } catch (err) {
    console.log(err);
    Navigate("/login");
  }
};






// ************* Comment wale modal ka Code **********************
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = async (e) => {
    localStorage.setItem("PostID", JSON.stringify(QueriesData?.PostID));
    let id = JSON.parse(localStorage.getItem("PostID"));
    // navigate("/comment");
    getAllComment();
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };


  //************** User ka data fetch kya aur store krwa userDataa k andar **********************
  const [userDataa, setUserDataa] = useState("");

  const GetImage = async (req, res) => {
   
    try {
      const params = new URLSearchParams();
      const email = QueriesData?.UserID;
      const encodedEmail = encodeURIComponent(email);
      params.append("Email", encodedEmail);     
      const res= await fetch(`https://audf-server.vercel.app/OwnPhoto?${params.toString()}`,{
        method:"GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"

    });

      const data = await res;
      // window.alert(data.OtherUserData?.Email)

      setUserDataa(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/login");
    }
  };

  const [comments, setComments] = useState(data);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);

    // navigate("/dashboard");
  }
    const handleShow = () =>{
      setShow(true);
      setModalOpen(false);

    } 

  // valuee k andar comment wala message save ho ga 
  const [valuee, setValuee] = useState('');

  const [CommentData, SetCommentData] = useState({
      Photo: "",
     ID: localStorage.getItem('Email'),
     Name: localStorage.getItem('Name'),
   PostID: ""  ,
   comment: "",
  });

  const postData = async (e) => {    
    e.preventDefault();
  
    const {Photo,ID,Name,PostID,comment} = CommentData;  
    const res = await fetch("https://audf-server.vercel.app/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Photo: userDataa.LoginUserData?.Photo,ID,Name,PostID: JSON.parse(localStorage.getItem('PostID')),comment: valuee
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


  //*************   Get Comment Data and save it in below hook *********************
  const [GetCommentData, setGetCommentData] = useState([]);
  const getAllComment = async (req, res) => {
   
    try {
      const params = new URLSearchParams();
      params.append("PostID", JSON.parse(localStorage.getItem('PostID')));
      const res= await fetch(`https://audf-server.vercel.app/getAllComment?${params.toString()}`,{
        method:"GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"

    });

      const data = await res;
      setGetCommentData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // Navigate("/login");
    }
  };
  


  const [OtherUserProfile, setOtherUserProfile ]= useState([]);
  const otherUserProfile= async (UserID) => {
    window.alert("sadasds"+ UserID);
    Navigate(`/profile/${UserID}`);

    // try {
    //   const params = new URLSearchParams();
    //   params.append("PostID", PostID);
    //   const res= await fetch(`/OtherUserProfile?${params.toString()}`,{
    //     method:"GET",
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json"
    //     },
    //     credentials: "include"

    // });

    //   const data = await res.json();
    //   setOtherUserProfile(data);

    //   if (!res.status === 200) {
    //     const error = new Error(res.error);
    //     throw error;
    //   }
    // } catch (err) {
    //   console.log(err);
    //   // Navigate("/login");
    // }
  };
  




  const [CommentVote, setCommentVote] = useState({
    UserID: localStorage.getItem('Email'),
    PostID: QueriesData?.PostID,
    CommentID: "",
    Type:  " ",
    UpVote: "",
    DeVote: ""
  });
  
  const Query_CommentVote = async (commentID,VoteNumber,name) => {
  
  
    // name = e.target.name;
    // value = e.target.value;
  
    // setQueryVote({ ...CommentVote, Type: name });
  
    const {UserID, PostID,CommentID,Type, UpVote, DeVote } = CommentVote;
    // window.alert(Type+ name + value + e.target.getAttribute('name'));
  
  
    const res = await fetch("https://audf-server.vercel.app/CommentVote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserID,
        PostID,
        CommentID: commentID,
        Type: name,
        UpVote: VoteNumber,
        DeVote: VoteNumber
      }),
    });
    const data = await res; // Parse the response body as JSON
    if (res.status === 400 || !res) {
      window.alert(data.message);
    } else if (res.status === 300) {
      window.alert(data.message);
    } else {
      window.alert(data.message);
      window.location.reload(false);
  
      // Navigate("/dashboard");
    }
  };
  

















    useEffect(() => {
      GetImage();

      CheckQueryVote();
      // CheckCommentVote();

      // console.log("222222222222222222", userDtaa);

    }, []);
  
   const rteChange = (content, delta, source, editor) => {
      // console.log(editor.getHTML()); // HTML/rich text
      // console.log(editor.getText()); // plain text
      // console.log(editor.getLength()); // number of characters
      setValuee(editor.getText());
    }











    // Quora Box wali file ka code copy paste kya ha idr

    
    


  return (
    
    <div className="full ms-1 border border-white border-2 rounded-end shadow-lg mb-2">
      <div className="profile-div mb-1">
        <div className="headerr circular--portrait d-inline-block mt-1 mb-1" 
>
          <img
            src={userDataa.OtherUserData?.Photo}
            alt="logo"
            className="user-image mb-1 mt-1 ms-1"
            onClick={() => otherUserProfile(QueriesData?.UserID)}
            />
          <h4> {QueriesData?.UserName}</h4>
        </div>

        <div className="d-inline-block btn-opt">
          <OverflowMenu PostID={QueriesData?.PostID}/>
          {/* <FontAwesomeIcon
            icon={faGripHorizontal}
            className="pe-2 pt-4 icon-font"
          /> */}
        </div>
      </div>
      <div className="news ms-2">
        <p className="question-title mt-2">
          {QueriesData?.QueryTitle}
          <p className="category-title mt-1">
            <pre>Category: {QueriesData?.QueryCategory}</pre>
          </p>
        </p>

        <p className="question-details">{QueriesData?.QueryDetails}</p>
      </div>
      <div>
        <div className="icon-div">
          <Row>
            <Col
            style={{ color: UserDtaa =="upvote" ? "#fdc20c" : "white" }}
              className="col1  pb-1 pt-1 "
              onClick={(e) => Query_Vote(e, "upvote")}
              name="upvote"
              // value= "vvv"
                            // value={queryVote.UpVote}
              // value="UpVote"

            >
              {" "}
              <p style={{ color: UserDtaa =="upvote" ? "#fdc20c" : "white" }}> Upvote ({QueriesData?.Upvote})</p>{" "}
              <FontAwesomeIcon icon={faThumbsUp} className="ps-1" />
            </Col>
            <Col
            style={{ color: UserDtaa =="devote" ? "#fdc20c" :"white" }}
              className="col1 pb-1 pt-1"
              onClick={(e) => Query_Vote(e, "devote")}
              name="devote"
              // value={queryData.Devote}
              // value={"DeVote"}
            >
              {" "}
              <p   style={{ color: UserDtaa =="devote" ? "#fdc20c" :"white" }}>Devote ({QueriesData?.Devote})</p>{" "}
              <FontAwesomeIcon icon={faThumbsDown} className="ps-1 " />
            </Col>
            <Col className="col1 pb-1 pt-1" onClick={handleModalOpen}>
              {" "}
              <p>Comment </p>{" "}
              <FontAwesomeIcon icon={faCommentDots} className="ps-1 " />

            </Col>
            <Col className="col1 pt-1">
              <p>Share</p>
              <FontAwesomeIcon icon={faShare} className="ps-2" />{" "}
            </Col>
          </Row>
        </div>
      </div>



      <Modal
      // show={modalOpen}
      // onHide={handleClose}
      // backdrop="static"
      // keyboard={false}
      // centered
      // onExit={reload}
      centered show={modalOpen} onHide={handleModalClose} className="Modall "
      size='lg'
    >
      <Modal.Header closeButton>
        <Modal.Title>Comments</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        <Container>
        <Row className="justify-content-end" style={{ paddingRight: '15px' }}>
          <Button  onClick={handleShow} className="add_comment_btn" variant='secondary'>
          Add Comment
        </Button>   
          </Row>

          
          
          {GetCommentData.map(comment => {

            // CheckCommentVote(comment?._id);


            return (
      <div className="profile-div ms-1 ps-2 pr-1 mb-1 border border-white border-2 rounded-end shadow-lg mb-2">
        <Row key={comment?.PostID}>
      <div className="headerr circular--portrait d-inline-block mt-1 mb-1" 
            >
                      <img
                        src={comment?.Photo}
                        alt="logo"
                        className="user-image mb-1 mt-1 ms-1"
                        onClick={() => otherUserProfile(QueriesData?.UserID)}
                        />
                      <h4> {comment?.Name}</h4>
                    </div>
                    <div className="news ms-2">
        {/* <p className="question-title mt-2">
          {comment?.comment}
          
        </p> */}

        <p className="question-details">{comment?.comment}</p>

        <p className="question-details" style={{ textAlign: 'right', paddingRight: '10px' }}>{new Date(comment?.CreatedAt).toLocaleString()}</p>


      </div>
      <div>
        <div className="icon-div">
          <Row>
            <Col
              style={{ color: CommentVoteData =="upvote" ? "#fdc20c" : "blue" }}
              className="col1  pb-1 pt-1 "
              onClick={() => Query_CommentVote(comment?._id,comment?.Upvote, "upvote")}
              name="upvote"
              // value= "vvv"
                            // value={queryVote.UpVote}
              // value="UpVote"

            >
              {" "}
              <p style={{ color: CommentVoteData =="upvote" ? "#fdc20c" : "white" }}> Upvote ({comment?.Upvote})</p>{" "}
              <FontAwesomeIcon icon={faThumbsUp} className="ps-1" />
            </Col>
            <Col
            style={{ color: CommentVoteData=="devote" ? "#fdc20c" :"white" }}
              className="col1 pb-1 pt-1"
              onClick={(e) => Query_CommentVote(comment?._id,comment?.Devote, "devote")}
              name="devote"
              // value={queryData.Devote}
              // value={"DeVote"}
            >
              {" "}
              <p   style={{ color: CommentVoteData =="devote" ? "#fdc20c" :"white" }}>Devote ({comment?.Devote})</p>{" "}
              <FontAwesomeIcon icon={faThumbsDown} className="ps-1 " />
            </Col>
            
          </Row>
        </div>
      </div>
      </Row>

      </div>
            );


                    
      })}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>



    <Modal size="lg " centered show={show} onHide={handleClose} className="Modall "  
        >
            <div className="modal__question mt-5">
              <h2 >
                {QueriesData?.QueryTitle}
                
              </h2>
              <p>
                asked by <span className="name">
                    {QueriesData?.UserName} 
                    
                    </span> on{" "}
                <span className="name">
                  {new Date(QueriesData?.Date).toLocaleString()}
                  
                </span>
              </p>
            </div>    

            <div className="modal__answer">

            <Modal.Body>
            <ReactQuill
            className="input"
            as="textarea"
        theme={'snow'}
        // readOnly={true}
        show={show}
        onHide={handleClose}
        name="comment" 
        onChange={rteChange}
        
        placeholder="Enter your Anser."
        
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

    </div>

    /*{ <div className="full border border-white border-2 rounded-end shadow-lg mb-2">
        <div className="profile-div mb-1">
         
          <div className="headerr circular--portrait d-inline-block mt-1 mb-1">
  <img src={hamad} alt="logo"  className="user-image mb-1 mt-1 ms-1"/>
  <h4>Hamad Ali</h4>
</div>
         
          <div className="d-inline-block btn-opt">
            <FontAwesomeIcon
              icon={faGripHorizontal}
              className="pe-2 pt-4 icon-font"
            />
          </div>
        </div>
        <div className="news ms-2">
          <p className="question-title mt-2">
            {" "}
            Why are doing AU DIscussion Forum as FYP project?
          </p>
          <p className="question-details">
            Culpa consequat minim proident magna ea ex magna pariatur. Aute
            commodo consectetur ad cupidatat mollit ad in minim. Eu excepteur
            labore qui sunt ipsum minim quis cupidatat incididunt. Do fugiat
            irure labore irure exercitation commodo aliquip excepteur duis
            exercitation sit eu ex exercitation.
          </p>
        </div>
        <div>
          <div className="icon-div">
            <Row>
              <Col className="col1  pb-1 pt-1">
                {" "}
                <p> Upvote </p>{" "}
                <FontAwesomeIcon icon={faThumbsUp} className="ps-1" />
              </Col>
              <Col className="col1 pb-1 pt-1">
                {" "}
                <p>Devote</p>{" "}
                <FontAwesomeIcon icon={faThumbsDown} className="ps-1 " />
              </Col>
              <Col className="col1 pb-1 pt-1">
                {" "}
                <p>Comment</p>{" "}
                <FontAwesomeIcon icon={faCommentDots} className="ps-1 " />
              </Col>
              <Col className="col1 pt-1">
                <p>Share</p>
                <FontAwesomeIcon icon={faShare} className="ps-2" />{" "}
              </Col>
            </Row>
          </div>
        </div>
      </div>


      <div className="full border border-white border-2 rounded-end shadow-lg mb-2">
        <div className="profile-div mb-1">
         
          <div className="headerr circular--portrait d-inline-block mt-1 mb-1">
  <img src={usman} alt="logo"  className="user-image mb-1 mt-1 ms-1"/>
  <h4>M.Usman Sajid</h4>
</div>
         
          <div className="d-inline-block btn-opt">
            <FontAwesomeIcon
              icon={faGripHorizontal}
              className="pe-2 pt-4 icon-font"
            />
          </div>
        </div>
        <div className="news ms-2">
          <p className="question-title mt-2">
            {" "}
            Why are doing AU DIscussion Forum as FYP project?
          </p>
          <p className="question-details">
            Culpa consequat minim proident magna ea ex magna pariatur. Aute
            commodo consectetur ad cupidatat mollit ad in minim. Eu excepteur
            labore qui sunt ipsum minim quis cupidatat incididunt. Do fugiat
            irure labore irure exercitation commodo aliquip excepteur duis
            exercitation sit eu ex exercitation.
          </p>
        </div>
        <div>
          <div className="icon-div">
            <Row>
              <Col className="col1  pb-1 pt-1">
                {" "}
                <p> Upvote </p>{" "}
                <FontAwesomeIcon icon={faThumbsUp} className="ps-1" />
              </Col>
              <Col className="col1 pb-1 pt-1">
                {" "}
                <p>Devote</p>{" "}
                <FontAwesomeIcon icon={faThumbsDown} className="ps-1 " />
              </Col>
              <Col className="col1 pb-1 pt-1">
                {" "}
                <p>Comment</p>{" "}
                <FontAwesomeIcon icon={faCommentDots} className="ps-1 " />
              </Col>
              <Col className="col1 pt-1">
                <p>Share</p>
                <FontAwesomeIcon icon={faShare} className="ps-2" />{" "}
              </Col>
            </Row>
          </div>
        </div>
      </div> }*/
    // </Container>
  );
};

export default Dashboard_feed;
