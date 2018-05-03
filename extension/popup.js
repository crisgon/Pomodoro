let btn = document.querySelector('[data-js="code"]');

btn.addEventListener('click', function(e){
  e.preventDefault();
  alert('Clicado!');
});