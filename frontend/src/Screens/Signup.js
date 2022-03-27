import React, { useContext, useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";
import { Context } from "../Context/AuthContext";
import axios from "axios";
import { API } from "../API";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const {user,dispatch} =  useContext(Context);

    const signUser = async () => {

        try {
            if (/.+@.+\.[A-Za-z]+$/.test(email)) {
                const signs = await axios.post(API + "/signup", {
                    name,
                    email,
                    password
                });
                if (signs.data.success) {
                    toast({
                        title: "Success",
                        description: signs.data.message,
                        status: "success",
                        isClosable: true
                    });
                }
                else {
                    toast({
                        title: "Error",
                        description: signs.data.message,
                        status: "error",
                        isClosable: true
                    });
                }
            } else {
                  toast({
                        title: "Error",
                        description: "Invalid Email",
                        status: "error",
                        isClosable: true
                    });
            }
        } catch (e) {
            toast({
                title:"Something went wrong",
                status: "error",
                isClosable:true
            });
        }
    }

    return (
        <div className="loggin">
            <Card>
                <CardHeader color="green" size="sm">
                    <H5 color="white">Signup</H5>
                </CardHeader>

                <CardBody>
                    <div className="mt-4 mb-8 px-4">
                        <InputIcon
                            type="text"
                            color="lightBlue"
                            placeholder="Name"
                            iconName="account_circle"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-8 px-4">
                        <InputIcon
                            type="email"
                            color="lightBlue"
                            placeholder="Email Address"
                            iconName="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 px-4">
                        <InputIcon
                            type="password"
                            color="lightBlue"
                            placeholder="Password"
                            iconName="lock"
                            onChange={(e) => setPassword(e.target.value)}
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
                            onClick={signUser}
                        >
                            Get Started
                        </Button>
                    </div>
                    <div 
                    className="flex justify-center" style={{
                        marginTop:"10px",
                        display:'flex',
                        flexDirection:"column"
                    }}>
                        <Link to="/login" style={{
                            textAlign: "center",
                            color:"orange"
                        }} >Already a User ? Login </Link>
                        <p style={{
                            color: "red",
                            textAlign:"center",
                            marginTop:"10px"
                        }}>{error}</p>
                    </div>
                </CardFooter>

            </Card>

        </div>
    );
}

export default Signup;