import React from "react";

const Card = ({ heading, amount, saving, background }) => {
  return (
    <div
      className={`row-span-1 col-span-1 ${background} rounded-md my-auto py-6 px-8 text-white h-full`}
    >
      <h3 className=" text-xl">{heading}</h3>
      <h1 className="text-5xl font-semibold text-white my-4">{amount}</h1>
      <p className="text-lg">{saving}</p>
    </div>
  );
};

export default Card;
