import React, { useState, useEffect } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = '7652934038:AAEbt0A3A69scO9AWNzsaUJ8eZwBkUbFiD0'; // Replace with your actual Telegram bot token
    const chatId = '7251438309'; // Replace with your actual chat ID or channel ID
    const text = `Ismi: ${name}\nTelefon: ${phone}\nSavol: ${message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setAlertMessage('Your message has been sent successfully!');
        setAlertType('success');
        setShowAlert(true);
        setName('');
        setPhone('');
        setMessage('');
      } else {
        setAlertMessage(`Failed to send message: ${data.description}`);
        setAlertType('error');
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setAlertMessage('Error sending message. Please try again later.');
      setAlertType('error');
      setShowAlert(true);
    }
  };

  return (
    <section id='faq' className="faq-container">
      <div className="contact-form-container">
        <div className="contact-form-content">
          <div className="contact-details">
            <h1 className="contact-title">Savollaringiz qoldimi?</h1>
            <p className="contact-description">Ma’lumotlaringizni qoldiring, siz bilan bog’lanib barcha savollaringizga javob beramiz.</p>
            {showAlert && (
              <div className={`alert ${alertType} ${showAlert ? 'show' : ''}`}>
                {alertMessage}
                <button className="alert-close" onClick={() => setShowAlert(false)}>&times;</button>
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Ismingiz" 
                className="contact-input" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
              <input 
                type="tel" 
                placeholder="+998 12 345 67 89" 
                className="contact-input" 
                name="phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
              <textarea 
                placeholder="Sizga qanday yordam bera olamiz" 
                className="contact-textarea" 
                name="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required 
              />
              <button type="submit" className="contact-button">Savol berish</button>
            </form>
          </div>

          {/* Embedding the map inside the same container */}
          <div className="map-section">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23981.850139050814!2d69.25496001971025!3d41.338529200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef484759a4c0b%3A0xc0090a92e733400b!2sIT%20Park%20Uzbekistan!5e0!3m2!1sen!2sus!4v1696350485685!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
