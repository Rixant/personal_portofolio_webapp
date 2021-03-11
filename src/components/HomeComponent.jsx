import React from 'react';
import rightPic from './assets/images/rixant2.jpg';
import {Container, Row, Col } from 'reactstrap';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import './styles/style.css'
import Projects from './ProjectComponent';




const Profile=()=>{
    return(
    <section className="hero-section spad mb-5" >
       <Container className="themed-container content-box " fluid={false}>
            <Row>
                <Col xl={{size:10, offset:1 }}>
                    <Row>
                        <Col sm="12" lg={{ size: 6}} className="info-box">
                            <div className="hero-text" >
                                <h2>Rixant Rokaha</h2>
                                <hr />
                                <p>Machine Learning | Software Engineer</p>
                            </div>
                            <div className="hero-info .d-lg-inline-block d-block " >
                                <h2 > General Info</h2>
                                <hr  />
                                <ul>
                                    <li><span className="d-block d-md-inline-block">Date of Birth </span>Feb 20, 1999</li>
                                    <li><span className="d-block d-md-inline-block">Address </span>Bloomfield, New Jersey, US</li>
                                    <li><span className="d-block  d-md-inline-block">E-mail </span>rixantrokaha@gmail.com</li>
                                    <li><span className="d-block d-md-inline-block">Phone </span>+1 973 652 4487</li>
                                </ul> 
                            </div>
                        </Col>
                        <Col sm="12" lg={{ size: 6}}>
                            <figure className="hero-image">
                                <img src={rightPic} className="my-image"  alt="myimage" />
                            </figure>
                            <Social />
                        </Col>
                    
                    </Row>
                   
                    <Row >
                        <div className="projects-section">
                            <div className="project-header"> 

                        <h1 > Projects</h1>
                        <hr />
                        </div>

                        <Projects />
                        </div>
                    </Row>
                </Col>
            </Row>  
        </Container>
        </section>
    )

    
}


const Social=()=>{
    return(
    <section className="social-section">
                <h2 className="d-flex justify-content-center">Social Profiles</h2>
                    <div className="social-link-warp "> 
                        <hr className="" />
                        <div className="social-links ">
                            <a href="https://www.facebook.com/Rixant/"><i className="fa fa-facebook"><FaFacebookF /></i></a>
                            <a href="https://www.instagram.com/rixxnt/"><i className="fa fa-instagram"><FaInstagram /></i></a>
                            <a href="https://twitter.com/Rixant08"><i  className="fa fa-twitter"><FaTwitter /></i></a>  
                            <a href="https://www.linkedin.com/in/rixant/"><i className="fa fa-linkedin"><FaLinkedinIn /></i></a>
                            <a href="https://github.com/Rixant"><i  className="fa fa-github"><FaGithub /></i></a>   
                        </div>
                    </div>
    </section>
    
    );

}


function Home(){

 
    return(
        <React.Fragment >
            <Profile />   
        </React.Fragment>

    
    )
}








export default Home;
