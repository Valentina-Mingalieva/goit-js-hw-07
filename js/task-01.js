/* Напиши скрипт, который выполнит следующие операции: 
- Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'
- Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li). Например для первой категории получится:
Категория: Животные
Количество элементов: 4 */

const list = document.querySelector("#categories").children.length;
console.log(`В списке ${list} категории.`);

const categoryTitles = document.querySelectorAll("h2");
categoryTitles.forEach(categoryTitle => console.log(`Категория: ${categoryTitle.textContent}`));

const categoryList = document.querySelectorAll(".item ul");
categoryList.forEach(el => console.log(`Количество элементов: ${el.children.length}`));

