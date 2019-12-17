window.onload = function() {
  var spans = document.querySelectorAll(".spans");

  // ------------------------------ MODAL CONTROLL
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("pm_myBtn");

  var span = document.getElementsByClassName("pm_close")[0];

  var days = document.getElementsByTagName("td");

  function clickNo() {
    modal.style.display = "block";
    var a = this.innerHTML;
    var numput = document.getElementById("cnum");
    numput.value = a;
  }

  var modalSubmitBtn = document.getElementById("mosubmitbtn");

  modalSubmitBtn.addEventListener("click", function(event) {
    event.preventDefault();
  });

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) modal.style.display = "none";
  };

  // ------------------------------- MODAL CONTROLL END

  // [].forEach.call(spans, function(spaa) {
  //   spaa.addEventListener("click", clickNo);
  // });        캘린더 칸마다 이벤트를 추가하는 1차 방법

  spans.forEach(function(item) {
    item.addEventListener("click", clickNo);
  });
};
