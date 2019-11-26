function cardinsert() {
  var parent = this.parentNode;
  var newInput = document.createElement("input");
  newInput.setAttribute("type", "text");
  parent.append(newInput);
}

// ----------- function 아래

// ------------ jquery 내부
var cardinsBtn = document.querySelectorAll("#cardinsertbtn");
cardinsBtn.forEach(function(item) {
  item.addEventListener("click", cardinsert);
});

// ------------ 처음 부분도
var cardInsertBtn = document.querySelectorAll("#cardinsertbtn");
cardInsertBtn.forEach(function(item) {
  item.addEventListener("click", cardinsert);
});

// 리팩토링 필요

// 33 줄 name 이 아닌 value 값에 넣어서 form 내부의 값을 전달받아 그것을 그대로 전달할 수 있어야 함

