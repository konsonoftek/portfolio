import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactStyles = styled.div`
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  
  @media(max-width:968px){
    width:100vw;
  }
`;

const Form = styled.form`
  border-radius:10px;
  box-shadow: 0 4px 8px 0 rgba(0, 32, 53, 0.3), 0 6px 20px 0 rgba(0, 32, 53, 0.2);
  width:600px;
  padding:3.5rem;
  margin-top:4rem; 

  input,
  textarea{
    width:100%;
    padding:1rem;
    margin:0.5rem auto;
    font-size:1rem;
    outline:0;
    border:1px solid #006d65;
  }
  textarea {
    resize:none;
    height:200px;
  }
  h2{
    text-align:center;
    font-family:'Nunito';
    font-size:1.6rem;
    color: #006d65;
  }
  hr{
    width:40%;
    opacity:0.5;
    margin:1rem auto;
  }
  button {
    border:0;
    outline:0;
    padding:1.5rem 3rem;
    font-size:1.4rem;
    cursor: pointer;
    background:#006d65;
    color:#fff;
    border:1px solid #006d65;
    border-radius:10px;
    font-family:'Nunito';
    width:100%;
  } 
`;

const Contact = () => {
  const [data, setData] = useState({ name: '', email: '', subject:'', message: '', sent: false, buttonText: 'Submit', err: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  const resetForm = () => {
    setData({
      name: '',
      email: '',
      subject: '',
      message: '',
      sent: false,
      buttonText: 'Submit',
      err: ''
  });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    setData({
      ...data,
      buttonText: 'Sending...'
  })

    axios.post('/api/email', data)
    .then(res => {
        if(res.data.result !=='success') {
            setData({
                ...data,
                buttonText: 'Failed to send',
                sent: false,
                err: 'fail'
            })
            setTimeout(() => {
                resetForm()
            }, 6000)
        } else {
            setData({
                ...data,
                sent: true,
                buttonText: 'Sent',
                err: 'success'
            })
            setTimeout(() => {
                resetForm();
            }, 2000)
        }
    }).catch( (err) => {
      console.log(err.response.status);
      console.log(data);
        setData({
            ...data,
            buttonText: 'Failed to send',
            err: 'fail'
        })
    })
  }
  return (
    <ContactStyles>
      <Form method="post" onSubmit={handleSubmit}>
        <h2>Contact me for freelancing projects</h2>
        <hr />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}  
          />
        <input
          type="email"
          name="email"
          placeholder="Email" 
          value={data.email}
          onChange={handleChange}
          />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={data.subject}
          onChange={handleChange}
        />
        <textarea
          placeholder="Type your message here . . ." 
          name="message"
          value={data.message}
          onChange={handleChange}
          />
        <motion.button
          type="submit"
          whileHover={{
          backgroundColor: "#01A89C",
        }}
        >
          {data.buttonText}
          </motion.button>
      </Form>
    </ContactStyles>
  );
}

export default Contact;