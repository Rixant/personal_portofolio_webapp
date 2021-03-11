import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import './styles/style.css'
import resumeFile from './assets/files/Rishant_Rokaha_Resume.pdf'
import resume from './assets/images/resume.png';

function Resume(){
    return(
        <section className="resume-section">
            <Container className="themed-container content-box" fluid={true}>
                <Row> 
                    <Col md={{size:10, offset:1 }}>
                        <Row>
                            <Col>

                        
                                <div className="resume-header justify-content-center">
                                    <h2 className="text-center">Resume</h2>
                                </div>
                            
                                <figure className="resume-image mt-5">
                                        <img src={resume} className="res-img"  alt="resume" />
                                </figure>  
                                <div className="download-button">
                                    <p>
                                        <a href={resumeFile}  download>Download</a>  
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




export default Resume;