import React from 'react';
import {useNavigate} from 'react-router-dom';


const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className='notfound'>
      <h1 className='notfound__title'>Страница не найдена</h1>
      <button className='button_active button_notfound' onClick={() => navigate(-1)} type={'button'} disabled={false} />
    </section>
  );
};

export default NotFoundPage;
