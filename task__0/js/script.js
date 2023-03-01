"use strict"

// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.---------------------------------------------------------------------------------

let userNumberMounth = parseInt(prompt(`Введіть номер місяця: `, `1, 2, 12`))

function getSeasonYears(userMonth) {
	switch (userMonth) {
		case 1:
		case 2:
		case 12:
			return `Зима`;
		case 3:
		case 4:
		case 5:
			return `Весна`;
		case 6:
		case 7:
		case 8:
			return `Літо`;
		case 9:
		case 10:
		case 11:
			return `Осінь`;
		default:
			return `Невідома пора року`
	}
}



document.write(`<div class="page__container"> <div class="page__one"> Пора року = ${getSeasonYears(userNumberMounth)} </div> </div>`)

