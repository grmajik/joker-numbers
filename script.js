"use strict";

const numberButtons = document.querySelectorAll('.numbers button');
const generate = document.querySelector('.generate');
const totalNumArr = [...numberButtons];

let arrayOfButtonsNumbers = [];

let array;
let randomNum;

const generateRandomNumbers = () => {
	for (let i = 0; array.length < 5; i++) {
		randomNum = String(Math.round(Math.random() * 45));
		if (randomNum < 10) {
			randomNum = "0" + randomNum;
			if (array.indexOf(randomNum) < 0) {
				array.push(randomNum);
			}
		} else if (randomNum >= 10) {
			if (array.indexOf(randomNum) < 0) {
				array.push(randomNum);
			}
		}
	}
}

function findNumbers() {
	for (let i = 0; i < totalNumArr.length; i++) {
		for (let z = 0; z < 5; z++) {
			if (totalNumArr[i].textContent === array[z]) {
				console.log(totalNumArr[i]);
				totalNumArr[i].style.backgroundColor = "coral";
			}
		}
	}
}

generate.addEventListener('click', () => {
	array = [];
	clearResults();
	generateRandomNumbers();
	findNumbers();
});

function clearResults() {
	totalNumArr.forEach(number => {
		number.style.backgroundColor = "";
	})
}