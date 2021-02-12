import React from 'react';
import {Button, Container, Row, Col } from 'reactstrap';
import './styles/style.css'
import resumeFile from './assets/files/Rishant_Rokaha_Resume.pdf'
import resume from './assets/images/resume.png';

function Resume(){
    return(
        <section className="resume-section">
            <Container className="themed-container content-box" fluid={true}>
                <Row> 
                    <Col xl={{size:10, offset:1 }}>
                        <div className="resume-header justify-content-center">
                            <h2 className="text-center">Resume</h2>
                        </div>
                      
                        <figure className="resume-image mt-5">
                                <img src={resume} className="res-img"  alt="resume" />
                        </figure>  
                        <div className="download-button">
                            <Button style={{backgroundColor:"#6200EE" }} className="justify-content-center" >
                                <a href={resumeFile}  download>Download Resume</a>  
                            </Button>
                        </div> 
            
                    </Col>
                </Row>
            </Container>
        </section>
        
    
    )
}




export default Resume;