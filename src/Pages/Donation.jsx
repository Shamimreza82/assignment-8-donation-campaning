import React, { useEffect, useState } from 'react';
import DonationCard from '../Component/Cards/DonationCard';
import { Link } from 'react-router-dom';

const Donation = () => {

    const [donations, setDonation] = useState([])
    const [isShow, setIsShow] = useState(false)
    console.log (donations)
    useEffect(() =>{
        const donations = JSON.parse(localStorage.getItem('Donation'))
        if(donations){
            setDonation(donations)
        }
       
    }, [])

    return (
        <div className='lg:pb-9'>
            <div className='grid md:grid-cols-2 '>
                {
                  isShow ? donations.map(donation => <DonationCard key={donation.id}  donation={donation}></DonationCard>) 
                  :
                  donations.slice(0,4).map(donation => <DonationCard key={donation.id}  donation={donation}></DonationCard>)  
                }
            </div>
            
            {
                donations.length > 4 && <Link  className='flex justify-center' >
                <button onClick={() => 
                    setIsShow(!isShow)} className='bg-[#009444] text-white p-2 rounded-md mt-3 font-bold' >{isShow ? "See Less" : 'See All'}</button>
                </Link> 
            }
        </div>
    );
};

export default Donation;