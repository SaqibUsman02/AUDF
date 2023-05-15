import React from "react";
import "../CSS/AdminDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

// import { CRow } from "react-bootstrap";
import Chart from "./Chart";
import AdminSidebar from "./AdminSidebar";
import { useState, useEffect } from "react";
// import ReportData from "../../../server/models/reportSchema";
// import ReportData from "../../../server/models/reportSchema";.;

// const [count, setCount] = useState(0);

// data for charts
const users = [
  ["Users", "Students/Teachers"],
  ["Students", 11],
  ["Teachers", 7],
];

const departments = [
  ["Departments", "Students"],
  ["CS", 11],
  ["AI", 20],
  ["Gaming", 25],
  ["Cyber Security", 40],
  ["Others", 50],
];

const feedback = [
  ["Category", ""],
  ["Faculty ", 15],
  ["Event ", 10],
  ["Course ", 8],
  ["App ", 5],
  ["Others", 7],
];

// chart options
const user_options = {
  title: "Student-Teacher Diagram",
};

const department_options = {
  title: "Department Wise Users Diagram",
};

const feedback_options = {
  title: "Category Wise  Diagram",
};

const AdminDashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [queryCount, setQueryCount] = useState(0);
  const [pieData, setPieData] = useState([]);
  const [pieDataCategory, setpieDataCategory] = useState([]);

  const getUserscount = async () => {
    try {
      const response = await fetch("/usersCount");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setUserCount(data.data.length);
    } catch (error) {
      console.error("Error fetching users count:", error);
    }
  };

  //////////////////////////////////////////////// find query count  ////////////////////////////////

  const getQuerycount = async () => {
    try {
      const response = await fetch("/queryCount");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setQueryCount(data.data.length);
      let array = [
        { name: "user", value: userCount },
        { name: "Query", value: data.data.length },
      ];
      setPieData(array);
      // setPieData(pieData.push({query:data.data.length}))
    } catch (error) {
      console.error("Error fetching query count:", error);
    }
  };

  //////////////////////////////////////////////// find query category ////////////////////////////////

  const getCategory = async () => {
    try {
      const response = await fetch("/queryCategory");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      let countt = 0;

      // const dataArray = Object.values(data);
      // dataArray.forEach((document) => {

      //   if (document.Category === "C++") {
      //     console.log("documet--------", document.Category)
      //     countt++;
      //     console.log("countt-----", countt)
      //   }
      //   else
      //   {
      //     countt=10;
      //   }
      // });

      const dataArray = Object.values(data);
      const filteredDataArray = dataArray.filter(
        (document) => document.Category === "C++"
        
      );
       countt = filteredDataArray.length;
      console.log("filteredDataArray:", filteredDataArray);

      
      let array2 = [
        { name: "C++", value: 10 },
        { name: "Java", value: 24 },
        { name: "Python", value: 34 },
      ];
      setpieDataCategory(array2);
      console.log(`Found ${countt} documents with category "C++"`);
    } catch (error) {
      console.error("Error fetching query count:", error);
    }
  };

  useEffect(() => {
    getUserscount();
    getQuerycount();
    getCategory();
  }, []);

  return (
    <>
      <div className="admin-container">
        <AdminSidebar />

        {/**************************************** Dashboard  */}

        <div className="dashbooard-container">
          <div className="upfirst">
            <h2 id="stats">Statistics</h2>
            <div className="upper-portion">
              <div className="upper1">
                <div className="admin-upper-card">
                  <FontAwesomeIcon className="icon" icon={faUser} />

                  <div className="card-inside-content">{userCount}</div>
                  <div className="card-inside-head">Total Users</div>
                </div>
                <div className="admin-upper-card">
                  <FontAwesomeIcon className="icon" icon={faCircleQuestion} />

                  <div className="card-inside-content">{queryCount}</div>
                  <div className="card-inside-head">Total Queries</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lower-portion">
            <div className="lower1">
              <div className="graph1">
                <h3 className="graph-head"> Users-Query</h3>
                <Chart data={pieData} />
              </div>

              <div className="graph2">
                <h3 className="graph-head">Category wise Feedback</h3>
                <Chart data={pieDataCategory} />
              </div>
            </div>

            {/* <div className="lower2">
              <div className="graph3">
                <h3 className="graph-head" id="graph-3-head">
                  Student Graph
                </h3>
                <Chart />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
