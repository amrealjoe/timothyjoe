function prev() {
  let slideCon = document.querySelector(".slide-items");
  handleSlide(slideCon, "left", 20, 798, 70);
}
function next() {
  let slideCon = document.querySelector(".slide-items");
  handleSlide(slideCon, "right", 20, 798, 70);
}
function handleSlide(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
