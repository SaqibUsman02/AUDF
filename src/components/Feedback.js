import '../CSS/feedback.css';
import {Button ,Container, Col, Row, Form, FloatingLabel}  from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
    
const App = () => {

 const navigate = useNavigate();
 const [cookies, setCookie] = useCookies();

 const [FeedbackData, SetFeedbackData] = useState({
  // ID: JSON.parse(localStorage.getItem('Email')),
  ID: cookies.Email,
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

  const res = await fetch("/feedback", {
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
    // navigate("/dashboard");

  }



};



  return (
    <div className='feedback_div mt-4 ms-4' style={{backgroundColor:'#FAFAFA', padding:'50px', width:"100%" ,height:"fit-content"}}>
      <Container className='mt-4'>
        
        <Row>
          <Col className=""> 
          <h1 className='Feedback_col text-set mt-3  text-center display-6'>Your Feedback</h1>
          <p className='text-center text-set mt-2'>We would like your feedback to improve our website.</p>
           </Col>
        </Row>
        <hr className='mt-2 mb-4'/>
        <Row>
          <Form>
          <Form.Text muted className="feedback_inpp">Please select your category.</Form.Text>
            <Form.Select className="feedback_inp mb-4" name='Category' value={value} onChange={handleInput}
              style={{width: '80%'}}
              >
              <option value="app-feedback">Feedback about app</option>
              <option value="course-feedback">Feedback about course</option>
              <option value="faculty-feedback">Feedback about faculty</option>
              <option value="suggestion-feedback">Feedback about suggestion</option>
            </Form.Select>
            <Form.Text muted className="feedback_inpp">Leave your feedback here.</Form.Text>
            <FloatingLabel className="feedback_inp mb-4" label="Feedback">
              <Form.Control className="feedback_inp" as="textarea" placeholder="Feedback" name="Feedback" value={FeedbackData.Feedback} 
              onChange={handleInput}
              style={{height:'100px', width:'80%'}} />
            </FloatingLabel>
            <div className='btn-div'>
              {/* <Button className='mt-4 mb-4 btn-set' onClick={postData}> Submit</Button></div> */}
              <button className="edit_profile_btn" type="submit"  onClick={postData}>
                          Submit
                        </button>
                        </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default App;