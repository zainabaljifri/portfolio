function validateForm() {
  let name = document.forms["form"]["name"].value;
  let email = document.forms["form"]["email"].value;
  if (name == "") {
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Name must be filled out'
}).then((result) => {
    $('#name').focus();
    });
    return false;
  } else if (email == "") {
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Email must be filled out'
}).then((result) => {
    $('#email').focus();
    });
    return false;
  }
}

function darkMode(){
  $("body").toggleClass("dark");
  $("#navbar").toggleClass("dark");
  $(".icon").toggleClass("dark-fill");
  $(".white, .card__overlay, .card__header, .nav-link").toggleClass("dark");
  $(".nav-link").hover(function() {
    $( this ).toggleClass( "dark" );
  });
  $(".card").toggleClass("dark-card");
  $(".arc").css({ fill: '#292c35' });
  $(".input").toggleClass("dark-input");


}

$('#checkbox').on('change',function(){
  darkMode();
    if ($('#checkbox').is(":checked")) {
      localStorage.setItem("mode", "dark");

      }
    else {
      localStorage.setItem("mode", "light");
      $(".arc").css({ fill: 'white' });
    }
  });

if (localStorage.getItem("mode") === "dark") {
  $('#checkbox').prop('checked', true);
  darkMode();
}
