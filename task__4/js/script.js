"use strict"

// Задача 4.Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.---------------------------------------------------------------------------------

// function getCalculateNumbers() {
// 	let userNumberOne = parseInt(prompt(`Введіть перше число: `))
// 	let userNumberTwo = parseInt(prompt(`Введіть друге число: `))
// 	let userNumberThree = parseInt(prompt(`Введіть третє число: `))

// 	let evenCount = 0
// 	let positiveCount = 0
// 	let greaterThan100Count = 0

// 	if (userNumberOne % 2 === 0) evenCount++;
// 	if (userNumberTwo % 2 === 0) evenCount++;
// 	if (userNumberThree % 2 === 0) evenCount++;

// 	if (userNumberOne > 0) positiveCount++;
// 	if (userNumberTwo > 0) positiveCount++;
// 	if (userNumberThree > 0) positiveCount++;

// 	if (userNumberOne > 100) greaterThan100Count++;
// 	if (userNumberTwo > 100) greaterThan100Count++;
// 	if (userNumberThree > 100) greaterThan100Count++;

// 	return {
// 		evenCount,
// 		positiveCount,
// 		greaterThan100Count
// 	};
// }

// let results = getCalculateNumbers()

// document.write(`<div class="page__container"> <div class="page__one"> Кількість парних = ${results.even} </div> </div>`)
// document.write(`<div class="page__container"> <div class="page__one"> Кількість доданих = ${results.positive} </div> </div>`)
// document.write(`<div class="page__container"> <div class="page__one"> Кілкьість більших за 100 = ${results.greaterThan100} </div> </div>`)


function countNumbers() {
	let num1 = parseInt(prompt("Введіть перше число"));
	let num2 = parseInt(prompt("Введіть друге число"));
	let num3 = parseInt(prompt("Введіть третє число"));

	let evenCount = 0;
	let positiveCount = 0;
	let over100Count = 0;

	if (num1 % 2 === 0) {
		evenCount++;
	}
	if (num2 % 2 === 0) {
		evenCount++;
	}
	if (num3 % 2 === 0) {
		evenCount++;
	}

	if (num1 > 0) {
		positiveCount++;
	}
	if (num2 > 0) {
		positiveCount++;
	}
	if (num3 > 0) {
		positiveCount++;
	}

	if (num1 > 100) {
		over100Count++;
	}
	if (num2 > 100) {
		over100Count++;
	}
	if (num3 > 100) {
		over100Count++;
	}

	document.write(`<div class="page__container"> <div class="page__one"> Кількість парних = ${positiveCount} </div> </div>`)
	document.write(`<div class="page__container"> <div class="page__one"> Кількість доданих = ${evenCount} </div> </div>`)
	document.write(`<div class="page__container"> <div class="page__one"> Кілкьість більших за 100 = ${over100Count} </div> </div>`)
}

countNumbers();




