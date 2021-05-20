/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */

const value = document.querySelector("#value");
const decrease = document.querySelector('[data-action="decrement"]');
const increase = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const onIncrementButtonClick = function () {
  value.textContent = counterValue += 1;
};

const onDecrementButtonClick = function () {
  value.textContent = counterValue -= 1;
};

increase.addEventListener('click', onIncrementButtonClick);
decrease.addEventListener('click', onDecrementButtonClick); 