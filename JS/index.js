function appendToDisplay(value) {
    var display = document.getElementById("result");
    display.value += value;
}

function calculate() {
    var display = document.getElementById("result");
    var result = eval(display.value);

    if (result !== undefined) {
        display.value = result;
    }
}

function clearDisplay() {
    var display = document.getElementById("result");
    display.value = "";
}
