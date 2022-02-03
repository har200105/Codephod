import React from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";

const Login = () => {
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
                    />
                </div>
                <div className="mb-4 px-4">
                    <InputIcon
                        type="password"
                        color="lightBlue"
                        placeholder="Password"
                        iconName="lock"
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
                    >
                        Login
                    </Button>
                </div>
            </CardFooter>
        </Card>
        </div>
    );
}

export default Login;