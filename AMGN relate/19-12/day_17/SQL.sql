-- checklist 생성
create table checklist(
    checklist_num number,
    checklist_content varchar(500) not null,
    checklist_check char(1) default '0',
    checklist_writer varchar(200) not null,
    checklist_regdate date default sysdate,
    card_num number,

    constraint checklist_pk primary key(checklist_num),
    constraint checklist_fk_card foreign key(card_num) references card(card_num),
    constraint checklist_check_check check(checklist_check in('1', '0'))
);
-- board_date 수정
alter table board add board_date date default sysdate;
-- user_board 수정
alter table user_board add user_board_regdate date default sysdate;
-- card 의 card_reg_date 수정
alter table card modify card_reg_date date default sysdate;
-- label 컬럼 수정, 추가, 제약조건 추가
alter table label modify card_num default null;
alter table label add board_num number;
alter table label add constraint board_num_fk_label foreign key(board_num) references board(board_num);
-- reply 컬럼 수정
alter table reply modify reply_regdate date default sysdate;
-- alarm 컬럼 수정
alter table alarm modify arlm_date date default sysdate;

-- BOARD ADMIN 추가
alter table board add board_admin number not null;

-- BOARD ADMIN 제약조건 생성 (아직 안함) ------------------------------------------
constraint board_admin_fk foreign key(board_admin) references users(user_num)