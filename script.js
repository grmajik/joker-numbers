"use strict";

const generate = document.querySelector('.generate');
const arrayOfNormalNumbers = [...document.querySelectorAll('.numbers button')];
const arrayOfJokerNumbers = [...document.querySelectorAll('.jokers button')];
const title = document.querySelector('.title');

let array;
let randomNum;
let randomJoker;

const generateRandomNumbers = () => {
	for (let i = 0; array.length < 5; i++) {
		randomNum = String(Math.round(Math.random() * 44) + 1);
		if (randomNum < 10) {
			randomNum = "0" + randomNum;
			if (array.indexOf(randomNum) < 0) {
				array.push(randomNum);
			}
		} else {
			if (array.indexOf(randomNum) < 0) {
				array.push(randomNum);
			}
		}
	}
}

function findNumbers() {
	for (let i = 0; i < arrayOfNormalNumbers.length; i++) {
		for (let z = 0; z < 5; z++) {
			if (arrayOfNormalNumbers[i].textContent === array[z]) {
				arrayOfNormalNumbers[i].style.backgroundColor = "coral";
			}
		}
	}
}

function findJoker() {
	for (let i = 0; i < arrayOfJokerNumbers.length; i++) {
		if (arrayOfJokerNumbers[i].textContent === randomJoker) {
			arrayOfJokerNumbers[i].style.backgroundColor = "silver";
		}
	}
}

function clearResults() {
	arrayOfNormalNumbers.forEach(number => {
		number.style.backgroundColor = "";
	});
	arrayOfJokerNumbers.forEach(joker => {
		joker.style.backgroundColor = "";
	})
}

generate.addEventListener('click', () => {
	let onTimer = setInterval(() => {
		array = [];
		randomJoker = String(Math.round(Math.random() * 19) + 1);
		clearResults();
		generateRandomNumbers();
		findNumbers();
		findJoker();
	}, 100);
	setTimeout(() => {
		clearInterval(onTimer);
	}, 2000);
});