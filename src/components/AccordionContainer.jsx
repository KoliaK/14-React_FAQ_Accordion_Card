import React from "react";
import Accordion from "./Accordion";

const AccordionContainer = () => {

    return (
        <div className="accordion_container">
            <Accordion
                title="How many team members can I invite?"
                text="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."/>

            <Accordion
                title="What is the maximum file upload size?"
                text="No more than 2GB. All files in your account must fit your allotted storage space."/>

            <Accordion
                title="How do I reset my password? "
                text="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."/>
            
            <Accordion
                title="Can I cancel my subscription?"
                text="Yes! Send us a message and we’ll process your request no questions asked."/>

            <Accordion
                title="Do you provide additional support?"
                text="Chat and email support is available 24/7. Phone lines are open during normal business hours."/>
        </div>
    );
}

export default AccordionContainer;