"use strict"

// Задача 5.Створити окремі функції, які переводять: Сантиметри у дюйми; Кілограми у фунти; Кілометри у милі. ---------------------------------------------------------------------------------

function getTransferUserCentimeters(valuesCentimeters) {
	const inch = 2.54
	return (valuesCentimeters / inch)
}

function getTransferUserKilograms(valuesKilograms) {
	const pound = 2.205
	return (valuesKilograms * pound)
}

function getTransferUserKilometers(valueKilometers) {
	const mile = 0.621
	return (valueKilometers * mile)
}

let userCentimeters = parseFloat(prompt(`Щоб отримати кількість дюймів, введіть довжину в см: `, `25.5`))
let userKilograms = parseFloat(prompt(`Щоб отримати кількість фунтів (вага), введіть вагу в кг: `, `32.6`))
let userKilometers = parseFloat(prompt(`Щоб отримати кількість миль , введіть довжину в км: `, `45`))

let transferValuesOne = getTransferUserCentimeters(
	userCentimeters
)

let transferValuesTwo = getTransferUserKilograms(
	userKilograms
)

let transferValuesThree = getTransferUserKilometers(
	userKilometers
)

document.write(`<div class="page__container"> <div class="page__one"> Введено ${userCentimeters} см = ${getTransferUserCentimeters(userCentimeters).toFixed(3)} дюймів, отримано </div> </div>`)
document.write(`<div class="page__container"> <div class="page__one"> Введено ${userKilograms} кг = ${getTransferUserKilograms(userKilograms)} фунтів, отримано </div> </div>`)
document.write(`<div class="page__container"> <div class="page__one"> Введено ${userKilometers} км = ${getTransferUserKilometers(userKilometers).toFixed(3)} миль, отримано </div> </div>`)