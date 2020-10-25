// import React, { Component } from 'react';
// import emailjs from 'emailjs-com';

// // Email validation
// const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// // Form validation
// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // Validate form errors being empty
//   Object.values(formErrors).forEach((val) => {
//     val.length > 0 && (valid = false);
//   });

//   // Validate the form was filled out
//   Object.values(rest).forEach((val) => {
//     val === '' && (valid = false);
//   });

//   return valid;
// };

// class ContactForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//       formErrors: {
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//       },
//     };
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();

//     if (formValid(this.state)) {
//       // Handle form validation success
//       const { name, email, subject, message } = this.state;

//       // Set template params
//       let templateParams = {
//         name: name,
//         email: email,
//         subject: subject,
//         message: message,
//       };
//       emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'userID');

//       console.log(`
//         --SUBMITTING--
//         Name: ${name}
//         Email: ${email}
//         Subject: ${subject}
//         Message: ${message}
//       `);

//       this.resetForm();
//     } else {
//       // Handle form validation failure
//       console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
//     }
//   };

//   // Function to reset form
//   resetForm() {
//     this.setState({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     });
//   }

//   handleChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     let formErrors = { ...this.state.formErrors };

//     switch (name) {
//       case 'name':
//         formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
//         break;
//       case 'email':
//         formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
//         break;
//       case 'subject':
//         formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
//         break;
//       case 'message':
//         formErrors.message = value.length < 1 ? 'Please enter a message' : '';
//         break;
//       default:
//         break;
//     }
//     this.setState({ formErrors, [name]: value });
//   };

//   render() {
//     const { formErrors } = this.state;

//     return (
//       <div className='ContactForm'>
//         <form id='contact-form' onSubmit={this.handleSubmit} noValidate>
//           <div className='row'>
//             <div className='col-6'>
//               <input
//                 type='text'
//                 name='name'
//                 value={this.state.name}
//                 className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
//                 onChange={this.handleChange}
//                 placeholder='Name'
//                 noValidate
//               ></input>
//               {formErrors.name.length > 0 && (
//                 <span className='errorMessage'>{formErrors.name}</span>
//               )}
//             </div>

//             <div className='col-6'>
//               <input
//                 type='email'
//                 name='email'
//                 value={this.state.email}
//                 className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
//                 onChange={this.handleChange}
//                 placeholder='Email'
//                 noValidate
//               ></input>
//               {formErrors.email.length > 0 && (
//                 <span className='errorMessage'>{formErrors.email}</span>
//               )}
//             </div>
//           </div>

//           <div className='row'>
//             <div className='col-6'>
//               <input
//                 type='subject'
//                 name='subject'
//                 value={this.state.subject}
//                 className={`form-control formInput ${
//                   formErrors.subject.length > 0 ? 'error' : null
//                 }`}
//                 onChange={this.handleChange}
//                 placeholder='Subject'
//                 noValidate
//               ></input>
//               {formErrors.subject.length > 0 && (
//                 <span className='errorMessage'>{formErrors.subject}</span>
//               )}
//             </div>

//             <div className='col-6'>
//               <textarea
//                 rows='5'
//                 name='message'
//                 value={this.state.message}
//                 className={`form-control formInput ${
//                   formErrors.message.length > 0 ? 'error' : null
//                 }`}
//                 onChange={this.handleChange}
//                 placeholder='Message'
//                 noValidate
//               ></textarea>
//               {formErrors.message.length > 0 && (
//                 <span className='errorMessage'>{formErrors.message}</span>
//               )}
//             </div>
//           </div>
//           <button className='submit-btn' type='submit'>
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ContactForm;

import React from 'react'
import '../CSS/Contact.css';


function Contact(){
    return (
        <div className="contact">
            <div className="wrapper">
                <div className="title">
                    <h1>Contact Us</h1>
                </div>
                {/* <div className="content">
                    <h4> A UNC student-founded platform to keep Chapel Hill's most vulnerable residents from becoming homeless and to educate the UNC community about the underlying causes of mass homelessness. 
                    In Chapel Hill, we are the only source of diversion funding - the most immediate and research-backed means to prevent homelessness.</h4>
                </div> */}
            </div>
        </div>
    )
}

// (function ($) {
//     "use strict";



  
  
//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');

//     $('.validate-form').on('submit',function(){
//         var check = true;

//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }

//         return check;
//     });


//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//         });
//     });

//     function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else {
//             if($(input).val().trim() == ''){
//                 return false;
//             }
//         }
//     }

//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).removeClass('alert-validate');
//     }
    

// })(jQuery);

export default Contact;