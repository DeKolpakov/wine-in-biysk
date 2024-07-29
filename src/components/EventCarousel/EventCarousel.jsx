// /src/components/Carousel.jsx

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useSpring используется для создания анимации, `x` управляет горизонтальным сдвигом
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  // useDrag обрабатывает жесты перетаскивания
  const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (!down && Math.abs(mx) > 20) { // Условие для переключения карточки при перетаскивании на 50px
      if (mx < 0) {
        setCurrentIndex((prev) => (prev + 1) % 4);
      } else {
        setCurrentIndex((prev) => (prev - 1 + 4) % 4);
      }
      api.start({ x: 0 }); // Сбрасываем положение анимации
    } else {
      api.start({ x: down ? mx : 0 }); // Обновляем положение анимации
    }
  });

  // Фиксированный массив карточек
  const cards = [
    { title: "Карточка 1", text: "Описание первой карточки", image: "https://via.placeholder.com/300x200.png?text=Image+1" },
    { title: "Карточка 2", text: "Описание второй карточки", image: "https://via.placeholder.com/300x200.png?text=Image+2" },
    { title: "Карточка 3", text: "Описание третьей карточки", image: "https://via.placeholder.com/300x200.png?text=Image+3" },
    { title: "Карточка 4", text: "Описание четвертой карточки", image: "https://via.placeholder.com/300x200.png?text=Image+4" },
  ];

  return (
    <div className='carousel-container'>
      <animated.div
        {...bind()}
        style={{
          width: '100%',
          height: '80dvh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: x.to((x) => `translateX(${x}px)`), // Применение текущей анимации смещения
        }}
      >
        {cards.map((item, index) => (
          <animated.div
            key={index}
            className={`card ${index === currentIndex ? 'active' : ''}`}
            style={{
              zIndex: index === currentIndex ? 10 : 1,
              opacity: index === currentIndex ? 1 : 0.5,
              filter: index === currentIndex ? 'none' : 'blur(5px)',
              transform: `scale(${index === currentIndex ? 1 : 0.8})`,
            }}
          >
            <Card {...item} />
          </animated.div>
        ))}
      </animated.div>
      <button className='next-button' onClick={() => setCurrentIndex((prev) => (prev + 1) % 4)}>
      </button>
    </div>
  );
};

const Card = ({ title, text, image }) => {
  return (
    <div className='card-content'>
      <img src={image} alt={title} style={{ height: '20%' }} />
      <h2 style={{ height: '10%' }}>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default EventCarousel;



/* // /src/components/Carousel.jsx

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useSpring используется для создания анимации, `x` управляет горизонтальным сдвигом
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  // useDrag обрабатывает жесты свайпа
  const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (down && distance > 20) {
      cancel();
      if (xDir < 0) {
        setCurrentIndex((prev) => (prev + 1) % 4);
      } else if (xDir > 0) {
        setCurrentIndex((prev) => (prev - 1 + 4) % 4);
      }
    }
    api.start({ x: down ? mx : 0 }); // Обновляем состояние анимации в зависимости от движения
  });

  // Функция для переключения на следующую карточку
  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % 4);
  };

  // Фиксированный массив карточек
  const cards = [
    { title: "Карточка 1", text: "Описание первой карточки", image: "https://via.placeholder.com/300x200.png?text=Image+1" },
    { title: "Карточка 2", text: "Описание второй карточки", image: "https://via.placeholder.com/300x200.png?text=Image+2" },
    { title: "Карточка 3", text: "Описание третьей карточки", image: "https://via.placeholder.com/300x200.png?text=Image+3" },
    { title: "Карточка 4", text: "Описание четвертой карточки", image: "https://via.placeholder.com/300x200.png?text=Image+4" },
  ];

  return (
    <div className='carousel-container'>
      <animated.div
        {...bind()}
        style={{
          width: '100%',
          height: '80dvh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: x.to((x) => `translateX(${x}px)`),
        }}
      >
        {cards.map((item, index) => (
          <animated.div
            key={index}
            className={`card ${index === currentIndex ? 'active' : ''}`}
            style={{
              zIndex: index === currentIndex ? 10 : 1,
              opacity: index === currentIndex ? 1 : 0.5,
              filter: index === currentIndex ? 'none' : 'blur(5px)',
              transform: `scale(${index === currentIndex ? 1 : 0.8})`,
            }}
          >
            <Card {...item} />
          </animated.div>
        ))}
      </animated.div>
      <button className='next-button' onClick={nextCard}>
        Next
      </button>
    </div>
  );
};

const Card = ({ title, text, image }) => {
  return (
    <div className='card-content'>
      <img src={image} alt={title} style={{ height: '20%' }} />
      <h2 style={{ height: '10%' }}>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default EventCarousel;
 */



/* import React, {useState} from 'react';

const events = {
  friendsMeeting: {
    title: 'Встреча с друзьями',
    description:
      'Превратите обычную встречу с друзьями в запоминающееся событие с винной дегустацией. Независимо от повода, я предложу вам увлекательный формат, который позволит вам узнать больше о вине и насладиться приятной компанией. Мы можем устроить тематическую дегустацию или организовать игру, чтобы вечер прошел весело и познавательно.',
  },
  birthday: {
    title: 'День рождения',
    description:
      'Сделайте ваш день рождения незабываемым с помощью винной дегустации. Я предложу вам и вашим гостям изысканные напитки и увлекательные рассказы о винах, чтобы ваш праздник стал особенным. Выбирайте между классическим форматом дегустации или игровыми элементами, такими как слепая дегустация или винное казино, чтобы добавить веселья и оригинальности в ваше торжество.',
  },
  wedding: {
    title: 'Свадьба',
    description:
      'Создайте незабываемую атмосферу на вашей свадьбе с помощью профессиональной винной дегустации. Я помогу вам и вашим гостям насладиться изысканными напитками, расскажу интересные факты о винах и предложу различные форматы дегустации, чтобы сделать ваш день особенным и запоминающимся.',
  },
  corporate: {
    title: 'Корпоратив',
    description:
      'Организуйте уникальное и увлекательное корпоративное мероприятие с винной дегустацией. Это отличный способ порадовать сотрудников, укрепить командный дух и провести время в непринужденной обстановке. Мы можем предложить как образовательный формат, так и игровые элементы, чтобы разнообразить ваш корпоратив.',
  },
};

const EventCarousel = () => {
  const [selectedEvent, setSelectedEvent] = useState('friendsMeeting');

  return (
    <div id='scene'>
      <div id='left-zone'>
        <ul className='list'>
          {Object.keys(events).map((key) => (
            <li key={key} className='event'>
              <input
                type='radio'
                id={`radio_${key}`}
                name='basic_carousel'
                value={key}
                checked={selectedEvent === key}
                onChange={() => setSelectedEvent(key)}
              />
              <label htmlFor={`radio_${key}`} className={`label_${key}`}>
                {events[key].title}
              </label>
              
              <div className={`content content_${key}`}>
                <span className='picto'></span>
                <h3>{events[key].title}</h3>
                <p>{events[key].description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div id='middle-border'></div>
      <div id='right-zone'></div>
    </div>
  );
};

export default EventCarousel;
 */
