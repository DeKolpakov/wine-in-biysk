import React, {useState} from 'react';

import img1 from '../../images/galery/530A7944-2.jpg';
import img2 from '../../images/galery/530A7953.jpg';
import img3 from '../../images/galery/530A8089-2.jpg';
import img4 from '../../images/galery/530A8127-2.jpg';
import img5 from '../../images/galery/photo_2023-05-29_14-38-42.jpg';
import img6 from '../../images/galery/photo_2023-05-29_14-38-44.jpg';
import img7 from '../../images/galery/photo_2023-06-18_13-20-17.jpg';
import img8 from '../../images/galery/photo_2023-06-18_14-14-46.jpg';
import img9 from '../../images/galery/photo_2023-06-18_14-14-48.jpg';
import img10 from '../../images/galery/photo_2023-06-18_14-17-20.jpg';
import img11 from '../../images/galery/photo_2023-06-18_15-45-492.jpg';
import img12 from '../../images/galery/photo_2023-06-18_15-45-493.jpg';
import img13 from '../../images/galery/photo_2023-06-18_15-45-494.jpg';
import img14 from '../../images/galery/photo_2023-06-18_15-45-49.jpg';

const imgObject = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Состояние для кнопки "Смотреть больше"

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgObject.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imgObject.length) % imgObject.length);
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className='photo-gallery'>
      {/* Слайдер для десктопов */}
      <div className='slider-container'>
        <button className='nav-btn prev' onClick={handlePrev}>
          ←
        </button>
        <div
          className='main-image'
          style={{backgroundImage: `url(${imgObject[currentIndex]})`}}
          onClick={() => openModal(currentIndex)}
        />
        <button className='nav-btn next' onClick={handleNext}>
          →
        </button>
      </div>

      {/* Плитки для мобильных устройств */}
      <div className={`tiles-container ${isExpanded ? 'expanded' : ''}`}>
        {imgObject.map((img, index) => (
          <div
            key={index}
            className='tile-item'
            style={{backgroundImage: `url(${img})`}}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Кнопка "Смотреть больше" */}
      {imgObject.length > 4 && (
        <label className='show-more-container'>
          {/* {isExpanded ? 'Скрыть фото' : 'Еще фото'} */}
          <input type='checkbox' checked={isExpanded} onChange={toggleExpand} />
          <svg className='chevron-down' viewBox='0 0 512 512' height='1em' xmlns='http://www.w3.org/2000/svg'>
            <path d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' />
          </svg>
        </label>
      )}

      {/* Модальное окно */}
      {isModalOpen && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <img src={imgObject[currentIndex]} alt='Full screen' />
            <button className='modal-close' onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
