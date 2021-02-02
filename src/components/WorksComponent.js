import React, { Component } from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import { PROJECTS } from './shared/Works';

import './styles/myStyle.css'




class Works extends Component {
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
                <Media  body >
                  <Media heading><h2>{project.name}</h2></Media>
                  <p>{project.description}</p>
                </Media>
              {/* </Media> */}
              <hr className="d-sm-none " />
              <hr className="d-none d-sm-block "/>
            </div>
            

        
          );
      });

      return (
        <section className="works-section " >
          <h1 > Projects </h1>
        <Container className="themed-container" fluid={true}>
            <Row>
                <Col md={{size:8, offset:3/2 }}>
                    <Row>
                        <Col>
            <Media list>
                {menu}
            </Media>
            </Col>
            </Row>
            </Col>
            </Row>
        </Container>
        </section>

      );
  }
}

export default Works;