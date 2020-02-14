// Get references to page elements
  $(".search_button").on("click", function() {
    var search = $("#search_input").val();
    ;
    window.location.href = "/search/" + search;
    });
    

