var sideDrawer = document.createElement("div");
sideDrawer.classList.add("sideDrawer");

sideDrawer.style.display = "none";
document.body.appendChild(sideDrawer);
let navList = document.getElementById("navBar");
//navList.style.display = "none";
let navBarDiv = false;

function navBar() {
    console.log(navBarDiv)
 sideDrawer.appendChild(navList);
    navList.style.display = "block";
    sideDrawer.style.display = "block";
  

  navBarDiv = true;
}

function close() {
  console.log(navBarDiv);
  alert("jko");
  if (navBarDiv === true) {
  }
}
