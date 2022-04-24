import React, { useEffect } from 'react';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getWorkshops } from '../Redux/Actions/homeAction';
import Loader from './Loader';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Workshops = () => {

    const dispatch = useDispatch();
    const { workshops, error, loading } = useSelector((state) => state.workShopReducer);
    const { user } = useSelector((state) => state.getUserReducer);

    useEffect(() => {
        dispatch(getWorkshops());
    }, [dispatch]);

    return (
        <>
            {
                user &&
                <div className='contr_ques'>
                    <Link to="/addWorkshop">
                        Add Workshops to the Portal
                    </Link>
                </div>
            }
        
            {loading && <Loader />}
            
            {
               !loading && workshops?.length === 0 && <h1 style={{
                    textAlign:"center",
                    marginBottom:"20px",
                    fontSize: "25px"
                }}>No Workshops Available Currently</h1>
            }

            {
                workshops.length > 0 &&
                <>
                    <h1 style={{
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "25px"
                    }}>Upcoming Workshops</h1>
                    <div style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center"
                    }}>
                        <Carousel breakPoints={breakPoints}>
                            {
                                workshops.map((w) => (
                                    <Card>
                                        <CardBody>
                                            <H6 color="gray">{w.OrganizedBy}</H6>
                                            <Paragraph color="gray">
                                                {w.details}
                                                <p>
                                                    Date : {w.OrganizedOn}
                                                </p>
                                            </Paragraph>
                                        </CardBody>

                                        <CardFooter>
                                                  <a href={w.workShopLink} target="_parent">
                                                <Button color="lightBlue" size="lg" ripple="light">
                                                    Register
                                                </Button>
                                            </a>
                                        </CardFooter>
                                    </Card>
                                ))
                            }
                        </Carousel>
                    </div>
                </>
            }

        </>
    );
};

export default Workshops;
