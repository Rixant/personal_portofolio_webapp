import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './styles/style.css'


function Contact(){
        return(
        
            <section className="contact-section">
                <Container className="themed-container contact-box" fluid={true}>
                    <Row> 
                        <Col xl={{size:8, offset:2}}>
                            <Row>
                                <Col >
                                <div className="hero-info" >
                                    <h2 >Contact Us</h2>
                                    <hr className="" />
                                </div>
                                <ContactForm />

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        
        )
    }


    function ContactForm(){
        return(
            
            <Form>
                <FormGroup>
                    <Label for="first-name">First Name</Label>
                    <Input type="text" name="first-name" id="first-name" placeholder="Enter your first name" />
                </FormGroup>
                <FormGroup>
                    <Label for="last-name">Last Name</Label>
                    <Input type="text" name="last-name" id="last-name" placeholder="Enter your last name" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email Address</Label>
                    <Input type="email" name="email" id="email" placeholder="Enter your email address" />
                </FormGroup>
                <FormGroup>
                    <Label for="topic">Subject</Label>
                    <Input type="text" name="topic" id="topic" placeholder=" Job Offer / Project Collaboration" />
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input type="textarea"  rows="7" name="message" id="message"  placeholder=" Hi Rixant, "/>
                </FormGroup>
                <FormGroup>
                    <Label for="file">File</Label>
                    <Input type="file" name="file" id="file" />
                    <FormText color="muted">
                    </FormText>
                </FormGroup>
                <Button style={{backgroundColor:"#6200EE" }} className="mt-3">Send</Button>
            </Form>
            
        
        )
    
    }


    


export default Contact;