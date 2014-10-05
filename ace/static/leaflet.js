var map = L.map('map').setView([37.756631, -122.442222], 12);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var grid = new L.featureGroup();
var rects = new L.featureGroup();
var root = [37.742255, -122.494016];
var point1 = [37.791757, -122.429597];
var point2 = [37.760335, -122.416314];
var point3 = [37.787687, -122.400178];

var trans = 0;

var gridDensities = [1, 2, 1, 4,
					3, 5, 6, 6,
					2, 1, 4, 1,
					1, 1, 2, 1];


var line_points1 = [
      [37.742255, -122.494016],
      [37.791757, -122.429597]
  ];

var line_points2 = [
      [37.742255, -122.494016],
      [37.760335, -122.416314]
  ];

var line_points3 = [
      [37.742255, -122.494016],
      [37.787687, -122.400178]
  ];


var polyline_options1 = {
  color: '#000',
  weight: 3,
};

var polyline_options2 = {
  color: '#000',
  weight: 2,
};

var polyline_options3 = {
  color: '#000',
  weight: 5,
};


var uberMarker = L.icon({
	iconUrl: '/static/uberMarker.png',
	iconAnchor: [25,15]
});

var uberMarkerGrey = L.icon({
	iconUrl: '/static/uberMarkerGrey.png',
	iconAnchor: [25,15]
});

var gridCoords = [[[37.81, -122.5155], [37.81, -122.47891125000001], [37.7833015, -122.5155], [37.7833015, -122.47891125000001]], [[37.81, -122.47891125000001], [37.81, -122.4423225], [37.7833015, -122.47891125000001], [37.7833015, -122.4423225]], [[37.81, -122.4423225], [37.81, -122.40573375], [37.7833015, -122.4423225], [37.7833015, -122.40573375]], [[37.81, -122.40573375], [37.81, -122.369145], [37.7833015, -122.40573375], [37.7833015, -122.369145]], [[37.7833015, -122.5155], [37.7833015, -122.47891125000001], [37.756603, -122.5155], [37.756603, -122.47891125000001]], [[37.7833015, -122.47891125000001], [37.7833015, -122.4423225], [37.756603, -122.47891125000001], [37.756603, -122.4423225]], [[37.7833015, -122.4423225], [37.7833015, -122.40573375], [37.756603, -122.4423225], [37.756603, -122.40573375]], [[37.7833015, -122.40573375], [37.7833015, -122.369145], [37.756603, -122.40573375], [37.756603, -122.369145]], [[37.756603, -122.5155], [37.756603, -122.47891125000001], [37.7299045, -122.5155], [37.7299045, -122.47891125000001]], [[37.756603, -122.47891125000001], [37.756603, -122.4423225], [37.7299045, -122.47891125000001], [37.7299045, -122.4423225]], [[37.756603, -122.4423225], [37.756603, -122.40573375], [37.7299045, -122.4423225], [37.7299045, -122.40573375]], [[37.756603, -122.40573375], [37.756603, -122.369145], [37.7299045, -122.40573375], [37.7299045, -122.369145]], [[37.7299045, -122.5155], [37.7299045, -122.47891125000001], [37.703206, -122.5155], [37.703206, -122.47891125000001]], [[37.7299045, -122.47891125000001], [37.7299045, -122.4423225], [37.703206, -122.47891125000001], [37.703206, -122.4423225]], [[37.7299045, -122.4423225], [37.7299045, -122.40573375], [37.703206, -122.4423225], [37.703206, -122.40573375]], [[37.7299045, -122.40573375], [37.7299045, -122.369145], [37.703206, -122.40573375], [37.703206, -122.369145]]];

var ebEvents = [[37.80100, -122.49], [37.7914, -122.48], [37.758650, -122.425927], [37.742905, -122.480515], [37.731231, -122.473649], [37.747792, -122.440690], [37.758542, -122.439964]];


function gridColor(rect, density) {
	var gridColors = ['#ffff4d', '#ffff00', '#ff944d', 
					'#ff6600', '#FF3333', '#ff0000']

		if (density == 1) {
			return gridColors[0]
		}

		else if (density == 2) {
			return gridColors[1]
		}

		else if (density == 3) {
			return gridColors[2]
		}

		else if (density == 4) {
			return gridColors[3]
		}

		else if (density == 5) {
			return gridColors[4]
		}

		else if (density == 6) {
			return gridColors[5]
		}
}



