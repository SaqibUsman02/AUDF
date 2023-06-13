import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes } from "react-router-dom";




import AdminDashboard from "./components/AdminDashboard";
import AdminReport from "./components/AdminReport";
import AdminUserslist from "./components/AdminUserslist";
import AdminPanel from "./components/AdminPanel";
import UsersChart from "./components/UsersChart";
import AdminFeedback from "./components/AdminFeedback";
import Adminuseless from "./components/Adminuseless";
import Adminpostmodal from "./components/Adminpostmodal";
import AdminContact from "./components/AdminContact";

import Homepage from "./components/Homepage_prac";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Practice from "./components/Homepage";
import About from "./components/about";
import Contact from "./components/Contact"
import Logout from "./components/Logout"
import Feed from "./components/Feed";
import Comment from "./components/Comment";
import Dashboard from "./components/dashboard";
import Feedback from "./components/Feedback";
import Profile from "./components/Profile";
// import OwnProfile from "./components/OwnProfile";

import Report from "./components/Report";




import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";
import NavBar from "./components/NavBar"
import EmailVerify from "./components/EmailVerify";
import ForgotPass from "./components/Forgot_pass";
import Error from "./components/Error";
import Dashboard_Header from "./components/Dashboard_Header";
import ImagePrac from "./components/ImagePrac";
import QueryPrac from "./components/QueryFeed";
import Prac from "./components/prac";
import OwnProfile from "./components/OwnProfileData";
import Edit_Profile from "./components/Edit_Profile";
import AllReport from "./components/AllReport";
import Trending_Query from "./components/Trending_Query";
import AI_Prac from "./components/AI_Prac";
import ContactData from "./components/ContactDataList";



// context API
export const userContext = createContext();
const Routing = () => {
  return(
      <Routes>

<Route path="/" element={<Practice />} />
<Route path="/login" element={<Login />} />
<Route path="/comment" element={<Comment />} />
<Route path="/signup" element={<Signup/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/logout" element={<Logout/>} />
<Route path="/feed" element={<Feed/>} />
<Route path="/feedback" element={<Feedback/>} />
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/profile/:UserID" element={<Profile/>} />
{/* <Route path="/Ownprofile" element={<OwnProfile/>} /> */}
<Route path="/ai" element={<AI_Prac/>} />
<Route path="/contactData" element={<ContactData/>} />



<Route path="/users/:id/verify/:token" element={<EmailVerify/>} />
<Route path="/users/:id/forgot_pass/:token" element={ <ForgotPass />} />
<Route path="/f" element={ <ForgotPass />} />

<Route path="*" element={<Error/>} />
<Route path="/report" element={<Report/>} />
<Route path="/image" element={<ImagePrac/>}/>
<Route path="/q" element={<QueryPrac/>}/>
<Route path="/prac" element={<Prac/>}/>
<Route path="/AReport" element={<AllReport />}/>
<Route path="/OwnProfile" element={<OwnProfile/>} />
<Route path="/EditProfile" element={<Edit_Profile/>} />
<Route path="/TrendingQuery" element={<Trending_Query/>} />



<Route path="/adminDashboard" element={<AdminDashboard />} />

<Route path="/adminreport" element={<AdminReport />} />

<Route path="/adminfeedback" element={<AdminFeedback />} />

<Route path="/userslist" element={<AdminUserslist />} />
<Route path="/useless" element={<Adminuseless />} />
<Route path="/admincontact" element={<AdminContact />} />









</Routes>
  )
  
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <userContext.Provider value={{state,dispatch}}>
      <NavBar />
      {/* <Dashboard_Header className="sa"/> */}
      {/* <AdminDashboard/> */}
 {/* <Chart/> */}
        {/* <Trydata /> */}
        {/* <AdminSidebar/> */}
        {/* <AdminPanel/> */}
        {/* <AdminReport/> */}
        {/* <AdminUserslist/> */}
      <Routing/>
    </userContext.Provider>
    </>
  );
}

export default App;
