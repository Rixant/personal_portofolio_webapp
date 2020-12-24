import React from 'react';
import rightPic from './assets/rixant2.jpg';
import leftPic from './assets/flags.jpg';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './styles/myStyle.css'


const Profile=()=>{
    return(
    <section class="hero-section spad">
       <Container className="themed-container content-box" fluid={true}>
            <Row>
                <Col xl={{size:10, offset:1 }}>
                    <Row>
                        <Col lg={{size:6}} className="info-box">
                            <div className="hero-text" >
                                <h2> Rixant Rokaha</h2>
                                <p> Aspiring Machine Learning Engineer</p>
                            </div>
                            <div className="hero-info " >
                                <h2 > General Info</h2>
                                <ul>
                                    <li><span>Date of Birth</span>Feb 20, 1997</li>
                                    <li><span>Address</span>Bloomfield, New Jersey, US</li>
                                    <li><span>E-mail</span>rishantrokaha@gmail.com</li>
                                    <li><span>Phone </span>+1 973 652 4487</li>
                                </ul> 
                            </div>
                        </Col>
                        <Col lg={{size:6}}>
                            <figure className="hero-image">
                                <img src={rightPic} className="my-image" />
                            </figure>
                        </Col>
                    </Row>
                </Col>
            </Row>  
        </Container>
        </section>
    )

    
}


const Social={

}


function Home(){
    return(
        
        
        <Container className="themed-container content-box m-0 p-0"  fluid={true}>
            <Profile />
        </Container>

    
    )
}





export default Home;
