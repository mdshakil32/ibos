import React from 'react';
import './Step.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faDotCircle,faUser,faEnvelope,faPhoneAlt,faHome,faGraduationCap,faCalendarMinus,faDollarSign,faClock } from '@fortawesome/free-solid-svg-icons';

const Step = (props) => {
    const {color,name,border} = props.step;
    console.log(name);
    return (
        <div className={border} >
            <p className={color}> <span> <FontAwesomeIcon icon={faDotCircle} /> </span> {name} </p>
        </div>
    );
};

export default Step;