import React from 'react';
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";
import Projects from '../Components/Projects';



const ProjectsPage = () => {
  return (
    <>
      <Textarea
        color="lightBlue"
        size="regular"
        outline={true}
        placeholder="Projects"
      />
      <div style={{
        float: "right",
        marginRight: "20px"
      }}>
        <Button
          color="lightBlue"
          buttonType="filled"
          size="regular"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
        >
          Button
        </Button>
      </div>
      <div style={{
        marginTop: "70px"
      }}>
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </div>
    </>
  );
};

export default ProjectsPage;
