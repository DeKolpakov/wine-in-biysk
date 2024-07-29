import React from 'react';
import inVino_logo from '../../images/logo/inVino_logo.png';
import vinoteka_logo from '../../images/logo/vinoteka_logo.png';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__logo'>
      <img className='logo' src={inVino_logo} alt='' />
      <img className='logo' src={vinoteka_logo} alt='' />
    </div>

    <div className='footer__info'>
      Чрезмерное употребление алкоголя вредит вашему здоровью. <br /> Продажа спиртных напитков не осуществляется.
    </div>
    <div className='footer__contacts'>
      <div className='contact footer__tg'></div>
      <div className='contact footer__wa'></div>
      <div className='contact footer__inst'></div>
    </div>
  </footer>
);

export default Footer;
