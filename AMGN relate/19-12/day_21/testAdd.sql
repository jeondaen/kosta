insert into board (board_num, board_name, board_admin)
values (board_seq.nextval, 'AOMG', 'daen');
insert into board (board_num, board_name, board_admin)
values (board_seq.nextval, 'DOINGSOMETHING', 'daen');
insert into board (board_num, board_name, board_admin)
values (board_seq.nextval, '한글날을 위하여', 'daen');

insert into user_board(user_board_num, user_num, board_num)
values(user_board_seq.nextval, 2, 16);
insert into user_board(user_board_num, user_num, board_num)
values(user_board_seq.nextval, 2, 17);
insert into user_board(user_board_num, user_num, board_num)
values(user_board_seq.nextval, 2, 18);

insert into cardlist (cardlist_num, cardlist_name, cardlist_order, board_num)
values (cardlist_seq.nextval, 'user', 1, 16);
insert into cardlist (cardlist_num, cardlist_name, cardlist_order, board_num)
values (cardlist_seq.nextval, 'board', 2, 16);
insert into cardlist (cardlist_num, cardlist_name, cardlist_order, board_num)
values (cardlist_seq.nextval, 'card', 3, 16);
insert into cardlist (cardlist_num, cardlist_name, cardlist_order, board_num)
values (cardlist_seq.nextval, 'cardlist', 4, 16);

insert into card(card_num, card_name, user_num, cardlist_num, board_num)
values (card_seq.nextval, '회원가입', 2, 1,16);
insert into card(card_num, card_name, user_num, cardlist_num, board_num)
values (card_seq.nextval, '로그인', 2, 1,16);
insert into card(card_num, card_name, user_num, cardlist_num, board_num)
values (card_seq.nextval, '마이페이지', 2, 1,16);
insert into card(card_num, card_name, user_num, cardlist_num, board_num)
values (card_seq.nextval, '개인 설정', 2, 1,16);
insert into card(card_num, card_name, user_num, cardlist_num, board_num)
values (card_seq.nextval, '보드 CRUD', 2, 2,16);
insert into card(card_num, card_name, user_num, cardlist_num, board_num)
values (card_seq.nextval, '보드 with user', 2, 2,16);
insert into card(card_num, card_name, user_num, cardlist_num, board_num)
values (card_seq.nextval, '보드 with card', 2, 2,16);
insert into card(card_num, card_name, user_num, cardlist_num, board_num)
values (card_seq.nextval, '보드 with ui', 2, 2,16);

<insert id="insBoard">
		INSERT ALL 												
		INTO board (board_num, board_name, board_public, board_admin) 			
		VALUES (board_seq.nextval, #{board_name}, #{board_public}, #{board_admin})	
        
		INTO user_board (user_board_num, user_num, board_num)					
		VALUES (user_board_seq.nextval, #{board_admin}, board_seq.currval)
		SELECT 1 FROM dual

		<selectKey order="AFTER" keyProperty="board_num" resultType="long">
			SELECT board_seq.currval FROM dual
		</selectKey>													
</insert>