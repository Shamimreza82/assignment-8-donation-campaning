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
    <div className="px-6 mt-4">
      <div className="relative flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={Picture}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {Category}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {Title}
          </h4>
          
          <p className=" block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {Description}
          </p>
          <p>${Price}</p>
            <Link>
            <button>View Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
