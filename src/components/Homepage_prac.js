import React from 'react'
import {Figure,Carousel,  Row,Col,Card,CardGroup, Navbar,Container,Button,NavDropdown,Nav} from "react-bootstrap"
import AU from "../images/AU.png"
import background_1 from "../images/background_1.jpg"
import background_2 from "../images/background_2.jpg"
import background_3 from "../images/background_3.jpg"

import '../CSS/Navabar.css'
import * as Icon from 'react-bootstrap-icons';
import { NavLink ,Link, useNavigate} from 'react-router-dom'

export default function Homepage() {
  const Navigate = useNavigate();

  return (
    <div style={{backgroundColor:"white"}}>
    
    {/*----------------- Navbar------------------ */}
{/* 
    <Navbar className='shadow'   expand="lg" style={{backgroundColor:"#2C3333"}}>
    <Container>
      <Navbar.Brand to="#home" id="Web_Name"  className='font-weight-bold text-warning text-uppercase mt-3 ms-2 '   >
        <Figure >
          <Figure.Image
           width={60}
           height={60}
           alt="logo"
           src={AU} />
         
          
        </Figure>
      
      Discussion Forum</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="ms-auto gap-5 fw-light ">
          <Nav.Link id="ss" to="/"  className='text-warning'>Home</Nav.Link>
          <Link id="ss" to="/login"  className='text-warning'>About</Link>
          <NavDropdown  id="ss"  title={
        <span className="text-warning my-auto">Dropdown</span>
    }>
            <NavDropdown.Item to="#action/3.1" className='text-warning'>Action</NavDropdown.Item>
            <NavDropdown.Item to="#action/3.2" className='text-warning'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item to="#action/3.3" className='text-warning'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to="#action/3.4" className='text-warning'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link id="ss" to="/login"  className='text-warning'>Home</Nav.Link>
          <Nav.Link id="ss" to="/signup"  className='text-warning'>About</Nav.Link>
        </Nav>
        <Button variant="outline-secondary" onClick={() => {
            Navigate("/login")
        }} className='ms-4'>Login</Button>{' '}
      </Navbar.Collapse>
    </Container>
  </Navbar> */}



    {/*----------------- Middle Screen ------------------ */}


  <Container  className="mt-5 square border border-dark " >
      
      <Row  className="align-items-center" >
        <Col  style={{textAlign:"center"}}>
          <p  className=" ">wanna wannawanna wanna wanna wanna a wanna wanna wanna  wanna wanna a wanna wanna wanna  wanna</p>
        <Button  className='mt-1' style={{backgroundColor:"#5800FF"}}>Login</Button>{' '}
        </Col>

        <Col xs={6} sm={6} lg={6} md={6}  className='  ms-5 ps-5 '  style={{ padding:30}}>
        <Carousel variant="dark" className='shadow-lg'>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"450px", width:"450px"}}
          src={background_1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"450px", width:"450px"}}
          src={background_2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"450px", width:"450px"}}
          src={background_3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
        </Col>

      </Row>

    </Container>



    {/*----------------- Cards------------------ */}



  <Container>
      
      <Row className="justify-content-md-center">
        <Col > <Card className="ms-3 mt-5   shadow"  >
        <Card.Img variant="top" src="https://picsum.photos/200/300" height="200px" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      
      </Card></Col>
        <Col> <Card className="ms-3 mt-5  shadow "  >
        <Card.Img variant="top" src="https://picsum.photos/201/300" height="200px" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
       
      </Card></Col>
        <Col > <Card className="ms-3 mt-5 shadow"  >
        <Card.Img variant="top" src="https://picsum.photos/202/300" height="200px"  />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        
      </Card></Col>
      </Row>
    </Container>


    {/*----------------- Footer------------------ */}

    <footer className="bg-dark text-white pt-5 pb-4 mt-5" >

      <Container className="text-md-left">
        <Row className=" text-md-left">
          <Col xs={3} className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>
                Discussion Forum
            </h5>
            <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.

            </p>
          </Col>


          <Col xs={3} className="col-md-2 col-lg-2 col-xl-2  mx-auto mt-3">
          <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>
                Products
            </h5>
            <p>
              <NavLink to='#' className="text-white" style={{ textDecoration:"none"}}>TheProviders </NavLink>
            </p>
            <p>
              <NavLink to='#' className="text-white" style={{ textDecoration:"none"}}>TheProviders </NavLink>
            </p>
            <p>
              <NavLink to='#' className="text-white" style={{ textDecoration:"none"}}>TheProviders </NavLink>
            </p>
            <p>
              <NavLink to='#' className="text-white" style={{ textDecoration:"none"}}>TheProviders </NavLink>
            </p>
          </Col>


          
          <Col xs={3} className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className='text-uppercase mb-4 font-weight-bold text-warning '>
                Useful Links
            </h5>
            <p>
              <NavLink to='#' className="text-white" style={{ textDecoration:"none"}}>TheProviders </NavLink>
            </p>
            <p>
              <NavLink to='#' className="text-white" style={{ textDecoration:"none"}}>TheProviders </NavLink>
            </p>
            <p>
              <NavLink to='#' className="text-white" style={{ textDecoration:"none"}}>TheProviders </NavLink>
            </p>
            <p>
              <NavLink to='#' className="text-white" style={{ textDecoration:"none"}}>TheProviders </NavLink>
            </p>
          </Col>


          
          <Col xs={3} className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 ">
          <h5 className='text-uppercase mb-4 font-weight-bold text-warning '>
                Contact
            </h5>
            <p>
            <Icon.HouseFill className="mr-4"></Icon.HouseFill>  Rawalpindi, Pakistan
            </p>
            <p>
            <Icon.PhoneFill></Icon.PhoneFill>  +92 xxxx xxxxx
            </p>
            
            <p>
             <Icon.Mailbox2></Icon.Mailbox2> tech54qi@gmail.com
            </p>


          </Col>
           
        </Row>

        <Row className='align-items-center'>
          <Col className='col-md-7 col-lg-8 mt-5'>
            <p>Copyright @2020 All rights reserved by:
              <NavLink to='#' style={{textDecoration:"none"}}>
                <strong className='text-warning'>The Providers</strong>

              </NavLink>
            </p>

          </Col>

          <Col className='col-md-5 col-lg-4'>
            <div className='text-center text-md-right'>
              <ul className='list-unstyled list-inline'>
                <li className='list-inline-item ms-2'>
                  <NavLink to="#" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><Icon.Facebook ></Icon.Facebook> </NavLink>

                </li>
                <li className='list-inline-item ms-2'>
                  <NavLink to="#" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><Icon.Twitter></Icon.Twitter></NavLink>

                </li>
                <li className='list-inline-item ms-2'>
                  <NavLink to="#" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><Icon.Google></Icon.Google></NavLink>

                </li>
                <li className='list-inline-item ms-2'>
                  <NavLink to="#" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><Icon.Linkedin></Icon.Linkedin></NavLink>

                </li>
                <li className='list-inline-item ms-2'>
                  <NavLink to="#" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><Icon.Youtube></Icon.Youtube></NavLink>

                </li>

              </ul>

            </div>

          </Col>
        </Row>
      </Container>

    </footer>

  
</div>

  
  )
}
