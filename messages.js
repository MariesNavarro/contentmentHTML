function sendTo(){
  var selectOp = document.getElementById("select");
  var error = document.getElementById("error");
  var name = document.getElementById("name").value;
  var message = document.getElementById('message').value;
  var email = document.getElementById('email').value;
  var isValid = email.search("@");

  var strUser = selectOp.options[selectOp.selectedIndex].value;
  if(strUser == 0){
    error.style.color = "#DC143C";
    error.innerHTML= "Please choose an option";
  }
  if(name == ""){
    error.style.color = "#DC143C";
    error.innerHTML= "Please fill the name field";
  }
  if(message == ""){
    error.style.color = "#DC143C";
    error.innerHTML= "Please fill the message field";
  }
  if(email == ""){
    error.style.color = "#DC143C";
    error.innerHTML= "Please fill the mail field";
  }

  if(strUser == 1 && name.length > 0 && email.length > 0 && message.length > 0){
    if(isValid < 0){
      error.style.color = "#DC143C";
      error.innerHTML= "We need a valid email";
    } else {
      window.location.href = "mailto:info@contentment.org?Subject=" + name + ":%20Volunteer&body=" + message + "%0A%0AContact%20me:" + email;
      error.style.color = "#54bf97";
      error.innerHTML= "Thanks for get involved";
    }
  }
  if(strUser == 2 && name.length > 0 && email.length > 0 && message.length > 0){
    if(isValid < 0){
      error.style.color = "#DC143C";
      error.innerHTML= "We need a valid email";
    } else {
      window.location.href = "mailto:info@contentment.org?Subject=" + name + ":%20Researcher&body=" + message + "%0A%0AContact%20me:" + email;
      error.style.color = "#54bf97";
      error.innerHTML= "Thanks for get involved";
    }
  }
  if(strUser == 3 && name.length > 0 && email.length > 0 && message.length > 0){
    if(isValid < 0){
      error.style.color = "#DC143C";
      error.innerHTML= "We need a valid email";
    } else {
      window.location.href = "mailto:info@contentment.org?Subject=" + name + ":%20Affiliated&body=" + message + "%0A%0AContact%20me:" + email;
      error.style.color = "#54bf97";
      error.innerHTML= "Thanks for get involved";
    }
  }
}
