const CURRENT_KEY = document.getElementsByClassName("jiggle");

const keys = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "BACKSPACE",
  "TAB",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[",
  "]",
  "BACKSLASH",
  "CAPSLOCK",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  "'",
  "ENTER",
  "SHIFT",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  ",",
  ".",
  "/",
  "SHIFT",
];

function ChangeJiggle(val) {
  if (val === "\\") {
    val = "BACKSLASH";
  }
  document.querySelector(`[data-key="${val}"]`).classList.remove("jiggle");
  const random = randomIndex();

  document.querySelector(`[data-key="${random}"]`).classList.add("jiggle");
}

document.addEventListener("keydown", (e) => {
  const val = e.key !== "\\" ? e.key.toLowerCase() : "backslash";
  const currentKey = CURRENT_KEY[0].getAttribute("data-key");

  if (val === currentKey.toLowerCase()) {
    ChangeJiggle(currentKey);
  }
});

function randomIndex() {
  return keys[Math.floor(Math.random() * keys.length)];
}
