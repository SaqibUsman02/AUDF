import React,{useState, useEffect} from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css'
import { v4 as uuid } from 'uuid';
import "../CSS/Dashboard_feed.css"
import { useCookies } from "react-cookie";
  
import Dashboard_feed from './Dashboard_feed'

const QuoraBox = () => {
    const navigate = useNavigate();
    const [QuoraBox_show, set_QuoraBox_show] = useState(false);
    const QuoraBox_handleClose = () => set_QuoraBox_show(false);
    const QuoraBox_handleShow = () => set_QuoraBox_show(true);

    const [QuoraBox_SearchModal, set_QuoraBox_SearchModal] = useState(false);
    const QuoraBox_searchModal_Close = () => set_QuoraBox_SearchModal(false);
    const QuoraBox_searchModal_Show = () => set_QuoraBox_SearchModal(true);

    const unique_id = uuid();
    const [cookies, setCookie] = useCookies();
    const Navigate = useNavigate();

  
    const [QuoraBox_queryData, set_QuoraBox_queryData] = useState({
      // UserID: JSON.parse(localStorage.getItem('Email')),
      // UserName: JSON.parse(localStorage.getItem('name')),
      UserID: cookies.Email,
      UserName: cookies.Name,
      PostID: uuid(),
      QueryCategory: "",
      QueryTitle: "",
      QueryDetails: "",
      QueryTags: "",
    });
  
    let QuoraBox_name,QuoraBox_value;
    const handleInput =(e) => {    
      QuoraBox_name = e.target.name;
      QuoraBox_value= e.target.value;
  
      set_QuoraBox_queryData({...QuoraBox_queryData, [QuoraBox_name]: QuoraBox_value});
  
    };
  
    const QuoraBox_postData = async (e) => {
      
      e.preventDefault();
     
  
  
      const { UserID,UserName, PostID, QueryCategory, QueryTitle, QueryDetails, QueryTags } = QuoraBox_queryData;
  
      const res = await fetch("https://audf-server.vercel.app/Question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          UserID,UserName,PostID,QueryCategory,QueryTitle,QueryDetails,QueryTags
        })
      });
  
      if(res.status === 400 || !res) {
        window.alert("Invalid Data.");
        console.log("Invalid Data");
      }
      else{
        window.alert("Successfully Posted");
        console.log("Successfully Posted");
        QuoraBox_handleClose();
        navigate("/dashboard");
  
      }
  
  
  
    };

    const [QuoraBox_userData, set_QuoraBox_userData] = useState("");

    const QuoraBox_GetImage = async (req, res) => {
      
      try {
       
  
        const res= await fetch(`https://audf-server.vercel.app/OwnProfile_Pic`,{
          method:"GET",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          },
          credentials: "include"
  
      });
  
        const data = await res.json();
        set_QuoraBox_userData(data);
  
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
        Navigate("/login");
      }
    };


    const [search, setsearch] = useState("");
    const [userData, setUserData] = useState('');
  
    
  
    const callAboutPage = async() => {
  
        try{
            const res= await fetch('https://audf-server.vercel.app/Question',{
                method:"GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
    
            });
    
            const data = await res.json();
            setUserData(data);
    
            if(!res.status === 200 ){
                const error = new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log(err);
  
        }
       
  
    }
  
    
    useEffect(() => {
      QuoraBox_GetImage();
      callAboutPage();

  },[]);

    
  return (
    <Container className="Containerr">


    <div className="Quora_full border border-white border-1 rounded-end shadow-lg mb-2">
            <div className="profile-div mb-1">
             
            <div className="headerrr circular--portrait d-flex flex-row mt-1 mb-1">
                <img src={QuoraBox_userData?.Photo} alt="logo"  className="user-imagee mb-1 mt-1 ms-1"/>
    
                <div className="searchh">
                <form>
                        <input 
                          type="text"
                          placeholder="Click here to Search?"
                          name="search"
                          className="ps-2 pe-2"
                          onClick={QuoraBox_searchModal_Show}
                          
                        />{" "}
                      </form>
                      </div>
                      <Button variant="outline-secondary" onClick={QuoraBox_handleShow} className='nav_btnnnn' >Add Query</Button>{' '}
                      
                      
                      
                      
                      <Modal size="lg" centered show={QuoraBox_SearchModal} onHide={QuoraBox_searchModal_Close} className="Modall " >
            <div >
              <h2 className="Title mt-3">Add Query</h2>
              <hr className="mt-3"></hr>
            </div>
            <Modal.Body>
            <input 
                          type="text"
                          placeholder="Click here to search."
                          name="search"
                          className="ps-2 pe-2"
                          onChange={(e)=> setsearch(e.target.value)}
                          
                        />{" "}

            {
  Array.isArray(userData) && 
  userData.filter(user => {
    const name = user.QueryTitle.toLowerCase();
    const fullName = user.QueryTitle.toLowerCase();
    return search.trim() === '' ? user : fullName.includes(search.toLowerCase());})
    .map(user => (
    <Dashboard_feed key={user._id} QueriesData={user} />

  ))
}
            </Modal.Body>
            <div className="modal__button">
              <Button  className="btn" onClick={QuoraBox_searchModal_Close}>
                Close
              </Button>
             
            </div>
          </Modal>
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      <Modal size="lg" centered show={QuoraBox_show} onHide={QuoraBox_handleClose} className="Modall " >
            <div >
              <h2 className="Title mt-3">Add Query</h2>
              <hr className="mt-3"></hr>
            </div>
            <Modal.Body>
              <Form>
    
              <div >
                <Form.Select size="sm" className="select" 
                name="QueryCategory"
                 value={QuoraBox_value}
                  onChange={handleInput}>
          <option>Select Category</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="dotnet">dotnet</option>
    
        </Form.Select>
        </div>
             
    
                <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
               <h3> Title </h3>
    
                  <Form.Control
                    type="text"
                    className="input"
                    placeholder="Start your Question with 'What', 'How', 'Why' etc."
                    name= "QueryTitle"
                    value={QuoraBox_queryData.QueryTitle}
                    onChange={handleInput}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  
                 <h3>Details of your Problem</h3>
                  <Form.Control as="textarea" rows={10} className="input" placeholder="Write the Description of your Question."
                   name= "QueryDetails"
                   value={QuoraBox_queryData.QueryDetails}
                   onChange={handleInput}
                  />
                </Form.Group>
    
    
    
        <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                               <h3>Tags </h3>
    
                  
                  <Form.Control as="textarea" rows={3} className="input" placeholder="Mentioned Tags"
                   name= "QueryTags"
                   value={QuoraBox_queryData.QueryTags}
                   onChange={handleInput}
                  />
                </Form.Group>
    
    
              </Form>
            </Modal.Body>
            <div className="modal__button">
              <Button  className="btn" onClick={QuoraBox_handleClose}>
                Close
              </Button>
              <Button className="btn"  onClick={QuoraBox_postData}>
                Save Changes
              </Button>
            </div>
          </Modal>
    </div>
             
              <div className="d-flex btn-opt">
    
              </div>
            </div>
           
            
          </div>
          </Container>
  )
}

export default QuoraBox