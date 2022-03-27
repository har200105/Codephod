import React from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { addCodingQuestions, addWorkshop, getCodingQuestions } from "../Redux/Actions/codingAction";
import { useState } from "react";
import { getWorkshops } from "../Redux/Actions/homeAction";




const AddWorkshop = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [organizedBy, setOrganizedBy] = useState("");
    const [OrganizedAt, setOrganizedAt] = useState("");
    const [OrganizedOn,setOrganizedOn] = useState("");
    const [link,setLink] = useState("");
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    

    const {isAdded,error} = useSelector((state)=>state.addCodingReducer);

    const contribute = () => {
        dispatch(addWorkshop({
            OrganizedBy:organizedBy,
            workShopLink:link,
            workshopTitle: title,
            details,
            OrganizedAt,
            OrganizedOn
        }));
        dispatch(getWorkshops());
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
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        name="name"
                        type="text"
                        color="lightBlue"
                        placeholder="Workshop Title"
                    />
                    </div>
                <div className="mt-4 mb-8 px-4">
                    <InputIcon
                        value={details}
                        onChange={(e)=>setDetails(e.target.value)}
                        name="name"
                        type="text"
                        color="lightBlue"
                        placeholder="Workshop Details" 
                    />
                    </div>
                     <div className="mt-4 mb-8 px-4">
                    <InputIcon
                        value={OrganizedOn}
                        onChange={(e)=>setOrganizedOn(e.target.value)}
                        name="name"
                        type="text"
                        color="lightBlue"
                        placeholder="Organized On"
                    />
                </div>
                <div className="mb-8 px-4">
                    <InputIcon
                        value={link}
                        onChange={(e)=>setLink(e.target.value)}
                        name="link"
                        type="text"
                        color="lightBlue"
                        placeholder="Workshop Link"
                    />
                    </div>
                <div className="mb-8 px-4">
                <InputIcon
                    value={organizedBy}
                    onChange={(e)=>setOrganizedBy(e.target.value)}
                    name="link"
                    type="text"
                    color="lightBlue"
                    placeholder="Organized By"
                />
                </div>
                  <div className="mb-8 px-4">
                <InputIcon
                    value={OrganizedAt}
                    onChange={(e)=>setOrganizedAt(e.target.value)}
                    name="link"
                    type="text"
                    color="lightBlue"
                    placeholder="Organized At"
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
                       Add Workshop
                    </Button>
                </div>
            </CardFooter>
        </Card>
        </div>
    );
}

export default AddWorkshop;