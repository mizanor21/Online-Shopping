import React, { useEffect, useState } from 'react';
import KTBanner from '../../../assets/WTrandings/WTBanner/kids.webp'
import KTrending from './KTrending';

const KTrendings = () => {
    const [ktrendings, setKtrendings] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/ktrending')
            .then(res => res.json())
            .then(data => setKtrendings(data))
    }, [])
    return (
        <div className='my-10 md:my-20'>

            <div className="lg:grid grid-cols-2">
                <img className='w-[100%]' src={KTBanner} alt="women collection banner" />
                <div className="w-[100%]">
                    <div className=" flex justify-around my-5">
                        <h2 className='uppercase text-4xl font-serif'>Trending</h2>
                        <button className='btn btn-link'>See All</button>
                    </div>
                    <div className="md:grid grid-cols-2 gap-5">
                        {
                            ktrendings.map(ktrending => <KTrending key={ktrending._id} ktrending={ktrending}></KTrending>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KTrendings;