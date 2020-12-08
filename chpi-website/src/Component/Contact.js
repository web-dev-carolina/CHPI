import React from 'react'
import '../CSS/Contact.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap';
import '../App.css'
import { Axios, db } from '../firebase/firebaseConfig'

function Contact(){
    return (
        <div>
            {/* <ScriptTag type="text/javascript" src="../firebase.js" /> */}
        <div className="contact">
            <Form className="formcontainer">
            <Form.Group controlId="formBasicName" className="fullname">
                <Form.Label>Full Name *</Form.Label>
                <Form.Control  type="name" placeholder="Enter full name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Subject *</Form.Label>
                <Form.Control as="select">
                    <option>Select a Topic</option>
                    <option>Get Involved</option>
                    <option>Donate</option>
                    <option>Data/Research</option>
                    <option>Other</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
                <Form.Label>Message *</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Button id="contact-submit" onClick={handleSubmit} className="secondary-color" >
                Submit
            </Button>
            </Form>
        </div>
        </div>

        
        
    )
}
//do not change


  //TODO: addEvent listener to submit, with handleSubmit fn
  // handle submit fn should get name,email,subject,message through document.getElementById.innerHTML
  // pass these values into firebasePush()


  function handleSubmit(event){
      event.preventDefault();

      console.log("handling submit request")
      var nameValue = document.getElementById("formBasicName").value;
      var emailValue = document.getElementById("formBasicEmail").value;
      var subjectValue = document.getElementById("exampleForm.ControlSelect1").value;
      var messageValue = document.getElementById("formBasicMessage").value;



    //   console.log("Name: " + nameValue);
    //   console.log(typeof nameValue);

    //   console.log("Email: " + emailValue);
    //   console.log(typeof emailValue);

    //   console.log("Subject: " + subjectValue);
    //   console.log(typeof subjectValue);

    //   console.log("Message: " + messageValue);
    //   console.log(typeof messageValue);

      if(nameValue == ''){
        alert("Name Required");
        return;
      }

      if(emailValue == ''){
          alert("Email Required");
          return;
      }

      if(subjectValue == 'Select a Topic'){
          alert("Subject Required");
          return;
      }

      if(messageValue == ''){
          alert("Message Required");
          return;
      }

        
        console.log("pushing to firebase");
       //firebasePush(nameValue, emailValue, subjectValue, messageValue);

       sendEmail(nameValue, emailValue, subjectValue, messageValue);

  };

  function sendEmail(name, email, subject, message) {
      console.log({
        name, email, message, subject
    });
    Axios.post(
        'https://us-central1-chpi-contact.cloudfunctions.net/submit',
        {
            name, email, message, subject
        }
      )
        .then(res => {
        //   db.collection('emails').add({
        //     Name: name,
        //     Email: email,
        //     Message: message,
        //     Subject: subject,
        //   })
        console.log("SUCCESS!");
        })
        .catch(error => {
          console.log(error)
        })
  }



export default Contact;