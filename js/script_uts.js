//menu
var tombolMenu = $(".hamburger");
var menu = $("nav .menu ul");

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}

function myFunction(x) {
  x.classList.toggle("change");
}

$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});
// transform hamburger
function myFunction(x) {
  x.classList.toggle("change");
}

//check lebar
$(window).resize(function () {
  var width = $(window).width();
  if (width > 989) {
    menu.css("display", "block");

    //display:block
  } else {
    menu.css("display", "none");
  }
  klikMenu();
});

// jam
function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;

  document.getElementById("DisplayClock").innerText = time;
  document.getElementById("DisplayClock").textContent = time;

  setTimeout(showTime, 1000);
}
showTime();
