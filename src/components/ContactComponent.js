import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './styles/myStyle.css'


function Contact(){
        return(
            <section className="about-section">
                <Container className="themed-container about-box" fluid={true}>
                    <Row> 
                        <Col xl={{size:10, offset:1 }}>
                            <Row>
                                <Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        
        )
    }


export default Contact;