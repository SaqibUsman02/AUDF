import React ,{useContext} from "react";
import { Carousel, Container, Row, Col,Button,Nav,NavDropdown,Navbar,Figure } from "react-bootstrap";

import {useNavigate} from "react-router-dom";
import { userContext } from "../App";
import AU from "../images/dashboard_web_logo.png"
import '../CSS/Navabar.css'
import Dashboard_Header from "./Dashboard_Header";

const NavBar = () => {
    const {state,dispatch} = useContext(userContext);
    const Navigate = useNavigate();
  
    const RenderMenu = () => {
      if(state) {
        return (
          <>
 {/* <Navbar.Collapse class="navbar">
        <Nav  className=" ms-auto gap-1">
          <Nav.Link id="nav_item" href="#home"  onClick={() => Navigate("/")} >Home</Nav.Link>
          <Nav.Link id="nav_item" href="#link" onClick={() => Navigate("/about")}  >About</Nav.Link>
          <NavDropdown id="nav_item"  title="Dropdown">
            <NavDropdown.Item id="nav_item" href="#action/3.1" >Action</NavDropdown.Item>
            <NavDropdown.Item  id="nav_item" href="#action/3.2" >
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item id="nav_item" href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id="nav_item" href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link id="nav_item"  onClick={() => Navigate("/feed")} >Feed</Nav.Link>
          <Nav.Link id="nav_item" href="#link" onClick={() => Navigate("/feedback")} >Feedback</Nav.Link>
          <Nav.Link id="nav_item" href="#link" onClick={() => Navigate("/comment")}>Comment</Nav.Link>

        </Nav>
        
        <Button variant="outline-secondary"  className='nav_btn ms-4' onClick={() => Navigate("/logout")} >Logout</Button>{' '}

      </Navbar.Collapse> */}
      <Dashboard_Header/>
          </>
  
        )
      } else {
        return (
            <>
            {/* <div class="header">
  <img src={AU} alt="logo" />
  <h3>AU Discussion Forum</h3>
</div> */}
<Navbar bg="light" expand="lg">
      <Container fluid>
<Navbar.Brand href="#home"><div class="header">
  <img src={AU} alt="logo" />
  <h3>AU Discussion Forum</h3>
</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
        <Nav  className=" ms-auto gap-1">
          <Nav.Link id="nav_item"  onClick={() => Navigate("/")} >Home</Nav.Link>

          <Nav.Link id="nav_item"  onClick={() => Navigate("/about")}  >About Us</Nav.Link>

          {/* <NavDropdown id="nav_item"  title="Dropdown">
            <NavDropdown.Item id="nav_item" href="#action/3.1" >Action</NavDropdown.Item>
            <NavDropdown.Item  id="nav_item" href="#action/3.2" >
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item id="nav_item" href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id="nav_item" href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}

          <Nav.Link id="nav_item"  onClick={() => Navigate("/Contact")} >Contact Us</Nav.Link>
          {/* <Nav.Link id="nav_item" href="#link" onClick={() => Navigate("/feedback")}>Feedback</Nav.Link> */}
          <Nav.Link id="nav_item" onClick={() => Navigate("/login")}>Login</Nav.Link>
          <Button variant="outline-secondary"  className='nav_btnn ms-4' onClick={() => Navigate("/signup")} >Signup</Button>{' '}

        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        

            </>
        )
      }
  
    }
   
  return (  
    <div>
        {/* <Navbar id= "navbarr" className='shadow' expand="lg" > */}
    {/* <Container> */}
  
      <RenderMenu />
    {/* </Container> */}
  {/* </Navbar> */}
  </div>
  )
}

export default NavBar