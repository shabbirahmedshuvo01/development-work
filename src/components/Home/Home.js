import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Review from '../Review/Review';
import Section from '../Section/Section';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Cards />
            <Section />
            <Review />
            <WhyUs />
        </div>
    );
};

export default Home;