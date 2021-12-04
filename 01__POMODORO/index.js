var Timer = null;
var i = 0;
const btnElement = document.getElementById("btn");
const ringElement = document.getElementById("ring");
const minsElement = document.getElementById("mins");
const secsElement = document.getElementById("secs");
const iconElement = document.getElementById("icon");
var totalTime = parseInt(minsElement.value) * 60 + parseInt(secsElement.value);
let x = 1;

function onStartStopPress() {
  const btnText = btnElement.innerText;

  if (btnText.toLocaleLowerCase() === "start") {
    btnElement.innerHTML = "stop";
    ringElement.classList.add("ending");
    Timer = setInterval(onStartPress, 1000);
  } else {
    btnElement.innerHTML = "start";
    ringElement.classList.remove("ending");
    onStopPress();
  }
}

function getPercent() {
  return (x * 100) / totalTime;
}

function onStartPress() {
  var curr_mins = parseInt(minsElement.value);
  var curr_secs = parseInt(secsElement.value);

  if (curr_secs === 0 && curr_mins === 0) {
    clearInterval(Timer);
    var audio = new Audio(
      "https://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"
    );
    audio.play();
    return;
  }

  ringElement.style["stroke-dashoffset"] = (1600 * getPercent()) / 100;
  x++;

  if (curr_secs === 0) {
    if (curr_mins <= 10) {
      minsElement.value = `0${curr_mins - 1}`;
    } else {
      minsElement.value = curr_mins - 1;
    }
    secsElement.value = 59;
  } else {
    if (curr_secs - 1 < 10) {
      secsElement.value = `0${curr_secs - 1}`;
    } else {
      secsElement.value = curr_secs - 1;
    }
  }
}

function onStopPress() {
  clearInterval(Timer);
}

function onEditPress() {
  if (i % 2 === 0) {
    onEditClick();
  } else {
    onSavePress();
  }
  i++;
}

function onEditClick() {
  btnElement.innerHTML = "start";
  ringElement.classList.remove("ending");
  clearInterval(Timer);
  iconElement.src = "images/check.svg";
  iconElement.alt = "confirm";
  btnElement.hidden = true;
  minsElement.value = 15;
  secsElement.value = "00";
  ringElement.style["stroke-dashoffset"] = 0;
  x = 1;
  minsElement.disabled = false;
  secsElement.disabled = false;
}

function onSavePress() {
  iconElement.src = "images/gear.svg";
  iconElement.alt = "Settings";
  btnElement.hidden = false;
  minsElement.disabled = true;
  secsElement.disabled = true;
  totalTime = parseInt(minsElement.value) * 60 + parseInt(secsElement.value);
}