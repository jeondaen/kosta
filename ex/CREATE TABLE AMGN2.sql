
-- USER 테이블 생성
create table users (
user_num number,
user_id varchar2(100) not null unique,
user_pw varchar2(200) not null,
user_name varchar2(100) not null,
user_hp varchar2(200),
user_email varchar2(300),
user_message_status varchar2 (400),

constraint user_num_pk primary key(user_num)
);  

-- BOARD 테이블 생성
create table board (
board_num number,
board_name varchar2(100) not null,
board_date date,
board_public number(1) default 0,
--board_listnum varchar2(200),                           
--              ---------------------------------------listnum????
constraint board_num_pk primary key(board_num),
constraint board_pub_check check(board_public in(1, 0))
);

-- USER-BOARD 생성
create table user_board (
user_board_num number,
user_num number,
board_num number,

constraint user_board_num_pk primary key(user_board_num),
constraint user_num_fk foreign key(user_num) references users(user_num) on delete cascade,
constraint board_num_fk foreign key(board_num) references board(board_num) on delete cascade
);

-- CARD LIST 생성
create table cardlist (
cardlist_num number,
cardlist_name varchar2(200),
cardlist_order number,
board_num number,

constraint cardlist_num_pk primary key(cardlist_num),
constraint board_num_fk_cardlist foreign key(board_num) references board(board_num) on delete cascade
);

-- CARD 생성
create table card (
card_num number,
card_name varchar2(200),
card_start_date date,
card_due_date date,
card_reg_date date,
card_content varchar2(400),
card_clear number(1) default 0,
card_order number,          -- CARD 배치 순서
card_calendar number(1) default 0,
user_num number,
file_num number,           -- 파일은 생성 될 수도 안될 수도 있음
cardlist_num number,           -- 이미 존재하는 리스트에 인서트
board_num number,              -- 이미 존재하는 보드에 인서트

constraint card_num_pk primary key(card_num),
constraint card_clear_check_card check(card_clear IN(1, 0)),
constraint card_calendar_check_card check(card_calendar IN(1, 0)),
constraint user_num_fk_card foreign key(user_num) references users(user_num) on delete set null,
constraint cardlist_num_fk_card foreign key(cardlist_num) references cardlist(cardlist_num) on delete cascade,
constraint board_num_fk_card foreign key(board_num) references board(board_num) on delete cascade
);

-- LABEL 생성
create table label(
label_num number,
label_name varchar2(200),
label_color varchar2(200),
card_num number,

constraint label_num_pk primary key(label_num), -- 라벨 넘버와 라벨 이름이 동시에 같아야 기본키 인식
constraint card_num_fk_label foreign key(card_num) references card(card_num) on delete cascade
);

-- REPLY 생성
create table reply (
reply_num number,
reply_uname varchar2(200), -- USERS 의 유저이름과 링크 해줘야하나?
reply_content varchar2(400),
reply_regdate date,
card_num number,
user_num number,

constraint reply_num_pk primary key(reply_num),
constraint card_num_fk_reply foreign key(card_num) references card(card_num) on delete cascade,
constraint user_num_fk_reply foreign key(user_num) references users(user_num) on delete set null
);

-- TAG - MEMBER 즉 태그된 멤버들을 모아놓은 테이블 생성
create table tagmember(
tagmember_num number,
user_num number,    -- 유저테이블의 유저와 링크
card_num number,    -- 카드테이블의 카드와 링크

constraint tagmember_num_pk primary key(tagmember_num),
constraint user_num_fk_tagmember foreign key(user_num) references users(user_num) on delete cascade,
constraint card_num_fk_tagmember foreign key(card_num) references card(card_num) on delete cascade
);

-- ALARM 생성
create table alarm (
alrm_num number,
alrm_id varchar2(100),
alrm_type varchar2(50),
alrm_typenum number,
alrm_content varchar2(200),
alrm_url varchar2(200),
arlm_date date,
user_num number,

constraint alrm_num_pk primary key(alrm_num),
-- CHATTING 과 CARD 각각의 기본키 번호와 연동하는 제약조건 추가 필요.
constraint user_num_fk_alrm foreign key(user_num) references users(user_num) on delete cascade
);

-- FILE
create table files(
file_num number,
file_group varchar2(100),
file_realname varchar2(200),
file_servername varchar2(300),
<<<<<<< HEAD
file_extendname varchar2(100),
file_uploader varchar2(200),
file_date date,

constraint filenum_pk primary key(file_num)
=======
fILE_extendname varchar2(100),
file_uploader varchar2(200),
file_date date,

constraint filenum_pk primary key(filenum)
>>>>>>> 70c1e1296b0c7b514eb9f1586f11c950fd4b8188
);      