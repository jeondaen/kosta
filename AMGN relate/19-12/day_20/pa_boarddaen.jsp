<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/resources/dist/css/board_list_style.css">
<title>Insert title here</title>
</head>

<script type="text/javascript">

function pm_makingBoards(pm_arrayOfBoards) {
	var pm_boardListPackage = document.querySelector(".paBoardListPackage");
	pm_boardListPackage.innerHTML = "";

	var pm_boardPackLi = document.createElement('li');
	pm_boardPackLi.setAttribute("class", "paBoardPackLi");

	var pm_div = document.createElement('div');
	pm_div.setAttribute("class", "btn btn-secondary paBoardPack");

	var pm_a = document.createElement('a');
	
	let lengt = pm_arrayOfBoards.length;

	for(var i = 0; i<lengt; i++) {
		
	}

}

var xhr;

var jsonArray;
var s = "";

function createXHR() {
  return new XMLHttpRequest();
}

function sending() {
  xhr = createXHR();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        (function() {
		  jsonArray = JSON.parse(xhr.response);
		  console.log(jsonArray);
		  pm_makingBoards();
        })();
      }
    }
  };

  xhr.open("get", "/board/search/" + s);
  xhr.send();
  
  console.log("typeof : " + typeof jsonArray)
}

window.onload = function() {
	  var searchInput = document.getElementById("pm_boardSearch");

	  searchInput.addEventListener("keypress", event => {
		  setTimeout(() => {
			  s = event.target.value;
			  sending();
		  }, 0);
	  });
	}
</script>
<body>
	<!-- 헤더 영역 인클루드 해야함 -->
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary"> <a
		class="navbar-brand" href="#">Navbar</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse"
		data-target="#navbarColor01" aria-controls="navbarColor01"
		aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>

	<div class="collapse navbar-collapse" id="navbarColor01">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item active"><a href="#" class="nav-link">Home
					<span class="sr-only">(current)</span>
			</a></li>
			<li class="nav-item"><a class="nav-link" href="#">Features</a></li>
			<li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
			<li class="nav-item"><a class="nav-link" href="#">About</a></li>
		</ul>
		<form class="form-inline my-2 my-lg-0">
			<input class="form-control mr-sm-2" id="pm_boardSearch" type="text" placeholder="Search">
			<button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
		</form>
	</div>
	</nav>

	<!-- 본문영역 -->

	<div class="paBoardListWrap">
		<div class="paBoardListWrapCon">
			<div>
				<h2>Board List</h2>
			</div>
			<ul class="paBoardListPackage">
				<!-- 새로 생성된 보드가 있을 장소 -->
				<c:forEach var="board" items="${list}">
				<li class="paBoardPackLi">
					<div class="btn btn-secondary paBoardPack">
						<a href="/board/${board.board_num}" class="paBoardPackLink">
						  <span class="paBoardNameTag"><c:out value="${board.board_name}" /></span>
						  <span class="paBoardRemove">&#9851;</span>
						</a>
					</div>
				</li>
				</c:forEach>
				<!-- 계속 상주하고 있을 보드 생성버튼-->
				<li class="paBoardPackLi">
					<div class="btn btn-secondary paBirthBoardBtn paBoardPack">
						<a href="#" class="paBoardPackLink">
							<span class="paBoardNameTag">Create new board</span>
						</a>
					</div>
				</li>
			</ul>

		</div>
	</div>

	<!-- 새로운 보드 생성 -->
	<div class="paBlackBoard">

		<!-- 보드 생성 창 -->
		<div class="card border-dark mb-3 paMakeBoard"
			style="max-width: 20rem;">
			<div class="card-body paMakeBoardBody">
				<h4 class="card-title">Create Board</h4>
				<button type="button" class="btn btn-danger paMakeBoardCancel">&#10006;</button>
				<p class="card-text">Make your Board</p>
				<div class="form-group">
				<form action="/board/insBoard" method="post">
					<input type="text" class="form-control paMakeBoardIputForm" placeholder="보드 이름을 입력하세요" id="inputDefault" name="board_name">
					<button type="submit" class="btn btn-primary paMakeBoardbtn">Create	Board</button>
				</form>
					
				</div>
			</div>
		</div>

		<!-- 보드 삭제 창 -->
		<div class="card border-dark mb-3 paGarbageCan"
			style="max-width: 20rem;">
			<div class="card-body paMakeBoardBody">
				<h4 class="card-title">Remove Board</h4>
				<button type="button" class="btn btn-success paMakeBoardCancel">&#10006;</button>
				<p class="card-text">Really Remove?</p>
				<div class="form-group">
					<button type="button" class="btn btn-danger paGarbagebtn">Remove
						Board</button>
				</div>
			</div>
		</div>

		<!-- 정말 정말로 보드 삭제할꺼야? -->
		<div class="card border-dark mb-3 paGBC" style="max-width: 20rem;">
			<div class="card-body paMakeBoardBody">
				<h4 class="card-title">Really Remove Board?</h4>
				<button type="button" class="btn btn-success paMakeBoardCancel">&#10006;</button>
				<p class="card-text">YOU Really Really Remove Now?</p>
				<div class="form-group">
					<button type="button" class="btn btn-danger paRealGarbagebtn">Remove
						Board Now!</button>
				</div>
			</div>
		</div>


	</div>




	<!--스크립트 영역-->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="/resources/js/pa_board_list.js"></script>
</body>
</html>