import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Contests = () => {

    const dispatch = useDispatch();
    const { opportunities, error, loading } = useSelector((state) => state.opportunityReducer);
    const [coding, setCoding] = useState([]);

    const getCodingContests = async () => {
        await axios.get("https://kontests.net/api/v1/all").then((response) => {
            console.log(response.data);
            setCoding(response.data);
        });
    }

    function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes;
}

    useEffect(() => {
        getCodingContests();
        dispatch(getOpportunities());
    }, [dispatch]);

    return (
        <>
            {loading && <Loader/>}
            <h1 style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: "25px"
            }}>Upcoming Coding Contests</h1>
            <div style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center"
            }}>
                <Carousel breakPoints={breakPoints}>
                    {
                        coding.map((o => ( 
                            o?.in_24_hours !== "No"  &&
                            <Card>
                                <CardBody>
                                    <H6 color="gray">{o.formType}</H6>
                                    <Paragraph color="gray">
                                      <p>Contest Name : {o?.name}</p>  
                                      <p>Platform : {o?.site}</p> 
                                      <p>Start Date : {new Date(o?.start_time).toDateString()}</p> 
                                      <p>End Date : {new Date(o?.end_time).toDateString()}</p> 
                                    </Paragraph>
                                </CardBody>
                                <CardFooter>
                                    <a href={o?.url} target="_blank">
                                        <Button color="lightBlue" size="lg" ripple="light">
                                            Participate
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        )))
                    }
                </Carousel>
            </div>
        </>
    );
};

export default Contests;
