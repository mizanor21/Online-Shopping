import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const SareeInfo = ({ sareeInfo }) => {
    const { img, price, p_title } = sareeInfo
    return (
        <div>
            <div className="rounded-none card-compact bg-base-100 shadow-xl lg:h-[600px]">
                <div className="flex justify-between">
                    <figure><img className='h-[450px]' src={img} alt="Shoes" /></figure>
                    <button className='btn btn-outline border-none hover:bg-red-500 text-2xl hover:border-none'><FaRegHeart /></button>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-serif">{p_title}</h2>
                    <h2 className="text-xl">Tk {price}</h2>
                </div>
            </div>
        </div>
    );
};

export default SareeInfo;