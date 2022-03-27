import React from 'react'
import Button from "@material-tailwind/react/Button";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../API';
import { useToast } from '@chakra-ui/react';

const Verify = () => {

    const { token } = useParams();
    const toast = useToast();
    console.log(token);
    const navigate = useNavigate();

    const verifyEmail = async () => {
        const verify = await axios.post(`${API}/api/verify`, {
            token
        });
        if (verify.data.success) {
            toast({
                title: "Success",
                status: "success",
                description: verify.data.message
            });
            navigate("/login");
        } else {
             toast({
                title: "Failed",
                status:"error",
                description: verify.data.message
            });
        }
    }

  return (
      <div style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop:"50px"
      }}>
          <h1>Verify your Email</h1> 
          <Button onClick={verifyEmail} style={{
              marginTop:"30px"
          }}>
              Verify
          </Button>
    </div>
  )
}

export default Verify