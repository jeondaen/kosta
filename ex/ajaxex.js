var xhttp;

function createXMLhttpRequest() {
  xhttp = new XMLHttpRequest();
}

function sendRequest() {
  createXMLhttpRequest();

  xhttp.onreadystatechange = funcName;

  xhttp.open();
  xhttp.send();
}

function funcName() {
  if (xhttp.readyState == 4) {
    if (xhttp.status == 200) {
    }
  }
}
