var images = ["hike.jpg","nantucket.jpg","bruins.jpg","breakfastToGo.jpg","beers.jpg","smooch.jpg","burgers.jpg","hugeTree.jpg","danceCharlie.gif","commit.jpg"]
var text = ["You appreciate the simple things in life: The mountains, fluffy snow, and our time together.","You are open to trying things I love, even if they're not the things you'd do on your own. Like going on a beachy and rosé-filled trip to Nantucket.","You share the things you love with me!","You always support me. Whether it's with a homemade breakfast, patience and attention, or your hard-earned resources, you believe in and invest in me.","You let me support you, too. You open yourself up and share your challenges with me. I can't wait to support your dream of owning a brewery!","You are mushier than mashed potatoes. And you're not afraid who knows!","You like a good challenge. Last year you took on 10.5 burgers in an hour and a new-to-you job. I'm so proud of you!","You give every project 100%. I give you a hard time for being the Googler, but you do your research and work steadily to get the best outcome.","You love and take care of Charlie.", "You are committed to what is important to you. I love you!"]
var title = ["one","two","three","four","five","six","seven","eight","nine","ten"]
var clicks = 0

var yesButton = document.getElementById("yes")
var noButton = document.getElementById("no")
var beMine = document.getElementById("beMine")
var saidYes = document.getElementById("saidYes")
var saidNo = document.getElementById("saidNo")
var meantYes = document.getElementById("meantYes")
var sure = document.getElementById("sure")
var tenReasons = document.getElementById("tenReasons")
var next = document.getElementById("next")
var back = document.getElementById("back")
var enterButton = document.getElementById("enter");
var rayPass = document.getElementById("rayPass");
var password = document.getElementById("password");

enterButton.addEventListener("click", checkPassword);
password.addEventListener("keypress", function(event){
  if (event.key == "Enter"){
    checkPassword();
  }
});

function checkPassword(){
  password = rayPass.value;
  if (password == "beefboat"){
    console.log("hi");
    document.getElementById("password").classList.toggle("hide");
    beMine.classList.toggle("hide");
  }
};

yesButton.addEventListener("click",function(event){
  beMine.classList.toggle("hide");
  saidYes.classList.toggle("hide");
  event.preventDefault();
  });

noButton.addEventListener("click",function(event){
  beMine.classList.toggle("hide");
  saidNo.classList.toggle("hide");
  event.preventDefault();
});

meantYes.addEventListener("click",function(event){
  saidNo.classList.toggle("hide");
  saidYes.classList.toggle("hide");
  event.preventDefault();
});

sure.addEventListener("click",function(event){
  saidYes.classList.toggle("hide");
  tenReasons.classList.toggle("hide");
  event.preventDefault();
});

next.addEventListener("click",function(event){
  clicks += 1;
  if (clicks >= 10){
    clicks = 0
  }
  document.getElementById("picture").src = "images/"+images[clicks];
  document.getElementById("saying").innerHTML = text[clicks];
  document.getElementById("number").innerHTML = title[clicks];
  event.preventDefault();
});

back.addEventListener("click",function(event){
  clicks -= 1;
  if (clicks < 0){
    clicks = 9
  }
  document.getElementById("picture").src = "images/"+images[clicks];
  document.getElementById("saying").innerHTML = text[clicks];
  document.getElementById("number").innerHTML = title[clicks];
  event.preventDefault();
});
