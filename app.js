const togglemenu = document.getElementById("mobile-navbar");
const openbtn = document.getElementById("openmenu");
const closebtn = document.getElementById("closemenu");

function openmenu() {
  closebtn.style.display = "block";
  openbtn.style.display = "none";
  togglemenu.style.display = "block";
}

function closemenu() {
  closebtn.style.display = "none";
  openbtn.style.display = "block";
  togglemenu.style.display = "none";
}
