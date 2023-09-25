import React, { useEffect, useState } from "react";
import { json, useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';

const CardDetails = () => {
  const [data, setData] = useState();

  const {
    Card_bg_Color,
    Picture,
    Title,
    Category,
    Category_bg_Color,
    Text_and_Button_bg_Color,
    Price,
    Description

  } = data || {};


 
  const cardsData = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const findData = cardsData?.find(cardData => cardData.id == id);
        if(findData){
            setData(findData)
        }
      
  }, [cardsData, id]);


  const handleDonation =() => {

    const addedDonation = []
    const donation = JSON.parse(localStorage.getItem('Donation'))
    if(!donation) {
        addedDonation.push(data)
        localStorage.setItem('Donation', JSON.stringify(addedDonation))
        swal("Donation Added", "", "success");
    }
    else {
        addedDonation.push(...donation, data)
        localStorage.setItem('Donation', JSON.stringify(addedDonation))
        swal("Donation Added", "", "success");
    }

  }

  return (
    <div className="flex justify-center lg:w-[80%] m-auto my-5 ">
      <div className="card card-compact  bg-base-100 ">
        <div >
          <img className="relative lg:h-[450px] w-full"
            src={Picture}
            alt="Shoes"
          />
         <div style={{backgroundColor: Text_and_Button_bg_Color }} className="bg-slate-400 h-20 opacity-40 -mt-20">
            
         </div>
         <button style={{backgroundColor: Text_and_Button_bg_Color }} className="p-2 rounded-md
             text-white font-bold z-20 -mt-14 absolute " onClick={handleDonation}>Donate: ${Price}</button>
        </div>
        <h1 className="text-2xl py-3  font-bold">{Title}</h1>
          <p className="">{Description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
