import React, { useContext, useState } from "react";
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

const Login = () => {

    const { user, dispatch } = useContext(Context);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");

    const LoginUser = async () => {

        console.log("eefe")
        try {
            
            const logs = await axios.post(API + "/login" , {
                email,
                password
            });

            dispatch({ type: 'LOGIN_START' });

            if (logs.status === 201) {

                console.log(logs);
                localStorage.setItem("jwt", logs.data.token);
                dispatch({ type: "LOGIN_SUCCESS", payload: logs.data });

            }
        } catch (e) {
            console.log("eefede")
            setError("Invalid Credentials");
            dispatch({ type: "LOGIN_FAILURE" });

        }
    }

    return (
        <div className="loggin">
            <Card>
                <CardHeader color="green" size="sm">
                    <H5 color="white">Login</H5>
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
                            onClick={LoginUser}
                        >
                            Login
                        </Button>
                    </div>
                    <div 
                    className="flex justify-center" style={{
                        marginTop:"10px"
                    }}>
                        <Link to="/register" style={{
                            textAlign: "center",
                            color:"blue"
                        }} >New To Codephod ? Register</Link>
                        <p style={{
                            color: "red"
                        }}>{error}</p>
                    </div>

                </CardFooter>
            </Card>
        </div>
    );
}

export default Login;