import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './styles/myStyle.css'

function Resume(){
    return(
        <section className="resume-section">
            <Container className="themed-container content-box" fluid={true}>
                <Row> 
                    <Col xl={{size:10, offset:1 }}>
                        <Row >
                            {/* <div  className="" style={{backgroundColor:"#111111"}}> */}
                            <Col className="leftColumn "  sm="10" md="4" >
                                <Row className="rounded mb-2 pl-3 pr-3 box">
                                
                                    <h1 className="d-flex justify-content-center pt-4"> Rishant Rokaha</h1>
                                    <hr></hr>
                                    <ul>
                                        <p> Student, Caldwell University</p>
                                        <p> rrokaha@caldwell.edu</p>
                                        <p> (973) 652-4487</p>
                                        <p> 201 Watsessing Avenue Bloomfield, New Jersey, 07003</p>
                                    </ul>
                
                                    

                                </Row>
                                <Row className="rounded mb-2 pl-3 pr-3 box">
                                    <h1 className="d-flex justify-content-center pt-4"> Education</h1>
                                    <hr />
                                    <ul>
                                    <p> CALDWELL UNIVERSITY</p>
                                    <p> GPA : 3.88</p>
                                    <p> Caldwell, NJ</p>
                                    <p> Undergraduate Mathematics and Computer Science Candidate(expected graduation Apr 2022)</p>
                                    <p>Extracurricular Activities</p>
                                    <ul>
                                        <li>Orchid Garden Nepal</li>
                                        <li>Community Food Bank NJ</li>
                                    </ul>
                                    </ul>
                                </Row>
                                <Row className="rounded mb-2 pl-3 pr-3  box">
                                    <h1 className="d-flex justify-content-center pt-4"> Additional skills</h1>
                                    <hr></hr>
                                    <ul>
                                        <p>Machine Learning</p>
                                        <p>Data Analysis</p>
                                    </ul>
                                </Row>
                            </Col>
                            <Col  className="rightColumn" sm="10" md="7">
                                <Row className="rounded mb-2 pl-3 pr-3 box"> 
                                    <h1 className="d-flex justify-content-center pt-4"> Career Objective</h1>
                                    <hr></hr>
                                    <ul>
                                    <p>Diligent Mathematics and Computer Science major (3.88 GPA) currently attending Caldwell University, with
                                        1 year of work experience. Aiming to leverage a proven knowledge of trouble shooting, recovery and backup procedures, and network setup/installation skills
                                        to successfully fill the Data Analytics ROle at your company. Frequently praised as fcused by my peers,
                                        I can be relied upon to help your company achieve its goals.
                                    </p>
                                    </ul>

                                </Row>
                                <Row className="rounded mb-2 pl-4 pr-3 box">
                                    <h1 className="d-flex justify-content-center pt-4"> Experience</h1>
                                    <hr />
                                    <ul>
                                    <h5>IT Techinician </h5>
                                    <p> Caldwell University, CAldwell Jan 2020 - Present</p>
                                    </ul>
                                

                                </Row>
                                <Row className="rounded mb-2 pl-4 pr-3 box">
                                    <h1 className="d-flex justify-content-center pt-4"> Projects</h1>
                                    <hr />
        
                                </Row>
                            </Col>
                            {/* </div> */}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
        
    
    )
}




export default Resume;