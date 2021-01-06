import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Background, Interests, Goals } from "./index";

function AboutTabs() {
    const [key, setKey] = useState("background");

    return (
        <Tabs
            className="justify-content-center"
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="background" title="Background">
                <Background />
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
