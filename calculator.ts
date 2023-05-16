const container = document.querySelector(".calculator");
const c = document.querySelector<HTMLElement>(".C");
const display = document.querySelector<HTMLDivElement>(".display");
const bs = document.querySelector<HTMLElement>(".BS");
const equals = document.querySelector<HTMLElement>(".equals");

let equalCounter: number = 0;
let clearOneByOne: number = 0;
// clearing out field totally
if (c) {
  c.addEventListener("click", () => {
    if (display) display.textContent = "";
  });
}

// instead of iterating all , we use event delegation and data attribute of elements by listening closest common  parent  for all elements
if (container) {
  container.addEventListener("click", (e) => {
    // type assertion
    const target = e.target as HTMLElement;
    // displaying numbers
    if (target.dataset.num === target.textContent) {
      if (display) {
        display.textContent =
          display.textContent !== "0"
            ? (display.textContent += target.textContent)
            : target.textContent;
      }
    }
    // performing arithmetic operations on numbers
    if (target.dataset.operator === target.textContent) {
      if (
        display &&
        display.textContent !== "" &&
        display.textContent !== "0" &&
        target.textContent !== "=" &&
        target.textContent !== "BS"
      ) {
        display.textContent += target.textContent;
      }
      if (target.dataset.operator === "BS") {
        clearOneByOne--;
        if (display) {
          display.textContent = display?.textContent?.slice(0, clearOneByOne);
        }
      }
      clearOneByOne = 0;
    }
  });
}
// calculate displayed values
if (equals) {
  equals.addEventListener("click", () => {
    if (
      display &&
      display.textContent !== "" &&
      display.textContent !== "0" &&
      display.textContent != "="
    ) {
      const input = display.textContent || "";
      display.textContent = Number(eval(input)).toFixed(3);
    }
  });
}
