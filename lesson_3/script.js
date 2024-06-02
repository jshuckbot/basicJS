/*** Задание 1
 Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
 0 – это ноль
 1 – нечетное число
 2 – четное число
 3 – нечетное число
 …
 10 – четное число
 ***/

for (let num = 0; num < 11; num++) {
    if (num === 0) {
        console.log("это ноль")
    } else if (num % 2 === 0) {
        console.log("это четное")
    } else {
        console.log("это нечетное")
    }
}


/*** Задание 2
 Дан массив [1, 2, 3, 4, 5, 6, 7]
 Сделайте из этого массива следующий [1, 2, 3, 6, 7]
 ***/

const array = [1, 2, 3, 4, 5, 6, 7]
array.splice(3, 2)
console.log(array)


/*** Задание 3
 Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
 1. Рассчитать сумму элементов этого массива
 2. Найти минимальное число
 3. Найти есть ли в этом массиве число 3
 ***/

const numbers = []

for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 10) )
} 
console.log(numbers)
