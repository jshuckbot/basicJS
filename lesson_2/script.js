/*** Задание 1
 Создать переменные num1, num2 которые пользователь вводит с клавиатуры
 Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
 ***/

let num1 = prompt('Введите первое число:')
let num2 = prompt('Введите второе число:')

if (num1 <= 1) {
    console.log("Первое число подходит по условию")
} else {
    console.log("Первое число не подходит по условию")
}

if (num2 >= 3) {
    console.log("Второе число подходит по условию")
} else {
    console.log("Второе число не подходит по условию")
}


/*** Задание 2
 Перепишите код к тернарному оператору
 ***/

const test = true
console.log((test === true) ? '+++' : '---')


/*** Задание 3
 В переменной day лежит какое-то число из интервала от 1 до 31.
 Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
 ***/

const day = prompt('Введите день в интервале от 1 до 31 числа')

if (1 <= day && day <= 10) {
    console.log("Первая декада")
} else if (11 <= day && day <= 20) {
    console.log("Вторая декада")
} else if (21 <= day && day <= 31) {
    console.log("Третья декада")
}
