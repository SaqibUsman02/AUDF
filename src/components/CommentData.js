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



const CommentData = ({ comment, QueriesData}) => {

      
    const [cookies, setCookie] = useCookies();
const Navigate =  useNavigate();
   
    

    const [CommentVoteData, setCommentVoteData] = useState("");

    const CheckCommentVote = async () => {
 
        try {
          const params = new URLSearchParams();
      const email = localStorage.getItem('Email');
      // const encodedEmail = encodeURIComponent(email);
      params.append("Email", email);
          params.append("PostID", QueriesData);
          params.append("CommentID", comment?._id);
      
          const res= await fetch(`https://df-server.vercel.app/CommentVoteData?${params.toString()}`,{
            method:"GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
      
        });
      
        let CommentVote_Value = " ";

        const data = await res.json();
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

      const [CommentVote, setCommentVote] = useState({
        UserID: localStorage.getItem('Email'),
        PostID: QueriesData,
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
      
      
        const res = await fetch("https://df-server.vercel.app/CommentVote", {
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
        const data = await res.json(); // Parse the response body as JSON
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
        CheckCommentVote();
  
      }, []);
      




  return (

    <div className="profile-div ms-1 ps-2 pr-1 mb-1 border border-white border-2 rounded-end shadow-lg mb-2">
    <Row key={comment?.PostID}>
  <div className="headerr circular--portrait d-inline-block mt-1 mb-1" 
        >
                  <img
                    src={comment?.Photo}
                    alt="logo"
                    className="user-image mb-1 mt-1 ms-1"
                    // onClick={() => otherUserProfile(QueriesData?.UserID)}
                    />
                  <h4> {comment?.Name}</h4>
                </div>
                <div className="news ms-2">
    {/* <p className="question-title mt-2">
      {comment?.comment}
      
    </p> */}

    <p className="question-details">{comment?.comment}</p>

    <p className="question-details" style={{ textAlign: 'right', paddingRight: '10px' }}>{new Date(comment?.VotedAt).toLocaleString()}</p>


  </div>
  <div>
    <div className="icon-div">
      <Row>
        <Col
          style={{ color: CommentVoteData =="upvote" ? "#fdc20c" : "white" }}
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
  )
}

export default CommentData;