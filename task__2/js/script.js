"use strict"

// Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.---------------------------------------------------------------------------------

let userNumberDay = parseInt(prompt(`Введіть номер тижня: `, `1, 2, 7`))

function getSeasonYears(userDay) {
	switch (userDay) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			return `робочий`;
		case 6:
		case 7:
			return `вихідний`;
		default:
			return `Невідомий день тижня`
	}
}


document.write(`<div class="page__container"> <div class="page__one"> День під номером ${userNumberDay} = ${getSeasonYears(userNumberDay)} </div> </div>`)




