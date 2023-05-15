import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Signup.css";
import pic from "../images/svg5.svg";
import { Row, Col, Container, Button, Figure } from "react-bootstrap";
import google from "../images/google.png"; 

function Signup() {
  const navigate = useNavigate();

 

  const [user, setUser] = useState({
    name: "",
    Email: "",
    Password: "",
    Confirm_Password: "",
 
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();


    const { name, Email, Password, Confirm_Password } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        Email,
        Password,
        Confirm_Password
      })
    });



    const data = await res.json();

    if (res.status === 400 ||  !res) {
      window.alert("Invalid Data");
      console.log("Invalid Registration");
    } else {
      window.alert("An email send to your account please verify.");
      console.log("Successfully Register");
      navigate("/login");

    }



  };

  // const googleAuth = () => {
	// 	window.open(
	// 		`/google/callback`,
	// 		"_self"
	// 	);
	// };

  const googleAuth = async() => {

    try{
        const res= await fetch(`http://localhost:3000/auth/google/callback`, { mode: 'no-cors' },{
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"

        });

        const data = await res.json();
        console.log("sigggggggggggggg+++++++++++++++++++++++" + data);

        if(!res.status === 200 ){
            const error = new Error(res.error);
            throw error;
        }
    }
    catch(err){
        console.log(err);
        navigate('/login');

    }
   

}

  return (
    <div className="signup_body d-flex align-items-center justify-content-center ">
      <div>
        <Container className="container border border-white border-2 rounded-end  shadow-lg ">
          {/* ============= Row for full Signup Page =================== */}
          <Row className="ss justify-content-center align-items-center">
            {/* ==================== Signup Detail Column ================== */}
            <Col md={6} xs={10}>
              <div className="Signup_name_animation">Signup</div>
              <p className="mt-1 p-0">Create an account to enter in an app. </p>

              {/* ================ Signup Input Text =================== */}
              <form method="POST">
                <div class="Signup_input_body mt-2">
                  <div class="inputBox">
                    <input
                      class="input"
                      type="text"
                      required="required"
                      value={user.name}
                      onChange={handleInput}
                      name="name"
                    />
                    <span class="span">Username</span>
                  </div>

                  <div class="inputBox">
                    <input
                      class="input"
                      type="text"
                      required="required"
                      value={user.Email}
                      onChange={handleInput}
                      name="Email"
                    />
                    <span class="span">Email</span>
                  </div>

                  <div class="inputBox">
                    <input
                      class="input"
                      type="password"
                      required="required"
                      value={user.Password}
                      onChange={handleInput}
                      name="Password"
                    />
                    <span class="span">Password</span>
                  </div>

                  <div class="inputBox">
                    <input
                      class="input"
                      type="password"
                      required="required"
                      value={user.Confirm_Password}
                      onChange={handleInput}
                      name="Confirm_Password"
                    />
                    <span class="span">Confirm Password</span>
                  </div>
                </div>
              </form>

              {/* ============ Signup Button ================== */}

              <div className="d-grid gap-2 pt-3">
                <Button
                  id="Signup_btn"
                  variant="light"
                  type="submit"
                  onClick={ PostData
                }
                >
                  Signup
                </Button>
              </div>

              <p className="already_have_an_account text-end mt-2" onClick={() =>  navigate('/login')}>
                Already have an account?
              </p>

              {/* ===================== JOIN WITH google ================ */}

              <div className="d-grid gap-2 mb-2">
                <p className=" text-center font-medium  ">
                <hr className="pb-1 mt-2"></hr> or you can join with
                </p>

                <button class="googlee_btn d-flex justify-content-center align-items-center mt-2" onClick={googleAuth}>
              <img src={google} class="pr-2 pt-0.5"></img>
              <span className="pt-1 ">Sign up with Google</span>
</button>
              </div>
            </Col>

            {/* =================== Image Column ======================= */}
            <Col md={6} xs={12} className="text-center">
              <Figure id="fig">
                <Figure.Image src={pic} alt="photo" width={480} />
              </Figure>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Signup;
