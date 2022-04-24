import React, { useEffect } from 'react';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from 'react-redux';
import { getOpportunities } from '../Redux/Actions/homeAction';
import Loader from './Loader';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Opportunities = () => {
    
    const dispatch = useDispatch();
    const { opportunities, error, loading } = useSelector((state) => state.opportunityReducer);

    useEffect(() => {
        dispatch(getOpportunities());
    }, [dispatch]);

    return (
        <>
            {loading && <Loader />}
            {
                opportunities?.length > 0 ?
                    <h1 style={{
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "25px"
                    }}>Upcoming Opportunities</h1> : 
                    !loading &&
                      <h1 style={{
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "25px"
                    }}>No Upcoming Opportunities</h1>
                    
                    }
            <div style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center"
            }}>
                {
                    opportunities?.length > 0 &&
        
                    <Carousel breakPoints={breakPoints}>
                        {
                            opportunities.map((o => (
                                <Card>
                                    <CardBody>
                                        <H6 color="gray">{o.formType}</H6>
                                        <Paragraph color="gray">
                                            Company Name : {o.companyName}
                                            <p>Eligibility : {o.eligibility}</p>
                                            <p>Deadline : {new Date(o.deadlinetoFill).toDateString()}</p>
                                        </Paragraph>
                                    </CardBody>
                                    <CardFooter>
                                        <a href={o.link} target="_blank">
                                            <Button color="lightBlue" size="lg" ripple="light">
                                                Apply
                                            </Button>
                                        </a>
                                    </CardFooter>
                                </Card>
                            )))
                        }
                    </Carousel>
                }
            </div>
        </>
    );
};

export default Opportunities;
