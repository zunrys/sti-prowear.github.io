var Mcost = 300;
var FMcost = 300;

var Mcheck = document.getElementById("mblouse");
var FMcheck = document.getElementById("fmblouse");

if (Mcheck.checked == true && FMcheck.checked == true) {
	var total = Mcost + FMcost;
}
else if (FMcheck.checked == false) {
	var total = Mcost;
}
else if (Mcheck.checked == false) {
	var total = FMcost;
}
else {
	alert("Please check at least one item before submitting.");
}