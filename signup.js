function validate() {
  let username = document.getElementById("usrname").value;
  let password = document.getElementById("pass").value;
  let confirmpass = document.getElementById("conpass").value;
  let mbl = document.getElementById("mobile").value;
  let regex = /[a-z][A-Z]/;
  let mbregex = /[0-9]/;
  if (username == "") {
    alert("please enter username");
    return false;
  }
  if (password == "") {
    alert("please enter password");
    return false;
  }
  if (password.length < 8 || password.length > 12) {
    alert("password should be minimum 8 characters and maximum 12 characters");
    return false;
  }
  if (!regex.test(password)) {
    alert(
      "password shoud be combination of alpha(small letters and capital letters"
    );
    return false;
  }
  if (confirmpass != password) {
    alert("password not matched");
    return false;
  }
  if (!mbregex.test(mbl)) {
    alert("mobile number should be only 10 digits");
    return false;
  }
  return true;
}
