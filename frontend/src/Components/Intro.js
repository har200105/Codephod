import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
      <>
       <div className='intro'>
         <div>
           <p className='intro_text'>
           A Complete Portal for sharing the Current Openings of Jobs,Internships,
       Workshops, along with sharing  project proposals , there own projects and take
       some feedbacks.
           </p>
         </div>
         <div>
           <img src={"https://ak.picdn.net/shutterstock/videos/1010260682/thumb/12.jpg"} className='img_intro'  alt="" />
         </div>
       </div>
      </>
  );
};

export default Intro;
