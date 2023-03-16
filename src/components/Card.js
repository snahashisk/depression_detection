import React from "react";

const Card = ({ heading, amount, saving, background }) => {
  return (
    <div
      className={`row-span-1 col-span-1 ${background} rounded-md py-4 px-8 text-white`}
    >
      <h3 className=" text-lg">{heading}</h3>
      <h1 className="text-4xl font-semibold text-white my-2">{amount}</h1>
      <p className="text-lg">{saving}</p>
    </div>
  );
};

export default Card;
