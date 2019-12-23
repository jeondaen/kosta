var board_num = "${user.currentBoard.board_num}";

var listcl = function(error) {
  $.getJSON("/card/list.json?board_num=" + board_num, function(data) {
    var listArray = data.cl;
    listArray.forEach(element => {
      var card_box = document.createElement("div");
      card_box.setAttribute("class", "card_box");
      card_box.setAttribute("id", "card_box" + element.cardlist_num);
      card_box.setAttribute("name", element.cardlist_num);

      var card_text_white = document.createElement("div");
      card_text_white.setAttribute(
        "class",
        "card text-white bg-secondary mb-3"
      );

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

      var new_card_now = document.querySelector(".new_card_now");
      card_header.append(delcardlist);
      new_card_now.before(card_header);
    });
  }).fail(function(xhr, status, err) {
    if (error) {
      error();
    }
  });
};

window.onload = function() {
  listcl();
};
