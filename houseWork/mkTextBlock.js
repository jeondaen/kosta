window.onload = function() {

  // Ajax 설정 생성자

  function AjaxEvent(methods, urls, parameters, ajaxevents) {
    if (methods == "post") {
      methods = "POST";
    } else if (methods == "get") {
      methods = "GET";
    }

    this.method = methods;
    this.url = urls;
    this.parameter = parameters;
    this.ajaxevent = ajaxevents;
  }

  var xhttp;

  function createXMLHR() {
    xhttp = new XMLHttpRequest();
  }

  function sender(AjaxEvent) {
    createXMLHR();

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          console.log(xhttp.responseText);
          AjaxEvent.ajaxevent(xhttp);
        } else {
        }
      }
    };
    xhttp.open(AjaxEvent.method, AjaxEvent.url);
    // 여기서 post방식일 경우 조건을 걸어주자
    if (AjaxEvent.method == "POST") {
      xhttp.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );
    }
    xhttp.send(null);
  }

  // get 방식과 post 방식이 있고, 가야할 url, 보내야할 변수와 post 방식일 경우 encoding을 해야할 경우도 생김

  var dateDay = true;
  var dateTime = true;
  var duringDay = true;

  var kp2m = document.getElementById("kp2_main");

  // 입력도중 스페이스바를 누를 경우 발생되는 이벤트
  kp2m.addEventListener("keydown", function(event) {
    // MAKING TEXT BLOCK 텍스트 블럭 만들기
    if (event.keyCode == 32) {
      if ((dateDay && kp2m.value == "오늘") || kp2m.value == "금일") {
        var span = document.createElement("span");

        span.setAttribute("class", "textBlock");
		span.setAttribute("id", "pm_simpleOrder_day");
		span.append(kp2m.value);
		
        kp2m.before(span, " ");
		kp2m.value = "";
		
		dateDay = false;
		
      } else if (dateTime && kp2m.value.match(/\d시/i)) {
		var span = document.createElement("span");
		
        span.setAttribute("class", "textBlock");
        span.setAttribute("id", "pm_simpleOrder_time");
		span.append(kp2m.value);
		
        kp2m.before(span, " ");
		kp2m.value = "";
		
        dateTime = false;
      }
    }

    // REMOVE TEXT BLOCK 텍스트 블럭 지우기
    if (kp2m.value == "" && event.keyCode == 8) {
      if (kp2m.previousElementSibling) {
        if (
          kp2m.previousElementSibling.getAttribute("id") == "pm_simpleOrder_day"
        )
          dateDay = true;
        else if (
          kp2m.previousElementSibling.getAttribute("id") == "pm_simpleOrder_time"
        )
          dateTime = true;

        kp2m.previousElementSibling.remove();
      }
    }
  });

  var kp2ex = document.getElementById("kp2ex");

  kp2ex.onclick = function() {
    var aEvent = new AjaxEvent("get", "4_ex.json", null, function(xhttp) {
      alert(xhttp.responseText);
      alert(xhttp.getResponseHeader("Content-Type"));
    });

    sender(aEvent);
  };
};
