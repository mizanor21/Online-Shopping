import React from 'react';
import { useLoaderData } from 'react-router-dom';
import women from '../../../../assets/women.webp'
import SareeInfo from './SareeInfo';

const Saree = () => {
    const saree = useLoaderData()
    // console.log(panjabi)
    return (
        <div className=''>
            <img className='w-full' src={women} alt="" />
            <h1 className='text-4xl lg:text-8xl font-serif uppercase text-center relative text-white top-[-100px] sm:top-[-150px] md:top-[-200px] lg:top-[-450px]'>women's</h1>
            <h2 className='uppercase text-2xl font-serif container mx-auto'>Saree - <span className='text-gray-500'>{saree.length} results</span></h2>
            <div className="container my-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    saree.map(sareeInfo => <SareeInfo key={sareeInfo._id} sareeInfo={sareeInfo}></SareeInfo>)
                }
            </div>
        </div>
    );
};

export default Saree;