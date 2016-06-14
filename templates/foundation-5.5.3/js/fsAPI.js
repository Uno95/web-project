var len, itms, lt, lg;
var clienId = "14CSP1SYZHDG1WKGU2R02S0AUE44RWRSQEOSHPDVHGNBNDR0";
var clientSecret = "B5G0BNCLMIS1E2DJELSC2SA54HMNEBKWZUDRZSQFLAKQDLE3";
locationObj = [];
locProps = {};
var obj = [];
var latitude=[];
var longitude=[];
var loc = $("#resName").text();


var dataAPI = "https://api.mlab.com/api/1/databases/d_coups/collections/useradmins?apiKey=JMOq37wA281RDQ8r8DtitIiBh12NlKky";

$.getJSON(dataAPI, function(json) {
	$.each(json, function(i, field){
		obj.push(field);
		locProps.lat=field.local.lat;
		locProps.lng=field.local.lng;
		
		//console.log(latitude + " " + longitude);
		locationObj.push(locProps);
	});
	for (var x = 0; x < obj.length; x++) {
		initMap(lt,lg,obj.length);
			setMarkers(parseInt(obj[x].local.lat),parseInt(obj[x].local.lng),obj.length);
		}
	console.log(obj);
		
		/*console.log(obj);*/
	
});

if(loc == "Sumatera Utara"){
	lt = 3.591353827691036;
	lg = 98.67302360520011;
}
if(loc == "Sumatera Selatan"){
	lt = -2.974779002173207;
	lg = 104.78142204270011;
}
if(loc == "Jawa Barat"){
	lt = -6.925256924184585;
	lg = 107.63237419113761;
}
if(loc == "Jawa Timur"){
	lt = -7.25232695748789;
	lg = 112.75200309738761;
}

// $.getJSON(gecodeAPI, function(json) {
// 	itemObj = json.response.groups[0].items;
// 	len = itemObj.length;
// 	for (i = 0; i < len; i++) {
// 		itms = json.response.groups[0].items[i];
// 		lt = itms.venue.location.lat;
// 		lg = itms.venue.location.lng;
// 		locProps.lat = lt;
// 		locProps.lng = lg;
//         latitude[i] = lt;
//         longitude[i] = lg;
// 		locationObj.push(locProps);

// 	}
//     setMarkers(latitude,longitude,loc,len);
// 	initMap(lt, lg,len);
// 	console.log(locationObj);
// });

//$('#resNamee').text(itms.venue.location.lat);
