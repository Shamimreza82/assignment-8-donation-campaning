import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card/Card';

const Cards = () => {

    const cardsData = useLoaderData()
    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 lg:px-5 mt-7'>
            {
                cardsData?.map(cardData => <Card key={cardData.id} cardData={cardData}></Card>)
            }
            </div>
        </div>
    );
};

export default Cards;