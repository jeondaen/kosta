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

var cardno;

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
          cardno = card_num;

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

  function modCheckList(...arg) {
    xhrc = createXHR();

    let len = arg.length;
    let checkObj;
    switch (len) {
      case 2:
        checkObj = { checklist_num: arg[0], checklist_check: arg[1] };
        checkObj = JSON.stringify(checkObj);
        break;

      case 3:
        checkObj = {
          checklist_num: arg[0],
          checklist_check: arg[1],
          checklist_content: arg[2]
        };
        checkObj = JSON.stringify(checkObj);
        break;
    }

    console.log(checkObj);
    xhrc.onreadystatechange = function() {
      if (xhrc.readyState == 4) {
        if (xhrc.status == 200) {
          // 클릭한 대상의 checked 와 innerHTML 을 캐치
          listCheckList(cardno);
        }
      }
    };

    xhrc.open("POST", "/checkList/mod");
    xhrc.setRequestHeader("Content-Type", "application/json");
    xhrc.send(checkObj);
  }
  function delCheckList() {}
  /*
   체크리스트 노드 생성
  */
  function pm_createCheckList(pm_card_num, pm_checklist) {
    var form_group = document.querySelector(".pm_totalCheckList"); // 최상위 체크박스 항목
    form_group.innerHTML = "";

    for (let elem of pm_checklist) {
      var paCheckGroup = document.createElement("div"); // 새로운 체크리스트1
      paCheckGroup.className = "paCheckGroup";

      var paChecklistLine = document.createElement("div"); // 하나의 체크리스트 항목
      paChecklistLine.className =
        "custom-control custom-checkbox paChecklistLine";

      var paChecklistLineCon = document.createElement("div"); // 체크리스트 내부 컨텐츠 시작
      paChecklistLineCon.className = "paChecklistLineCon pm_checkEventListener";

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

      var paCardCheckIputBox = document.createElement("div");
      paCardCheckIputBox.className = "paCardCheckIputBox cf";

      var paCheckInput = document.createElement("textarea");
      paCheckInput.className = "paCheckInput";
      //paCheckInput.value = "";
      paCardCheckIputBox.append(paCheckInput);

      var nully = document.createElement("button");
      nully.type = "button";
      nully.id = "null";
      nully.className = "btn btn-success paCheckInputBtn";
      nully.innerHTML = "저장";
      paCardCheckIputBox.append(nully);

      var paCheckInputDelBtn = document.createElement("span");
      paCheckInputDelBtn.className = "paCheckInputDelBtn";

      var img1 = document.createElement("img");
      img1.src = "/resources/images/board_w_traschcan.png";
      img1.alt = "";
      img1.className = "paDelImage1";
      paCheckInputDelBtn.append(img1);

      var img2 = document.createElement("img");
      img2.src = "/resources/images/board_w_traschcan2.png";
      img2.alt = "";
      img2.className = "paDelImage2";
      paCheckInputDelBtn.append(img2);

      paCardCheckIputBox.append(paCheckInputDelBtn);

      paCheckGroup.append(paChecklistLine);
      paCheckGroup.append(paCardCheckIputBox);

      form_group.append(paCheckGroup);
    }
  }

  /*
  진행현황 바
  */

  function pm_handleProgress(totalCheck, doneCheck, target) {
    let x = (doneCheck * 100) / totalCheck;
    if (x == Infinity) x = 0;

    var progress_bar = document.querySelector(".progress-bar");
    progress_bar.style.width = x + "%";
  }

  return {
    insCheckList: insCheckList,
    listCheckList: listCheckList,
    modCheckList: modCheckList
  };
})();

window.onload = function() {
  // PM_REPLY.JS 파일에서 window.onload 가 먹히지 않아 이부분에 댓글을 실행하는 코드를 작성함 =====================

  var commentInsert = document.querySelector(
    ".paCommentInputBtn"
  ); /* INSERT 버튼을 눌렀을때 ( 추가기능 ) */
  console.log("pm_reply area" + commentInsert);
  commentInsert.addEventListener("click", function() {
    if (document.querySelector(".paCommentInput").value.trim() != "") {
      console.log("적용");
      insReply();
    }
  });

  // 체크리스트의 내용이 변화하였을 때
  $(".pm_totalCheckList").on("change", ".pm_checkEventListener", function() {
    let tf = this.querySelector("input").checked;
    let ckl_num = this.querySelector("input").id;
    let ckl_content = this.querySelector("label").innerHTML;

    console.log(tf, ckl_num, ckl_content);
    checkTool.modCheckList(ckl_num, tf, ckl_content);
  });

  //클릭시 감추기
  $(".paCheckGroup").on("click", ".paCheckItemMenu", function() {
    console.log($(this));
    $(".paChecklistLine").hide();
    $(".paCardCheckIputBox").show();
  });

  //다른 곳 클릭시 닫히기
  $("html").mouseup(function(e) {
    if (!$(".paCardCheckIputBox *").is(e.target)) {
      $(".paChecklistLine").show();
      $(".paCardCheckIputBox").hide();
    }
  });

  //체크리스트 입력창 자동 조절
  $(".paCheckInput").on("keydown keyup", function() {
    $(this)
      .height(1)
      .height($(this).prop("scrollHeight") - 14);
  });

  //체크리스트 추가 버튼
  $(".paCheckWorkBtn").on("click", ".paCheckWorkBtn", function() {
    console.log("kkk");
    $(".paCardCheckIAddBox").show();
    $(".paCheckWorkBtn").hide();
  });
  //체크리스트 추가 입력창 조절
  $(".paCheckAddInput").on("keydown keyup", function() {
    $(this)
      .height(1)
      .height($(this).prop("scrollHeight") - 14);
  });
  //체크리스트 추가 꺼짐
  $("html").mouseup(function(e) {
    if (!$(".paCardCheckIAddBox *").is(e.target)) {
      $(".paCheckWorkBtn").show();
      $(".paCardCheckIAddBox").hide();
    }
  });

  $(".paGetCheck").change(function() {
    if ($paGetCheck.is(":checked")) {
      //체크박스에 체크 된 경우
      $paGetCheck.addClass("on");
      $paDudateComplete.show();
      $paDudateOverdue.hide();
    } else {
      //체크박스에 체크되지 않은 경
      $paDudateComplete.hide();
      $paDudateOverdue.show();
    }
  });
};
