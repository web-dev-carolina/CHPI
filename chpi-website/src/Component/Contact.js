import React from 'react'
import '../CSS/Contact.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap';
import '../App.css'

function Contact(){
    return (
        <div className="contact">
            <Form className="formcontainer">
            <Form.Group controlId="formBasicName" class="fullname">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="Enter full name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="select">
                    <option>Select a Topic</option>
                    <option>Get Involved</option>
                    <option>Donate</option>
                    <option>Data/Research</option>
                    <option>Other</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Button class="secondary-color" type="Message">
                Submit
            </Button>
            </Form>
        </div>
    )
}
export default Contact;