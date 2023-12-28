const output = document.querySelector("#result-screen");
const cal = document.querySelector(".calculator");
const buttons = document.querySelectorAll(".cal-btn");
const del = document.querySelector(".delete");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
const icon = document.querySelector(".icon");
const text = document.querySelector(".theme");

icon.addEventListener("click", () => {
  text.classList.toggle("text");
  document.body.classList.toggle("light-mode");
  output.classList.toggle("light-mode-screen");
  cal.classList.toggle("light-mode-cal");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    output.value += button.textContent;
  });
});

equal.addEventListener("click", () => {
  try {
    output.value = eval(output.value);
  } catch (err) {
    alert("Invalid");
  }
});

del.addEventListener("click", () => {
  output.value = output.value.slice(0, -1);
});

reset.addEventListener("click", () => {
  output.value = "";
});
