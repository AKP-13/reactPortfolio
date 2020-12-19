import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
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
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/photography" component={Photography} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </>
        );
    }
}

export default App;
