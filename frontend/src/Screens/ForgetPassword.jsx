import React, { useState } from 'react';
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";
import axios from "axios";
import { API } from "../API";
import { Context } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import { useToast } from '@chakra-ui/react';

const ForgetPassword = () => {

    const [email, setEmail] = useState("");
    const toast = useToast();

    const forget = async () => {
        if (!email) {
            toast({
                title: "Please Enter a Valid Email",
                status: "warning",
                position: "top-right",
                isClosable:true
            });
        } else {
            const forgetPass = await axios.post(`${API}/forgotPassword`, {
                email
            });
            if (forgetPass.data.success) {
                  toast({
                    title: "Reset Password Link to your email",
                    status:"success",
                    position: "top-right",
                    isClosable: true
                  });
                setEmail("");
            } else {
                toast({
                title: "Invalid Email",
                status: "error",
                position: "top-right",
                isClosable:true
            });
            }
        }
    }

  return (
      <div className="loggin">
            <Card>
                <CardHeader color="green" size="sm">
                    <H5 color="white">Forget Password</H5>
                </CardHeader>
                <CardBody>
                    <div className="mb-8 px-4">
                        <InputIcon
                            type="email"
                            color="lightBlue"
                            placeholder="Email Address"
                            iconName="email"
                            onChange={(e) => setEmail(e.target.value)}
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
                            onClick={forget}
                        >
                            Forget Password
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
  )
}

export default ForgetPassword