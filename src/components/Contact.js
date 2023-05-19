import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../CSS/Contact.css";
import svg6 from "../images/feedback.svg";
import location from "../images/geo-alt.svg"
import Call from "../images/telephone.svg"
import Email from "../images/envelope.svg"
import Website from "../images/globe.svg"



const Contact = () => {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const contactForm = async (e) => {
    e.preventDefault();

    const { name, Email,Subject, Message } = userData;

    const res = await fetch("https://df-server.vercel.app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        Email,
        Subject,
        Message,
      }),
    });

    const data = await res.json();
    if (!data) {
      console.log("Message not Send");
    } else {
      alert("Message SEND sUCCESSFLLY");
      setUserData({ ...userData, Message: "" });
    }
  };
  return (
    <>
      <div className="content">
        <div class="row mb-5">
          <div class="col-lg-3">
            <div class="dbox w-100 text-center">
              <div class="icon d-flex align-items-center justify-content-center">
                <span 
                // class="fa fa-map-marker"
                >
                  <img src={location}></img></span>
              </div>
              <div class="text">
                <p>
                  <span>Address:</span>
                  <a href="tel://1234567920"> F-8 Markaz ,Office # 209 </a>

                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="dbox w-100 text-center">
              <div class="icon d-flex align-items-center justify-content-center">
              <span 
                // class="fa fa-map-marker"
                >
                  <img src={Call}></img></span>              </div>
              <div class="text">
                <p>
                  <span>Phone:</span>
                  <a href="tel://1234567920">+ 1235 2355 98</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="dbox w-100 text-center">
              <div class="icon d-flex align-items-center justify-content-center">
              <span 
                // class="fa fa-map-marker"
                >
                  <img src={Email}></img></span>              </div>
              <div class="text">
                <p>
                  <span>Email:</span>
                  <a href="mailto:info@yoursite.com">Audf_info@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="dbox w-100 text-center">
              <div class="icon d-flex align-items-center justify-content-center">
              <span 
                // class="fa fa-map-marker"
                >
                  <img src={Website}></img></span>              </div>
              <div class="text">
                <p>
                  <span>Website:</span> <a href="#">Audf.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Container className="contact_container  border border-white border-2 rounded-end shadow-lg ">
          <Row className="row justify-content-center align-items-center">
            <Col className="col-md-10">
              <Row className="row justify-content-center">
                <Col className="col-md-6 ">
                  <h3 className="headingg pt-4 mb-4">
                    Let's talk about everything!
                  </h3>
                  <p className="cont_p">
                  Don't hesitate to get in touch with us! We love the challenge of turning your ideas into reality and are always ready to talk through any message.
                  </p>

                  <p className="d-flex justify-content-center">
                    <img src={svg6} alt="Image" className="img-fluid align-items-center mt-5" />
                  </p>
                </Col>
                <Col className="Input_Col col-md-6  ">
                  <form
                    className="mb-5"
                    method="post"
                    id="Login_input_body"
                    name="contactForm"
                    onSubmit={contactForm}
                  >
                    <div className="inputBox">
                      <input
                        className="input"
                        type="text"
                        required="required"
                        onChange={handleInput}
                        name= "name"
                        value={userData.name}
                      />
                      <span className="span">Your Name</span>
                    </div>

                    <div className="inputBox">
                      <input
                        className="input"
                        type="text"
                        required="required"
                        onChange={handleInput}
                        name= "Email"
                        value={userData.Email}
                      />
                      <span className="span">Email</span>
                    </div>
                    <div className="inputBox">
                      <input
                        className="input "
                        type="text"
                        required="required"
                        onChange={handleInput}
                        name= "Subject"
                        value={userData.Subject}
                      />
                      <span className="span">Subject</span>
                    </div>
                    <div className="inputBox">
                      <input
                        className="input"
                        type="text"
                        id="message"
                        required="required"
                        onChange={handleInput}
                        name= "Message"
                        value={userData.Message}
                      />
                      <span className="span">Message</span>
                    </div>
                    <Col className="col-12">
                      <div>
                        <Button id="cont_btn" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </form>

                  <div id="form-message-warning mt-4"></div>
                  <div id="form-message-success">
                    Your message was sent, thank you!
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      
    </>
  );
};

export default Contact;
