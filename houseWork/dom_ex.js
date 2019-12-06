// 동적 연동하는 Combo 박스
var xhttp;

function createHttpRequest(){
	xhttp = XMLHttpRequest();
}

function mySend(check) {
	createHttpRequest();
	xhttp.onreadystatechange = callFunction;
	var req = "4_ex.json?address=" + check.value;
	xhttp.open("GET", req, true);
	xhttp.send(null);
}


// xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
function callFunction(){
	if(xhttp.readyState == 4){
		if(xhttp.status == 200) {
			var responseData = xhttp.responseText;
			document.getElementById("result").innerHTML = responseData;
		}
	}
}