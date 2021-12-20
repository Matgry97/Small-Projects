'use strict';

const days_element = document.getElementById('days');
const hours_element = document.getElementById('hours');
const minutes_element = document.getElementById('minutes');
const seconds_element = document.getElementById('seconds');

const eldenRingRelease = '25 Feb 2022';

function countdown() {
	const eldenRingReleaseDate = new Date(eldenRingRelease);
	const currentDate = new Date(); //calls current date

	const difference = (eldenRingReleaseDate - currentDate) / 1000; //miliseconds

	const days = Math.floor(difference / 3600 / 24);
	const hours = Math.floor(difference / 3600) % 24;
	const minutes = Math.floor(difference / 60) % 60;
	const seconds = Math.floor(difference) % 60;

	console.log(difference, days, hours, minutes, seconds);

	//Attach vars to html anchors.

	days_element.innerHTML = days;
	hours_element.innerHTML = prettyTimers(hours);
	minutes_element.innerHTML = prettyTimers(minutes);
	seconds_element.innerHTML = prettyTimers(seconds);
}

function prettyTimers(number) {
	return number < 10 ? `0${number}` : number;
}

countdown();

setInterval(countdown, 1000);
