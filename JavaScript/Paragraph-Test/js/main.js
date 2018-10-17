function changeBackgroundColor(id) {
    var paragraphs = document.querySelectorAll("." + id + " p");

    for (var i = 0; i < paragraphs.length; i++ ) {
        paragraphs[i].style.backgroundColor = "lightGreen";
    }
}


var btnEveryP = document.querySelector(".btnEveryP");
btnEveryP.addEventListener('click', function() {
    var p = document.querySelector("#p1");
    p.style.backgroundColor = "lightBlue";

    p = document.querySelector("#p2");
    p.style.backgroundColor = "indianRed";
    p.style.border = " 3px dashed lightGreen"
    p.style.textAlign = "center";
    p.style.color = "lightGreen";

    p = document.querySelector("#p3");
    p.style.marginLeft = "100px"
    p.innerHTML = "This Paragraph has moved 100px to the right";

    p = document.querySelector("#p4");
    p.style.fontSize = "25px";
    p.style.fontFamily = "cursive";
    p.style.color = "red";

});

var btn = document.querySelector(".btn");
btn.addEventListener('click', function() {
    
});