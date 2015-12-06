(function(window, google){
	
	//map options
	var options = {
		center: {
			lat: 44.802435,
			lng: 20.466390
		},
		zoom: 13,
		disabledDefaultUI: true,
		draggable: true,
		// maxZoom: 11,
		// minZoom: 9

	};
	element = document.getElementById('map');
	//map


	map = new google.maps.Map(element, options);
	
	// MCoptions = {
	// 	styles: [{
	// 		url: "",
	// 		height: '',
	// 		width: ''
	// 	},
	// 	{

	// 	},
	// 	{

	// 	}]
	// }
	var marker1 = new MarkerClusterer(map, []);
	var marker2 = new MarkerClusterer(map, []);
	var marker3 = new MarkerClusterer(map, []);
	
	$.getJSON("http://10.120.192.2:8081/open-data/api?limit=1300", 
		function(json){
			json.forEach(function(currentValue){

				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(currentValue.x,currentValue.y),
					map: map,
					title: String(currentValue.id)
				});
				if(currentValue.type==1){
					marker1.addMarker(marker);
				}else if(currentValue.type==2){
					marker2.addMarker(marker);
				}else{
					marker3.addMarker(marker);
				}
			});

		});
	
}(window, google));


