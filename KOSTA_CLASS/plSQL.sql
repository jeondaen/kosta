 -- ** PL / SQL **
  -- output 에서 출력하기 위해 set serveroutput on; => 설정

  DECLARE
   -- 변수 선언
   v_no NUMBER(3) := 10;
   v_hireDate VARCHAR2(30) := TO_CHAR(SYSDATE, 'YYYY/MM/DD'); 
   -- 상수 선언
   c_message CONSTANT VARCHAR2(50) := '안녕하세요. PL/SQL';
   
   -- 실행부
   BEGIN
    --DBMS_OUTPUT 패키지명의 PUT_LINE 프로시저를 이용하여 결과 출력
    dbms_output.put_line('오늘은 PL/SQL 시작');
    dbms_output.put_line(c_message);
    dbms_output.put_line(v_hireDate);
    END;
-- 문 > 특정 테이블의 로우를 검색하여 변수에 할당한 후 출력하자.

DECLARE
 v_name VARCHAR2(20);
 v_salary NUMBER;
 v_hireDate VARCHAR2(30);

 BEGIN

 SELECT first_name, salary, TO_CHAR(hire_date, 'yyyy-MM-dd')
 INTO v_name, v_salary, v_hireDate
 FROM employees
 WHERE first_name = 'Ellen';
 
dbms_output.put_line('검색된 사원의 정보');
dbms_output.put_line(v_name || ' ' || v_salary || ' ' || v_hireDate);

 END;

 -- * 데이터 유형 ( 기본형, 레퍼런스형 )

 DECLARE
  -- 기본 데이터형 -- first name
  v_search VARCHAR2(30) := 'Lisa';
  -- 레퍼런스 형
  v_name employees.last_name%TYPE;
  v_salary employees.salary%TYPE;

  BEGIN

    SELECT last_name, salary 
    INTO v_name, v_salary
    FROM employees
    WHERE first_name = v_search;

    dbms_output.put_line(v_search || '의 정보');
    dbms_output.put_line(v_name || ' ' || v_salary);

    END;


