var soundsArray = [];

for (i = 1; i < 24; i++) {
  let loc = i;
  soundsArray.push(new Audio(`./audio/key-${i}.mp3`));
  document.getElementById(`key-${i}`).addEventListener("click", function () {
    soundsArray[loc].play();
  });
}
