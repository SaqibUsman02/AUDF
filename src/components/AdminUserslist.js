import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import "../CSS/AdminUserslist.css";
import avatar from "../images/usman.jpeg";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Adminuserslist = () => {
  let data;
  const [userList, setuserList] = useState([]);
  const [search, setsearch] = useState("");

  const getUserslist = async () => {
    try {
      const response = await fetch('/usersList', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      data = await response.json();
      setuserList(data); 
    } catch (error) {
      console.error("Error fetching users list:", error);
    }
  };



  useEffect(() => {
    getUserslist();
  },[]);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="userslist-container">
        <h2 id="stats">Users List</h2>
        <div className="search-bar-admin-panel-user">
          <div class="mid-sec">
        
            <input class="search-bar" type="text" placeholder="Search"  onChange={(e)=> setsearch(e.target.value)}/>
           
          </div>
        </div>
        <div className="admin-panel-users-list-header">
          <div className="admin-panel-users-list-header-options">Name</div>
          <div className="admin-panel-users-list-header-options">Email</div>
          <div className="admin-panel-users-list-header-options">Status</div>
        </div>

       {
          // console.log(search)
       }

   
{
  Array.isArray(userList) && 
  userList.filter(user => {
    // const name = user.name.toLowerCase();
    // const firstName = name.split(' ')[0];
    // const firstName = user.name.split(' ')[0].toLowerCase();
    const fullName = user.name.toLowerCase();
    return search.trim() === '' ? user : fullName.includes(search.toLowerCase());
    //  return search.trim() === '' ? user : (firstName === search.toLowerCase() || fullName === search.toLowerCase());
  }).map(user => (
    <div className="grid1">
      <div className="grid-item">
        <div className="display-userlist-option" id="name">
          {user.name}
        </div>
        <div className="display-userlist-option" id="email">
          {user.Email}
        </div>
        <div className="display-userlist-option active" id="status">
          Active
        </div>
      </div>
    </div>
  ))
}
{
  
  // Array.isArray(userList) && 
  userList.map(user => (
    <div className="grid1" key={user._id}>
      <div className="grid-item">
        <div className="display-userlist-option" id="name">
          {user.name}
        </div>
        <div className="display-userlist-option" id="email">
          {user.Email}
        </div>
        <div className="display-userlist-option active" id="status">
          Active
        </div>
      </div>
    </div>
  ))
}




      </div>
    </div>
  );
};

export default Adminuserslist;