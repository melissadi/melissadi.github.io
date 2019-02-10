if ((location.href != "/" && !location.href.includes("index")) && localStorage.getItem("status") != "loggedIn"){
  location = "./index.html"
}

if ((location.href == "/" || location.href.includes("index")) && localStorage.getItem("status") == "loggedIn"){
  location = "./home.html"
}
