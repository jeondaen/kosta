--83 board_num
insert into cardlist (board_num, cardlist_num, cardlist_name, cardlist_order)
values (83, cardlist_seq.nextval, '회원가입', 0);

insert into cardlist (board_num, cardlist_num, cardlist_name, cardlist_order)
values (83, cardlist_seq.nextval, '보드', 1);

insert into cardlist (board_num, cardlist_num, cardlist_name, cardlist_order)
values (83, cardlist_seq.nextval, '카드', 2);

insert into cardlist (board_num, cardlist_num, cardlist_name, cardlist_order)
values (83, cardlist_seq.nextval, '카드리스트', 3);

insert into card (USER_NUM, CARDLIST_NUM, BOARD_NUM, CARD_NUM, CARD_NAME)
values (1, 516, 83, card_seq.nextval, '로그인 문제');

insert into card (USER_NUM, CARDLIST_NUM, BOARD_NUM, CARD_NUM, CARD_NAME)
values (1, 516, 83, card_seq.nextval, '회원 이슈');

insert into card (USER_NUM, CARDLIST_NUM, BOARD_NUM, CARD_NUM, CARD_NAME)
values (1, 517, 83, card_seq.nextval, '보드 추가 이슈');

insert into card (USER_NUM, CARDLIST_NUM, BOARD_NUM, CARD_NUM, CARD_NAME)
values (1, 517, 83, card_seq.nextval, '보드 조회 이슈');

insert into card (USER_NUM, CARDLIST_NUM, BOARD_NUM, CARD_NUM, CARD_NAME)
values (1, 517, 83, card_seq.nextval, '보드 이슈');

commit;

