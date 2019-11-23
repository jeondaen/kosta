window.onload = function() {
  // why calendar click listener is not defined?

  var days = document.querySelectorAll(".days");

  days.forEach(function(item) {
    item.addEventListener("click", function() {
      var ii = this.id;
      alert(ii);
    });
  });
};
