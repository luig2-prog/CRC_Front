let btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

// const btn_calcular = document.getElementById('btn-calcular');

overlay.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

// btn_calcular.addEventListener('click', function(e){
// 	e.preventDefault();
// 	overlay.classList.add('active');
// 	popup.classList.add('active');
// });
	

// brn_validar.addEventListener('click', () => {
// 	overlay.classList.add('active');
// 	popup.classList.add('active');
// });
	

let colocar = document.getElementsByClassName('content');
// console.log(colocar);


$(".content").append("<div><a id='terminar-encuesta' class='overlay'>Volver al Inicio</a></div>");

$('#terminar-encuesta').click(function() {

	window.close();
});

// $('.submit').click(function() {
// 	$(".overlay").addClass("active");
// });

// navigator.geolocation.getCurrentPosition(position => {
// 	console.log(position.coords.latitude, position.coords.longitude);
// }, err => {
// 	console.log(err.message);
// });

	// overlay.classList.add('active');
	// popup.classList.add('active');