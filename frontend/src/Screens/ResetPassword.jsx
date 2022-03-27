import React, { useState } from 'react';
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";
import axios from 'axios';
import { API } from "../API";
import { Context } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const ResetPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const resetPassword = async () => {
        await axios.post(API + "/resetPassword", {
            password,
            confirmPassword
        });
    }
    
    return (
         <div className="loggin">
            <Card>
                <CardHeader color="green" size="sm">
                    <H5 color="white">Reset Password</H5>
                </CardHeader>
                <CardBody>
                    <div className="mb-8 px-4">
                        <InputIcon
                            type="email"
                            color="lightBlue"
                            placeholder="Email Address"
                            iconName="email"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                        <div className="mb-8 px-4">
                        <InputIcon
                            type="email"
                            color="lightBlue"
                            placeholder="Email Address"
                            iconName="email"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </CardBody>
                <CardFooter>
                    <div className="flex justify-center">
                        <Button
                            color="lightBlue"
                            buttonType="link"
                            size="lg"
                            ripple="dark"
                            onClick={resetPassword}
                        >
                            Reset Password
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export default ResetPassword;