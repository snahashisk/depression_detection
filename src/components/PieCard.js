import React from "react";
import PieCharts from "./Piecharts";

const PieCard = () => {
  return (
    <div>
      <h2 className="font-medium text-gray-600">% of Income Budget</h2>
      <PieCharts />
      <div className="flex items-center justify-center text-md font-medium text-blue-600">
        <button className="">View Full Report</button>
      </div>
    </div>
  );
};

export default PieCard;
