// Get references to page elements
$(".search_button").on("click", function () {
  var search = $("#search_input").val();
  window.location.href = "/search/" + search;
});

$("#search_input").keypress(function () {
  if (event.which === 13) {
    var search = $("#search_input").val();
    window.location.href = "/search/" + search;
  }
});

//Get user data in checkout modal
$("#submit_purchase").on("click", function () {
  var user_data = {
    email: $("#user_email").val().trim(),
    first_name: $("#user_first").val().trim(),
    last_name: $("#user_last").val().trim(),
    address: $("#user_address").val().trim(),
    city: $("#user_city").val().trim(),
    state: $("#user_state").val().trim(),
    zip: $("#user_zip").val().trim()
  };
  document.getElementById("email_sub").innerHTML = user_data.email;
  document.getElementById("name_sub").innerHTML = user_data.first_name + " " + user_data.last_name;
  document.getElementById("address_sub").innerHTML = user_data.address;
  document.getElementById("mail_sub").innerHTML = user_data.city + " " + user_data.state + " " + user_data.zip;
});
