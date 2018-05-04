let btn = document.querySelector('[data-js="code"]');
let circle = document.querySelector('#circle');
let timer = 6;

btn.addEventListener('click', function(e){
	e.preventDefault();
	circle.style.animation = `fillup ${timer}s linear`;
	console.log('ok');
});

