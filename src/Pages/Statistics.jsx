import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const [totalValue, settotalValue] = useState();
  const [avarage, setAvarage] = useState();

  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("Donation"));
    const valueSun = donations.reduce(
      (preValue, currentValue) => preValue + currentValue.Price,
      0
    );
    settotalValue(valueSun);
    const totalValue = 12;
    const avarage = valueSun / totalValue;
    setAvarage(avarage);
  }, []);

  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={totalValue}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie
            dataKey="value"
            data={totalValue}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
