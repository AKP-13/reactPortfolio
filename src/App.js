import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </>
        );
    }
}

export default App;
