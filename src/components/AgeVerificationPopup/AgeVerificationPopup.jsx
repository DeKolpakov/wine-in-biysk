import React from 'react';

const AgeVerificationPopup = ({onConfirm, onReject}) => {
  return (
    <div className='popup'>
      <div className='popup-inner'>
        <h2>Подтвердите ваш возраст</h2>
        <p>Вам уже есть 18 лет?</p>
        <div className='popup-inner__buttons'>
          <button className='popup-inner__button-yes' onClick={onConfirm}>
            Да
          </button>
          <button className='popup-inner__button-no' onClick={onReject}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationPopup;
