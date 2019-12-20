//by PM -- 검색 후 즉각적으로 추가를 실행하는 스크립트 문입니다.

function pm_makingBoards(pm_arrayOfBoards) {
	var pm_boardListPackage = document.querySelector(".paBoardListPackage");
	pm_boardListPackage.innerHTML = "";
	
	
	let lengt = pm_arrayOfBoards.length;
	
	for(var i = 0; i<lengt; i++) {
		
		var pm_boardPackLi = document.createElement('li');
		pm_boardPackLi.setAttribute("class", "paBoardPackLi");
		
		var pm_div = document.createElement('div');
		pm_div.setAttribute("class", "btn btn-secondary paBoardPack");
			
		var pm_a = document.createElement('a');
		pm_a.setAttribute("href", "/board/"+pm_arrayOfBoards[i].board_num);
		pm_a.setAttribute("class", "paBoardPackLink");

		var pm_span1 = document.createElement('span');
		pm_span1.setAttribute("class", "paBoardNameTag");
		pm_span1.innerHTML = pm_arrayOfBoards[i].board_name;

		var pm_span2 = document.createElement('span');
		pm_span2.setAttribute("class", "paBoardRemove");
		pm_span2.innerHTML = "&#9851;";

		pm_a.append(pm_span1);
		pm_a.append(pm_span2);

		pm_div.append(pm_a);

		pm_boardPackLi.append(pm_div);
		pm_boardListPackage.append(pm_boardPackLi);
	}

}

var xhr;

var jsonArray;
var s = "";

function createXHR() {
  return new XMLHttpRequest();
}

function sending() {
  xhr = createXHR();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        (function() {
		  jsonArray = JSON.parse(xhr.response);
		  console.log(jsonArray);
		  pm_makingBoards(jsonArray);
        })();
      }
    }
  };

  xhr.open("get", "/board/search/" + s);
  xhr.send();
  
  console.log("typeof : " + typeof jsonArray)
}

window.onload = function() {
	  var searchInput = document.getElementById("pm_boardSearch");

	  searchInput.addEventListener("keypress", event => {
		  setTimeout(() => {
			  s = event.target.value;
			  sending();
		  }, 0);
	  });
	}