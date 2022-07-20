var point = 0;
var pointPerSecond = 0;
var auto1Cost = 0;
var auto1s = 0;
var save = {
  points: point,
  auto1s: auto1s,
}

// function add() {
//   point += pointPerClick;
//   document.getElementById("showPoint").innerText = point;
// } 

setInterval(function() {
  point += pointPerSecond;
  document.getElementById("showPoint").innerText = point;
}, 1000)

function buyAuto1() {
  if (point >= auto1Cost) {
    point -= auto1Cost;
    document.getElementById("showPoint").innerText = point;
    auto1s++;
    document.getElementById("auto1num").innerText = auto1s;
    auto1Cost += 1;
    auto1Cost *= 1.2;
    auto1Cost = Math.round(auto1Cost);
    document.getElementById("auto1price").innerText = auto1Cost;
    pointPerSecond += 1;
    document.getElementById("showpsec").innerText = pointPerSecond;
  } else {
    alert("You don't have enough points!")
  }
}