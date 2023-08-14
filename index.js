// Toggle mobile navigation bar
function toggleMobileNav() {
  var mobileNav = document.getElementById("mobileNav");
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
}

function hideMobileNav() {
  var mobileNav = document.getElementById("mobileNav");
  mobileNav.style.display = "none";
}