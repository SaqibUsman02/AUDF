import React from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Button,
  Nav,
  NavDropdown,
  Navbar,
  Figure,
} from "react-bootstrap";
import svg1 from "../images/svg1.svg";import Footer from "../images/white_icon.png";

import dashboard_2 from "../images/discussion_2.svg";
import svg3 from "../images/svg3.svg";
import svg4 from "../images/svg5.svg";
import svg6 from "../images/svg6.svg";
import dashboard_1 from "../images/discussion_1.svg";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

import * as Icon from "react-bootstrap-icons";
import AU from "../images/website_logo_transparent.png";

import "../CSS/practice.css";
import { useContext } from "react";

function Practice() {
  const { state, dispatch } = useContext(userContext);
  const navigate = useNavigate();

  const Navigate = useNavigate();

  const RenderMenu = () => {
    if (state) {
      return <></>;
    }
  };

  return (
    <div className="about_body">
      <section className="under_navbar pt-5 d-flex ">
        <Container>
        <Carousel fade controls={false} indicators={true} className="cc">
            <Carousel.Item>
              <Row className="align-items-center">
                <Col className="col-5">
                  <h1>Practice this now</h1>
                  <p>
                    Work hard work hard Work hard work hard Work hard work hard
                    Work hard work hard Work hard work hard Work hard work hard
                    Work hard work hard Work hard work har Work hard work hard
                    Work hard work hard Work hard work har{" "}
                  </p>
                  <Row >
                    <Col className="col-8">
                      <Button id="getstarted_btn"  onClick={() =>  navigate('/login')}>Get Started</Button>
                    </Col>
                  </Row>
                </Col>

                <Col className="under_navbar_img d-flex justify-content-center align-items-center col-7 mx-auto">
                  <img
                    // className="d-flex align-items-center w-100  "
                    className="d-block w-100 h-80  "

                    src={dashboard_1}
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="align-items-center">
                <Col className="col-5">
                  <h1>Old is Gold.</h1>
                  <p>
                    Work hard work hard Work hard work hard Work hard work hard
                    Work hard work hard Work hard work hard Work hard work hard
                    Work hard work hard Work hard work har Work hard work hard
                    Work hard work hard Work hard work har{" "}
                  </p>
                  <Row className="">
                    <Col className="col-8">
                      <Button id="getstarted_btn">Get Started</Button>
                    </Col>
                  </Row>
                </Col>

                <Col className="under_navbar_img d-flex justify-content-center align-items-center col-7 mx-auto ">
                  <img
                    className="d-block w-100 h-80  "
                    src={dashboard_2}
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      <section className="about ">
        <Container className="cont">
          <Row className="rows d-flex align-items-center">
            <Col>
              <div className="boxx">
                <img src={svg4} />
                <h3 className="mt-2">Firstly</h3>
                <p className="mt-2">
                  our website has this feature.login to accomdate this feature
                </p>
              </div>
            </Col>
            <Col>
              <div className="boxx">
                <img src={svg6} />
                <h3 className="mt-2">Secondly</h3>
                <p className="mt-2">
                  our website has this feature.login to accomdate this feature
                </p>
              </div>
            </Col>
            <Col>
              <div className="boxx">
                <img src={dashboard_1} />
                <h3 className="mt-2">Third</h3>
                <p className="mt-2">
                  our website has this feature.login to accomdate this feature
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features">
        <section className="feature d-flex align-items-center">
          <Container className="featureHover align-items-center">
            <Row className="align-items-center">
              <Col className="col-7">
                <img src={dashboard_1} />
              </Col>
              <Col className="col-5">
                <h2 className="mt-3">
                  Group option make it easier to get answer .
                </h2>
                <p className="mt-3">
                  use group featuer to do this do that do that and do this why
                  cant do this why cant do that do that plz use pur group
                  feature. use group featuer to do this do that do that and do
                  this why cant do this why cant do that do that plz use pur
                  group feature{" "}
                </p>
                <a href="#" className="more-btn mt-1">
                  Read More <Icon.ArrowRight></Icon.ArrowRight>{" "}
                </a>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="feature d-flex align-items-center">
          <Container className="featureHover align-items-center">
            <Row className="align-items-center">
              <Col className="col-5">
                <h2 className="mt-3">
                  Group option make it easier to get answer .
                </h2>
                <p className="mt-3">
                  use group featuer to do this do that do that and do this why
                  cant do this why cant do that do that plz use pur group
                  feature. use group featuer to do this do that do that and do
                  this why cant do this why cant do that do that plz use pur
                  group feature{" "}
                </p>
                <a href="#" className="more-btn mt-3">
                  Read More <Icon.ArrowRight></Icon.ArrowRight>{" "}
                </a>
              </Col>

              <Col className="col-7">
                <img src={svg6} />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="feature d-flex align-items-center">
          <Container className="featureHover align-items-center">
            <Row className="align-items-center">
              <Col className="col-7">
                <img src={dashboard_1} />
              </Col>
              <Col className="col-5">
                <h2 className="mt-3">
                  Group option make it easier to get answer .
                </h2>
                <p className="mt-3">
                  use group featuer to do this do that do that and do this why
                  cant do this why cant do that do that plz use pur group
                  feature. use group featuer to do this do that do that and do
                  this why cant do this why cant do that do that plz use pur
                  group feature{" "}
                </p>
                <a href="#" className="more-btn mt-3">
                  Read More <Icon.ArrowRight></Icon.ArrowRight>{" "}
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      <section className="footer mt-5">
        <footer className="mt-3 pt-3 ">
          <Container className="text-md-left">
            <Row className="text-md-left">
              <Col xs={3} className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <a class="footer_img">
                  <img src={Footer} alt="logo" />
                  <h5 className="sss">AU Discussion Forum</h5>
                </a>
                
                <div>
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                </div>
              </Col>

              <Col xs={3} className="col-md-2 col-lg-2 col-xl-2  mx-auto mt-3">
                <h5 className="">Products</h5>
                <div  className="product_div flex flex-col">
                <span >
                  <a href="#">TheProviders </a>
                </span>
                <span>
                  <a href="#">TheProviders </a>
                </span>
                <span>
                  <a href="#">TheProviders </a>
                </span>
                <span>
                  <a href="#">TheProviders </a>
                </span>
                </div>
              </Col>

              <Col xs={3} className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="">Useful Links</h5>
                <div  className="product_div flex flex-col">
                <span >
                  <a href="#">TheProviders </a>
                </span>
                <span>
                  <a href="#">TheProviders </a>
                </span>
                <span>
                  <a href="#">TheProviders </a>
                </span>
                <span>
                  <a href="#">TheProviders </a>
                </span>
                </div>
              </Col>

              <Col xs={3}  className="contact col-md-3 col-lg-4 col-xl-3 mx-auto mt-3 ">
                <h5>Contact</h5>
                <div className="product_div flex flex-row">
                  <Icon.HouseFill className="h-8"></Icon.HouseFill><span className="ps-2  pt-0">Rawalpindi, Pakistan</span> 
                </div>
                <div className="flex flex-row">
                <Icon.PhoneFill className="h-8"></Icon.PhoneFill><span className="ps-2  pt-0">+92 xxx xxxxxxx</span> 
                </div>

                <div className="flex flex-row">
                <Icon.Mailbox2 className="h-8"></Icon.Mailbox2><span className="ps-2  pt-0">dis@gmail.com</span> 
                </div>
              </Col>
            </Row>

            <Row className="align-items-center ">
              <Col className="col-md-7 col-lg-8 mt-5">
                <p className="ms-4">
                  Copyright @2022 All rights reserved by:  
                  <a href="#" style={{ textDecoration: "none" }}>
                    <strong className="text-warning"> Discussion Forum</strong>
                  </a>
                </p>
              </Col>

              <Col className="col-md-5 col-lg-4 ">
                <div className="text-center me-4 mt-3 text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item ms-2">
                      <a
                        href="#"
                        className="btn-floating btn-sm text-white"
                        style={{ fontSize: "23px" }}
                      >
                        <Icon.Facebook></Icon.Facebook>{" "}
                      </a>
                    </li>
                    <li className="list-inline-item ms-2">
                      <a
                        href="#"
                        className="btn-floating btn-sm text-white"
                        style={{ fontSize: "23px" }}
                      >
                        <Icon.Twitter></Icon.Twitter>
                      </a>
                    </li>
                    <li className="list-inline-item ms-2">
                      <a
                        href="#"
                        className="btn-floating btn-sm text-white"
                        style={{ fontSize: "23px" }}
                      >
                        <Icon.Google></Icon.Google>
                      </a>
                    </li>
                
                   
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </section>

    </div>
  );
}

export default Practice;
