var count = 0;

var btnToRed = document.querySelector(".btnToRed");
btnToRed.addEventListener('click', function () {
    var redListItem = document.querySelector(".nav li.red");
    redListItem.style.color = "red";
});

var btnUnderline = document.querySelector(".btnUnderline");
btnUnderline.addEventListener('click', function () {
    var underlineListItem = document.querySelectorAll(".nav > li");
    count++;
    underlineListItem.forEach(function (event) {
        if (count % 2 === 0) {
            event.style.textDecoration = "underline";
            console.log("count = " + count);
        } else {
            event.style.textDecoration = "none";
            console.log("count = " + count);
        }
    });
});

var showCheckedItems = document.querySelector(".showCheckedItems");
showCheckedItems.addEventListener('click', function () {
    var listOfSelectedItems = "";
    var checkboxFruits = document.querySelectorAll(".fruitList li input:checked");
    checkboxFruits.forEach(function (elm) {
        listOfSelectedItems += elm.value + " ";
        elm.parentNode.style.color = "green";
    });
    document.querySelector("#selectFruitSelected").innerHTML = "You selected: " + listOfSelectedItems; + " "
});

var resetBtn = document.querySelector(".resetButton");
resetBtn.addEventListener('click', function () {
    var list = document.querySelectorAll(".fruitList li input");
    list.forEach(function (elm) {
        // uncheck
        elm.checked = false;

        // remove CSS decoration
        var liParent = elm.parentNode;
        liParent.classList.remove("checked");
        liParent.style.color = "black";
    });
    document.querySelector("#selectFruitSelected").innerHTML = "";
});

var addListItemBtn = document.querySelector("#addNumberBtn");
addListItemBtn.addEventListener('click', function() {
    var val = document.querySelector("#numericInput").value;
    if((val !== undefined) && (val !== "")) {
        var ul = document.querySelector("#number");
        var newNumber = document.createElement("li");
        newNumber.textContent = val;
        ul.appendChild(newNumber);
    }
});

var emptyList = document.querySelector("#emptyBtn");
emptyList.addEventListener('click', function() {
    var ul = document.querySelector("#number");
    ul.innerHTML = "";
});

var addListItemBtn2 = document.querySelector("#addNumberBtn2");
addListItemBtn2.addEventListener('click', function() {
    var val = document.querySelector("#numericInput2").value;
    if((val !== undefined) && (val !== "")) {
        var ul = document.querySelector("#number2");
        ul.innerHTML += "<li>" + val + "</li>";
    }
});

var emptyList2 = document.querySelector("#emptyBtn2");
emptyList2.addEventListener('click', function() {
    document.querySelector("#number2").innerHTML = "";
});

var removeItems = document.querySelector("#removeBtn");
removeItems.addEventListener('click', function() {
    var list = document.querySelectorAll("#fruit input:checked");
    var ul = document.querySelector("#fruit");

    list.forEach(function(elem) {
        var li = elem.parentNode;
        ul.removeChild(li);
    }); 
});

var resetConfigBtn = document.querySelector("#resetConfig");
resetConfigBtn.addEventListener('click', function() {
    var ul = document.querySelector("#fruit");
    ul.innerHTML = "";
    ul.innerHTML += "<li><input type='checkbox' name='fruit' value='apples'>Apples</li>";
    ul.innerHTML += "<li><input type='checkbox' name='fruit' value='oragnes'>Oranges</li>";
    ul.innerHTML += "<li><input type='checkbox' name='fruit' value='bananas'>Bananas</li>";
    ul.innerHTML += "<li><input type='checkbox' name='fruit' value='grapes'>Grapes</li>";
});