import React from "react";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {

    const {
        Card_bg_Color,
        Picture,
        Title,
        Category,
        Category_bg_Color,
        Text_and_Button_bg_Color,
        Price,
        Description
      } = donation || {};

  return (
    <div className="px-6 mt-4 ">
      <div style={{backgroundColor: Category_bg_Color}} className="relative flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src=  {Picture}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <a style={{color:Text_and_Button_bg_Color, backgroundColor: Card_bg_Color }} className="p-1 rounded-md">
            {Category}
          </a>
          <h4 className="mb-2 block font-sans text-lg lg:text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {Title}
          </h4>
          
          <p style={{color:Text_and_Button_bg_Color }} className="text-lg py-2 font-bold">${Price}</p>
            <Link>
            <button style={{backgroundColor: Text_and_Button_bg_Color }} className="text-white p-2 rounded-md">View Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
