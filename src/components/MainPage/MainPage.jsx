import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import EventCarousel from '../EventCarousel/EventCarousel';

import VideoMainBG from '../../images/video/wine-corks.mp4';
import PhotoMaksim from '../../images/Макс.png';
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import PhotoGalery from '../PhotoGalery/PhotoGalery';

const MainPage = () => {
 
  return (
    <div className='main-page'>
      <Header />
      <section className='block-1'>
        <video src={VideoMainBG} type='video/mp4' autoPlay muted loop></video>
        <img src={PhotoMaksim} alt='Сомелье Максим Неверов' />
        <div className='block-1__gradient'></div>
        <DynamicTitle />
        <div className='block-1__content'>
          <h1 className='block-1__title'>
            Искусство и&nbsp;наука дегустации <span>WINE</span> от&nbsp;профессионального сомелье
            <span> Максима&nbsp;Неверова</span>
          </h1>
          <button className='btn-tg'>Записаться на дегустацию</button>
        </div>
      </section>

      <section className='block-2'>
        {/* <div className='block-2__gradient'></div> */}
        {/*  <div className='block-2__container'>
          <img src={RoadImg} className='block-2__header-img' alt='Карта винных дегустаций' />

          <h2 className='block-2__header-title'>
            <span>Винные&nbsp;дегустации</span>
            <br />
            <span>в&nbsp;Новосибирске</span>
            <br />
            <span>в&nbsp;Барнауле</span>
            <br />
            <span>в&nbsp;Бийске</span>
            <br />
            <span>в&nbsp;Республике Алтай</span>
          </h2>

          <p className='block-2__title'>Встречи с друзьями</p>
          <div className='block-2__card'>
            Превратите обычную встречу с друзьями в запоминающееся событие с винной дегустацией. Независимо от повода, я
            предложу вам увлекательный формат, который позволит вам узнать больше о вине и насладиться приятной
            компанией. Мы можем устроить тематическую дегустацию или организовать игру, чтобы вечер прошел весело и
            познавательно.
          </div>
          <p className='block-2__title'>День рождения</p>
          <div className='block-2__card'>
            Сделайте ваш день рождения незабываемым с помощью винной дегустации. Я предложу вам и вашим гостям
            изысканные напитки и увлекательные рассказы о винах, чтобы ваш праздник стал особенным. Выбирайте между
            классическим форматом дегустации или игровыми элементами, такими как слепая дегустация или винное казино,
            чтобы добавить веселья и оригинальности в ваше торжество.
          </div>
          <p className='block-2__title'>Свадьбы</p>
          <div className='block-2__card'>
            Создайте незабываемую атмосферу на вашей свадьбе с помощью профессиональной винной дегустации. Я помогу вам
            и вашим гостям насладиться изысканными напитками, расскажу интересные факты о винах и предложу различные
            форматы дегустации, чтобы сделать ваш день особенным и запоминающимся.
          </div>
          <p className='block-2__title'>Корпоративы</p>
          <div className='block-2__card'>
            Организуйте уникальное и увлекательное корпоративное мероприятие с винной дегустацией. Это отличный способ
            порадовать сотрудников, укрепить командный дух и провести время в непринужденной обстановке. Мы можем
            предложить как образовательный формат, так и игровые элементы, чтобы разнообразить ваш корпоратив.
          </div>
        </div> */}
        <EventCarousel />
      </section>

      <section className='block-3'>
        <PhotoGalery />
      </section>

      <Footer />
    </div>
  );
};

export default MainPage;
