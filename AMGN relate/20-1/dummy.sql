-- 유저

INSERT INTO users (user_num, user_id, user_pw, user_name) VALUES (user_seq.nextval, 'daen', '1234', 'DAEHOON')
INSERT INTO users (user_num, user_id, user_pw, user_name) VALUES (user_seq.nextval, 'hohyun', '1234', 'HOHYUN')
INSERT INTO users (user_num, user_id, user_pw, user_name) VALUES (user_seq.nextval, 'soyeon', '1234', 'SOYEON')
INSERT INTO users (user_num, user_id, user_pw, user_name) VALUES (user_seq.nextval, 'joohee', '1234', 'JOOHEE')
INSERT INTO users (user_num, user_id, user_pw, user_name) VALUES (user_seq.nextval, 'beomseok', '1234', 'BEOMSEOK')
INSERT INTO users (user_num, user_id, user_pw, user_name) VALUES (user_seq.nextval, 'sujae', '1234', 'SUJAE')
INSERT INTO users (user_num, user_id, user_pw, user_name) VALUES (user_seq.nextval, 'dongjae', '1234', 'DONGJAE')

-- 보드

INSERT INTO board (board_num, board_name, board_admin) VALUES (board_seq.nextval, 'AMGN', )
INSERT INTO board (board_num, board_name, board_admin) VALUES (board_seq.nextval, 'STUDY GROUP', )
INSERT INTO board (board_num, board_name, board_admin) VALUES (board_seq.nextval, 'KOTTRANG', )
INSERT INTO board (board_num, board_name, board_admin) VALUES (board_seq.nextval, 'KOKO', )
INSERT INTO board (board_num, board_name, board_admin) VALUES (board_seq.nextval, 'ALGORITHM', )

-- 카드 리스트

INSERT INTO cardlist (cardlist_num, cardlist_name, board_num) VALUES (cardlist_seq.nextval, 'USERS', )
INSERT INTO cardlist (cardlist_num, cardlist_name, board_num) VALUES (cardlist_seq.nextval, 'BOARD', )
INSERT INTO cardlist (cardlist_num, cardlist_name, board_num) VALUES (cardlist_seq.nextval, 'CARD', )
INSERT INTO cardlist (cardlist_num, cardlist_name, board_num) VALUES (cardlist_seq.nextval, 'CARDLIST', )
INSERT INTO cardlist (cardlist_num, cardlist_name, board_num) VALUES (cardlist_seq.nextval, 'ALARM', )
INSERT INTO cardlist (cardlist_num, cardlist_name, board_num) VALUES (cardlist_seq.nextval, 'CALENDAR', )

-- 카드

INSERT INTO card (card_num, card_name, user_num, cardlist_num, board_num) VALUES (card_seq.nextval, '회원가입', 1, 1);
INSERT INTO card (card_num, card_name, user_num, cardlist_num, board_num) VALUES (card_seq.nextval, '마이페이지', 1, 1);
INSERT INTO card (card_num, card_name, user_num, cardlist_num, board_num) VALUES (card_seq.nextval, '개인 설정', 1, 1);
INSERT INTO card (card_num, card_name, user_num, cardlist_num, board_num) VALUES (card_seq.nextval, '보드 WITH USER', 2, 1);
INSERT INTO card (card_num, card_name, user_num, cardlist_num, board_num) VALUES (card_seq.nextval, '보드 WITH CARD', 2, 1);
INSERT INTO card (card_num, card_name, user_num, cardlist_num, board_num) VALUES (card_seq.nextval, '보드 CURD', 2, 1);
INSERT INTO card (card_num, card_name, user_num, cardlist_num, board_num) VALUES (card_seq.nextval, '카드 CURD', 3, 1);
INSERT INTO card (card_num, card_name, user_num, cardlist_num, board_num) VALUES (card_seq.nextval, '카드 WITH UI', 3, 1);
INSERT INTO card (card_num, card_name, user_num, cardlist_num, board_num) VALUES (card_seq.nextval, '카드 WITH 댓글', 3, 1);
INSERT INTO card (card_num, card_name, user_num, cardlist_num, board_num) VALUES (card_seq.nextval, '알람 CRUD', 5, 1);
