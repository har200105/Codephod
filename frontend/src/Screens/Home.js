import React from 'react';
import Header from '../Components/Navbar';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import Workshops from '../Components/Workshops';
import Opportunities from '../Components/Opportunities';
import ProjectProposals from '../Components/ProjectProposals';
import Intro from '../Components/Intro';

const Home = () => {
    return (
        <>
            <Intro/>
            <Workshops />
            <Opportunities />
            {/* <ProjectProposals /> */}
        </>
    );
};

export default Home;
