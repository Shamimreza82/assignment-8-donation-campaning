import React from 'react';
import Bg from '../assets/girl-1822480_1280.jpg'
import Cards from '../Component/Cards/Cards';

const Home = () => {
    
    
    return (
        <div className='min-h-screen'>
            <img className='opacity-10 object-cover w-full min-h-screen' src={Bg} alt="" />
            <Cards></Cards>
        </div>
    );
};

export default Home;