import React from 'react';
import { Link } from 'react-router-dom';
import "@material-tailwind/react/tailwind.css";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { ChatBubble, ThumbDownAltOutlined } from "@material-ui/icons";
import './Coding.css';

const Coding = () => {
    return (
        <>
            <div class="parent">
                <div class="right-container">
                    <div class="list_top_questions">
                    <div class="questions_box">
                        <div>
                            <span>
                                dwceuwcfbsdwceuwcfbsdwceuw
                                cfbsdwceuwcfbsd
                                wceuwcfbsdw
                                ceuwcfbsdwceuwcfbs
                            </span>
                        </div>
                            <a href="/abc" target="__">
                                <button class="solve_button">Solve</button>
                            </a>
                            <div class="companies_list">
                                <p>Aaaa</p>
                                <p>Aaaa</p>
                                <p>Aaaa</p>
                                <p>Aaaa</p>
                            </div>

                            <div class="contributor__details">
                                <p>Contributed By : Aa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Coding;
