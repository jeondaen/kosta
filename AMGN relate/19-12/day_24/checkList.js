/*
체크리스트를 눌렀을 때 등록 창 ->
체크리스트 등록 할 때 --> 상단의 진행 상황 변동 ->
내부 체크리스트에 확인을 눌러 완료 표시할 때 --> 상단의 진행 상황 변동 ->
체크리스트를 다시 눌러 확인 취소 -> 상단의 진행 상황 변동->

*/

/*
window.onload = function() {
    var x = document.getElementById("checklist");
    x.addEventListener("click", function(){

    })
}
*/

var checkListObj = (function() {
  var xhr;

  function createXHR() {
    xhr = new XMLHttpRequest();
  }

  // 체크리스트 등록 param = content, card_num
  function addCheckList(checkContent, card_num) {
    createXHR();

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          // 리스트 삭제
          // 리스트 쇼
        }
      }
    };

    xhr.open("POST", "/checkList/ins");
    xhr.setRequestHeader();
  }

  return {
    addCheckList: addCheckList
  };
})();
