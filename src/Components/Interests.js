import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Interests extends Component {
    // state = {
    //     run: false,
    //     recycle: true,
    //     plant: false,
    //     game: false,
    //     travel: false,
    //     study: false,
    // };

    render() {
        return (
            <>
                <div className="about-para" id="interests-para">
                    <Row xs={1} sm={2}>
                        <Col>
                            <i className="fas fa-running fa-2x"></i>
                        </Col>
                        <Col>
                            <i className="fas fa-recycle fa-2x"></i>
                        </Col>
                        <Col>
                            <i className="fas fa-seedling fa-2x"></i>
                        </Col>
                        <Col>
                            <i className="fab fa-xbox fa-2x"></i>
                        </Col>
                        <Col>
                            <i className="far fa-compass fa-2x"></i>
                        </Col>
                        <Col>
                            <i className="fas fa-graduation-cap fa-2x"></i>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Interests;
