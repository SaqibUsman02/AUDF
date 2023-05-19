import React, { useEffect ,useState } from "react";
import { Container, Row, Col,Button, Form } from "react-bootstrap";
import { useNavigate,useParams} from "react-router-dom";
import "..//CSS/Forgot_Pass.css";




const Forgot_pass = (props) => {
    let {id} = useParams();    

    const navigate = useNavigate();

    const [Change_pass, Set_Change_pass] = useState({
        Email: id,
        New_Password: "",
       Confirm_Password: ""
      });

      let name,value;
      const handle_change_Pass_Input = (e) => {
        name = e.target.name;
        value = e.target.value;
    
        Set_Change_pass({ ...Change_pass, [name]: value });
      };
    
      const Post_change_Pass_Data = async (e) => {
        e.preventDefault();
        const { Email,New_Password,Confirm_Password } = Change_pass;
    
        const res = await fetch("https://df-server.vercel.app/forgot_pass_save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({        
            Email,
            New_Password,
            Confirm_Password
          })
        });

        const data = await res.json();

        if (res.status === 400 ||  !res) {
          window.alert("Invalid Data");
          console.log("Invalid Data");
        } else {
          window.alert("Successfully Updated");
          console.log("Successfully Updated");
          navigate("/login");
    
        }
    
    
    
      };

        
  return (
    <div className="forgot_pas">
    

    <Form>

<Form.Group
      className="mb-3"
      controlId="exampleForm.ControlTextarea1"
    >      
      <Form.Control as="textarea" rows={3} className="input" placeholder="New Password"
       name="New_Password"
       type="password"
       required="required"
       value={Change_pass.New_Password}
       onChange={handle_change_Pass_Input}
      />
    </Form.Group>

    <Form.Group
      className="mb-3"
      controlId="exampleForm.ControlTextarea1"
    >
      
      <Form.Control as="textarea" rows={3} className="input" placeholder="Confirm Password"
       name="Confirm_Password"
       type="password"
       required="required"
       value={Change_pass.Confirm_Password}
      onChange={handle_change_Pass_Input}
      />
    </Form.Group>

    <Form.Group>
        <Button onClick={Post_change_Pass_Data}>
            Submit
        </Button>
    </Form.Group>


  </Form>
  </div>
  )
}

export default Forgot_pass;