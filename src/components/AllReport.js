import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AdminReport from './AdminReport';
import Dashboard_feed from './Dashboard_feed';
import QuoraBox from './QuoraBox';

const AllReport = () => {
    const Navigate = useNavigate();
    const [userData, setUserData] = useState('');

  
    const callAboutPage = async() => {
  
        try{
            const res= await fetch('https://audf-server.vercel.app/FetchReport',{
                method:"GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
    
            });
    
            const data = await res.json();
            console.log(data);
            alert(data);
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
    <div className='col-md-12 col-lg-12  col-xl-12'>  
    <h1>d-------------</h1>
    {/* {userData?.QueryCategory}
    <p>{userData.UserID}</p> */}
     <p>{userData?.PostID}</p>
     <p>{userData.PostID}</p>
     <p>{userData?.Report}</p>
     <p>{userData.Report}</p>
     <h1>{userData}</h1>

     {/* <p>{userData.QueryCategory}</p>
     <p>{userData.QueryTitle}</p>
     <p>{userData.QueryDetails}</p>
     <p>{userData.QueryTags}</p> */}

{/* {userData && userData.map((QueriesData) => (
        <AdminReport key={QueriesData._id} QueriesData={QueriesData} />
      ))} */}



     
    </div>
  )
}

export default AllReport