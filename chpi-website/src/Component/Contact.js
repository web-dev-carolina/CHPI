import React from 'react'
import '../CSS/Contact.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap';
import '../App.css'
import firebase from 'firebase';

function Contact(){
    return (
        <div>
            {/* <ScriptTag type="text/javascript" src="../firebase.js" /> */}
        <div className="contact">
            <Form className="formcontainer">
            <Form.Group controlId="formBasicName" className="fullname">
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
            <Button id="contact-submit" className="secondary-color" >
                Submit
            </Button>
            </Form>
        </div>
        </div>

        
        
    )
}
//do not change
var firebaseConfig = {
    apiKey: "AIzaSyDBuOlw9NFZ5-P6uEJMRnc5nIR6SC3O8EY",
    authDomain: "chpi-contact.firebaseapp.com",
    databaseURL: "https://chpi-contact.firebaseio.com",
    projectId: "chpi-contact",
    storageBucket: "chpi-contact.appspot.com",
    messagingSenderId: "417414018305",
    appId: "1:417414018305:web:0c72d7e428a90a4ecf5700"
  };
  firebase.initializeApp(firebaseConfig);
  // Write to databse
  function firebasePush(name, email, subject, message) {
    // Ensures firebase is initialized 
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    // adds to contact dataset 
    firebase.database().ref('contact').push().set(
    {
        name,
        email,
        subject,
        message,
    });
  }
  //TODO: addEvent listener to submit, with handleSubmit fn
  // handle submit fn should get name,email,subject,message through document.getElementById.innerHTML
  // pass these values into firebasePush()
export default Contact;