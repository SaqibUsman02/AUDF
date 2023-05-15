import React from "react";

import "../CSS/OwnProfile.css"

import Dashboard_feed from "./Dashboard_feed";


const OwnProfile = ({QueriesData}) => {
  return (
    <div>
        {/* <div class="container"> */}
    <div class="main-body">
    
          
          <div class="row gutters-sm">
            
            <div class="col-md-12" >
            <Dashboard_feed key={QueriesData._id} QueriesData={QueriesData} />
              



            </div>
          </div>

        </div>
    </div>

    // </div>   

  );
};

export default OwnProfile;