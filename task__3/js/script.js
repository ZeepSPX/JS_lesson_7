"use strict"

// Задача 3. Створити окремі функції, які для 4 чисел знаходять: 1) суму; 2) добуток; 3)середнє арифметичне; 4)мінімальне значення.---------------------------------------------------------------------------------

function getSum(number1, number2, number3, number4) {
	return (number1 + number2 + number3 + number4)
}

function getMultiplication(number1, number2, number3, number4) {
	return (number1 * number2 * number3 * number4)
}

function getAverage(number1, number2, number3, number4) {
	return (number1 + number2 + number3 + number4) / 4
}

function getMin(number1, number2, number3, number4) {
	return Math.min(number1, number2, number3, number4)
}

let userNumber_1 = parseFloat(prompt(`Введіть перше число: `))
let userNumber_2 = parseFloat(prompt(`Введіть друге число: `))
let userNumber_3 = parseFloat(prompt(`Введіть третье число: `))
let userNumber_4 = parseFloat(prompt(`Введіть четверте число: `))

const sumUserNUmber = getSum(
	userNumber_1,
	userNumber_2,
	userNumber_3,
	userNumber_4
)

const multiplicationUserNumber = getMultiplication(
	userNumber_1,
	userNumber_2,
	userNumber_3,
	userNumber_4
)

const averageUserNumber = getAverage(
	userNumber_1,
	userNumber_2,
	userNumber_3,
	userNumber_4
)

const minUserNumber = getMin(
	userNumber_1,
	userNumber_2,
	userNumber_3,
	userNumber_4
)

document.write(`<div class="page__container"> <div class="page__one"> Сума = ${sumUserNUmber} </div> </div>`)
document.write(`<div class="page__container"> <div class="page__one"> Добуток = ${multiplicationUserNumber} </div> </div>`)
document.write(`<div class="page__container"> <div class="page__one"> Середнє арифметичне = ${averageUserNumber} </div> </div>`)
document.write(`<div class="page__container"> <div class="page__one"> Мінімальне = ${minUserNumber} </div> </div>`)

