let js1 = {
    courseName: 'JavaScript Introduction',
    weeks: 5,
    madeBy: 'W3Cx',
    author: 'Michael Buffa'
};

let darthVaderAsArray = ['villain', 'half human half machine'];
console.log(darthVaderAsArray[0]);
console.log(darthVaderAsArray[1]);

let darthVaderAsObject = {
    job: 'villain',
    race: 'half human half machine'
};

console.log("\n" + darthVaderAsObject.job);
console.log(darthVaderAsObject.race);
console.log(typeof (darthVaderAsObject));

let book = {
    title: 'Frankenstein',
    'publish date': 1818
};

console.log("\nTitle: " + book.title + "\nPublish date: " + book['publish date']);

let key = 'title';
let book2 = {
    title: "The Hitchhiker's Guide to the Galaxy",
    'publish date': 1979,
    author: {
        name: 'Douglas Noel Adams',
        'date of birth': 'March 11 1952',
        'city of birth': 'Cambridge'
    }
};

console.log("\n" + "Title: " + book2[key] + "\n"
    + "Publish date: " + book2['publish date'] + "\n"
    + "Author name: " + book2.author.name + "\n"
    + "Author's birth date: " + book2.author["date of birth"] + "\n"
    + "Author's city of birth: " + book2.author["city of birth"]);

let dog = {
    name: 'Mili',
    bark: function () {
        return "Au Au!";
    }
};

console.log("\n" + dog.name);
console.log(dog.bark());

let darthVader = {
    race: 'human',
    job: 'villain',
    movieSeries: 'Star Wars',
    talk: function () {
        return 'come to the dark side, Luke!';
    },
    describeYourself: function () {
        return "I'm a " + this.race + " and I'm a " + this.job + " from " + this.movieSeries + " movie series.";
    }
};

function dvSpeak() {
    document.body.innerHTML += "<p>Darth Vader describe yourself: " + darthVader.describeYourself(); + "</p>";
    document.body.innerHTML += "<p>Darth Vader says: " + darthVader.talk(); + "</p>";
}

//Deletes the object properties
function deleteProperties() {
    delete darthVader.race;
    delete darthVader.job;
    delete darthVader.movieSeries;
    delete darthVader.talk;
}

//Constructor function ES5
function HeroES5(name, side) {
    this.name = name;
    this.side = side;
    this.describeYourself = function () {
        return "I'm " + this.name + " and I'm from the " + this.side;
    }
}

let hanSolo = new HeroES5('Han Solo', 'Rebels');
let lukeSkywalker = new HeroES5('Luke Skywalker', 'Rebels');
let darkVader = new HeroES5('Darth Vader', 'Empire');
console.log("\n" + hanSolo.describeYourself());
console.log(lukeSkywalker.describeYourself());
console.log(darkVader.describeYourself());

// ES6 Classes
// In ES6 classes with constructors inside the classes to 
// change or add a variable's content with the reserved word 'new'
console.log();

class HeroES6 {
    constructor(name, side) {
        this.name = name;
        this.side = side;
        HeroES6.objCreated++;
    }

    speak() {
        this.someOtherMethod();
        return {
            doSomethingElse: this.someOtherMethod(),
            msg: "My name is " + this.name + ", I'm with the " + this.side + "."
        };
    }

    someOtherMethod() {
        return "You call another method from the same class.";
    }
}

HeroES6.objCreated = 0;
let jarjarBinks = new HeroES6('Jar Jar Binks', "Rebels");
let R2D2 = new HeroES6('R2D2', 'Rebels');
console.log(jarjarBinks.speak().doSomethingElse);
console.log(jarjarBinks.speak().msg);
console.log(R2D2.speak().doSomethingElse);
console.log(R2D2.speak().msg);
console.log("Number of objects created: " + HeroES6.objCreated);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        Point.nbPointCreated++;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

