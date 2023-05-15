import React ,{useState,useContext} from "react";
import { Form, Button, Container, Figure, Row, Col } from "react-bootstrap";
import SVG_1 from "../images/svg9.svg";
import googlee from "../images/google_svg.svg";

import google from "../images/google.png";
import Modal from 'react-bootstrap/Modal'

import "../CSS/Login.css";
import {useNavigate} from "react-router-dom";
import { userContext } from "../App";
import Cookies from 'js-cookie';

import { useCookies } from "react-cookie";



function Login() {
  const [cookies, setCookie] = useCookies();

  console.log(cookies.After);
  console.log(Cookies.get('After'));
  const {state,dispatch} = useContext(userContext);
  const Navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password,setPassword] = useState('');
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const loginUser = async(e) =>{
    e.preventDefault();

    const res = await fetch('https://audf-server.vercel.app/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Email,Password
      })
    });

    const data =await res.json();

      // Check if response status is 200 OK
   // Check if response status is 200 OK
   if (res.status === 200) {

    // Check if message is "Admin"
    if (data.message === "Admin") {
      Navigate('/adminDashboard');
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Successfully Login ");
      Navigate('/dashboard');
    }
  }else if(res.status === 400 || !res) {
      window.alert("Invalid Credentials");  
    }else if(res.status === 403 || !res) {
      window.alert("an email send to your account please verify");
    }else{
      dispatch({type:"USER", payload: true});
      
      // console.log(ress);
      window.alert("Successfully Login " );
    
      Navigate('/dashboard');
    }



  }


  const [Enter_Email, set_Enter_Email] = useState({
    Email: ""
  });

  let name,value;
  const handle_Enter_Email_Input = (e) => {
    name = e.target.name;
    value = e.target.value;

    set_Enter_Email({ ...Enter_Email, [name]: value });
  };

  const Post_Enter_Email_Data = async (e) => {
    e.preventDefault();
    const { Email} = Enter_Email;

    const res = await fetch("/Forgot_Pass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({        
        Email
      })
    });



    const data = await res.json();

    if (res.status === 400 ||  !res) {
      window.alert("Invalid Data");
      console.log("Invalid Data");
    } else {
      window.alert("Password Reset Mail has send to your account !");
      console.log("Password Reset Mail has send to your account !");
      // navigate("/login");

    }



  };

  const GoogleAuth = () => {
		window.open(
			`http://localhost:3000/auth/google/callback`,
			"_self"
		);


	};

//   const GoogleAuth = async() => {

//     try{
//               console.log("sigggggggggggggg+++++++++++++++++++++++");

//         const res= await fetch(`/google/callback`, { mode: 'no-cors' },{
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json"
//             },
//             credentials: "include"

//         });

//         // const data = await res.json();

//         // if(!res.status === 200 ){
//         //     const error = new Error(res.error);
//         //     throw error;
//         // }
//     }
//     catch(err){
//         console.log(err);
//         Navigate('/signup');

//     }
   

// }


  return (
    <div class="login_body">
      <div>
        <Container className="container border border-white border-2 rounded-end shadow-lg ">
          {/* ============ Row for Full Login Page =================== */}

          <Row className="justify-content-center align-items-center">
            {/* =================== Image Column =================== */}

            <Col md={6} xs={12} className="text-center">
              <Figure id="fig">
                <Figure.Image src={SVG_1} alt="photo" width={480} />
              </Figure>
            </Col>

            {/* ================= Login Detail Column =================== */}

            <Col md={6} xs={10} >
              {/* ============================= Login Name and Sign in with Google Button =================== */}

              <div class="Login_name_animation">Login...</div>
              <p className="Login_Description p-0 mt-1">Login to access all features. </p>
              <div className="sign_in_with_google d-grid gap-2 ">
              
              <button class="googlee_btn d-flex justify-content-center align-items-center" onClick={GoogleAuth}>
              <img src={google} class="pr-4 "></img>
              <span className="pt-0.5">Sign in with Google</span>
</button>

                <p className="text-center pt-1 font-medium">
                  <hr className="pb-1"></hr> Login with using
                </p>
              </div>

              {/* ======================= Login Input Detail =================== */}
              <form method="POST">
              <div class="Login_input_body">
                <div class="inputBox">
                  <input class="input" type="text" required="required" onChange={(e) => setEmail(e.target.value)}/>
                  <span className="span">Email</span>
                </div>

                <div class="inputBox">
                  <input
                    class="input"
                    type="password" 
                    required="required"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="span">Password</span>
                </div>
              </div>
              </form>

              {/* =============== RememberMe -- Forgot Password Text ======================== */}

              <div className="pt-2 d-flex align-items-center ">
                <input type="checkbox" className="h-3.2"/>{" "}
                <label class="remember_me ps-1 mt-1">Remember Me</label>{" "}
              </div>

              <p id="Forgot_Password" onClick={handleShow} >
                Forgot Password?
              </p>

              {/* ============ Login Button ================== */}

              <div className="d-grid gap-2 pt-2">
                <Button id="Login_btn" type="submit" onClick={loginUser}>
                  Login
                </Button> 
              </div>

              {/* ============= Create an Account =================== */}

              <p className="pt-2 m-0 pb-2">
                <span class="Not_Registered_Yet  ">
                  Not Registered yet?
                </span>

                <span id="Forgot_Password" onClick={() =>  Navigate('/signup')}>Create an Account</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
   

      <Modal size="lg" centered show={show} onHide={handleClose} className="Modall" >
        <div >
          <h2 className="Title mt-3">Forgot Password</h2>
          <hr className="mt-3"></hr>
        </div>
        <Modal.Body>
          <Form>

            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >         
             
              <Form.Control as="textarea" rows={10} className="input" placeholder="Email"
               name= "Email"
               type="text"
               required="required"
               value={Enter_Email.Email}
              //  value={queryData.QueryDetails}
              onChange={handle_Enter_Email_Input}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <div className="modal__button">
          <Button  className="btn" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn" 
           onClick={Post_Enter_Email_Data}
          >
            Save Changes
          </Button>
        </div>
      </Modal>

    </div>
  );
}

export default Login;
