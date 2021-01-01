import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './styles/myStyle.css'

function Resume(){
    return(
        <Container className="themed-container content-box" fluid={true}>
            <Row> 
                <Col xl={{size:10, offset:1 }}>
                    <Row>
                        <Col className="leftColumn"  xs="3">
                            <Row>
                                <h1> Rishant Rokaha</h1>
            
                                <p> Student, Caldwell University</p>

                            </Row>
                            <Row>
                                <h6> rrokaha@caldwell.edu</h6>
                                <p> (973) 652-4487</p>
                                <p> 201 Watsessing Avenue Bloomfield, New Jersey, 07003</p>

                            </Row>
                            <Row >
                                <h1> Education</h1>
                                <p> CALDWELL UNIVERSITY</p>
                                <p> GPA : 3.88</p>
                                <p> Caldwell, NJ</p>
                                <p> Undergraduate Mathematics and Computer Science Candidate(expected graduation Apr 2022)</p>
                                <p>Extracurricular Activities</p>
                                <ul>
                                    <li>Orchid Garden Nepal</li>
                                    <li>Community Food Bank NJ</li>
                                </ul>
                            </Row>
                            <Row>
                                <h1> Additional skills</h1>
                                <ul>
                                    <li>Machine Learning</li>
                                    <li>Data Analysis</li>
                                </ul>
                            </Row>
                        </Col>
                        <Col  xs="9">
                            <Row> 
                                <h1> Career Objective</h1>
                                <p>Diligent Mathematics and Computer Science major (3.88 GPA) currently attending Caldwell University, with
                                    1 year of work experience. Aiming to leverage a proven knowledge of trouble shooting, recovery and backup procedures, and network setup/installation skills
                                    to successfully fill the Data Analytics ROle at your company. Frequently praised as fcused by my peers,
                                    I can be relied upon to help your company achieve its goals.
                                </p>

                            </Row>
                            <Row>
                                <h1> Experience</h1><br></br>
                                <h3>IT Techinician </h3><br></br>
                                <p> Caldwell University, CAldwell Jan 2020 - Present</p>

                            </Row>
                            <Row>
                                <h1> Projects</h1>

                            </Row>


                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    
    )
}


export default Resume;