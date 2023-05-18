import React from "react";
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const UsersChart = ({ data }) => {

  const countbyMonth ={};
  
  const teach = [];
  data.forEach((doc)=>{
    const {index, month, category}= doc;
    

  if (category==="Teacher"){
    if (countbyMonth[month]){
      countbyMonth[month].teachers+=1;
    } else(

      countbyMonth[month]= {month, teachers:1, students:0}
    )
     teach.push(doc)

  }

 else if (category==="Student"){
    if (countbyMonth[month]){
      countbyMonth[month].students+=1;
    } else{
      countbyMonth[month]={month, teachers:0, students:1}
    }
  }

})
const combinedData = Object.values(countbyMonth).map(({ month, teachers, students }) => ({
  month,
  Teachers: teachers,
  Students: students
}));


  return (
    <ComposedChart width={800} height={400} data={combinedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Teachers" fill="#f7a072" name="Teachers" />
      <Bar dataKey="Students" fill="#577590" name="Students" />
    </ComposedChart>
  );
};

export default UsersChart;
