import React from 'react';
import { Link } from 'react-router-dom';
import "@material-tailwind/react/tailwind.css";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { ChatBubble, ThumbDownAltOutlined } from "@material-ui/icons";
import './Coding.css';

const Coding = ({code}) => {
    return (
        <>
            
            <div class="parent">
                <div class="right-container">
                    <div class="list_top_questions">
                    <div class="questions_box">
                        <div>
                            <span>
                               {code.Question}
                            </span>
                        </div>
                            <a href={code.QuestionLink} target="__">
                                <button class="solve_button">Solve</button>
                            </a>
                            <div class="companies_list">
                               {code.Companies.map((cc)=>(
                                   <p>{cc}</p>
                               ))}
                            </div>

                            <div class="contributor__details">
                                <p>Contributed By :{code.addedBy.name} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Coding;
