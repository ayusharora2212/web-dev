let total = 0;
let buffer = "0";
let prevOperator;
let afterEval;
const screen = document.querySelector(".screen");
function buttonClick(value) {
  afterEval = null;
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  reRender();
}

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}

function doMath(value) {
  const intBuffer = parseInt(buffer);
  if (total === 0) {
    total += intBuffer;
  } else {
    evaluate(intBuffer);
  }
  prevOperator = value;
  buffer = "0";
}

function evaluate(intBuffer) {
  if (prevOperator === "+") {
    total += intBuffer;
  } else if (prevOperator === "-") {
    total -= intBuffer;
  } else if (prevOperator === "×" || prevOperator === "*") {
    total *= intBuffer;
  } else {
    total /= intBuffer;
  }
}

function handleSymbol(value) {
  if (value === "c") {
    buffer = "0";
    total = 0;
  } else if (value === "=" || value === "Enter") {
    if (prevOperator === null) {
      return;
    }
    evaluate(parseInt(buffer));
    prevOperator = null;
    buffer = +total;
    total = 0;
    afterEval = "=";
  } else if (value === "←") {
    if (buffer.length == 1) {
      buffer === "0";
    } else {
      buffer = buffer.substring(0, buffer.length - 1);
    }
  } else {
    doMath(value);
  }
}

function reRender() {
  screen.innerText = buffer;
  if (afterEval === "=") {
    buffer = "0";
  }
}

let init = () => {
  document.querySelector(".calc-buttons").addEventListener("click", (event) => {
    buttonClick(event.target.innerText);
  });
  window.addEventListener("keypress", (e) => {
    buttonClick(e.target);
  });
};

init();
