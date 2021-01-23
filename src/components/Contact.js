import { useState } from 'react';
import emailjs, { init }  from 'emailjs-com';
import styled from 'styled-components';
import { motion } from 'framer-motion';

init("user_C8s5kqzohKIEtX9F9viGX");

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
  const [data, setData] = useState({ name: '', email: '', subject:'', message: ''});
  
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
      message: ''
  });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    const templateParams = {
      me: 'Konstantin',
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message
    }
      emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, 'user_C8s5kqzohKIEtX9F9viGX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    resetForm();
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
          Submit
          </motion.button>
      </Form>
    </ContactStyles>
  );
}

export default Contact;