/*  Issue of Soyeon

json array 라고 만들었지만 String 으로 만들어주는게 간편함 -- 

String s = jArray.toJSONString();

request.setAttribute("resultList", s);

*/

responseData = eval("(" + responseData + ")");

var str = JSON.stringify(responseData);

var test = document.querySelector("#test");

var br = document.createElement("br");

test.append("");
test.append(br);

/*
sendRequest2 ==> 파라미터 필요
*/