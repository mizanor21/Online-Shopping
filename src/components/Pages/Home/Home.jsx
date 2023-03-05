import React from 'react';
import Banner from '../Banner/Banner';
import KTrendings from '../KTrendings/KTrendings';
import MTrendings from '../MTrendings/MTrendings';
import WTrendings from '../WTrendings/WTrendings';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <MTrendings></MTrendings>
            <WTrendings></WTrendings>
            <KTrendings></KTrendings>
        </div>
    );
};

export default Home;