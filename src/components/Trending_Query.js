import '../CSS/Trending_Query.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Button } from "react-bootstrap";
import Dashboard_feed from './Dashboard_feed';




function Trending_Query() {

  const [Trending, setTrending] = useState('');
  const Navigate = useNavigate()



  const TrendingQuery = async() => {

    try{
        const res= await fetch('https://df-server.vercel.app/trendingQuery',{
            method:"GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
            
        });

        const data = await res.json();
        setTrending(data);

        if(!res.status === 200 ){
            const error = new Error(res.error);
            throw error;
        }
    }
    catch(err){
        console.log(err);

    }
   

}

useEffect(() => {
  TrendingQuery();
},[]);

const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);

    // navigate("/dashboard");
  }

const [TrendingData, setTrendingData] = useState('');
const PostData = async (UserID) => {
  // e.preventDefault();
  // Navigate(`/profile/${UserID}?query=${PostID}`);
  setTrendingData(UserID);
  setShow(true);


}




  return (
    <Container className='con '>
        <div className='trending-sec'>
        <div className='mb-2'>
        <div className='d-inline-block ps-4 pt-2'><FontAwesomeIcon className='me-2' icon = {faBoltLightning} /></div>
        <div className='d-inline-block'> <p className='heading mb-1'>Top Trending Queries</p></div>
        </div>
        <div className='queries'>

        {Trending && Trending.map((QueriesData) => (
          <p onClick={() => PostData(QueriesData)}>{QueriesData?.QueryTitle}</p>

      ))}     
              </div>

       
        </div>


        <Modal size="lg " centered show={show} onHide={handleClose} className="Modall "  
        >
             


            <Modal.Body>
            {/* {TrendingData && TrendingData.map((QueriesData) => ( */}
            <Dashboard_feed key={TrendingData._id} QueriesData={TrendingData} />
             {/* ))}            */}

            </Modal.Body>



            
           <div className="modal__button">
          <Button  className="btn" onClick={handleClose}>
            Close
          </Button>
         
        </div>
        </Modal>

    </Container>
  );
}

export default Trending_Query;
