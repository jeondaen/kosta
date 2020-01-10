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

-- * ROWTYPE - 1개의 로우의 타입을 갖는다.
DECLARE
    employees_record employees%ROWTYPE; -- 아주 강력한 기능 - 한개의 로우 전체의 타입을 가질 수 있음
    v_department_name departments.department_name%TYPE;

BEGIN
    SELECT * INTO employees_record
    FROM employees
    WHERE first_name = 'Lisa';

    SELECT department_name INTO v_department_name
    FROM departments
    WHERE department_id = employees_record.department_id;

    dbms_output.put_line(employees_record.employee_id || ' ' ||
    employees_record.first_name || ' ' || v_department_name);

END;

-- * IF ~ ELSE 
DECLARE 
 v_no NUMBER := 7;

BEGIN
 -- 단수 IF ~ END IF
 IF v_no = 7 THEN 
    dbms_output.put_line('7입니다.');
 END IF;

 IF v_no = 5 THEN
    dbms_output.put_line('5입니다.');
 ELSE 
    dbms_output.put_line('7입니다.');
 END IF;

 IF v_no = 5 THEN
    dbms_output.put_line('5입니다.');
 ELSIF v_no = 6 THEN
    dbms_output.put_line('6입니다.');
 ELSE      
    dbms_output.put_line('7입니다.');
 END IF;

END;

-- ** 반복문

-- * LOOP 문

DECLARE
 i NUMBER := 0;

BEGIN
 LOOP
    i := i + 1;
    -- 조건
    EXIT WHEN i > 10;
    dbms_output.put_line(i);

 END LOOP;
END;

-- * WHILE

DECLARE
 i NUMBER := 0;

BEGIN
 WHILE i < 10 LOOP
    i := i + 1;
    dbms_output.put_line(i);
 END LOOP;
END;

-- * FOR문
DECLARE
 i NUMBER := 0;

BEGIN
 FOR i IN 1..10 LOOP
    dbms_output.put_line(i);
 END LOOP;
END;

-- <mission> LOOP => 3단 출력
--           FOR => 구구단 전체

DECLARE 
 i NUMBER := 1;

BEGIN
 LOOP

   dbms_output.put_line('3 * '|| i || ' = '|| i*3);
   i := i+1;
   EXIT WHEN i = 9 ; -- 비교할 때에는 그냥 equal 연산자 사용
 END LOOP;
END; 

DECLARE

BEGIN
 FOR j IN 1..9 LOOP
    FOR i IN 1..9 LOOP
        dbms_output.put_line(j || ' * ' || i || ' = ' || i*j);
    END LOOP;    
    dbms_output.put_line(''); -- 아무것도 없이 put_line 처리문을 사용할 수 없다.
 END LOOP;
END; 