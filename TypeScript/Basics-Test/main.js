// BASIC TYPES
// String type
var someString = 'car';
// String templates
var fullName = 'Davi Cunha';
var age = 21;
var sentence = "Hello, my name is " + fullName + ". \nI'll be " + (age + 1) + " years old in October.";
console.log(sentence);
// Number types
var someDecimalNumber = 6;
var someHexadecimalNumber = 0xf00d;
var someOctalNumber = 484;
var someBinaryNumber = 10;
var trueOrFalse;
// Array types
var someArray = [1, 2, 3];
var arrayType = [4, 5, 6];
// Tuple types
var someTuple = ['Hello', 10, "World!", 20];
var sentence1 = someTuple[0] + " " + someTuple[2] + "\n" + someTuple[1] + " + " + someTuple[3] + " = " + (someTuple[1] + someTuple[3]);
console.log(sentence1);
// Enum types
// By deafult all enum start at 0
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
console.log(color);
// But enum index can be manully changed:
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 2] = "Red";
    Color1[Color1["Green"] = 3] = "Green";
    Color1[Color1["Blue"] = 4] = "Blue";
})(Color1 || (Color1 = {}));
var color1 = Color1.Green;
console.log(color1);
// Or, even manually set all the values in the enum:
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 5] = "Red";
    Color2[Color2["Green"] = 10] = "Green";
    Color2[Color2["Blue"] = 17] = "Blue";
})(Color2 || (Color2 = {}));
var color2 = Color2.Green;
console.log(color2);
// It can't be used like array
console.log(color[1]);
console.log(color1[3]);
console.log(color2[10]);
// But it can be used this way
var colorName = Color[1];
console.log(colorName);
var someElement;
var someObject;
// Null type
var nullThing = null;
// Undefined type
var undefinedThing = undefined;
// Void type
var voidThing;
// It can be any type
// Avoid using 'any' type
var anyOldThing = ["Hello Wolrd!", 21, true];
// Type assertions
var someValue = "This is a string";
var strLength = someValue.length;
console.log("String length: " + strLength);
someValue = "This is another string!";
strLength = someValue.length;
console.log("String length: " + strLength);
