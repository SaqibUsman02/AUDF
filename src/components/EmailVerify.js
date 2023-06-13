import React ,{useState,useEffect,Fragment,useContext}from 'react'
import { useParams,Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { userContext } from "../App";

const EmailVerify = () => {
    const [validUrl, setValidUrl]= useState(false);
    const param = useParams();
    const {state,dispatch} = useContext(userContext);

    const Navigate = useNavigate();
    useEffect(() => { 
        const verifyEmailUrl = async () =>{
            try{ 
                const res= await fetch(`https://df-server.vercel.app/users/${param.id}/verify/${param.token}`,{
                    method:"GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
            
                });

                if(res.status === 200) {
                    setValidUrl(true);
                    window.alert("Successfully Posted");

                  }
                 
                  else{
                    setValidUrl(false);
                    window.alert("Invalid Data.");

                
                  }
                
            }
            catch(error){
                console.log(error);
                window.alert(error);
                setValidUrl(false);
            }   
        };

        verifyEmailUrl();

    },[param])
  return (
    <div>
        {validUrl ? (
<div>
    <Link to="/login">
        <button>Login</button>
    </Link>
</div>
            ) : (

                <h1>404 Not Found </h1>
            )
        }
    </div>
  )
}

export default EmailVerify;