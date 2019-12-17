// Remind

var xhttp;

function createRequest() {
	xhttp = new XMLHttpRequest();
}

function sending() {
	createRequest();
	xhttp.onreadystatechange = callsFunction;

	xhttp.open("GET", "firstJsp.jsp");
	xhttp.send();
}

function callsFunction() {
	if(xhttp.readyState == 4) {
		if(xhttp.status == 200) {

			var datas = xhttp.responseText;
			
			alert(datas);
			
		}else if(xhttp.status == 404) {
			alert("Can't find page");
		}
	}
}