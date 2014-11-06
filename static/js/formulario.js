// //
// //
var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#link'),
	$primerPost = $('.item').first(),
	$lista = $('#contenido');

if (localStorage.getItem('autosave')) {
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval( function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);

function mostrarOcultarFormulario(e) {
	//Por alguna razón, el preventDefault no funcionó :c
	// e.preventDefault();
	// console.log(e);
	// e.stopPropagation();

	$form.slideToggle();
	$lista.slideToggle();
}

function agregarPost(evento) {

	evento.preventDefault();

	var titulo = $titulo.val(),
		url = $url.val(),
		clone = $primerPost.clone();
	
	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	clone.hide()

	$lista.prepend(clone)

	$titulo.val(''); 
	$url.val(''); 

	mostrarOcultarFormulario();
	clone.slideDown()
}

// $('nav').on('click', function(){
// 	console.log('Soy un nav y me hicieron click');
// });

// $('ul').on('click', function(){
// 	console.log('Soy un ul y me hicieron click');
// });

$('#publicar_nav a').click( mostrarOcultarFormulario );
$('#formulario').on('submit', agregarPost);
// 	.find('#link')
// 	.on('focus', function(){
// 		$('#link').val('http://');
// 	})
// 	.on('blur', function(){
// 		$('#link').val('');
// 	});
