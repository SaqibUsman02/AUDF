import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import "../CSS/AdminUserslist.css";
import avatar from "../images/usman.jpeg";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminUserslist = () => {
  let data;
  const [userList, setuserList] = useState([]);
  const [search, setsearch] = useState('');

  const getUserslist = async () => {
    try {
      const response = await fetch('https://audf-server.vercel.app/usersList', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      data = await response.json();
      setuserList(data);
      console.log("//////////////"+data);

      console.log(response);
    } catch (error) {
      console.error("Error fetching users list:", error);
    }
  };



  useEffect(() => {
    getUserslist();
  }, []);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="userslist-container">
        <h2 id="stats">Users List</h2>
        <div className="search-bar-admin-panel-user">
          <div class="mid-sec">
            {/* <Form>

            <Form.control input class="search-bar" type="text" placeholder="Search"  onchange={(e)=> setsearch(e.target.value)} />
            </Form> */}
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

    
       
        userList.filter((user) => { 
      //     const newArray= user.name.split(' ');

      //     const nameArray = user.name.split(' ');
      // const firstName = nameArray[0] ? nameArray[0].toLowerCase() : '';
      // const secName = nameArray[1] ? nameArray[1].toLowerCase() : '';
      // const lastName = nameArray[2] ? nameArray[2].toLowerCase() : '';
      // return search.trim() === '' ? user : (firstName === search.toLowerCase() && secName === search.toLowerCase() && lastName === search.toLowerCase());

          // const firstName = newArray[0].toLowerCase();
          // const secName = newArray.length > 1 ? newArray[1].toLowerCase() : '';

          // const lastName = newArray.length > 2 ? newArray[2].toLowerCase() : '';

          // return search.trim() === '' ? user : (firstName === search.toLowerCase() && secName === search.toLowerCase() && lastName === search.toLowerCase()) ;
         
         
          const firstName = user.name.split(' ')[0].toLowerCase();
          const fullName = user.name.toLowerCase();
          
          return search.trim() === '' ? user : (firstName === search.toLowerCase() || fullName === search.toLowerCase());
        }).map((user)  => (
           
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

      </div>
    </div>
  );
};

export default AdminUserslist;
