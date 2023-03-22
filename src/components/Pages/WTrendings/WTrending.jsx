import React from 'react';
import { Link } from 'react-router-dom';

const WTrending = ({ wtrending }) => {
    const { _id, img, price } = wtrending;
    return (
        <Link to={`/wt-details/${_id}`} className='flex justify-center items-center hover:animate-pulse'>
            <div className="">
                <figure><img className='h-80' src={img} alt="Sari" /></figure>
                <h2 className="text-center text-xl">Tk {price}</h2>
            </div>
        </Link>
    );
};

export default WTrending;