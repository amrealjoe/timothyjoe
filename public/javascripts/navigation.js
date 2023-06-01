let navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let innerText = item.innerText.toLowerCase();
    switch (innerText) {
      case "about me":
        item.style.color = "#00b350";
        break;
      case "blog":
        item.style.color = "#1c5df5";
        break;
      case "resume":
        item.style.color = "#ff143b";
        break;
      case "contact me":
        item.style.color = "#ff9500";
        break;
      default:
        item.style.color = "black";
        break;
    }
  });
  item.addEventListener("mouseout", () => {
    item.style.color = "black";
  });
});

let logoTextCon = document.querySelector(".logo-text");
let logoTextOne = "Timothy T. Joe";
let logoTextTwo = "Full Stack Developer";

function animateLogo() {
  let tick = 0;
  let timer = setInterval(() => {
    if (tick < 100) {
      if (logoTextCon.innerText == logoTextOne) {
        logoTextCon.innerText = logoTextTwo;
        logoTextCon.style.color = "#ff143b";
      } else if (logoTextCon.innerText == logoTextTwo) {
        logoTextCon.innerText = logoTextOne;
        logoTextCon.style.color = "#1c5df5";
      }
      tick++;
    } else {
      clearInterval(timer);
    }
  }, 7000);
}

animateLogo();
