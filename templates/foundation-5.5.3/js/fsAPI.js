var len, itms, lt, lg;
var clienId = "14CSP1SYZHDG1WKGU2R02S0AUE44RWRSQEOSHPDVHGNBNDR0";
var clientSecret = "B5G0BNCLMIS1E2DJELSC2SA54HMNEBKWZUDRZSQFLAKQDLE3";
locationObj = [];
locProps = {};
var latitude=[];
var longitude=[];
var loc = $("#resName").text();

var dataAPI = "https://api.mlab.com/api/1/databases/d_coups/collections/useradmins?apiKey=JMOq37wA281RDQ8r8DtitIiBh12NlKky";

$.getJSON(dataAPI, function(json) {
	$.each(json, function(i, field){
		console.log(field.local.lat+" "+field.local.lng);
	});
});

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
