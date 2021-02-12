import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './styles/style.css'
import rixant3 from './assets/images/rixant3.jpg'


function About(){
        return(
            <section className="about-section">
                <Container className="themed-container about-box" fluid={true}>
                    <Row> 
                        <Col xl={{size:10, offset:1 }}>
                            <Row>
                                <Col>
                                    <div className="about-header" >
                                        <h2  >About Me</h2>
                                        <hr className="" />
                                    </div>
                                    <figure className="about-image">
                                        <img src={rixant3}  alt="myimage" />
                                    </figure>
                                    <div className="about-me">
                                    <p>
                                       Hi, I am Rixant. I am currently a junior studying Computer Science and Mathematics at Caldwell University. I like to learn new technolgies and read articles and research papers.
                                    </p>
                                    <p>
                                        "
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        "
                                    </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        
        )
    }


export default About;