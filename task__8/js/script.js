"use strict"

// Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>---------------------------------------------------------------------------------

function getBannerUser(linkImage, titel, link) {
	return document.write(`<div class="page__container"> <div class="page__one"> <div class="head__title"> ${titel} </div><a href="${link}" target="_blank"> <div class="img__container"> <img src="${linkImage}"> </div> </a> </div></div> `)
}


let userLinkImage = prompt(`Введіть посилання на картинку для банера (приклад: https://unsplash.com/photos/g5jpH62pwes)`)
let userTitle = prompt(`Введіть загаловок банер`)
let userLink = prompt(`Введіть посилання для переходу (приклад: https://i.pinimg.com/564x/f8/43/d9/f843d9c5544010e145f53323f4b0dd29.jpg)`)


let userBanner = getBannerUser(
	userLinkImage,
	userTitle,
	userLink
)


