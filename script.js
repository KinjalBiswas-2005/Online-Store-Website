const navLinks = document.getElementById("nav-links");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");    
});

const loginItem = document.getElementById("loginLink");
const userMenu = document.getElementById("userMenu");
const avatarBtn = document.getElementById("avatarBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const logoutBtn = document.getElementById("logoutBtn");
const avatarLetter = document.getElementById("avatarLetter");
avatarBtn.addEventListener("click", () => {
  dropdownMenu.style.display = 
  dropdownMenu.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", (e) => {
  if (!userMenu.contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});

function checkAuth() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    loginItem.style.display = "none";
  userMenu.style.display = "inline-block";
  const letter = user.username ? user.username.slice(0,1) : "U";
  avatarLetter.textContent = letter;  
  } else {
    loginItem.style.display = "inline-block";
    userMenu.style.display = "none";
  }
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  alert("Logout successfully!!");
  window.location.href = "login.html";
  checkAuth();
});
checkAuth();

// close navbar small device after resize window size

function handleResize() {
  if (window.innerWidth > 1024) {
    navLinks.classList.remove("show");
  }
}

window.addEventListener("resize", handleResize);
handleResize();