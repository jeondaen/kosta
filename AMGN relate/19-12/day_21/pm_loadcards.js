var xhr;

function createXHR() {
  return new XMLHttpRequest();
}

// WINDOW 가 로드 되면 카드를 불러오게 합니다.

window.onload = function() {
  pm_loadCardlists();
  //pm_loadCards();
};

// CARDLIST 를 불러오는 메서드
// 여기서 보드번호와 유저번호가 필요합니다.
function pm_loadCardlists() {
  //user_num, board_num

  xhr = createXHR();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        pm_makeCardLists(xhr.response);
      }
    }
  };

  xhr.open("get", "/card/list.json");
  xhr.send();
}

function pm_makeCardLists(listArray) {
  var listArray = JSON.parse(listArray);
  var Cards = listArray.card;
  var Cl = listArray.cl;
  console.log("listArray : " + listArray);
  console.log("Cards : " + Cards.size);
  console.log("Cl : " + Cl.length);

  var new_card_now = document.querySelector(".new_card_now");

  Cl.forEach(element => {
    var card_box = document.createElement("div");
    card_box.setAttribute("class", "card_box");
    card_box.setAttribute("id", "card_box" + element.cardlist_num);
    card_box.setAttribute("name", element.cardlist_num);

    var card_text_white = document.createElement("div");
    card_text_white.setAttribute("class", "card text-white bg-secondary mb-3");

    var card_header = document.createElement("class", "card-header");
    card_header.innerHTML = element.cardlist_name;

    var input_cardlist_num = document.createElement("input");
    input_cardlist_num.setAttribute("type", "hidden");
    input_cardlist_num.setAttribute("name", "cardlist_num");
    input_cardlist_num.setAttribute("value", element.cardlist_num);
    card_header.append(input_cardlist_num);
    card_text_white.append(card_header);
    card_box.append(card_text_white);

    var input_board_num = document.createElement("input");
    input_board_num.setAttribute("type", "hidden");
    input_board_num.setAttribute("name", "board_num");
    input_board_num.setAttribute("value", element.board_num);
    card_header.append(input_board_num);

    var delcardlist = document.createElement("button");
    delcardlist.setAttribute("id", element.cardlist_num);
    delcardlist.setAttribute("class", "delcardlist");
    delcardlist.innerHTML = "삭제";

    card_header.append(delcardlist);

    new_card_now.before(card_box);
  });
}
