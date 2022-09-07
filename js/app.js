$(document).ready(function() {
  let path = window.location.pathname;
  $('.nav-link').each(function() {
    if (path === $(this).attr('href')) {
      $(this).addClass('active');
    }
  });
});

function validateForm() {
  let name = document.forms["form"]["name"].value;
  let email = document.forms["form"]["email"].value;
  if (name == "") {
    swal("Name must be filled out");
    document.form.name.focus() ;
    return false;
  } else if (email == "") {
    swal("Email must be filled out");
    document.form.email.focus() ;
    return false;
  }
}
