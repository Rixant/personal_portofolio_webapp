import React, { Component } from 'react';
import { Media} from 'reactstrap';
import {CardDeck,
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { PROJECTS } from './shared/Projects';

import './styles/style.css'




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
        <Card  className="pb-3 pt-3" style={{backgroundColor:"#222222", borderRadius:"10px"}}>
            <CardBody>
                <CardTitle tag="h5"><h2>{project.name}</h2></CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{project.subtitle}</CardSubtitle>
                <CardText>{project.description}</CardText>
                <Button  className="repo-button" style={{backgroundColor:"#f6f6e7", fontWeight:"500"}}><a href={project.repo}>See Github Repository</a> </Button>
            </CardBody>
        </Card>
       
      </CardDeck>
    </div>
            

        
          );
      });

      return (
                        
            <Media list className="pl-0">
                {menu}
            </Media>

      );
  }
}

export default Projects;