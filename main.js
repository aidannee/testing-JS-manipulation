// ! boxes

let boxes = document.querySelector(".boxes");
console.log(boxes);

let red = document.createElement("div");
red.classList.add("redbox");
let blue = document.createElement("div");
blue.classList.add("bluebox");
let yellow = document.createElement("div");
yellow.classList.add("yellowbox");
let magenta = document.createElement("div");
magenta.classList.add("magentabox");
let black = document.createElement("div");
black.classList.add("blackbox");
black.innerText = "BOX";
black.style.color = "whitesmoke";
black.style.fontSize = "40px";

magenta.appendChild(black);
yellow.appendChild(magenta);
blue.appendChild(yellow);
red.appendChild(blue);
boxes.appendChild(red);

// ! buttons
let buttonArea = document.querySelector(".buttonarea");
let but1 = document.createElement("button");
but1.classList.add("profileConfirm");
but1.innerText = "EDIT";
let but2 = document.createElement("button");
but2.classList.add("profileConfirm");
but2.innerText = "CANCEL";
let but3 = document.createElement("button");
but3.classList.add("profileConfirm");
but3.innerText = "SAVE";

buttonArea.append(but1, but2, but3);
