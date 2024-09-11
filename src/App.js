import React, { useEffect } from "react";
import "./App.css";
import data from "./data/data-15.json";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import $ from "jquery";
function App() {
    // const array = data.map((item) => item.slice(11, 30));
    const array = data.map((item) => item.replace(/\s+/g, ""));
    useEffect(() => {
        const spans = document.querySelectorAll("span");
        spans.forEach((span) => {
            span.onclick = function () {
                document.execCommand("copy");
                $(span).addClass("fw-bold text-primary");
            };
            span.addEventListener("copy", function (event) {
                event.preventDefault();
                if (event.clipboardData) {
                    event.clipboardData.setData("text/plain", span.textContent);
                    console.log(event.clipboardData.getData("text"));
                }
            });
        });
    }, []);
    return (
        <div className="mt-3">
            <Container>
                <Row className="justify-content-end">
                    <Col xs={8}>
                        <ListGroup as="ol" numbered>
                            {array.map((item, index) => (
                                <ListGroup.Item as="li" key={index}>
                                    <span style={{ cursor: "pointer" }}>
                                        {item}
                                    </span>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
