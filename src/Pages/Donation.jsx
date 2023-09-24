import React, { useEffect, useState } from 'react';
import DonationCard from '../Component/Cards/DonationCard';

const Donation = () => {

    const [donations, setDonation] = useState([])
    const [isShow, setIsShow] = useState(false)
    console.log (donations)
    useEffect(() =>{
        const donations = JSON.parse(localStorage.getItem('Donation'))
        if(donations){
            setDonation(donations)
        }
        else {
            console.log ("No Data Found")
        }
       
    }, [])

    return (
        <div>
            <div className='grid grid-cols-2'>
                {
                  isShow ? donations.map(donation => <DonationCard  donation={donation}></DonationCard>) 
                  :
                  donations.slice(0,2).map(donation => <DonationCard  donation={donation}></DonationCard>)  
                }
            </div>
            
            <div className='flex justify-center'>
                    <button onClick={() => 
                        setIsShow(!isShow)} className='bg-[#009444] text-white p-2 rounded-md mt-3 font-bold' >{isShow ? 'See Less' : 'See All'}</button>
            </div>
        </div>
    );
};

export default Donation;