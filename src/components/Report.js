import '../CSS/feedback.css';
import {Button ,Container, Col, Row, Form, FloatingLabel}  from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
    
const Report = () => {

  const [cookies, setCookie] = useCookies();
  
 const navigate = useNavigate();
 const [FeedbackData, SetFeedbackData] = useState({
  // ID: JSON.parse(localStorage.getItem('Email')),
  ID: cookies.Name,
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

  const res = await fetch("/report", {
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
    navigate("/feed");

  }



};



  return (
    <div className='mt-4 ms-4' style={{backgroundColor:'#FAFAFA', padding:'50px', width:"100%" ,height:"fit-content"}}>
      <Container className='mt-4'>
        <Row>
          <Col className=""> 
          <h3 className='Feedback_col mt-3  text-center display-6 text-uppercase '>Report</h3>
          <p className='text-center text-set mt-2'>Help us to Make a Friendly Platform.</p>
           </Col>
        </Row>
        <hr className='mt-2 mb-4'/>
        <Row>
          <Form onSubmit={postData}>
          <Form.Text muted>Report Category</Form.Text>
          <FloatingLabel label="e.g, Abused etc" >
              <Form.Control  placeholder="e.g, Abused etc"
              name = "Category"
               value={FeedbackData.Category} 
              onChange={handleInput}
              style={{height:'50px', width:'80%'}} />
            </FloatingLabel>
            <Form.Text muted>Report Description.</Form.Text>
            <FloatingLabel label="Enter Brief Detail">
              <Form.Control as="textarea" placeholder="Feedback" name="Feedback" value={FeedbackData.Feedback} 
              onChange={handleInput}
              style={{height:'100px', width:'80%'}} />
            </FloatingLabel>
            <div className='btn-div'>
              {/* <Button className='mt-4 mb-4 btn-set' onClick={postData}> Submit</Button></div> */}
              <Button id="edit_profilee_btn" type="submit">
                          Submit
                        </Button>
                        </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default Report;