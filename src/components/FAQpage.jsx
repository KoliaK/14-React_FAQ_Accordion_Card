import React from "react";
import Card from './Card';
import AccordionContainer from "./AccordionContainer";
import MobileImg from '../assets/illustration-woman-online-mobile.svg';
import MobileBG from '../assets/bg-pattern-mobile.svg';
import DesktopImg from '../assets/illustration-woman-online-desktop.svg';
import DesktopBG from '../assets/bg-pattern-desktop.svg';
import BoxImg from '../assets/illustration-box-desktop.svg';
import './FAQpage.css';

const FAQpage = () => {
  return (
    <Card>
        <div className="img_container">
            <img className="mobile_bg" src={MobileBG} alt="" />
            <img className="mobile_img" src={MobileImg} alt="" />
            <img src={DesktopBG} alt="" className="desktop_bg" />
            <img src={DesktopImg} alt="" className="desktop_img" />
            <img src={BoxImg} alt="" className="box_img" />
        </div>

        <div className="text_box">
            <h1 className="FAQ_title">FAQ</h1>
            <AccordionContainer />
        </div>
      
    </Card>
  );
};

export default FAQpage;