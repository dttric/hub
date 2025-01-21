const typingText = document.querySelector('.typing');
const contentElement = document.querySelector('.content');
let fullText = contentElement.textContent; // Получаем текст с учетом переходов на новую строку

// Остальной код остается прежним
let textIndex = 0;
const cursorSymbol = '|';

function type() {
  typingText.textContent = fullText.slice(0, textIndex) + cursorSymbol;
  textIndex++;

  if (textIndex > fullText.length) {
    textIndex = 0;
  }

  setTimeout(type, 50);
}

type()