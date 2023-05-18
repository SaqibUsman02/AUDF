import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Dashboard_feed from './Dashboard_feed';
import QuoraBox from './QuoraBox';
import { useCookies } from "react-cookie";
  


const QueryPrac = () => {

    const [cookies, setCookie] = useCookies();

   const Navigate = useNavigate();
    const [userData, setUserData] = useState([]);


    const callAboutPage = async() => {

        try{
            const res= await fetch('https://audf-server.vercel.app/Question',{
                method:"GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
    
            });
    
            const data = await res;
            setUserData(data);
    
            if(!res.status === 200 ){
                const error = new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log(err);
            Navigate('/login');

        }
       

    }

   

    useEffect(() => {
        callAboutPage();

    },[]);


  return (
    <div className='col-md-12 col-lg-6  col-xl-7'>  
    {/* {userData.QueryCategory}
    <p>{userData.UserID}</p>
     <p>{userData.PostID}</p>
     <p>{userData.QueryCategory}</p>
     <p>{userData.QueryTitle}</p>
     <p>{userData.QueryDetails}</p>
     <p>{userData.QueryTags}</p> */}

<QuoraBox />
{userData && userData.map((QueriesData) => (
        <Dashboard_feed key={QueriesData._id} QueriesData={QueriesData} />
      ))}
     


     
    </div>
  )
}

export default QueryPrac