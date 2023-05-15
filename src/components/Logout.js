import React , {useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from "../App";


const Logout = () => {
    const {state,dispatch} = useContext(userContext);

    const Navigate = useNavigate();
    useEffect(() => {
        fetch('/logout',{
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
           

            if(res.status === 200 ){
                dispatch({type:"USER", payload: false});
                console.log("00000000000000000000");
                window.location.reload(true);
                Navigate('/login');
            }   
            else{
                const error = new Error(res.error);
                throw error;
            }

        }).catch((err) => {
            console.log(err);
        
    
        })

    })
  return (
    <></>
  )
}

export default Logout