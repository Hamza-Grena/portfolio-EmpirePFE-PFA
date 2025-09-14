import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

     if (name !== '' && email !== '' && message !== '') {
       var templateParams = {
         name: name,
         email: email,
        message: message,
        emailreceiver:"hamzagr707@gmail.com"
      };

      //console.log(templateParams);
      emailjs.send('service_grf0o3v', 'template_qitimof', templateParams,'1FWSlbN07pmJwSn7c').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

 return (
  <div id="contact">
    <div className="items-container">
      <div className="contact_wrapper">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">
          Got a project waiting to be realized? Let’s collaborate and make it happen!
        </p>
        <Box
          ref={form}
          component="form"
          noValidate
          autoComplete="off"
          className="contact-form"
        >
          <div className="form-flex">
            <TextField
              required
              label="Your Name"
              placeholder="What's your name?"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={nameError ? "Please enter your name" : ""}
              fullWidth
            />
            <TextField
              required
              label="Email / Phone"
              placeholder="How can I reach you?"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? "Please enter your email or phone number" : ""}
              fullWidth
            />
          </div>
          <TextField
            required
            label="Message"
            placeholder="Send me any inquiries or questions"
            multiline
            rows={6}
            variant="outlined"
            className="body-form"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={messageError}
            helperText={messageError ? "Please enter the message" : ""}
            fullWidth
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={sendEmail}
            className="send-btn"
          >
            Send
          </Button>
        </Box>
      </div>
    </div>
  </div>
);

}

export default Contact;