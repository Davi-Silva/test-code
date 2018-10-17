window.onload = init();

function init() {
    var p1 = document.querySelector("#firstP");
    console.log("p1.innerHTML: " + p1.innerHTML);
    console.log("p1.textContent: " + p1.textContent);

    p1.textContent = "Hello I'm the first paragraph";
    console.log("p1.textContent: " + p1.textContent)

    var p2 = document.querySelector("#secondP");
    console.log("p2.innerHTML: " + p2.innerHTML);
    console.log("p2.textContent: " + p2.textContent);

    p2.textContent = "Hello I'm the second paragraph";
    console.log("p2.textContent: " + p2.textContent)
}