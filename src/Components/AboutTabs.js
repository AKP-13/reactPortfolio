import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Background, Goals, Skills } from "./index";

function AboutTabs() {
    const [key, setKey] = useState("skills");

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
            <Tab eventKey="goals" title="Goals">
                <Goals />
            </Tab>
        </Tabs>
    );
}

export default AboutTabs;
