// src/components/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting me!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact">
      <Title>Let's Work Together</Title>
      <Subtitle>I'd love to hear from you. Fill out the form below to get in touch!</Subtitle>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </Section>
  );
};

export default Contact;

// Styled-components
const Section = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2d3436;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #636e72;
  margin-bottom: 40px;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border 0.3s ease;

  &:focus {
    border-color: #0984e3;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border 0.3s ease;

  &:focus {
    border-color: #0984e3;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 14px;
  font-size: 16px;
  background-color: #0984e3;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #74b9ff;
  }
`;
