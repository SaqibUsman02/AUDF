      import React, { useState, useEffect } from "react";
      import AdminSidebar from "./AdminSidebar";
      import "../CSS/AdminUserslist.css";
      import avatar from "../images/usman.jpeg";
      import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
      import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

      const AdminUserslist = () => {
        let data;
        const [userList, setuserList] = useState([]);
        const [selectedUseremail, setselectedUseremail] = useState();
        const [search, setsearch] = useState("");
        const [isSuspended, setIsSuspended] = useState(false);

        const getUserslist = async () => {
          try {
            const response = await fetch("/usersList", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              credentials: "include",
            });

            data = await response.json();
            setuserList(data);

            console.log('da', data)
          } catch (error) {
            console.error("Error fetching users list:", error);
          }
        };


        const getuserID = async (user) => {

              user.isEnabled = !user.isEnabled;

                try {
                  const params = new URLSearchParams();
                  params.append("email", user.Email);
                  const response = await fetch(`/updateUser?${params.toString()}`, {
                    method: "PUT", 
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(user) ,
                  });


            
                  if (!response.ok) {
                    throw new Error("Failed to update user status");
                  }
            
            
                } catch (error) {
                  console.error("Error updating user status:", error);
                }
              };

                
           
        

        useEffect(() => {
          getUserslist();
        }, []);

        return (
          <div className="adminn-container">
            <div className="feed-side-bar-div">
              <AdminSidebar />
            </div>
            <div className="userslist-container">
              <h2 id="stats">Users List</h2>
              <div className="search-bar-admin-panel-user">
                <div class="mid-sec">
              
                  <input
                    class="search-bar"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setsearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="admin-panel-users-list-header">
                <div className="admin-panel-users-list-header-options">Name</div>
                <div className="admin-panel-users-list-header-options">Email</div>
                <div className="admin-panel-users-list-header-options">Category</div>
                <div className="admin-panel-users-list-header-options">Status</div>

              </div>


              {userList
        .filter((user) => {
          const emailCategory = user.Email.split("@")[0];

          if (search.trim() === "") {
            return true; // Display all users when search is empty
          }

          return (
            emailCategory === search.toLowerCase() ||
            user.Email.toLowerCase() === search.toLowerCase()
          );
        })
        .map((user) => (
          <div className="grid1" key={user.id}>
            <div className="grid-item">
        <img className="avatar" id="avatar" src={avatar} alt="" />

              <div className="display-userlist-option" id="name">
                {user.name}
              </div>
              <div className="display-userlist-option" id="name">
                {user.Email}
              </div>
              <div className="display-userlist-option" id="name-cat" 
              style={ {backgroundColor: user.Category =="Student" ? "#f7a072" : "#9a8c98"} }
              >
                {user.Category}

               

              </div>
              <button
                className="display-userlist-option"
                id="status"
                onClick={() => {
                  getuserID(user);
              
                }} 
                style={{ backgroundColor: user.isEnabled ==true ? "#1DA344" : "#E01F1D" }}

              >
                Active
              </button>
            </div>
          </div>
        ))}

            </div>
          </div>
        );
      };

      export default AdminUserslist;
