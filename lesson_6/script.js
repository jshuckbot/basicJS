/*** Задание 1
 Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
 ***/

const linkEl = document.querySelector('#super_link');
console.log(linkEl);

/*** Задание 2
 Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка"
 ***/

const cardsEl = document.querySelectorAll('.card-link');
cardsEl.forEach(element => {
    element.textContent = 'ссылка';
});

/*** Задание 3
 Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль
 ***/

const cardBody = document.querySelector('.card-body');
const linkEl2 = cardBody.querySelectorAll('.card-link');
console.log(linkEl2);


/*** Задание 4
 Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль
 ***/

const dataEl = document.querySelector('[data-number="50"]');
console.log(dataEl);

/*** Задание 5
 Выведите содержимое тега title в консоль
 ***/

const titleEl = document.querySelector('title');
console.log(titleEl.textContent);


/*** Задание 6
 Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
 ***/

const cardTitleEl = document.querySelector('.card-title');
console.log(cardTitleEl.parentElement);


/*** Задание 7
 Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
 ***/

const pEl = document.createElement('p');
pEl.textContent = 'Привет';

const cardEl3 = document.querySelector('.card');

cardEl3.prepend(pEl);


/*** Задание 8
 Удалите тег h6 на странице.
 ***/
 const hEl = document.querySelector('h6');
hEl.remove();