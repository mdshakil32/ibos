import React, { useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faPlusCircle,faTrash,faTextHeight,faHeart,faFileAlt,faLink,faPaperclip,faCaretDown} from '@fortawesome/free-solid-svg-icons';

import Step from '../Step/Step.js';
import JobInformation from '../JobInformation/JobInformation';
import Footer from '../Footer/Footer';

const Home = () => {
    const fourSteps = [
        {
            id:1,
            color:"green-color",
            name:"Basic Information",
            border:"step green-border"
        },
        {
            id:2,
            color:"green-color",
            name:"Job Summury",
            border:"step green-border"
        },
        {
            id:3,
            color:"yellow-color",
            name:"Job Application Form",
            border:"step yellow-border"
        },
        {
            id:4,
            color:"gray-color",
            name:"Interview Pipeline",
            border:"step gray-border"
        }
    ];
    
    const [form, setForm] = useState([]);

    const handleAddLink = (e) => {
    e.preventDefault();
    const inputState = {
      Info: "",
     
    };
    setForm((prev) => [...prev, inputState]);
   
  };
  const handleRemove = (e, index) => {
    e.preventDefault();

    setForm((prev) => prev.filter((item) => item !== prev[index]));
  };

  
    return (
        <div className='box'>

            {/* title  */}
            <div className='box-top'>
                <h1 className='box-title'>Create New Job</h1>
                <span className='cross'><FontAwesomeIcon icon={faTimes} /> </span>
                
            </div>

            {/* steps  */}
            <div className='four-steps'>
                {
                    fourSteps.map(step => <Step key={step.id} step={step} ></Step> )
                }
            </div>

            {/* job application  */}
            <div className='job-apply'>
                <h1 className='job-apply-title'>Job Application Form</h1>
                <p className='job-apply-subtitle'>Candidates are required to apply with this information.</p>
                
                <JobInformation></JobInformation>
            
            </div>

            {/* additional information  */}
            <div className='additional-info-title'>
                <p>Additional information</p>
                <span className='dot' >.......................................................................................</span>
                <span  > <FontAwesomeIcon onClick={handleAddLink} className='plus-btn' icon={faPlusCircle} /> </span>
            </div>

            {/* form data  */}
            <div className='form-wrapper' >
                
               <form>
                {form.map((item, index) => (
                <div className="form" key={`item-${index}`}>
                    
                    <input className='checkbox' type="checkbox" />

                    <div className='form-box' >

                    <div className="input-field">
                    <input
                        type="text"
                        name="Info"
                        placeholder="Label"
                    />

                    </div>

                    <span className='dropdown'>
                        <FontAwesomeIcon  icon={faTextHeight} /> 
                        <span className='dropdown-text'>Text</span>  
                        <FontAwesomeIcon  icon={faCaretDown} />
                    </span>
                    <span className='file'> 
                        <FontAwesomeIcon  icon={faFileAlt} />
                    </span>

                    <span className='delete'>
                        <FontAwesomeIcon onClick={(e)=> handleRemove(e,index)}  icon={faTrash} />
                        <span className="tooltiptext">Delete</span>
                    </span> 
                    </div>
                </div>
                ))}

                {/* <FontAwesomeIcon onClick={handleAddLink} className='plus-btn' icon={faPlusCircle} /> */}

            </form>
        </div>

        {/* footer  */}
        <Footer></Footer>
            
        </div>
    );
};

export default Home;

