
var address;
var addressVal = lt = lg  = "";

$(document).ready(function(){
	$("#sBtn").click(function() {
		addressSelected = $(":selected")
		addressVal = addressSelected.text();
		var where = addressVal;
		console.log(where);
		window.location.assign("http://localhost:3000/hasilpencarian/" + addressVal);
	});
});