function drawGrid(map, gridCoords, grid) {

	var fillOp = .4;

	if (trans == 1) {
		fillOp = 0;
	};

	//map.addLayer(grid);

	rectangle1 = new L.rectangle([gridCoords[0][0], gridCoords[0][3]]);
	rects.addLayer(rectangle1);
	rectangle1.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle1, gridDensities[0])});
	//grid.addLayer(rectangle1);
	rectangle1.on("click", function (e) {
		var bounds = rectangle1.getBounds();
		//rectangle1.addLayer(ebEvents1);
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	});

	//rectangle1.setStyle({fillColor: '#FF0000'});

	rectangle2 = new L.rectangle([gridCoords[1][0], gridCoords[1][3]]);
	rects.addLayer(rectangle2);
	rectangle2.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle2, gridDensities[1])});
	//grid.addLayer(rectangle2);
	rectangle2.on("click", function (e) {
		var bounds = rectangle2.getBounds();
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	});

	rectangle3 = new L.rectangle([gridCoords[2][0], gridCoords[2][3]]);
	rects.addLayer(rectangle3);
	rectangle3.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle3, gridDensities[2])});
	//grid.addLayer(rectangle3);
	rectangle3.on("click", function (e) {
		var bounds = rectangle3.getBounds();
        console.log("9080");
        map.fitBounds(bounds);
        $.getJSON('/_getData', {

          a: $('input[name="a"]').val(),
        }, function(data) {
          $("#data").text(data.result);
        });
	}); 

	rectangle4 = new L.rectangle([gridCoords[3][0], gridCoords[3][3]]);
	rects.addLayer(rectangle4);
	rectangle4.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle4, gridDensities[3])});
	//grid.addLayer(rectangle4);
	rectangle4.on("click", function (e) {
		var bounds = rectangle4.getBounds();
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	}); 

	rectangle5 = new L.rectangle([gridCoords[4][0], gridCoords[4][3]]);
	rects.addLayer(rectangle5);
	rectangle5.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle5, gridDensities[4])});
	//grid.addLayer(rectangle5);
	rectangle5.on("click", function (e) {
		var bounds = rectangle5.getBounds();
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	}); 

	rectangle6 = new L.rectangle([gridCoords[5][0], gridCoords[5][3]]);
	rects.addLayer(rectangle6);
	rectangle6.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle6, gridDensities[5])});
	//grid.addLayer(rectangle6);
	rectangle6.on("click", function (e) {
		var bounds = rectangle6.getBounds();
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	}); 

	rectangle7 = new L.rectangle([gridCoords[6][0], gridCoords[6][3]]);
	rects.addLayer(rectangle7);
	rectangle7.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle7, gridDensities[6])});
	//grid.addLayer(rectangle7);
	rectangle7.on("click", function (e) {
		var bounds = rectangle7.getBounds();
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	}); 

	rectangle8 = new L.rectangle([gridCoords[7][0], gridCoords[7][3]]);
	rects.addLayer(rectangle8);
	rectangle8.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle8, gridDensities[7])});
	//grid.addLayer(rectangle8);
	rectangle8.on("click", function (e) {
		var bounds = rectangle8.getBounds();
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	}); 

	rectangle9 = new L.rectangle([gridCoords[8][0], gridCoords[8][3]]);
	rects.addLayer(rectangle9);
	rectangle9.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle9, gridDensities[8])});
	//grid.addLayer(rectangle9);
	rectangle9.on("click", function (e) {
		trans = 1;
		var bounds = rectangle9.getBounds();
        console.log(bounds);
        marker = new L.marker([root[0], root[1]], {icon: uberMarkerGrey}).
        bindPopup("Event X");
        marker2 = new L.marker([point1[0], point1[1]], {icon: uberMarker}).
        bindPopup("Destination 1");
        marker3 = new L.marker([point2[0], point2[1]], {icon: uberMarker}).
        bindPopup("Destination 3");
        marker4 = new L.marker([point3[0], point3[1]], {icon: uberMarker}).
        bindPopup("Destination 2");

        polyline1 = L.polyline(line_points1, polyline_options1).addTo(map);
        polyline2 = L.polyline(line_points2, polyline_options2).addTo(map);
        polyline3 = L.polyline(line_points3, polyline_options3).addTo(map);

        map.addLayer(marker);
        map.addLayer(marker2);
        map.addLayer(marker3);
        map.addLayer(marker4);

        console.log(rects);
        map.removeLayer(rects);
        $.getJSON('/_getData', {

          a: $('input[name="a"]').val(),
        }, function(data) {
        	var x=data.result;
        	
          $("#data").text(data.result);
        });
                //map.setCenter();
        //map.fitBounds(bounds);
	}); 

	rectangle10 = new L.rectangle([gridCoords[9][0], gridCoords[9][3]]);
	rects.addLayer(rectangle10);
	rectangle10.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle10, gridDensities[9])});
	//grid.addLayer(rectangle10);
	rectangle10.on("click", function (e) {
		var bounds = rectangle10.getBounds();
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	}); 

	rectangle11 = new L.rectangle([gridCoords[10][0], gridCoords[10][3]]);
	rects.addLayer(rectangle11);
	rectangle11.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle11, gridDensities[10])});
	//grid.addLayer(rectangle11);
	rectangle11.on("click", function (e) {
		var bounds = rectangle11.getBounds();
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	}); 

	rectangle12 = new L.rectangle([gridCoords[11][0], gridCoords[11][3]]);
	rects.addLayer(rectangle12);
	rectangle12.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle12, gridDensities[11])});
	//grid.addLayer(rectangle12);
	rectangle12.on("click", function (e) {
		var bounds = rectangle12.getBounds();
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	}); 

	rectangle13 = new L.rectangle([gridCoords[12][0], gridCoords[12][3]]);
	rects.addLayer(rectangle13);
	rectangle13.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle13, gridDensities[12])});	
	//grid.addLayer(rectangle13);
	rectangle13.on("click", function (e) {
		var bounds = rectangle13.getBounds();
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	}); 

	rectangle14 = new L.rectangle([gridCoords[13][0], gridCoords[13][3]]);
	rects.addLayer(rectangle14);
	rectangle14.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle14, gridDensities[13])});
	//grid.addLayer(rectangle14);
	rectangle14.on("click", function (e) {
		var bounds = rectangle14.getBounds();
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	}); 

	rectangle15 = new L.rectangle([gridCoords[14][0], gridCoords[14][3]]);
	rects.addLayer(rectangle15);
	rectangle15.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle15, gridDensities[14])});
	//grid.addLayer(rectangle15);
	rectangle15.on("click", function (e) {
		var bounds = rectangle15.getBounds();
        console.log(bounds);
                //map.setCenter();
        map.fitBounds(bounds);
	});

	rectangle16 = new L.rectangle([gridCoords[15][0], gridCoords[15][3]]);
	rects.addLayer(rectangle16);
	rectangle16.setStyle({fillOpacity: fillOp, stroke: false, fillColor: gridColor(rectangle16, gridDensities[15])});
	//grid.addLayer(rectangle16);
	rectangle16.on("click", function (e) {
		var bounds = rectangle16.getBounds();
        console.log(bounds);
        console.log(rectangle16.getBounds().contains(ebEvents[0][0], ebEvents[0][1]));
                //map.setCenter();
        map.fitBounds(bounds);
	}); 


	map.addLayer(rects);
}

