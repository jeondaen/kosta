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
