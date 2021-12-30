import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faDotCircle,faUser,faEnvelope,faCalendarMinus,faClock } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap,faDollarSign ,faHome,faPhoneAlt} from '@fortawesome/free-solid-svg-icons';

import './JobInformation.css';


const JobInfo = [
        {
            id:1,
            icon:faUser,
            name:"Name"
        
        },
        {
            id:2,
            icon:faEnvelope,
            name:"Email"
        
        },
        {
            id:3,
            icon:faPhoneAlt,
            name:"Phone"
            
        },
        {
            id:4,
            icon:faHome,
            name:"Adress"
    
        },
        {
            id:5,
            icon:faGraduationCap,
            name:"Education"
        },
        {
            id:6,
            icon:faGraduationCap,
            name:"Resume"
        },
        {
            id:7,
            icon:faCalendarMinus,
            name:"Years of experience"
        
        },
        {
            id:8,
            icon:faDollarSign,
            name:"Expected salary"
        },
        {
            id:9,
            icon:faClock,
            name:"Notice period"
        }
    ];


const JobInformation = () => {

    return (
        <div className="info-container">
        {
            JobInfo.map(info =>  <div key={info.id} className='single-info'>
                    
                   <p> <span><FontAwesomeIcon icon={info.icon} /></span> {info.name}</p>
        </div> )
        }
       
        </div>
    );
};

export default JobInformation;