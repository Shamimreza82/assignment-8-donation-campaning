import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cardData }) => {


  const {
    id,
    Card_bg_Color,
    Picture,
    Title,
    Category,
    Category_bg_Color,
    Text_and_Button_bg_Color,
  } = cardData || {};
  return (
    <div>
      <Link to={`/cardDetails/${id}`}>
      <div style={ { backgroundColor:Category_bg_Color}} className="card h-[300px] bg-base-100 shadow-xl rounded-2xl">
        <figure >
          <img className="h-[200px] w-full rounded-t-lg "
            src={Picture}
            alt="Picture"
          />
        </figure>
        <div className="card-body px-4">
          <h2 style={{color: Text_and_Button_bg_Color, backgroundColor:Card_bg_Color}} className="py-1 px-2 mt-2 rounded-md">{Category}</h2>
          <p style={{color: Text_and_Button_bg_Color }} className="font-bold">{Title}</p>
        </div>
      </div>      
      </Link>
    </div>
  );
};

export default Card;
