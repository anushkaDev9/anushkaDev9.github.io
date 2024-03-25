var sideDrawer = document.createElement("div");
sideDrawer.classList.add("sideDrawer");

document.body.appendChild(sideDrawer);
let navList = document.getElementById("navBar");
navList.style.display = "none";

sideDrawer.appendChild(navList);
sideDrawer.style.width = 0;
function navBar() {
   sideDrawer.style.width='20%'
 navList.style.display = "block";
    
  

  
}

function closeBar() {
  sideDrawer.style.width = "0%";
   navList.style.display = "none";
}

