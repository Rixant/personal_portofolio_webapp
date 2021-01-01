import React from 'react';
import rightPic from './assets/rixant2.jpg';
import leftPic from './assets/flags.jpg';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import './styles/myStyle.css'


const Profile=()=>{
    return(
    <section className="hero-section spad">
       <Container className="themed-container content-box" fluid={true}>
            <Row>
                <Col xl={{size:10, offset:1 }}>
                    <Row>
                        <Col sm="12" md={{ size: 6}} className="info-box">
                            <div className="hero-text" >
                                <h2> Rixant Rokaha</h2>
                                <hr></hr>
                                <p> Aspiring Machine Learning Engineer</p>
                            </div>
                            <div className="hero-info .d-lg-inline-block d-block " >
                                <h2 > General Info</h2>
                                <hr></hr>
                                <ul>
                                    <li><span className="d-block d-xs-block d-lg-inline-block">Date of Birth </span> Feb 20, 1997</li>
                                    <li><span className="d-block d-xs-block d-lg-inline-block">Address </span>Bloomfield, New Jersey, US</li>
                                    <li><span className="d-block d-xs-block d-lg-inline-block">E-mail </span>rishantrokaha@gmail.com</li>
                                    <li><span className="d-block d-xs-block  d-lg-inline-block">Phone </span>+1 973 652 4487</li>
                                </ul> 
                            </div>
                        </Col>
                        <Col sm="12" md={{ size: 6 }}>
                            <figure className="hero-image">
                                <img src={rightPic} className="my-image" />
                            </figure>
                            <Social />
                        </Col>
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
        <Container className="themed-container social-box" fluid={true}>      
            <Row>
                <Col xl={{size:10, offset:1}}>
                <h2 className="d-flex justify-content-center">My Social Links:</h2>
                    <div className="social-link-warp "> 
                        <hr></hr>
                        <div className="social-links">
                            <a href="https://www.facebook.com/Rixant/"><i className="fa fa-facebook"><FaFacebookF /></i></a>
                            <a href="https://www.instagram.com/rixxnt/"><i className="fa fa-instagram"><FaInstagram /></i></a>
                            <a href="https://twitter.com/Rixant08"><i  className="fa fa-twitter"><FaTwitter /></i></a>  
                            <a href="https://www.linkedin.com/in/rixant/"><i className="fa fa-linkedin"><FaLinkedinIn /></i></a>
                            <a href="https://github.com/Rixant"><i  className="fa fa-github"><FaGithub /></i></a>   
                        </div>
                        {/* <h2 class="d-none d-lg-inline-block d-sm-none d-md-none">My Social Profiles</h2> */}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    );

}


function Home(){
    return(
        
        
        <React.Fragment>
            <Profile />
        </React.Fragment>

    
    )
}





export default Home;
