//variables

var password = "";
var enterButton = document.getElementsByClassName('enter')[0];
var errorMessages = document.getElementsByClassName('errorMessage');
var pass = document.getElementById('pass');

//functions

function checkPassword(){

  password = pass.value;
  if (password == 'charlierulez'){
    localStorage.setItem("status", "loggedIn");
    logIn();

  }
  else {
    displayError();
  }
}

//when user clicks `let me in`, check that they have entered `charlierulez`

enterButton.addEventListener("click", checkPassword);
pass.addEventListener("keypress", function(event){
  if (event.key == "Enter"){
    checkPassword();
  }
});

function logIn(){
  location = "./home.html";
}

function displayError(){
  errorMessages[0].className = errorMessages[0].className + ' errorMessageDisplay';
  errorMessages[1].className = errorMessages[1].className + ' errorMessageDisplay';
}

//if user has entered password in the past, remember this
