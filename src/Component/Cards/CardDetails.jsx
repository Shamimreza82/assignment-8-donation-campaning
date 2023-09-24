import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const [data, setData] = useState();

  const {
    Card_bg_Color,
    Picture,
    Title,
    Category,
    Category_bg_Color,
    Text_and_Button_bg_Color,
  } = data || {};


 
  const cardsData = useLoaderData();
  const { id } = useParams();
    console.log( typeof id)
  useEffect(() => {
    const findData = cardsData?.find(cardData => cardData.id == id);
        if(findData){
            setData(findData)
        }
      
  }, [cardsData, id]);






  return (
    <div className="flex justify-center ">
      <div className="card card-compact  bg-base-100 shadow-xl">
        <div>
          <img className="relative lg:h-[450px]"
            src={Picture}
            alt="Shoes"
          />
          <div className="absolute -mt-12 bg-slate-400 lg:w-[845px] py-3">
                <button>All in one</button>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
