document.addEventListener('DOMContentLoaded', function() {
	let burger = document.getElementById('burger'),
		nav    = document.getElementById('main-nav'),
		slowmo = document.getElementById('slowmo');
  
	burger.addEventListener('click', function(e){
	  this.classList.toggle('is-open');
	  nav.classList.toggle('is-open');
	});
  
	slowmo.addEventListener('click', function(e){
	  this.classList.toggle('is-slowmo');
	});
  
	/* Onload demo - dirty timeout */
	let clickEvent = new Event('click');
  
	window.addEventListener('load', function(e) {
	  slowmo.dispatchEvent(clickEvent);
	  burger.dispatchEvent(clickEvent);
  
	  setTimeout(function(){
		burger.dispatchEvent(clickEvent);
  
		setTimeout(function(){
		  slowmo.dispatchEvent(clickEvent);
		}, 3500);
	  }, 5500);
	});
  });
  


const container = document.querySelector('.box-container');
const contents = document.querySelectorAll('.content');
const buttons = document.querySelectorAll('button');

buttons.forEach( button => button.addEventListener('click', function() {
  container.classList.toggle('right-open');
}));

