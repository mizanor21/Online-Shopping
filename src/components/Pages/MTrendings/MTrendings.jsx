import React, { useEffect, useState } from 'react';
import MTBanner from '../../../assets/WTrandings/WTBanner/mens-collection.webp'
import MTrending from './MTrending';

const MTrendings = () => {
    const [mtrendings, setMtrendings] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/mtrending')
            .then(res => res.json())
            .then(data => setMtrendings(data))
    }, [])
    return (
        <div className='my-10 md:my-20'>

            <div className="lg:grid grid-cols-2">
                <img className='w-[100%]' src={MTBanner} alt="women collection banner" />
                <div className="w-[100%]">
                    <div className=" flex justify-around my-5">
                        <h2 className='uppercase text-4xl font-serif'>Trending</h2>
                        <button className='btn btn-link'>See All</button>
                    </div>
                    <div className="md:grid grid-cols-2 gap-5">
                        {
                            mtrendings.map(mtrending => <MTrending key={mtrending._id} mtrending={mtrending}></MTrending>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MTrendings;