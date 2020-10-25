var letterTime = 2000;

var lineDrawing = anime({
  targets: "#lineDrawing,path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutCubic",
  duration: letterTime,
  delay: function(el, i) {
    return letterTime * i;
  },
  begin: function(anim) {
    var letters = document.querySelectorAll("path"),
      i;

    for (i = 0; i < letters.length; ++i) {
      letters[i].setAttribute("stroke", "black");
      letters[i].setAttribute("fill", "none");
    }
  },
  update: function(anim) {
    if (anim.currentTime >= letterTime) {
      document.querySelector(".path").setAttribute("fill", "#e91e63");
    }
});