$('#test').click(function() {
	trans = 1;
	drawGrid(map, gridCoords, grid);
	map.removeLayer(marker);
	map.removeLayer(marker2);
	map.removeLayer(marker3);
	map.removeLayer(marker4);
	map.removeLayer(polyline1);
	map.removeLayer(polyline2);
	map.removeLayer(polyline3);
	//grid.removeLayer();
});

function drawEbEvents(map, eventCoords, events) {

	ebEvents1 = new L.featureGroup();

	map.addLayer(ebEvents);

	/*for (var i=0; i < ebEventCoords.length; i++) {
		marker = new L.marker([ebEventCoords[i][0], ebEventCoords[i][1]]);
		//.bindPopup(quakes[i][5]+"<br>Time: "+quakes[i][3]+"<br>Location: "+quakes[i][0]+", "+quakes[i][1]+"<br>Magnitude: "+quakes[i][2]+"<br><a href="+quakes[i][4]+">Link</a>", {showOnMouseOver: true});
	
		grid.addLayer(marker);	

	} return false; */
}

drawGrid(map, gridCoords, grid);
//drawEbEvents(map, ebEventCoords, ebEvents);

map.fitBounds(grid.getBounds());


/*var circle = L.circle([0, 0], 1000, {
    color: '#0000ff',
    fillColor: '#0000ff',
    fillOpacity: 0.4
	}).addTo(map);

var globalQuakes = [[200,200]];
var globalQuakesLength = 0;

var initLoad = 0;

function drawMap(quakes) {
	//var quakes in format: [lat, long, mag, date/time, url, place]

	var ci = magMax(quakes);
	var center = [quakes[ci][0], quakes[ci][1]];

	if (initLoad == 0) {
	newCenter(map, quakes[ci][0], quakes[ci][1], circle, quakes[ci][2]);
	initLoad = 1;
	}

	map.fitBounds(circle.getBounds());

	
	var markers = new L.featureGroup();

	eraseMarkers(map, quakes, markers);

	drawQuakeList(map, center, circle, quakes);

	//CURRENTLY PANNING TO 0th QUAKE INSTEAD OF STRONGEST (NEW) QUAKE
	var pan = document.getElementById('pan');

	pan.addEventListener('click', function(){
		newCenter(map, quakes[ci][0], quakes[ci][1], circle, quakes[ci][2]);});

	//var new_quake = document.getElementById('new_quake');

	//new_quake.addEventListener('click', function(){
	//	newCenter(map, quakes[0][0], quakes[0][1], circle, quakes[0][2]);});
	//	new_quake.style.display = 'none';


}

function newCenter(map, lat, longitude, circle, mag) {
	//var quakes in format: [lat, long, mag, date/time, url, place]
	
	circle.setLatLng([lat, longitude]);
	circle.setRadius(calcRad(mag));
	circle.setStyle({fillColor: calcColor(mag)});

	map.panTo(new L.LatLng(lat, longitude));
	map.fitBounds(circle.getBounds());
}

function calcRad(mag) {
	//circleRads array maps to pattern: 0, .5, 1, 1.5, 2, 2.5, etc.

	var circleRads = [10, 25, 50, 75, 100, 500, 750, 1000,
						5000, 7500, 10000, 50000, 75000, 100000,
						500000, 750000, 1000000, 5000000, 7500000, 10000000];

	if (mag == 0) {
		return circleRads[0];
	}

	else if ((mag > 0 && mag <= .5))  {
		return circleRads[1];
	}

	else if ((mag > .5 && mag <= 1.0))  {
		return circleRads[2];
	}

	else if ((mag > 1.0 && mag <= 1.5))  {
		return circleRads[3];
	}

	else if ((mag > 1.5 && mag <= 2.0))  {
		return circleRads[4];
	}

	else if ((mag > 2.0 && mag <= 2.5))  {
		return circleRads[5];
	}

	else if ((mag > 2.5 && mag <= 3.0))  {
		return circleRads[6];
	}

	else if ((mag > 3.0 && mag <= 3.5))  {
		return circleRads[7];
	}

	else if ((mag > 3.5 && mag <= 4.0))  {
		return circleRads[8];
	}

	else if ((mag > 4.0 && mag <= 4.5))  {
		return circleRads[9];
	}

	else if ((mag > 4.5 && mag <= 5.0))  {
		return circleRads[10];
	}

	else if ((mag > 5.0 && mag <= 5.5))  {
		return circleRads[11];
	}

	else if ((mag > 5.5 && mag <= 6.0))  {
		return circleRads[12];
	}

	else if ((mag > 6.0 && mag <= 6.5))  {
		return circleRads[13];
	}

	else if ((mag > 6.5 && mag <= 7.0))  {
		return circleRads[14];
	}

	else if ((mag > 7.0 && mag <= 7.5))  {
		return circleRads[15];
	}

	else if ((mag > 7.5 && mag <= 8.0))  {
		return circleRads[16];
	}

	else if ((mag > 8.0 && mag <= 8.5))  {
		return circleRads[17];
	}

	else if ((mag > 8.5 && mag <= 9.0))  {
		return circleRads[18];
	}

	else if ((mag > 9.0 && mag <= 9.5))  {
		return circleRads[19];
	}
}

function calcColor(mag) {
	//var quakes in format: [lat, long, mag, date/time, url, place]

	var circleColors = ['#6600cc', '#0000ff', '#66ccff',
					'#66ff66', '#99ff33', '#ccff33',
					'#ffcc00', '#ff3300', '#ff0000']


	if (mag <= 1.0) {
		return circleColors[0];
	}

	else if(mag > 1.0 && mag <= 2.0) {
		return circleColors[1];
	}

	else if(mag > 2.0 && mag <= 3.0) {
		return circleColors[2];
	}

	else if(mag > 3.0 && mag <= 4.0) {
		return circleColors[3];
	}

	else if(mag > 4.0 && mag <= 5.0) {
		return circleColors[4];
	}

	else if(mag > 5.0 && mag <= 6.0) {
		return circleColors[5];
	}

	else if(mag > 6.0 && mag <= 7.0) {
		return circleColors[6];
	}

	else if(mag > 7.0 && mag <= 8.0) {
		return circleColors[7];
	}

	else if(mag > 8.0 && mag <= 9.0) {
		return circleColors[8];
	}
}

function eraseMarkers(map, quakes, markers) {
	//var quakes in format: [lat, long, mag, date/time, url, place]

	map.removeLayer(markers);

	var markers = new L.featureGroup();
	
	drawMarkers(map, quakes, markers);
}

function drawMarkers(map, quakes, markers) {
	//var quakes in format: [lat, long, mag, date/time, url, place]
	
	map.addLayer(markers);
	
	for (var i=0; i < quakes.length; i++) {
		console.log(quakes[i][5]);
		marker = new L.marker([quakes[i][0], quakes[i][1]]).
		bindPopup(quakes[i][5]+"<br>Time: "+quakes[i][3]+"<br>Location: "+quakes[i][0]+", "+quakes[i][1]+"<br>Magnitude: "+quakes[i][2]+"<br><a href="+quakes[i][4]+">Link</a>", {showOnMouseOver: true});

		markers.addLayer(marker);

	} return false;
}

function magMax(quakes) {
	//var quakes in format: [lat, long, mag, date/time, url, place]

	var quakeMaxIndex = 0
	var max = 0

	for(var i=0; i < quakes.length; i++) {

		if (quakes[i][2] > max) {
			max = quakes[i][2];
			quakeMaxIndex = i;
		}
	}

	console.log(quakeMaxIndex);
	console.log(max);
	return quakeMaxIndex;
}

function refreshData() {

    var xmlhttp = new XMLHttpRequest();
    var url = "http://io.milowski.com/usgs/earthquakes/feed/v1.0/summary/all_hour.geojson";

    var xmlhttp2 = new XMLHttpRequest();
    var url2 = "http://io.milowski.com/usgs/earthquakes/feed/v1.0/summary/4.5_day.geojson";

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp2.open("GET", url2, true);
    xmlhttp2.send();

    xmlhttp.onreadystatechange = function() {
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var myArr = JSON.parse(xmlhttp.responseText);

            if (myArr.features.length > globalQuakesLength) {
            	new_quake = document.getElementById("new_quake");
            	//new_quake.style.display = 'block';
            }           
            
            if (myArr.features.length > 0 &&
            	//myArr.features[0].geometry.coordinates[0] != globalQuakes[0][1] &&
            	myArr.features.length != globalQuakesLength) {
            	
            	
            	buildQuakeList(myArr);
                           	
            }

            else if (myArr.features.length == 0 && xmlhttp2.readyState == 4 &&
            	xmlhttp2.status == 200) {

            	var myArr2 = JSON.parse(xmlhttp2.responseText);
            	
            	buildQuakeList(myArr2);     	
            }

            else {
                console.log('no new quakes... yet!');
            }
        }
    }    
};

function buildQuakeList (myArr) {
	var quakes = [];
	globalQuakes = [];
	globalQuakesLength = myArr.features.length;

	for (var i=0; i<myArr.features.length; i++) {
		indivQuakeData = [];         		

		var rawDateTime = myArr.features[i].properties.time;
		var formattedDateTime = new Date(rawDateTime).toString();

		var lat = myArr.features[i].geometry.coordinates[1];
		var longitude = myArr.features[i].geometry.coordinates[0];
		var mag = myArr.features[i].properties.mag;
		var url = myArr.features[i].properties.url;
		var place = myArr.features[i].properties.place;

		indivQuakeData.push(lat, longitude, mag, formattedDateTime, url, place);
		quakes.push(indivQuakeData);
		globalQuakes.push(indivQuakeData);
	}

    drawMap(quakes);

}

function drawQuakeList (map, center, circle, quakes) {
	//var quakes in format: [lat, long, mag, date/time, url, place]

	console.log(quakes);
	var data = '<strong>Quake List</strong>';
	var circle = circle

	for(i=0; i<quakes.length; i++) {

            data += (
            '<li class="place" id="'+i+'" onclick="newCenter(map, '+quakes[i][0]+', '+quakes[i][1]+', circle, '+quakes[i][2]+')">'+quakes[i][5]+' - '+quakes[i][2]+' mag</li>');
        };

        var length = 0
	    var quake_list = document.getElementsByClassName("place");

    document.getElementById("quake_list").innerHTML = data;
}


refreshData();
//setInterval(refreshData, 6000);*/