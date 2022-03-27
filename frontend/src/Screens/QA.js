import React, { useContext, useEffect, useState } from 'react';
import QaPosts from '../Components/QaPosts';
import './QA.css';
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";
import { useDispatch, useSelector } from 'react-redux';
import { addQAPosts, getQAPosts } from '../Redux/Actions/qaAction';
import { Context } from '../Context/AuthContext';

const QA = () => {

  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();
  const {user,isAuthenticated} = useSelector((state) => state.getUserReducer);
  const { loading, qa, error } = useSelector((state) => state.getQAReducer);
  const [ptext, setPText] = useState("");
  
   const shareQA = () => {
    dispatch(addQAPosts(question));
  }

      
  useEffect(() => {
    dispatch(getQAPosts());
  }, []);

  return (
    <>
        {
        user && <>
          <Textarea
            value={question}
            color="lightBlue"
            size="regular"
            outline={true}
            placeholder="Projects"
            onChange = {(e)=>setQuestion(e.target.value)}
          />
          <div style={{
            float: "right",
            marginRight: "20px"
          }}>
            <Button
              color="green"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="light"
              onClick={shareQA}
            >
              Share
            </Button>
          </div>
        </>
      }
      
      <div style={{
        marginTop: "70px"
      }}>

        {
          qa?.length === 0 && <div style={{
            justifyContent: "center"
          }}>
            <h1 style={{
              textAlign: "center",
              fontSize: "20px"
            }}>No Projects Available Currently</h1>
          </div>
        }

        {
          qa?.map((q) => (
            <QaPosts post = {q}/>
          ))
        }


      </div>
    </>
  );
};

export default QA;
