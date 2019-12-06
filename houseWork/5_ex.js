
function modalOn() {
	
}

window.onload = function(){
	var btn = document.getElementById("modalButton");

	var mdc = document.getElementById("modalContent");

	var md = document.getElementById("modal");

	btn.onclick = function(){
		md.style.display = "block";
	}

	window.onclick = function(event) {
		if(event.target == modal) {
			modal.style.display = 'none';
		}
	}

	var modalSubmit = document.getElementById("submit");
	modalSubmit.addEventListener("click", function(event) {
		event.preventDefault();
	})

}
