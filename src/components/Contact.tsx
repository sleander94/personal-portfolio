import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [confirmation, setConfirmation] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleInputChange =
    (key: keyof FormData) => (e: React.SyntheticEvent) => {
      let target = e.target as HTMLInputElement;
      let data = formData;
      data[key] = target.value;
      setFormData({ ...data });
    };

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (form.current == null) return;

    setSending(true);

    emailjs
      .sendForm(
        'portfolio_contact',
        'portfolio_contact',
        form.current,
        'FtTTldF4Q_0Mj1uWj'
      )
      .then(
        (result) => {
          setSending(false);
          setConfirmation('Email sent successfully.');
          setFormData({
            name: '',
            company: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setConfirmation('Error sending email. Please try again.');
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="contact-header">
        <div></div>
        <h1>Contact</h1>
        <div></div>
      </div>
      <div className="contact-body">
        <p className="contact-message">
          I'm currently searching for a full-time position. Feel free to reach
          out with any questions, comments, or opportunities and I'll be happy
          to get back to you.
        </p>
        <p className="confirmation">
          <em>{confirmation}</em>
        </p>
        <form ref={form} onSubmit={sendEmail}>
          {sending && <div className="sending"></div>}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange('name')}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange('company')}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange('email')}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange('message')}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
