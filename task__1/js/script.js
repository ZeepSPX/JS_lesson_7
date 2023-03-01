"use strict"

// Задача 1. Створити функцію, яка за номером місяця повертає його назву----------------------------------------


let userNumberMounth = parseInt(prompt(`Введіть номер місяця: `, `1, 2, 12`))

function getSeasonYears(userMonth) {
	switch (userMonth) {
		case 1:
			return `Січень`;
		case 2:
			return `Лютий`;
		case 3:
			return `Березень`;
		case 4:
			return `Квітень`;
		case 5:
			return `Травень`;
		case 6:
			return `Червень`;
		case 7:
			return `Липень`;
		case 8:
			return `Серпень`;
		case 9:
			return `Вересень`;
		case 10:
			return `Жовтень`;
		case 11:
			return `Листопад`;
		case 12:
			return `Грудень`;
		default:
			return `Невідома пора року`
	}
}


document.write(`<div class="page__container"> <div class="page__one"> Місяць під номером ${userNumberMounth} = ${getSeasonYears(userNumberMounth)} </div> </div>`)
