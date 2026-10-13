import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import {
    Navbar,
    Home,
    Photography,
    Projects,
    About,
    Contact,
} from "./Components";

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/photography" element={<Photography />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </>
        );
    }
}

export default App;
