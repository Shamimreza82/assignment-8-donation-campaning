import React from "react";

const Card = ({ cardData }) => {
  const {
    Card_bg_Color,
    Picture,
    Title,
    Category,
    Category_bg_Color,
    Text_and_Button_bg_Color,
  } = cardData || {};
  return (
    <div>
      <div className="card h-[300px] bg-base-100 shadow-xl rounded-2xl">
        <figure >
          <img className="h-[200px] w-full rounded-t-lg "
            src={Picture}
            alt="Picture"
          />
        </figure>
        <div className="card-body px-4">
          <h2 >{Category}</h2>
          <p>{Title}</p>

        </div>
      </div>
    </div>
  );
};

export default Card;
