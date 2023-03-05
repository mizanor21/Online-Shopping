import React from 'react';

const WTrending = ({ wtrending }) => {
    console.log(wtrending)
    const { img, price } = wtrending;
    return (
        <div className='flex justify-center items-center hover:animate-pulse'>
            <div className="">
                <figure><img className='h-80' src={img} alt="Sari" /></figure>
                <h2 className="text-center text-xl">Tk {price}</h2>
            </div>
        </div>
    );
};

export default WTrending;