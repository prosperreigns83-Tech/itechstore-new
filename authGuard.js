document.addEventListener("DOMContentLoaded", function(){

  const splash = document.getElementById("splashScreen");
  const loggedIn = localStorage.getItem("loggedInUser");

  // Show splash for 2 seconds
  setTimeout(function(){

    if(splash){
      splash.style.display = "none";
    }

    // If not logged in → redirect
    if(!loggedIn){
      window.location.href = "account.html";
    }

  }, 2000);

});