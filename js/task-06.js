// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов (data-length).
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inp = document.querySelector("#validation-input");
let inpLength = inp.getAttribute("data-length");
let numberInput = parseInt(inpLength);

inp.addEventListener("input", checkLength);

function checkLength(event) {
    const myInput = event.currentTarget.value.length;
    
    if (myInput === numberInput) {
        inp.classList.add("valid");
        inp.classList.remove("invalid");
    }
    if (myInput > numberInput || myInput < numberInput) {
        inp.classList.add("invalid");
        inp.classList.remove("valid");
    }
    if (myInput === 0) {
        inp.classList.remove("valid");
        inp.classList.remove("invalid");
    }
}

// oder 

/* const followUpInput = document.querySelector('#validation-input');
followUpInput.addEventListener('blur', onTargetInput)
const toggleClass=(prev,next,node)=>{
    node.classList.remove(prev);
    node.classList.add(next);
}
function onTargetInput(event){
    const inputLength=event.currentTarget.value.length;
    const dataLength=event.currentTarget.attributes["data-length"].nodeValue;
    inputLength===Number(dataLength)?
        toggleClass('invalid','valid',followUpInput) :
        toggleClass('valid','invalid',followUpInput)
} */