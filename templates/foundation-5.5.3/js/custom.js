var address;

$(document).ready(function(){
	$("#sBtn").click(function() {
		address = $("#address").val();
		console.log(address);
		window.location.assign("http://localhost:3000/hasilpencarian/" + address);
	});
});