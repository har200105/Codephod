import React from 'react';
import QaPosts from '../Components/QaPosts';
import './QA.css';
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";

const QA = () => {
  return (
    <>
      <Textarea
        color="lightBlue"
        size="regular"
        outline={true}
        placeholder="Question and Answer"
      />

      <div style={{
       float:"right",
       marginRight:"20px"
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
       marginTop:"70px"
     }}>
     <QaPosts />
      <QaPosts />
      <QaPosts />
      <QaPosts />
     </div>
    </>
  );
};

export default QA;
