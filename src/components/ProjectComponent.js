import React, { Component } from 'react';
import { Media, Container, Row, Col} from 'reactstrap';
import {CardDeck,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { PROJECTS } from './shared/Works';

import './styles/myStyle.css'




class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS,
        };
    }


    
    

    render() {
      const menu = this.state.projects.map((project) => {
          return (
      
            <div key={project.id} className="project-content" >
    <CardDeck className="mb-5">
        <Card rowSize={3} cardSize={2} className="mb-3 mt-3" style={{backgroundColor:"#111111"}}>
            {/* <CardImg top  src="" alt="alt" /> */}
            <CardBody>
                <CardTitle tag="h5"><h2>{project.name}</h2></CardTitle>
<CardSubtitle tag="h6" className="mb-2 text-muted">{project.subtitle}</CardSubtitle>
                <CardText>{project.description}</CardText>
                <Button style={{backgroundColor:"#b96500" }}>See Github Repository</Button>
            </CardBody>
        </Card>
       
      </CardDeck>
    </div>
            

        
          );
      });

      return (
        <section className="works-section spad " >
          
        <Container className="themed-container card-box" fluid={true}>
        
            <Row>
                <Col xl={{size:10, offset:1 }}>
                <h1 className="mb-4 ml-5" > Projects </h1>
                <hr className="d-sm-none ml-4" />
                <hr className="d-none d-sm-block  ml-3"/>
                    <Row>
                        
            <Media list>
                {menu}
            </Media>
    
            </Row>
            </Col>
            </Row>
        </Container>
        </section>

      );
  }
}

export default Projects;