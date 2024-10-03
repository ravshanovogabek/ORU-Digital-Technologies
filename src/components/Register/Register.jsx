import React from 'react';
import './register.css';

const Register = ({ image, title, duration, description, price }) => (
  <section id='register' className="register-card">
    <img src={image} alt="course" className="register-image" />
    <div className="register-content">
      <div className="register-header">
        <h1 className="register-title">{title}</h1>
        <span className="register-duration">Davomiyligi: {duration}</span>
      </div>
      <p className="register-description">{description}</p>
    </div>
    <div className="register-footer">
      <a href="#faq" className="register-button">Ro'yxatdan O'tish</a>
      <span className="register-price">{price}</span>
    </div>
  </section>
);

const Courses = () => (
  <div className="courses-container">
    <h1 className="courses-title">O’zingizga mos kursga ro’yxatdan o’ting</h1>
    <div className="courses-list">
      <Register
        image="https://topic-academy.vercel.app/assets/mainimg-B-oYHcso.png"
        title="Intiensive"
        duration="5 oy"
        description="Koreys tilini chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs."
        price="970.000 so’m /oy"
      />
      <Register
        image="https://topic-academy.vercel.app/assets/course2-CL2v8SSW.webp"
        title="Odatiy"
        duration="5 oy"
        description="Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari."
        price="560.000 so’m /oy"
      />
      <Register
        image="https://topic-academy.vercel.app/assets/course3-BOmH7N_e.webp"
        title="Individual"
        duration="5 oy"
        description="O’qituvchidan individual dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv."
        price="1.800.000 so’m /oy"
      />
    </div>
  </div>
);

export default Courses;
