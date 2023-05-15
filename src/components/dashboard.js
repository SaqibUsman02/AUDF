import React ,{useState,useContext} from "react";
import Feedback from './Feedback'
import { userContext } from "../App";

import "../CSS/dashboard.css"
import Dashboard_feed from './Dashboard_feed'
import Dashboard_Header from './Dashboard_Header'
import Sidebar from "./dashboard_sidebar"
import Edit_Profile from './Edit_Profile'
import Report from "./Report"

import OwnProfile from './OwnProfile'
import Profile from './Profile'

import Trending_Query from './Trending_Query'
import Contact from './Contact'
import About from './about'
import QueryFeed from './QueryFeed'



const Dashboard = () => {
  const {state,dispatch} = useContext(userContext);
  dispatch({type:"USER", payload: true});

  return (
    <div className="quora">
      {/* <Dashboard_Header/> */}
      <div className="quora__contents">
        <div className="quora__content">

          <Sidebar /> 
          {/* <Feedback /> */}

          {/* <Report/> */}
          {/* <Edit_Profile/> */}
          {/* <OwnProfile/> */}

          {/* <Profile/> */}

          {/* <Contact/> */}

          {/* <About /> */}

          <QueryFeed/>
          <Trending_Query/>
        </div>
      </div>
    </div>
    
    )
}

export default Dashboard;