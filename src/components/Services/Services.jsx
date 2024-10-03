import React from 'react';
import './services.css'; // Import the CSS file
import websiteImage from '../../assets/images/web-design-header.jpg'; // Import the image

const Services = () => {
  return (
    <section id='services' className="services-section">
      <h2 className="services-title">Xizmat turi</h2>
      <div className="services-container">
        <div className="services-image">
          <img src={websiteImage} alt="Services" />
        </div>
        <div className="services-content">
          <h3 className="service-heading">Veb-sayt</h3>
          <ul className="services-list">
            <li>Foydalanuvchilar uchun qulay va intuitiv interfeys</li>
            <li>Zamonaviy dizayn — sizning brendingizga mos keladigan!</li>
            <li>Bizda arzon narxlar 30$dan boshlanadi</li>
            <li>Tez yuklanish va yuqori ishlash ko'rsatkichlari</li>
            <li>100% mijozga moslashtirilgan yechimlar</li>
            <li>Muvaffaqiyatga olib keladigan dizayn strategiyalari</li>
            <li>Tezkor aloqa va professional qo'llab-quvvatlash</li>
            <li>📞 Bugun aloqaga o'ting! Biznesingizni onlayn olamda muvaffaqiyatga erishishingiz uchun birinchi qadamni qo'ying!</li>
          </ul>
          <li><a href="#faq" className="services-button">Qo'ng'iroq qiling</a></li>
        </div>
      </div>
    </section>
  );
};

export default Services;
