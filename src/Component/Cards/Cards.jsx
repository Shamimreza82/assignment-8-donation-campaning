import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card/Card';

const Cards = ({search}) => {

    const cardsData = useLoaderData()
    const [displayJobs, setDisplayJobs] = useState([])
    
    console.log(displayJobs)

    useEffect(() => {
        setDisplayJobs(cardsData)
        if(search === 'Health'){
            const healtData = cardsData.filter(cardData => cardData.Category === 'Health')
                setDisplayJobs(healtData)
        } 
         else if (search === 'Education') {
            const educationData = cardsData.filter(cardData => cardData.Category === 'Education')
            setDisplayJobs(educationData)
        } 
        else if (search === 'Clothing') {
            const clothingData = cardsData.filter(cardData => cardData.Category === 'Clothing')
            setDisplayJobs(clothingData)
        }
        else if (search === 'Food') {
            const foodData = cardsData.filter(cardData => cardData.Category === 'Food')
            setDisplayJobs(foodData)
        }

    },[cardsData, search])


   
   

    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 lg:px-5 mt-7'>
            {
                displayJobs?.map(cardData => <Card key={cardData.id} cardData={cardData}  search={search}></Card>)
            }
            </div>
        </div>
    );
};

export default Cards;