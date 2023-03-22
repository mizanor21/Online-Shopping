import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PanjabiInfo from './PanjabiInfo';
import men from '../../../../assets/men.webp'

const Panjabi = () => {
    const panjabi = useLoaderData()
    // console.log(panjabi)
    return (
        <div className=''>
            <img className='w-full' src={men} alt="" />
            <h1 className='text-4xl lg:text-8xl font-serif uppercase text-center relative text-white top-[-100px] sm:top-[-150px] md:top-[-200px] lg:top-[-450px]'>Men's</h1>
            <h2 className='uppercase text-2xl font-serif container mx-auto'>Panjabi - <span className='text-gray-500'>{panjabi.length} results</span></h2>
            <div className="container my-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    panjabi.map(panjabiInfo => <PanjabiInfo key={panjabiInfo._id} panjabiInfo={panjabiInfo}></PanjabiInfo>)
                }
            </div>
        </div>
    );
};

export default Panjabi;