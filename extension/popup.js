'use strict';

const $ = document.querySelector.bind(document);
const play = $('[data-js="play"]');
const reset = $('[data-js="reset"]');
const display = $('[data-js="time"]');
const status = $('[data-js="status"]');
let timeLeft;
let isBreak = false;

function timer(count) {
	timeLeft = setTimeout(()=>{
		displayTime(count);
		count--;
    timer(count);
    if(isBreak && count <= 0)
      count = workTime(count);
 
		breakTime(count);
	}, 1000);
}

function workTime(count) {
	isBreak = !isBreak;
	resetTimer();
	status.innerHTML = 'Work!!'
  return count = 5;
}


function breakTime(count) {
	if(count <= 0) {
		clearInterval(timeLeft);
		count = 3;
		isBreak = !isBreak;
		timer(count);
		status.innerHTML = 'Break!!'
	}
}

function resetTimer() {
	clearInterval(timeLeft);
	displayTime(1500);
	status.innerHTML = 'Let\'s work!!'
}

function displayTime(time) {
	return display.innerHTML = `${Math.floor(time / 60)}: ${time % 60}`;
}

play.addEventListener('click', ()=> timer(5));
reset.addEventListener('click', resetTimer);