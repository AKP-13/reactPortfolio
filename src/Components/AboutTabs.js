import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Background, Interests, Goals, Skills } from "./index";

function AboutTabs() {
    const [key, setKey] = useState("background");

    return (
        <Tabs
            id="about-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="col-xs-12"
        >
            <Tab eventKey="background" title="Background">
                <Background />
            </Tab>
            <Tab eventKey="skills" title="Skills">
                <Skills />
            </Tab>
            <Tab eventKey="interests" title="Interests">
                <Interests />
            </Tab>
            <Tab eventKey="goals" title="Goals">
                <Goals />
            </Tab>
        </Tabs>
    );
}

export default AboutTabs;
