"use strict";
const container = document.querySelector(".calculator");
const c = document.querySelector(".C");
const display = document.querySelector(".display");
const bs = document.querySelector(".BS");
const equals = document.querySelector(".equals");
let equalCounter = 0;
let clearOneByOne = 0;
// clearing out field totally
if (c) {
    c.addEventListener("click", () => {
        if (display)
            display.textContent = "";
    });
}
// instead of iterating all , we use event delegation and data attribute of elements by listening closest common  parent  for all elements
if (container) {
    container.addEventListener("click", (e) => {
        var _a;
        // type assertion
        const target = e.target;
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
            if (display &&
                display.textContent !== "" &&
                display.textContent !== "0" &&
                target.textContent !== "=" &&
                target.textContent !== "BS") {
                display.textContent += target.textContent;
            }
            if (target.dataset.operator === "BS") {
                clearOneByOne--;
                if (display) {
                    display.textContent = (_a = display === null || display === void 0 ? void 0 : display.textContent) === null || _a === void 0 ? void 0 : _a.slice(0, clearOneByOne);
                }
            }
            clearOneByOne = 0;
        }
    });
}
// calculate displayed values
if (equals) {
    equals.addEventListener("click", () => {
        if (display &&
            display.textContent !== "" &&
            display.textContent !== "0" &&
            display.textContent != "=") {
            const input = display.textContent || "";
            display.textContent = Number(eval(input)).toFixed(3);
        }
    });
}
