import React, { useContext, useEffect, useState } from 'react';
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";
import Projects from '../Components/Projects';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../Context/AuthContext';
import axios from 'axios';
import { addProjectPosts, getProjectPosts } from '../Redux/Actions/projectAction';
import { useNavigate } from 'react-router-dom';
import { AddAPhoto } from '@material-ui/icons';
import { useToast } from '@chakra-ui/react';


const ProjectsPage = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [ptext,setPText] = useState("");
  const { projects, loading, error } = useSelector((state) => state.getProjectsReducer);
  const { user, isAuthenticated } = useSelector((state) => state.getUserReducer);
  const[shareImage,setShareImage] =  useState("");
  const [file, setFile] = useState();

  const toast = useToast();

    const readImage = (e) =>{
    console.log(e)
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState===2){
        setFile(reader.result);
      }
    }
      reader.readAsDataURL(e.target.files[0]); 
  }


  const shareProject = () => {
    
    let type;
    const hashtag = ptext.match(/#\w+/g);

    if(hashtag[0] === "#proposal"){
      type = "Proposal";
    }else if(hashtag[0] === "#myproject"){
      type = "Share";
    } else {
      toast({
        title: "Invalid Hashtag",
        isClosable: false,
        status: "warning",
        position:"top-right"
      })
      return;
    }

    dispatch(addProjectPosts({
      caption:ptext,
      PostType: type,
      image:file
    }));
    

    navigate("/projects");

  }


  useEffect(() => {
    dispatch(getProjectPosts());
  }, [dispatch]);



  return (

    <>
      {
        user && <>
        <div style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:"center",
          alignItems:"center",
          margin:"auto"
        }}>
          <h1 style={{
            marginBottom:"10px",
            fontSize:"20px",
            fontWeight:"bold"
          }}>Instructions</h1>
          <ul style={{
            marginBottom:"10px",
            listStyleType:"disc"
          }}> 
            <li>Use Hashtag "#proposal"  to share your project proposal</li>
            <li>Use Hashtag "#myproject"  to share your new project developed by you</li>
          </ul>
          </div>
          <div>
          <Textarea
            value={ptext}
            color="lightBlue"
            size="regular"
            outline={true}
            placeholder="Projects"
            onChange = {(e)=>setPText(e.target.value)}
          />
            </div>
          <div style={{
            display: "flex",
            justifyContent:"space-between"
          }}>
            <input type="file" id="file" style={{
              display:"none"
            }}
             onChange={(e)=>readImage(e)}
            />
            <label htmlFor='file'>
            <AddAPhoto style={{
                    marginLeft:"50px"
              }} />
              </label>
            <Button
              color="green"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="light"
              onClick={shareProject}
            >
              Share
            </Button>
          </div>
         {file && <img src={file} alt=""/>}
        </>
      }
      
      <div style={{
        marginTop: "70px"
      }}>

        {
          projects.length === 0 && <div style={{
            justifyContent: "center"
          }}>
            <h1 style={{
              textAlign: "center",
              fontSize: "20px"
            }}>No Projects Available Currently</h1>
          </div>
        }

        {
          projects?.map((p) => (
            <Projects project={p} />
          ))
        }

      </div>
    </>
  );
};

export default ProjectsPage;
