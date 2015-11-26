$(document).ready(function(){

	// stores all the images found in the img folder
	var img_name = ['building.jpeg', 'firework-sky.jpeg', 'fireworks.jpeg', 'mountain.jpeg', 'road.jpeg', 'sky.jpeg', 'work-stick.jpeg', 'work.jpeg'];

	// this loop appends each image in the gallery division
	// this will also adds an anchor element to the doc
	for(var i = 0; i < img_name.length; i++){
		$('#gallery').append('<a href="./img/'+img_name[i]+'" data-lightbox="gallery"><div class="image" style="background: url(./img/'+img_name[i]+');"></div></a>');
	}

	// this styles the images so they would fit perfectly on a square
	$('.image').css('background-position', 'center'); 
	$('.image').css('background-size', 'cover'); 

});