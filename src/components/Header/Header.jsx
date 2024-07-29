import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuOpen(true);
  };
  function closeBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  return (
    <header className='header'>
      <div className='header__logo'></div>
      <div className='navigation'>
        <button className='burger-button' type='button' onClick={handleBurgerMenuClick} />

        <NavLink
          to='/'
          className={({isActive}) => (isActive ? 'navigation__link navigation__link_active' : 'navigation__link ')}
        >
          ГЛАВНАЯ
        </NavLink>

        <NavLink
          to='/uslugi'
          className={({isActive}) => (isActive ? 'navigation__link navigation__link_active' : 'navigation__link ')}
        >
          УСЛУГИ
        </NavLink>

        <NavLink
          to='/statyi'
          className={({isActive}) => (isActive ? 'navigation__link navigation__link_active' : 'navigation__link ')}
        >
          СТАТЬИ
        </NavLink>

        <NavLink
          to='/contacty'
          className={({isActive}) => (isActive ? 'navigation__link navigation__link_active' : 'navigation__link ')}
        >
          КОНТАКТЫ
        </NavLink>

      </div>
      <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} onClose={closeBurgerMenu} />
    </header>
  );
};
export default Header;
