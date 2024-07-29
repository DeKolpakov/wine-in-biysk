import React, {useEffect} from 'react';

const ParalaxEffect = ({content}) => {
  useEffect(() => {
    // Находим элемент с ID 'parallax'
    const elem = document.querySelector('#parallax');

    // Если элемент не найден, выходим из функции
    /* if (!elem) return; */

    // Функция для обработки параллакс-эффекта
    function parallax(e) {
      // Получаем центр окна
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;

      // Получаем текущие координаты мыши
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;

      // Вычисляем позиции фона на разных глубинах (для изменения заметности движения меняется %)
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.1}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.3}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.05}% ${50 - (_mouseY - _h) * 0.5}%`;

      // Комбинируем все позиции в одну строку
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;

      // Устанавливаем вычисленные позиции как фоновое изображение элемента
      elem.style.backgroundPosition = x;
    }

    // Добавляем слушатель события движения мыши
    document.addEventListener('mousemove', parallax);

    // Убираем слушатель события при размонтировании компонента
    return () => {
      document.removeEventListener('mousemove', parallax);
    };
  }, []); // Пустой массив зависимостей означает, что эффект выполняется только при монтировании и размонтировании

  // Возвращаем JSX разметку, которая включает элемент с ID 'parallax'
  return (
    <div className='paralax-effect' id='parallax'>
      {content}
    </div>
  );
};

export default ParalaxEffect;
