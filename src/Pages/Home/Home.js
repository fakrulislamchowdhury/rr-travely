import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Banner from '../Shared/Banner/Banner';
import Visit from '../Visit/Visit';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br />
            <br />
            <br />
            <Visit></Visit>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;