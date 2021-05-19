// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector("ul");

for(const ingredient of ingredients) {
  const li = document.createElement('li');
  li.textContent = ingredient;
  // console.log(li);
  listEl.append(li);
}
// console.log(listEl);