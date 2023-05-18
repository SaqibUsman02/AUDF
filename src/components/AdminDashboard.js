import React from "react";
import "../CSS/AdminDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

// import { CRow } from "react-bootstrap";
import Chart from "./Chart";
import UsersChart from "./UsersChart";
import AdminSidebar from "./AdminSidebar";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const AdminDashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [countStudents, setcountStudents] = useState(0);
  const [countTeachers, setcountTeachers] = useState(0);
  const [userFeedback, setuserFeedback] = useState();
  const [userReview, setuserReview] = useState([]);


  const [feedbackReview, setfeedbackReview] = useState();

  const [queryCount, setQueryCount] = useState(0);
  const [pieData, setPieData] = useState([]);
  const [pieDataCategory, setpieDataCategory] = useState([]);
  const [pieReportdata, setpieReportdata] = useState([]);
  const [pieFeedback, setpieFeedback] = useState([]);

  const [monthYearArray, setmonthYearArray] = useState([]);
  // const [newState, setNewState] = useState([]);
  const [newStatecategory, setnewStatecategory] = useState([]);

  const getUserscount = async () => {
    try {
      const response = await fetch("/usersCount ");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setUserCount(data.data.length);

      const allUsers = data.data;

      var countStd = 0;
      var countTea = 0;

      allUsers.forEach((user) =>
        user.Category === "Student" ? countStd++ : countTea++
      );

      setcountStudents(countStd);
      setcountTeachers(countTea);
    } catch (error) {
      console.error("Error fetching users count:", error);
    }
  };

  //////////////////////////////////////////////// find query & user count  ////////////////////////////////

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

  const getQueryCategory = async () => {
    try {
      const response = await fetch("/showquery");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const dataArray = Object.values(data.data);

      let counttCpp = 0;
      let counttJava = 0;
      let counttPython = 0;
      let counttdotnet = 0;

      dataArray.forEach((docs) => {
        if (docs.QueryCategory === "C++") {
          counttCpp += 1;
        }
        if (docs.QueryCategory === "Java") {
          counttJava += 1;
        }
        if (docs.QueryCategory === "Python") {
          counttPython += 1;
        }
        if (docs.QueryCategory === "dotnet") {
          counttdotnet += 1;
        }
      });

      let array2 = [
        { name: "C++", value: counttCpp },
        { name: "Java", value: counttJava },
        { name: "Python", value: counttPython },
        { name: "Dotnet", value: counttdotnet },
      ];

      setpieDataCategory(array2);
      // console.log(`Found ${countt} documents with category "C++"`);
    } catch (error) {
      console.error("Error fetching query count:", error);
    }
  };

  //////////////////////////////////////////////// find report category ////////////////////////////////

  const getReportCategory = async () => {
    try {
      const response = await fetch("/findreport");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const dataArrayR = Object.values(data.data);

      // console.log("new====---------", dataArrayR)

      const categoryCounts = {
        offensive: 0,
        Inappropriate: 0,
        Abusive: 0,
        Bullying: 0,
        Irrelevant: 0,
        Other: 0,
      };

      dataArrayR.forEach((docs) => {
        if (docs.Category in categoryCounts) {
          categoryCounts[docs.Category] += 1;
        }
      });

      let array3 = [
        { name: "Offensive", value: categoryCounts.offensive },
        { name: "Inappropriate", value: categoryCounts.Inappropriate },
        { name: "Abusive", value: categoryCounts.Abusive },
        { name: "Bullying", value: categoryCounts.Bullying },
        { name: "Irrelevant", value: categoryCounts.Irrelevant },
        { name: "Other", value: categoryCounts.O },
      ];

      setpieReportdata(array3);
    } catch (error) {
      console.error("Error fetching query count:", error);
    }
  };

  //////////////////////////////////////////////// find users with date ////////////////////////////////

  const getUserswithdate = async () => {
    try {
      const response = await fetch("/finduserwithdate");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const monthYearArray = data.map((dateObject) => {
        const date = new Date(dateObject.Date);
        const month = date.toLocaleString("default", { month: "long" });
        return `${month} `;
      });

      const formattedData = monthYearArray.map((month, index) => {
        return { index, month };
      });

      const getCategory = data.map((doc) => {
        return doc.Category;
      });

      const mergedData = formattedData.map((obj, index) => {
        return {
          index: obj.index,
          month: obj.month,
          category: getCategory[index],
        };
      });

      setmonthYearArray(mergedData);
    } catch (error) {
      console.error("Error fetching query count:", error);
    }
  };

  const displayFeedback = async () => {
    try {
      const res = await fetch("/findfeedback", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setuserFeedback(data.data);

      let good = 0;
      let bad = 0;

      // userFeedback.forEach((user)=> user.Review ==='Good'? good++ : bad++ )

      const feedCategory = {
        app: 0,
        course: 0,
        faculty: 0,
        suggestion: 0,
      };

      userFeedback.forEach((feedback) => {
        if (feedback.Category in feedCategory) {
          feedCategory[feedback.Category] += 1;
        }
      });

      let arrayFeedback = [
        { name: "App", value: feedCategory.app },
        { name: "Course", value: feedCategory.course },
        { name: "Facullty", value: feedCategory.faculty },
        { name: "Suggestion", value: feedCategory.suggestion },
      ];
      setpieFeedback(arrayFeedback);

      userFeedback.forEach((user) => (user.Review === "Good" ? good++ : bad++));

      const newArray = [
        { name: "Good", value: good },
        { name: "Bad", value: bad },
      ];

        setuserReview(newArray);

        

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // Navigate('/login');
    }
  };

  useEffect(() => {
    getUserswithdate();
    displayFeedback();
    getUserscount();
    getQuerycount();
    getQueryCategory();
    getReportCategory();
  }, []);

  return (
    <>
      <div className="admin-container">
        <AdminSidebar />

        {/**************************************** Dashboard  */}

        <div className="dashbooard-container">
          {/* <NavBar/> */}
          <div className="upfirst">
            <h2 id="statss">Statistics</h2>
            <div className="upper-portion">
              <div className="upper1">
                <div className="admin-upper-card">
                  <FontAwesomeIcon className="icon" icon={faUser} />

                  <div className="card-inside-content">{userCount}</div>
                  <div className="card-inside-head">Total Users</div>
                </div>

                <div className="admin-upper-card">
                  <FontAwesomeIcon className="icon" icon={faUser} />

                  <div className="card-inside-content">{countStudents}</div>
                  <div className="card-inside-head">Total Students</div>
                </div>

                <div className="admin-upper-card">
                  <FontAwesomeIcon className="icon" icon={faUser} />

                  <div className="card-inside-content">{countTeachers}</div>
                  <div className="card-inside-head">Total Teachers</div>
                </div>
                <div className="admin-upper-card">
                  <FontAwesomeIcon className="icon" icon={faCircleQuestion} />

                  <div className="card-inside-content">{queryCount}</div>
                  <div className="card-inside-head">Total Queries</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lower1">
            <h3 className="graph-head"> Users Graph</h3>

            <UsersChart data={monthYearArray} />

            <div className="piecharts">
              <div className="graph1">
                <h3 className="graph-head">All Queries</h3>
                {/* <div className="review">Review</div> */}

                <Chart data={pieDataCategory} />
              </div>
              <div className="graph1">
                <h3 className="graph-head"> All Reports</h3>
                {/* <div className="review">Review</div> */}

                <Chart data={pieReportdata} />
              </div>
              <div className="graph1" id="feedback-graph">
                <div className="div1">

                <h3 className="graph-head"> All Feedback</h3>
              


                <Chart data={pieFeedback} />
                </div>
                <div className="review-div">
                <div className="review">Positive: {userReview[0].value}</div>
                <div className="review">Negetive: {userReview[1].value}</div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
