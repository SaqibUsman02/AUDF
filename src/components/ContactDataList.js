import {React, useEffect, useState } from "react";

const ContactDataList = () => {

    const [ContactData, SetContactData] = useState([]);
  const getAllContact = async (req, res) => {
   
    try {
     
      const res= await fetch('/contact',{
        method:"GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"

    });

      const data = await res.json();
      SetContactData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // Navigate("/login");
    }
  };

  useEffect(() => {
    getAllContact();

  }, []);

  return (
    <div>

{ContactData.map(contact => (
            <div className="full" key={contact?._id}>
            
                <p> {contact?.name} </p>
                <p> {contact?.Email} </p>
                <p> {contact?.Subject} </p>
                <p> {contact?.Message} </p>
                <p> {contact?.Date} </p>
            </div>
          ))}
    </div>
  )
}

export default ContactDataList