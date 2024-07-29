import React, {useEffect, useRef} from 'react';

const DynamicTitle = () => {
  // Создаем ссылки для доступа к элементам DOM, где будет отображаться текст и курсор
  const typedTextRef = useRef(null);
  const cursorRef = useRef(null);

  // Массив строк, которые будут последовательно отображаться
  const textArray = ['ИСКУСТВО', 'КУЛЬТУРА', 'ИСТОРИЯ', 'ПУТЬ', 'СТРАСТЬ', 'ЖИЗНЬ'];
  const typingDelay = 200; // Задержка между печатью каждого символа
  const erasingDelay = 100; // Задержка между удалением каждого символа
  const newTextDelay = 2000; // Задержка перед началом печати нового слова
  let textArrayIndex = 0; // Индекс текущего слова в массиве textArray
  let charIndex = 0; // Индекс текущего символа в текущем слове

  useEffect(() => {
    // Получаем доступ к элементам DOM после монтирования компонента
    const typedTextSpan = typedTextRef.current;
    const cursorSpan = cursorRef.current;

    // Функция для печати текста
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        // Если печать не завершена, добавляем символ и продолжаем
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay); // Задаем задержку для следующего символа
      } else {
        // Печать завершена, убираем класс "typing" и начинаем процесс удаления текста
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay); // Задержка перед удалением текста
      }
    }

    // Функция для удаления текста
    function erase() {
      if (charIndex > 0) {
        // Если удаление не завершено, убираем символ и продолжаем
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay); // Задаем задержку для следующего символа
      } else {
        // Удаление завершено, убираем класс "typing", переключаемся на следующее слово
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0; // Перезапускаем цикл слов
        setTimeout(type, typingDelay + 1100); // Задержка перед началом печати следующего слова
      }
    }

    // Запуск функции печати, если массив слов не пустой
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  }, []);

  return (
    // JSX для отображения динамического заголовка
    <>
      <div className='dynamic-title'>
        <p>
          ВИНО – это&nbsp;
          <span className='typed-text' ref={typedTextRef}></span> {/* Элемент для отображения текста */}
          <span className='cursor' ref={cursorRef}>&nbsp;</span>{/* Элемент для отображения курсора */}
        </p>
      </div>
    </>
  );
};

export default DynamicTitle;
