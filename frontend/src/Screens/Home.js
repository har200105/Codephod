import React from 'react';
import Workshops from '../Components/Workshops';
import Opportunities from '../Components/Opportunities';
import Intro from '../Components/Intro';

const Home = () => {
    return (
        <>
            <Intro/>
            <Workshops />
            <Opportunities />
        </>
    );
};

export default Home;
