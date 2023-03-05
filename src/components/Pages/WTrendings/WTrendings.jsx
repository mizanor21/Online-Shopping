import React, { useEffect, useState } from 'react';
import WTBanner from '../../../assets/WTrandings/WTBanner/0560000061278_3.webp'
import WTrending from './WTrending';

const WTrendings = () => {
    const [wtrendings, setWtrendings] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/wtrending')
            .then(res => res.json())
            .then(data => setWtrendings(data))
    }, [])
    return (
        <div className=''>

            <div className="lg:grid grid-cols-2">
                <div className="w-[100%]">
                    <div className=" flex justify-around my-5">
                        <h2 className='uppercase text-4xl font-serif'>Trending</h2>
                        <button className='btn btn-link'>See All</button>
                    </div>
                    <div className="md:grid grid-cols-2 gap-5">
                        {
                            wtrendings.map(wtrending => <WTrending key={wtrending._id} wtrending={wtrending}></WTrending>)
                        }
                    </div>
                </div>
                <img className='w-[100%]' src={WTBanner} alt="women collection banner" />

            </div>
        </div>
    );
};

export default WTrendings;