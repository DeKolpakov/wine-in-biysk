import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ParalaxEffect from '../ParalaxEffect/ParalaxEffect';

const UslugiPage = () => {
  return (
    <div>
      <Header />
      <section className='uslugi-page'>
        <ParalaxEffect
          content={
            <div className='uslugi-page__gradient'>
              <h1>
                Организация частных и корпоративных мероприятий в Бийске, Барнауле, Белокурихе, Новосибирске и
                Республике Алтай.
              </h1>
              <div>
                Мои дегустации идеально подходят для создания настроения на: Свадьбах Корпоративах
                Девичниках/мальчишниках Встречах с друзьями
              </div>
            </div>
          }
        />
      </section>
      <Footer />
    </div>
  );
};

export default UslugiPage;
