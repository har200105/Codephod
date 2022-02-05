import React, { useEffect } from 'react';
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";
import Projects from '../Components/Projects';
import Coding from '../Components/Coding';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Loader';
import { getCodingQuestions } from '../Redux/Actions/codingAction';


const CodingQuestions = () => {

  const dispatch = useDispatch();
  const { coding, loading, error } = useSelector((state) => state.getCodingReducer);

  useEffect(()=>{
    dispatch(getCodingQuestions());
  },[dispatch])

  return (

    <>
      <div className='contr_ques'>
        <Link to="/contribute">
          Contribute Questions to the portal
        </Link>
      </div>

      {/* <Coding/>
        <Coding/>
        <Coding/>
        <Coding/>
        <Coding/> */}

      {loading && <Loader />}

      {
        coding.length === 0 && <div style={{
          justifyContent: "center"
        }}>
          <h1 style={{
            textAlign: "center",
            fontSize: "20px"
          }}>No Coding Questions Available Currently</h1>
        </div>
      }

      {
        coding.map((c)=>(
          <Coding code={c} />
        ))
      }

    </>
  );

}

export default CodingQuestions;