Point.nbPointCreated = 0;

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
const p3 = new Point(25, 32);

console.log("\np1: " + p1.x + " " + p1.y + "\np2: " + p2.x + " " + p2.y + "\np3: " + p3.x + " " + p3.y);
console.log("Distance between the two points: " + Point.distance(p1, p2));
console.log("Number of objects created: " + Point.nbPointCreated);
console.log();


// class Person {
//     constructor(givenName, familyName) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//     }

//     get familyName() {
//         return this.familyName.toUpperCase();
//     }

//     set familyName(newFamilyName) {
//         this.familyName = newFamilyName;
//     }

//     walk() {
//         return this.givenName + " " + this.familyName; + " is walking!";
//     }
// }

// p1 = new Person('Davi', 'Cunha');
// p2 = new Person('Michael', 'Buffa');

// console.log(p1.walk());
// console.log(p2.walk());

// p1.familyName = 'Silva';

// console.log(p1.walk());

// Different method to create a ball object

function createBall(n) {
    let ballArray = [];

    for (let i = 0; i < n; i++) {
        let b = {
            // x: w / 2,
            // y: h / 2,
            radius: 5 + 30 * Math.random(),
            speedX: -5 + 10 * Math.random(),
            speedY: -5 + 10 * Math.random(),
            color: getRandomColor(),
        }
        ballArray.push(b);
    }
    return ballArray;
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

let balls = createBall(5);

console.log(balls[2].color);
console.log(getRandomColor());

class Ball {
    constructor(x, y, radius, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = getRandomColor();
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw(ctx) {
        // BEST PRATICE: save the context, use 2D transformations
        ctx.save();
        // Translate the coordinate system, draw relative to it
        ctx.translate(this.x, this.y);
        ctx.fillStyle = this.color;
        // (0, 0) is the top left corner of the canvas
        ctx.beginPath();
        ctx.acr(0, 0, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        // BEST PRATICE: restore the context
        ctx.restore();
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    getRandomColor() {
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

}

let ballClass = new Ball(3, 4, 3, '#433000', 2, 2);
ballClass.move();


// References to object: PONITERS
// Explanation: An object 'y' is create. Then he viriables 'y2' and 'y3' is created.
// 'y2' and 'y3' are pointing the the same memory address the 'y' is pointig. When 'y2' or 'y3' 
// changes its properties' value all the others' properties values changes with it.
let y = {
    a: 2
};

console.log("Variable type:" + typeof (y));
console.log("y.a: " + y.a);
let y2 = y;
let y3 = y;
console.log("y.a: " + y.a);
console.log("y2.a: " + y2.a);
console.log("y3.a: " + y3.a);
y2.a = 5;
console.log("y.a: " + y.a);
console.log("y2.a: " + y2.a);
console.log("y3.a: " + y3.a);


let driver = {
    name: 'Davi'
};

let car = {
    color: 'blue',
    driver: driver
};

console.log(driver.name);
console.log(car.driver.name);

let obj = {
    x: 2
};

console.log(obj.x);

function add(a, b) {
    a.x += b;
}

add(obj, 3);
console.log(obj.x);

// Comparing two objects

let originalObject = {
    name: 'Davi'
};

let copy = originalObject;

if (originalObject === copy) {
    console.log("true");
} else {
    console.log("false");
}

let anotherObject = {
    name: 'Davi'
};

if (originalObject === anotherObject) {
    console.log("true");
} else {
    console.log("false");
}

let s = "Davi Cunha Silva";
// It divide the String into an array according with the character specified, which is " "
let sArray = s.split(" ");
console.log(sArray[0] + sArray[1] + sArray[2]);


function getRandomValue(min, max) {
    return ((max - min) * Math.random()) + min;
}

// Playing with the Date class
let date = new Date(1996, 10, 19);
switch(date.getDay()) {
    case 0:
        console.log('Sunday');
        break;
    case 1: 
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
}