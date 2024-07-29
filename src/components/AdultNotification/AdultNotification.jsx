import React from 'react';

const AdultNotification = ({isPopupVisible}) => (
  <div className='adult-notification'>
    {!isPopupVisible && (
      <div className='adult-notification__container'>
        <h1 className='adult-notification__title'>Извините</h1>
        <p className='adult-notification__text'>Этот сайт предназначен только для лиц старше 18 лет.</p>
      </div>
    )}
  </div>
);

export default AdultNotification;
