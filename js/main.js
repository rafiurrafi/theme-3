/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("header").style.marginLeft = "400px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("header").style.marginLeft = "0";
}
function drop() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.toggle("show");
}
