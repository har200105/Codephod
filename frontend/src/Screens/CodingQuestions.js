import React from 'react';
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";
import Projects from '../Components/Projects';
import Coding from '../Components/Coding';
import { Link } from 'react-router-dom';


const CodingQuestions = () => {
  return (
      <>
        <div className='contr_ques'>
        <Link to={"/contribute"}>
            Contribute Questions to the portal
        </Link>
        </div>
        <Coding/>
        <Coding/>
        <Coding/>
        <Coding/>
        <Coding/>
      </>
  );
};

export default CodingQuestions;
