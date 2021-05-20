// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов (data-length).
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inp = document.querySelector("#validation-input");
let inpLength = inp.getAttribute("data-length");
let numberInput = parseInt(inpLength);

inp.addEventListener("input", checkLength);

function checkLength(event) {
    
    if (event.currentTarget.value.length === numberInput) {
        inp.classList.add("valid");
        inp.classList.remove("invalid");
    } else {
        inp.classList.add("invalid");
        inp.classList.remove("valid");
    }
}