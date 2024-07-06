/*** Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.
 ***/

console.log(dataInfo, JSON.parse(dataInfo));

/*** Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка загловок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию).
 ***/



const images = JSON.parse(dataInfo);
let content = document.querySelector('.content');

images.map(function (value) {
  let img = document.createElement('img');
  img.id = value.id;
  img.height = value.height;
  img.width = value.width;
  img.src = value.url;

  content.appendChild(img);
  console.log(value);
});
