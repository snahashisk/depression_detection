import React from "react";
import data from "../constants/sampleData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Charts = () => {
  return (
    <div>
      <BarChart width={550} height={150} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#337CA0" />
        <Bar dataKey="pv" fill="#9A348E" />
      </BarChart>
    </div>
  );
};

export default Charts;
