function checkLogin(){
  const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
  if(loggedIn){
    const greet = document.getElementById("userGreeting");
    if(greet){
      greet.innerHTML = `Welcome, ${loggedIn.name}! <button onclick="logout()">Logout</button>`;
    }
  }
}

function logout(){
  localStorage.removeItem("loggedInUser");
  location.reload();
}

window.onload = checkLogin;