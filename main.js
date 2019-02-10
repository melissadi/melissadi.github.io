if ((location.pathname != "/" && !location.href.includes("index")) && localStorage.getItem("status") != "loggedIn"){
  location = "./index.html"
}

if ((location.pathname == "/" || location.href.includes("index")) && localStorage.getItem("status") == "loggedIn"){
  location = "./home.html"
}
