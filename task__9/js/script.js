"use strict"

// Задача 9 / 10. 9) Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури. 10) Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.---------------------------------------------------------------------------------

function countTempValues() {
	let negTempCount = 0;
	let posTempCount = 0;
	let posTempSum = 0;
	let tempValue;
	let tempCount = parseInt(prompt("Введіть кількість температурних значень:"));

	for (let i = 0; i < tempCount; i++) {
		tempValue = parseInt(prompt("Введіть температуру:"));

		if (tempValue < 0) {
			negTempCount++;
		} else if (tempValue > 0) {
			posTempCount++;
			posTempSum += tempValue;
		}
	}

	let posTempAvg = (posTempCount > 0) ? (posTempSum / posTempCount) : 0;

	document.write(`<div class="page__container"> <div class="page__one"> Кількість від'ємних температур: ${negTempCount} </div> </div>`)
	document.write(`<div class="page__container"> <div class="page__one"> Середнє значення додатніх температур: ${posTempAvg} </div> </div>`)
}
countTempValues()


