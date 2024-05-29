/*** Задание 1
 Создайте функцию которая возводит переданное число в куб,
 необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
 ***/
function buildsIntoCube(number) {
    return number ** 3    
}


let num = Number(prompt("Введите число которое будет возведено в куб"))
console.log(buildsIntoCube(num))

/*** Задание 2
 Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
 Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст
 "Размер заработной платы за вычетом налогов равен значение"
 ***/

function checkNumber(number) {
    return (number) ? true : false
}


function considersTheTax(number) {
    if (!checkNumber(number)) return "Вы ввели точно не число"
    return `Размер заработной платы за вычетом налогов равен ${number * 0.87}`
}


num = Number(prompt("Введите число"))

console.log(considersTheTax(num))


/*** Задание 3
 Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
 которая определяет максимальное значение среди этих чисел
 ***/

function findMaxNumber(number1, number2, number3) {
    let maxNumber = number1
    if (number2 > maxNumber) maxNumber = number2
    if (number3 > maxNumber) maxNumber = number3
    
    return maxNumber
}


let num1 = Number(prompt("Введите первое число"))
let num2 = Number(prompt("Введите второе число"))
let num3 = Number(prompt("Введите третье число"))

console.log(findMaxNumber(num1, num2, num3))


/*** Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
***/


function addNumber(number1, number2) {
    return number1 + number2
}


function subNumber(number1, number2) {
    [number1, number2] = (number1 > number2) ?  [number1, number2] :  [number2, number1]
    return number1 - number2
}


function mulNumber(number1, number2) {
    return  number1 * number2
}


function divNumber(number1, number2) {
    return (number2 !== 0) ? number1 / number2 : 'На ноль делить нельзя'
}


num1 = Number(prompt("Введите первое число"))
num2 = Number(prompt("Введите второе число"))


console.log('Сложение: ' + addNumber(num1, num2))
console.log('Вычитание: ' + subNumber(num1, num2))
console.log('Произведение: ' + mulNumber(num1, num2))
console.log('Деление: ' + divNumber(num1, num2))
