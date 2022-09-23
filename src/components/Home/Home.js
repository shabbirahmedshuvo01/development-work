import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Feature from '../Feature/Feature';
import Review from '../Review/Review';
import Section from '../Section/Section';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Section />
            <Cards />
            <Feature />
            <WhyUs />
            <Review />
        </div>
    );
};

export default Home;