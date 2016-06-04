var len, itms, lt, lg;
var clienId = "14CSP1SYZHDG1WKGU2R02S0AUE44RWRSQEOSHPDVHGNBNDR0";
var clientSecret = "B5G0BNCLMIS1E2DJELSC2SA54HMNEBKWZUDRZSQFLAKQDLE3";
locationObj = [];
locProps = {};

var loc = $("#resName").text();

var gecodeAPI = "https://api.foursquare.com/v2/venues/explore?client_id="+ clienId +"&client_secret="+ clientSecret +"&mode=url&section=food&v=20130815&near="+loc;
console.log(gecodeAPI);

$.getJSON(gecodeAPI, function(json) {
	itemObj = json.response.groups[0].items;
	len = itemObj.length;
	for (i = 0; i < len; i++) {
		itms = json.response.groups[0].items[i];
		lt = itms.venue.location.lat;
		lg = itms.venue.location.lng;
		
		locProps.lat = lt;
		locProps.lng = lg;
		locationObj.push(locProps);

		console.log("Lat: "+lt+" "+"Long: "+lg);
	}
	initMap(lt, lg);
	console.log(locationObj);
});