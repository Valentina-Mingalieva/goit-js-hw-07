// 8. Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// - Имеет случайный rgb цвет фона
// - Размеры самого первого div - 30px на 30px
// - Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inpEl = document.querySelector("input");
const renderBtn = document.querySelector("[data-action='render']");
const destroyBtn = document.querySelector("[data-action='destroy']");
const boxes = document.querySelector("#boxes");

renderBtn.addEventListener("click", onInputAdd);
destroyBtn.addEventListener("click", destroyBoxes);

inpEl.addEventListener("input", onInputAdd);

function onInputAdd() {
    let amount = inpEl.value;
    createBoxes(amount);
}


function destroyBoxes() {
  boxes.innerHTML = "";
}
