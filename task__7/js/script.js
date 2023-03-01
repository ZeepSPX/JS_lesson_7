"use strict"

// Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)---------------------------------------------------------------------------------
function getRandomImage(image1, image2, image3, image4) {
	let randomNum = Math.floor(Math.random() * 4) + 1
	let imageSrc = ''
	switch (randomNum) {
		case 1:
			imageSrc = image1
			break
		case 2:
			imageSrc = image2
			break
		case 3:
			imageSrc = image3
			break
		case 4:
			imageSrc = image4
			break
	}
	document.write(`<div class="page__container"> <div class="page__one"> <div class="img__container"> <img src="${imageSrc}"> </div> </div></div> `)
}


const imageDefault_1 = `img/1.jpg`
const imageDefault_2 = `img/2.jpg`
const imageDefault_3 = `img/3.jpg`
const imageDefault_4 = `img/4.jpg`

let imageRandomDefault = getRandomImage(
	imageDefault_1,
	imageDefault_2,
	imageDefault_3,
	imageDefault_4
)

