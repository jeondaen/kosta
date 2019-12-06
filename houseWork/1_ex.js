window.onload = function(){
    var xhttp;
    
    function createHttpRequest(){
        xhttp = new XMLHttpRequest();
    }

    function mySend() {
        createHttpRequest();
        xhttp.onreadystatechange = callFunction;
        xhttp.open("GET", "4_ex.json", true);
        xhttp.send(null);
    }

    function callFunction(){
        if(xhttp.readyState == 4) {
            if(xhttp.status == 200) {
                var responseData = xhttp.responseText;
                var jsonObject = eval('('+responseData+')');
                var name = jsonObject.username;
                var age = jsonObject.age;

                //document.getElementById("result").innerHTML = jsonObject;
                jsonObject.forEach(function (q){
                    document.getElementById("result").append(q.username + '\t' + q.age + '\t')
                });
            }
            }
    }
//------------------------ JSON 객체 로드

    

    

}

