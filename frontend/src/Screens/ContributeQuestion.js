import React from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { addCodingQuestions, getCodingQuestions } from "../Redux/Actions/codingAction";
import { useState } from "react";




const ContributeQuestion = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [company,setCompany] = useState("");
    const [link,setLink] = useState("");
    const [question,setQuestion] = useState("");
    const {isAdded,error} = useSelector((state)=>state.addCodingReducer);

    const contribute = () => {

        dispatch(addCodingQuestions({
            Companies:company.split(","),
            QuestionLink:link,
            Question:question
        }));

        dispatch(getCodingQuestions());
        
         navigate("/coding");


    }

    return (
        <div style={{
            marginTop:"5%"
        }}> 
        <Card>
            <CardBody>
                <div className="mt-4 mb-8 px-4">
                    <InputIcon
                        value={question}
                        onChange={(e)=>setQuestion(e.target.value)}
                        name="name"
                        type="text"
                        color="lightBlue"
                        placeholder="Question Name"
                    />
                </div>
                <div className="mb-8 px-4">
                    <InputIcon
                        value={link}
                        onChange={(e)=>setLink(e.target.value)}
                        name="link"
                        type="text"
                        color="lightBlue"
                        placeholder="Question Link"
                    />
                </div>
                <div className="mb-4 px-4">
                    <InputIcon
                        onChange={(e)=>setCompany(e.target.value)}
                        name="company" 
                        type="text"
                        color="lightBlue"
                        placeholder="Companies (Comma separated)"
                    />
                </div>
            </CardBody>
            <CardFooter>
                <div className="flex justify-center">
                    <Button
                        color="lightBlue"
                        buttonType="link"
                        size="lg"
                        ripple="light"
                        onClick={contribute}
                    >
                       Contribute
                    </Button>
                </div>
            </CardFooter>
        </Card>
        </div>
    );
}

export default ContributeQuestion;