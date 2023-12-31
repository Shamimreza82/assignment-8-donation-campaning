import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts"


const Statistics = () => {
  const [totalValue, settotalValue] = useState([]);
  const [avarage, setAvarage] = useState([]);

  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("Donation"));

    const total = 12;
    const myDination = donations?.length || 0;

    const avarage = (myDination / total) *100 ;
    const remaningAvarage = 100 - avarage; 
    settotalValue(remaningAvarage)
    setAvarage(avarage);
  }, []);

  return (
    <div>
     
     <div className=" flex justify-center items-center min-h-screen mt-7 lg:mt-0">
        <Chart
        type="pie"
        width={400}
        height={450}
        series={[avarage, totalValue]}
        options={{
            labels:['Total Donation', "Your Donation"],
            colors:['#FF444A', '#00C49F']
        }}
        >
          
        </Chart>
    </div> 




    </div>
  );
};

export default Statistics;

