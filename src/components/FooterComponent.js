import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './styles/myStyle.css';

function Footer(){

    return(
        <section className="footer-section">
        <Container className="themed-container footer-box" fluid={true}>  
            <Row>
                <Col xl={{size:10, offset:1}}>
            <h6 className="d-flex justify-content-center ">

                <footer> <small>&copy; Copyright   -Alpatra theme by Rixant </small> </footer> 
            </h6>
                </Col>
            </Row>
        </Container>
        </section>


    );
}


export default Footer;