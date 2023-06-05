document.addEventListener("DOMContentLoaded", function () {
    
  function setActive(e, key) {
    let elems = document.querySelectorAll(".active");
    elems.forEach((link) => {
      link.classList.remove("active");
    });

    switch (key) {
      case 0:
        e.target.style.color = "#00b350";
        e.target.style.borderColor = "#00b350";
        break;
      case 1:
        e.target.style.color = "#1c5df5";
        e.target.style.borderColor = "#1c5df5";
        break;
      case 2:
        e.target.style.color = "#ff143b";
        e.target.style.borderColor = "#ff143b";
        break;
      case 3:
        e.target.style.color = "#ff9500";
        e.target.style.borderColor = "#ff9500";
        break;

      default:
        e.target.style.color = "#080808";
        break;
    }
  }
  document.querySelectorAll(".nav-link").forEach((link, key) => {
    link.addEventListener("click", (e) => {
      setActive(e, key);
    });
  });
});
