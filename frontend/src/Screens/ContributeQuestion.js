import React from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";

const ContributeQuestion = ()=>{
    return (
        <div style={{
            marginTop:"5%"
        }}> 
        <Card>
            <CardBody>
                <div className="mt-4 mb-8 px-4">
                    <InputIcon
                        type="text"
                        color="lightBlue"
                        placeholder="Question Name"
                    />
                </div>
                <div className="mb-8 px-4">
                    <InputIcon
                        type="text"
                        color="lightBlue"
                        placeholder="Question Link"
                    />
                </div>
                <div className="mb-4 px-4">
                    <InputIcon
                        type="text"
                        color="lightBlue"
                        placeholder="Companies"
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