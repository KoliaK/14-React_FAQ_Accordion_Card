import React, { useState } from "react";
import IconArrow from '../assets/icon-arrow-down.svg';
import './Accordion.css';

const Accordion = (props) => {
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <div className="accordion_title_container" onClick={toggleAccordion}>
                <h2 className={`accordion_title ${isActive ? 'active' : ''}`}>{props.title}</h2>
                <div className="button_container">
                <img
                    className={`accordion_btn ${isActive ? 'active' : ''}`} 
                    src={IconArrow} 
                    alt=""/>
                </div>      
            </div>

            <div 
            className={`accordion_content ${isActive ? 'active' : ''}`}
            style={{ maxHeight: isActive ? "1000px" : "0px" }}>
                <p>{props.text}</p>
            </div>

            <hr />
        </>
    );
}

export default Accordion;