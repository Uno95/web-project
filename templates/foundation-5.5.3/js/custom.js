(function(window,google){

	var options = {
		center:{
			lat: -34.397, 
			lng: 150.644
		},
		zoom: 10
	},

	element = document.getElementById('map-canvas'),
	map = new google.maps.Map(element, options);
}(window, google));



