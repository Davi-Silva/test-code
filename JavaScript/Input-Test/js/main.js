var resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener('click', function() {
    var inputValue = document.querySelector("#name");
    inputValue.value = "";
});

var setColorBtn = document.querySelector("#setColorBtn");
setColorBtn.addEventListener('click', function() {
    var colorPicker = document.querySelector("#colorPicker");
    colorPicker.value = "#ffffff";
});

var decimalBtn = document.querySelector("#decimalBtn");
decimalBtn.addEventListener('click', function() {
    var numberInput = document.querySelector("#number");
    if (numberInput.step === "1") {
        numberInput.step = "0.1";
    } else {
        numberInput.step = "1";
    }
});