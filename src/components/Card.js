import React from "react";

const Card = ({ heading, amount, saving, background }) => {
  return (
    <div
      className={`row-span-1 col-span-1 ${background} rounded-md my-auto py-6 px-8 text-white h-full flex`}
    >
      <div className="w-1/3 p-2">
        <h3 className=" text-xl font-medium">{heading}</h3>
        <h1 className="text-7xl font-semibold text-white">{amount}</h1>
      </div>

      <p className="text-md w-2/3 p-2">{saving}</p>
    </div>
  );
};

export default Card;
