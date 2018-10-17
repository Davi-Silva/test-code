// BASIC TYPES

// String type
let someString: string = 'car';

// String templates
let fullName: string = 'Davi Cunha';
let age: number = 21;
let sentence: string = `Hello, my name is ${fullName}. 
I'll be ${ age + 1} years old in October.`;
console.log(sentence);

// Number types
let someDecimalNumber: number = 6;
let someHexadecimalNumber: number = 0xf00d;
let someOctalNumber: number = 0o744;
let someBinaryNumber: number = 0b1010;
let trueOrFalse: boolean;

// Array types
let someArray: Array<number> = [1, 2, 3];
let arrayType: number[] = [4, 5, 6];

// Tuple types
let someTuple: [string, number, string, number] = ['Hello', 10, "World!", 20];
let sentence1 = `${someTuple[0]} ${someTuple[2]}
${someTuple[1]} + ${someTuple[3]} = ${someTuple[1] + someTuple[3]}`;
console.log(sentence1);

// Enum types
// By deafult all enum start at 0
enum Color { Red, Green, Blue }
let color: Color = Color.Green;
console.log(color);
// But enum index can be manully changed:
enum Color1 { Red = 2, Green, Blue }
let color1: Color1 = Color1.Green;
console.log(color1);
// Or, even manually set all the values in the enum:
enum Color2 { Red = 5, Green = 10, Blue = 17 }
let color2: Color2 = Color2.Green
console.log(color2);
// It can't be used like array
console.log(color[1]);
console.log(color1[3]);
console.log(color2[10]);
// But it can be used this way
let colorName: string = Color[1];
console.log(colorName);

let someElement: Element;
let someObject: object;

// Null type
let nullThing: null = null;

// Undefined type
let undefinedThing: undefined = undefined;

// Void type
let voidThing: void;

// It can be any type
// Avoid using 'any' type
let anyOldThing: any[] = ["Hello Wolrd!", 21, true];


// Type assertions
let someValue: any = "This is a string";

let strLength: number = (<string>someValue).length;
console.log(`String length: ${strLength}`);

someValue = "This is another string!";

strLength = (someValue as string).length;
console.log(`String length: ${strLength}`);



