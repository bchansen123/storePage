// Get references to page elements
$(".search_button").on("click", function() {
  var search = $("#search_input").val();
  window.location.href = "/search/" + search;
});

$("#search_input").keypress(function() {
  if (event.which === 13) {
    var search = $("#search_input").val();
    window.location.href = "/search/" + search;
  }
});
