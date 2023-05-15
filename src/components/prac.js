import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./UserSlice";


const Prac = () => {
    const user = useSelector(selectUser);
  return (
    <div>
        <h1>sadas</h1>
 
        
        </div>
  )
}

export default Prac