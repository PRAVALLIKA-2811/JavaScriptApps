//validation logic
function validate() {
  //request data gathering logic
  let user_name = document.getElementById("usrname").value;
  let pass_word = document.getElementById("pass").value;
  //validation logic
  if (user_name == " ") {
    alert("please enter username");
    return false;
  }
  if (pass_word == " ") {
    alert("please enter password");
    return false;
  }
  return true;
}
