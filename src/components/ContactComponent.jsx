import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as emailjs from 'emailjs-com';
import './styles/style.css'


function Contact(){
        return(
        
            <section className="contact-section">
                <Container className="themed-container contact-box" fluid={true} >
                    <Row > 
                        <Col xl={{size:8, offset:2}} >
                            <Row >
                                <Col >
                                <div className="contact-header" >
                                    <h2 className="text-center" >Contact Us</h2>
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


    class ContactForm extends Component{
        constructor(props) {
            super(props);
            this.state = { firstName: "", lastName: "", subject:"", email: "", message:""};
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }

          handleChange = (event) => {
            this.setState({[event.target.name]: event.target.value});
               
          };

          handleSubmit = (event) => {
              event.preventDefault();
              emailjs.sendForm(
                  "service_hvyan6s",
                  "template_7jl43pi",
                  ".contact-form-class",
                  "user_yEuUIG00KVqFYhoBdlCCO"
              )
              .then()
              .catch();
              this.setState({
                  firstName:"",
                  lastName:"",
                  email:"",
                  subject:"",
                  message:""

              })
           
          }

        render(){
        return(
            
            <Form className="contact-form-class" onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup>
                    <Label for="first-name">First Name</Label>
                    <Input style={{background:"#222222", color: "white"}} type="text" name="firstName"  value={this.state.firstName} onChange={this.handleChange.bind(this)} placeholder="Enter your first name" />
                </FormGroup>
                <FormGroup>
                    <Label for="last-name">Last Name</Label>
                    <Input  style={{background:"#222222", color: "white"}} type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange.bind(this)}  placeholder="Enter your last name" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email Address</Label>
                    <Input style={{background:"#222222", color: "white"}} type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} placeholder="Enter your email address" />
                </FormGroup>
                <FormGroup>
                    <Label for="topic">Subject</Label>
                    <Input style={{background:"#222222", color: "white"}} type="text" name="subject" value={this.state.subject} onChange={this.handleChange.bind(this)}  placeholder=" Job Offer / Project Collaboration" />
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input style={{background:"#222222", color: "white"}} type="textarea"  rows="7" name="message" value={this.state.message} onChange={this.handleChange.bind(this)}  placeholder=" Hi Rixant, "/>
                </FormGroup>
                <FormGroup>
                    <Label for="file">File</Label>
                    <Input  type="file" name="file" />
                    <FormText color="muted">
                    </FormText>
                </FormGroup>
                <Button style={{backgroundColor:"#f6f6e7", fontWeight:"500", color:"black" }} className="mt-3 mb-5" type="submit" value="Submit" onClick={this.handleSubmit}>Send</Button>
            </Form>
        )
            
        
    }
    
    
    }


 
        
    


    


export default Contact;