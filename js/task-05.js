// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output")

function changeName(event){
    if (inputEl.value === '') {
        spanEl.textContent=' незнакомец';
    } else {
    spanEl.textContent = event.currentTarget.value;
    }
}

inputEl.addEventListener('input', changeName);