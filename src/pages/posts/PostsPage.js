import React, { useState } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostsPage() {
    


    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <p>Popular profiles mobile</p>
                <p>List of posts here</p>
            </Col>
            <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
                <p>Popular profiles for desktop</p>
            </Col>
        </Row>
    );
}

export default PostsPage;