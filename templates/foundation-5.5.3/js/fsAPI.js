var clienId = "14CSP1SYZHDG1WKGU2R02S0AUE44RWRSQEOSHPDVHGNBNDR0";
var clientSecret = "B5G0BNCLMIS1E2DJELSC2SA54HMNEBKWZUDRZSQFLAKQDLE3";

var items, lt, lg;

var loc = $("#resName").text();

var gecodeAPI = "https://api.foursquare.com/v2/venues/explore?client_id="+ clienId +"&client_secret="+ clientSecret +"&mode=url&section=food&near="+loc;
console.log(gecodeAPI);

$.getJSON(gecodeAPI, function(json) {
	items = json.response.groups[0].items[0];
	console.log(items);
});