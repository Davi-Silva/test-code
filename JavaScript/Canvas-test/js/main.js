var coords_p = document.querySelector(".coords");
var canvas = document.querySelector("#canvas");

window.onload = init();
var canvas_1, ctx_1, canvas_2, ctx_2, canvas_3, ctx_3, h, w, canvas_4, ctx_4;

canvas.addEventListener('mousemove', function(event) {
    coords_p.innerHTML = "x: " + event.clientX + " y: " + event.clientY;
});

canvas.addEventListener('mouseout', function(event) {
    coords_p.innerHTML = "&nbsp;";
});

var input_name = document.querySelector("#input-name");
var output = document.querySelector("#output-message");

input_name.addEventListener('input', function(event) {
    var name = input_name.value;

    output.innerHTML = "Valid name: " + name;

    if(name.length < 5) {
        output.innerHTML = "This name is too short (it must contain at least 5 letters).<br>" + (5 - name.length) + " to go."
    }
});

input_name.addEventListener('keyup', function(event) {
    var key = event.key;
    if(key === '!') {
        output.innerHTML = "This is a forbidden!";
        var name_input_value = event.target.value

        event.target.value = name_input_value.substring(0, name_input_value.length - 1);
    }
});

var colorPicker = document.querySelector("#color-picker");

colorPicker.addEventListener('change', function() {
    var color = colorPicker.value;
    console.log("Color hex: " + color);
    document.body.style.backgroundColor = color;
});

var randomColorBtn = document.querySelector("#randomColorBtn"); 

randomColorBtn.addEventListener('click', function() {
    let color = getRandomColor();
    document.body.style.backgroundColor = color;
    console.log("Color: " + color);
});

function init() {
    coords_p.innerHTML = "&nbsp;";
    canvas_1 = document.querySelector(".canvas canvas");
    ctx_1 = canvas_1.getContext('2d');  
    drawTwoRectangles();
    drawFigures();
    draw();
}

function drawTwoRectangles() {
    ctx_1.fillStyle = "red";
    ctx_1.fillRect(40, 20, 150, 70);
    ctx_1.fillStyle = "blue";
    ctx_1.fillRect(150, 50, 100, 50);
}

function drawFigures() {
    canvas_2 = document.querySelector("#canvas3");
    ctx_2 = canvas_2.getContext('2d');

    ctx_2.fillStyle = "red";
    ctx_2.fillRect(10, 10, 60, 30);

    ctx_2.strokeStyle = "green";
    ctx_2.lineWidth = 4;
    ctx_2.strokeRect(100, 40, 80, 40);

    ctx_2.fillStyle = "yellow";
    ctx_2.beginPath();
    ctx_2.arc(60, 100, 20, 0, 2 * Math.PI);
    ctx_2.fill();

    ctx_2.fillStyle = "purple";
    ctx_2.font = "20px Arial";
    ctx_2.fillText("Hello World!", 140, 25);
}

function draw() {
    canvas_3 = document.querySelector("#canvas4");
    w = canvas_3.width;
    h = canvas_3.height; 

    ctx_3 = canvas_3.getContext('2d');

    drawFilledRectangle(50, 10, 50, 30, "red");
    drawFilledCircle(100, 100, 15, "green");

    canvas_4 = document.querySelector("#canvas5");
    ctx_4 = canvas_4.getContext('2d');
    drawMonster(10, 10);
    
}

function drawFilledRectangle(x, y, width, height, color) {
    // GOOD practice: save the context, use 2D trasnformations
    ctx_3.save();
    // translate the coordinate system, draw relative to it
    ctx_3.translate(x, y);
    ctx_3.fillStyle = color;
    // (0, 0) is the top left corner of the monster.
    ctx_3.fillRect(0, 0, width, height);
    // GOOD practice: restore the context
    ctx_3.restore();
}

function drawFilledCircle(x, y, radius, color) {
    ctx_3.save();
    ctx_3.translate(x, y);
    ctx_3.fillStyle = color;
    ctx_3.beginPath();
    ctx_3.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx_3.fill();
    ctx_3.restore();
}


function drawMonster(x, y) {
    // draw a big monster !
    // head
  
    // GOOD practice: save the context, use 2D trasnformations
    ctx_4.save();
  
    // translate the coordinate system, draw relative to it
    ctx_4.translate(x, y);
  
    // (0, 0) is the top left corner of the monster.
    ctx_4.strokeRect(0, 0, 100, 100);
  
    // eyes, x=20, y=20 is relative to the top left corner
    // of the previous rectangle
    ctx_4.fillRect(20, 20, 10, 10);
    ctx_4.fillRect(65, 20, 10, 10);
  
    // nose
    ctx_4.strokeRect(45, 40, 10, 40);
  
    // mouth
   ctx_4.strokeRect(35, 84, 30, 10);
  
   // teeth
   ctx_4.fillRect(38, 84, 10, 10);
   ctx_4.fillRect(52, 84, 10, 10);
  
   // GOOD practice: restore the context
   ctx_4.restore();
}


function getRandomColor() {
    let color = "#";
    let hexColor;

    for (let i = 0; i < 6; i++) {
        hexColor = Math.floor(Math.random() * 15);
        switch (hexColor) {
            case 10:
                hexColor = 'A';
                break;
            case 11:
                hexColor = 'B';
                break;
            case 12:
                hexColor = 'C';
                break;
            case 13:
                hexColor = 'D';
                break;
            case 14:
                hexColor = 'E';
                break;
            case 15:
                hexColor = 'F';
                break;
        }
        color += hexColor;
    }
    return color;
}
