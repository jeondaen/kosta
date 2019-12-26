/*                          스파게티 코드는 최대한 지양하자.

To - Do
========================
체크리스트 입력 ( script ),

체크리스트 등록,

체크리스트 조회, 

체크리스트 삭제,

체크리스트 완료 ( 수정이라 할 수도 있겠다. ),

------- 프로그레스 바 변경 ( 사용빈도 높음 )
========================


현 VO 객체 
========================
checklist_num, checklist_content, checklist_check, checklist_writer, checklist_regdate,
card_num
========================

*/

var xhrc;

function createXHR() {
  return new XMLHttpRequest();
}

// Ajax 준비
// 이번 진행상황에는 객체지향적으로 사용해보자
var checkTool = (function() {
  /*

  체크리스트 등록

  */
  function insCheckList(obj) {
    xhrc = createXHR();

    xhrc.onreadystatechange = function() {
      if (xhrc.readyState == 4) {
        if (xhrc.status == 200) {
          listCheckList(obj.card_num);
        }
      }
    };

    xhrc.open("POST", "/checkList/ins");
    xhrc.setRequestHeader("Content-Type", "application/json");
    xhrc.send(obj);
  }

  /*

  체크리스트 조회
  
  */

  function listCheckList(card_num) {
    xhrc = createXHR();

    xhrc.onreadystatechange = function() {
      if (xhrc.readyState == 4) {
        if (xhrc.status == 200) {
          /*
                 
          프로그레스 바 핸들 함수 NEEDS
          
          */

          let checkDTO = JSON.parse(xhrc.response);
          let listOfCheck = checkDTO.checkLists;
          pm_createCheckList(card_num, listOfCheck);
          pm_handleProgress(listOfCheck.length, checkDTO.completeList);
        }
      }
    };

    xhrc.open("GET", "/checkList/list/" + card_num);
    xhrc.send();
  }

  function modCheckList(arg) {
    console.log(arg);
    xhrc = createXHR();

    xhrc.onreadystatechange = function() {
      if (xhrc.readyState == 4) {
        if (xhrc.status == 200) {
          // 클릭한 대상의 checked 와 innerHTML 을 캐치
        }
      }
    };
  }
  function delCheckList() {}
  /*
   체크리스트 노드 생성
  */
  function pm_createCheckList(pm_card_num, pm_checklist) {
    var form_group = document.querySelector(".formgroup"); // 최상위 체크박스 항목
    form_group.innerHTML = "";

    for (let elem of pm_checklist) {
      var paChecklistLine = document.createElement("div"); // 하나의 체크리스트 항목
      paChecklistLine.className =
        "custom-control custom-checkbox paChecklistLine";

      var paChecklistLineCon = document.createElement("div"); // 체크리스트 내부 컨텐츠 시작
      paChecklistLineCon.className = "paChecklistLineCon";

      var paCheckControlBox = document.createElement("input");
      paCheckControlBox.type = "checkbox";
      paCheckControlBox.className = "custom-control-input paCheckControlBox";
      paCheckControlBox.id = elem.checklist_num;
      paCheckControlBox.checked = elem.checklist_check == 1 ? "checked" : "";

      var paCheckitem = document.createElement("label");
      paCheckitem.className = "custom-control-label paCheckItme";
      paCheckitem.setAttribute("for", elem.checklist_num);
      paCheckitem.innerHTML = elem.checklist_content;

      var paCheckItemMenu = document.createElement("div");
      paCheckItemMenu.className = "paCheckItemMenu";
      paCheckItemMenu.innerHTML = "&#9477;";

      paChecklistLineCon.append(paCheckControlBox);
      paChecklistLineCon.append(paCheckitem);
      paChecklistLineCon.append(paCheckItemMenu);

      paChecklistLine.append(paChecklistLineCon);
      console.log(elem);
      form_group.append(paChecklistLine);
    }
  }

  /*
  진행현황 바
  */

  function pm_handleProgress(totalCheck, doneCheck, target) {
    let x = (doneCheck * 100) / totalCheck;

    var progress_bar = document.querySelector(".progress-bar");
    progress_bar.style.width = x;
  }

  return { insCheckList: insCheckList, listCheckList: listCheckList };
})();
